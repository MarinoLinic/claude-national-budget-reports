import { Link } from 'react-router-dom';
import { getAllCountries } from '../data/countries';
import WorldMap from '../components/WorldMap';

const flagUrl = (code) => `https://flagcdn.com/w80/${code}.png`;

export default function Home() {
  const countries = getAllCountries();
  const totalOutlays = '~$19.8T';

  return (
    <>
      <div className="masthead">
        <div className="masthead-left">
          <div className="eyebrow">
            <span style={{ fontSize: 20, lineHeight: 1 }}>🏛️</span>
            <span className="eyebrow-text">Global Fiscal Observatory</span>
          </div>
          <h1>Interactive Budget Briefs<br /><em>Financial Year 2023–24</em></h1>
          <div className="masthead-sub">Detailed breakdowns of receipts, outlays &amp; deficit financing</div>
        </div>
        <div className="masthead-right">
          <div>
            <div className="kpi-label">Tracked Economies</div>
            <div className="kpi-value" style={{ color: 'var(--paper)' }}>{countries.length}</div>
          </div>
          <div>
            <div className="kpi-label">Total Outlays Tracked</div>
            <div className="kpi-value" style={{ color: '#8a9bb0' }}>{totalOutlays}</div>
          </div>
        </div>
      </div>
      <div className="stripe" />

      <div className="section-label">Global Fiscal Map</div>
      <WorldMap />

      <div className="section-label">Available Country Reports</div>

      <div className="card-grid">
        {countries.map((c) => (
          <Link to={`/${c.id}`} className="report-card" key={c.id}>
            <div className="card-header">
              <div className="card-title">
                <h2>{c.name}</h2>
                <p>{c.fiscalYear}</p>
              </div>
              <img className="card-flag" src={flagUrl(c.flagCode)} alt={c.name} loading="lazy" />
            </div>
            <p className="card-desc">{c.indexCard.description}</p>
            <div className="card-tags">
              {c.indexCard.tags.map((t, i) => (
                <span className={`tag tag-${t.color}`} key={i}>{t.text}</span>
              ))}
              {c.kpis.debt && (
                <span className="tag tag-grey">Debt: {c.kpis.debt.value} GDP</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="footnote">
        <p>
          <strong>About this archive:</strong> These documents were generated as structural and analytical formatting
          experiments. Data reflects verified actuals and adopted budgets from official sources (Treasury, MoF, DZS, OBR,
          CBO, Eurostat) for the 2023–24 fiscal cycle.
        </p>
      </div>
    </>
  );
}
