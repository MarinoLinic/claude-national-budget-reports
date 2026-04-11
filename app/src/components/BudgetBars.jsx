import { useEffect, useRef } from 'react';

const COLORS = [
  'var(--navy)', '#2a5090', '#3d75c0', 'var(--teal)', 'var(--gold)',
  'var(--red)', '#c04a3a', '#5a8020', 'var(--grey)', '#8a8078', '#6090a0', '#9a7000',
];

function formatVal(val, currency) {
  // Currencies with a divisor already display in their large unit (T, L cr)
  if (currency.divisor) {
    const display = (val / currency.divisor).toFixed(2);
    return `${currency.prefix}${display}${currency.suffix}`;
  }
  // Convert ≥1000B to T
  if (val >= 1000) {
    return `${currency.prefix}${(val / 1000).toFixed(2)}T`;
  }
  if (val < 10) {
    return `${currency.prefix}${val.toFixed(2)}B`;
  }
  return `${currency.prefix}${val.toLocaleString('en-US', { maximumFractionDigits: 1 })}B`;
}

export default function BudgetBars({ groups, currency, side }) {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!ref.current) return;
      ref.current.querySelectorAll('.bar-fill[data-pct]').forEach(el => {
        el.style.width = el.dataset.pct + '%';
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [groups]);

  // Calculate max value across all groups
  const allVals = groups.flatMap(g => g.items.map(i => i.val));
  const maxVal = Math.max(...allVals);

  let colorIdx = 0;
  let delay = side === 'left' ? 80 : 200;

  return (
    <div ref={ref}>
      {groups.map((group, gi) => {
        const groupColorStart = colorIdx;
        return (
          <div key={gi}>
            <div className="group-label">{group.name}</div>
            {group.items.map((item, ii) => {
              const pct = Math.min((item.val / maxVal) * 100, 100).toFixed(2);
              const color = COLORS[(groupColorStart + ii) % COLORS.length];
              const currentDelay = delay;
              delay += 55;
              colorIdx++;
              return (
                <div
                  key={ii}
                  className={`bar-row ${side === 'right' ? 'right-anim' : ''}`}
                  style={{ animationDelay: `${currentDelay}ms` }}
                >
                  <div className="bar-label">
                    {item.label}
                    <small>{item.sub}</small>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      data-pct={pct}
                      style={{ width: '0%', background: color }}
                    />
                  </div>
                  <div className="bar-val">
                    {formatVal(item.val, currency)}
                    <small>{item.gdp}% GDP</small>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
