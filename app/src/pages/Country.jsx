import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCountry } from '../data/countries';
import BudgetBars from '../components/BudgetBars';

const flagUrl = (code) => `https://flagcdn.com/w80/${code}.png`;

function formatValue(val, currency) {
  if (currency.divisor) {
    const display = (val / currency.divisor).toFixed(currency.divisor === 100 ? 2 : 2);
    return `${currency.prefix}${display}${currency.suffix}`;
  }
  if (Number.isInteger(val)) {
    return `${currency.prefix}${val.toLocaleString()}${currency.suffix}`;
  }
  return `${currency.prefix}${val.toFixed(2)}${currency.suffix}`;
}

export default function Country() {
  const { id } = useParams();
  const c = getCountry(id);

  useEffect(() => {
    if (c) document.title = `${c.name} — ${c.fiscalYear} Budget`;
    else document.title = 'Country Not Found';
  }, [c]);

  if (!c) return <div style={{ padding: 52 }}>Country not found.</div>;

  const kpis = c.kpis;
  const isSurplus = kpis.balance?.type === 'surplus';

  return (
    <>
      {/* MASTHEAD */}
      <div className="masthead">
        <div className="masthead-left">
          <Link to="/" className="back-link-mast">← All Countries</Link>
          <div className="eyebrow">
            <img className="eyebrow-flag" src={flagUrl(c.flagCode)} alt={c.name} />
            <span className="eyebrow-text">{c.officialName}</span>
          </div>
          <h1>Government Budget<br /><em>{c.fiscalYear}</em></h1>
          <div className="masthead-sub">{c.sourceNote}</div>
        </div>
        <div className="masthead-right">
          <div>
            <div className="kpi-label">{kpis.receipts.label}</div>
            <div className="kpi-value rec">{kpis.receipts.value}</div>
            <div className="kpi-note">{kpis.receipts.note}</div>
          </div>
          <div>
            <div className="kpi-label">{kpis.balance.label}</div>
            <div className={`kpi-value ${isSurplus ? 'sur' : 'def'}`}>{kpis.balance.value}</div>
            <div className="kpi-note">{kpis.balance.note}</div>
          </div>
          <div>
            <div className="kpi-label">{kpis.outlays.label}</div>
            <div className="kpi-value out">{kpis.outlays.value}</div>
            <div className="kpi-note">{kpis.outlays.note}</div>
          </div>
          {kpis.debt && (
            <div>
              <div className="kpi-label">{kpis.debt.label}</div>
              <div className="kpi-value dbt">{kpis.debt.value}</div>
              <div className="kpi-note">{kpis.debt.note}</div>
            </div>
          )}
        </div>
      </div>
      <div className="stripe" />

      {/* BUDGET BREAKDOWN */}
      <div className="section-label">Budget breakdown</div>
      <div className="two-col">
        {/* LEFT: RECEIPTS */}
        <div className="col-pad">
          <div className="panel-head">
            <h2>Revenue by Source</h2>
            <span>{c.receipts.panelNote}</span>
          </div>
          <BudgetBars groups={c.receipts.groups} currency={c.currency} side="left" />

          {c.deficitFinancing && (
            <div className="deficit-row">
              <div className="bar-label">{c.deficitFinancing.label}<small>{c.deficitFinancing.sub}</small></div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${c.deficitFinancing.pct}%`, background: 'var(--red-mid)' }} />
              </div>
              <div className="bar-val">{c.deficitFinancing.value}<small>{c.deficitFinancing.gdpNote}</small></div>
            </div>
          )}

          <div className="total-row">
            <div className="bar-label">{c.totalLabel}</div>
            <div className="bar-track" style={{ background: 'transparent' }} />
            <div className="bar-val">{c.totalValue}</div>
          </div>

          {c.receipts.methodNote && (
            <div className="method-note"><strong>Note:</strong> {c.receipts.methodNote}</div>
          )}
        </div>

        {/* RIGHT: OUTLAYS */}
        <div className="col-divider">
          <div className="panel-head">
            <h2>Expenditure by Function</h2>
            <span>{c.outlays.panelNote}</span>
          </div>
          <BudgetBars groups={c.outlays.groups} currency={c.currency} side="right" />

          <div className="total-row">
            <div className="bar-label">{c.outlays.totalLabel}</div>
            <div className="bar-track" style={{ background: 'transparent' }} />
            <div className="bar-val">{c.outlays.totalValue}</div>
          </div>

          {c.surplusInfo && (
            <div className="surplus-row">
              <div className="bar-label">General Government Surplus</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${c.surplusInfo.pct}%`, background: '#3a9060' }} />
              </div>
              <div className="bar-val" style={{ color: '#3a9060' }}>{c.surplusInfo.value}</div>
            </div>
          )}

          {c.outlays.methodNote && (
            <div className="method-note"><strong>Note:</strong> {c.outlays.methodNote}</div>
          )}
        </div>
      </div>

      {/* CALLOUTS */}
      <div className="section-label" style={{ marginTop: 32 }}>Context &amp; explanations</div>
      <div className="callouts" style={{ marginTop: 16 }}>
        {c.callouts.map((co, i) => (
          <div className="callout" key={i}>
            <span className="callout-icon">{co.icon}</span>
            <h3>{co.title}</h3>
            <p>{co.text}</p>
            {co.tag && <span className={`tag tag-${co.tag.color}`}>{co.tag.text}</span>}
          </div>
        ))}
      </div>

      {/* FOOTNOTES */}
      <div className="footnote">
        <p><strong>Primary sources:</strong> {c.footnotes.sources}</p>
        <p><strong>Methodology:</strong> {c.footnotes.methodology}</p>
      </div>
    </>
  );
}
