export default function Financial() {
  const quarters = [
    { q: 'Q1 2026', rev: 22, gp: 55, mkt: 28, ebitda: -42, status: 'badge-high', slabel: 'Pre-revenue' },
    { q: 'Q2 2026', rev: 38, gp: 56, mkt: 32, ebitda: -31, status: 'badge-high', slabel: 'Building' },
    { q: 'Q3 2026', rev: 56, gp: 57, mkt: 30, ebitda: -18, status: 'badge-med', slabel: 'Growing' },
    { q: 'Q4 2026', rev: 64, gp: 58, mkt: 28, ebitda: -12, status: 'badge-med', slabel: 'Nearing BEP' },
    { q: 'Q1 2027', rev: 82, gp: 59, mkt: 26, ebitda: 4, status: 'badge-low', slabel: 'Breakeven ✓' },
    { q: 'Q2 2027', rev: 148, gp: 57, mkt: 38, ebitda: 22, status: 'badge-low', slabel: 'Growth' },
    { q: 'Q3 2027', rev: 156, gp: 58, mkt: 35, ebitda: 28, status: 'badge-low', slabel: 'Growth' },
    { q: 'Q4 2027', rev: 154, gp: 58, mkt: 32, ebitda: 28, status: 'badge-low', slabel: 'Growth' },
  ]
  const maxRev = Math.max(...quarters.map((q) => q.rev))

  return (
    <div>
      {/* KPI tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 20 }}>
        {[
          { label: 'Monthly Burn Rate (Y1)', value: 'AUD 28K', sub: 'Avg. Phase 1 monthly', bg: '#fee2e2', vc: '#b91c1c' },
          { label: 'Runway', value: '8.9 months', sub: 'From current funding', bg: '#fef3c7', vc: '#92400e' },
          { label: 'Rev at Breakeven', value: 'AUD 220K', sub: 'Month 14 milestone', bg: 'var(--primary-light)', vc: 'var(--primary)' },
          { label: 'Net Cash — Year 1', value: '−AUD 180K', sub: 'Expected loss Year 1', bg: '#fee2e2', vc: '#b91c1c' },
        ].map((k) => (
          <div key={k.label} className="stat-tile" style={{ background: k.bg }}>
            <div className="stat-label">{k.label}</div>
            <div className="stat-value" style={{ fontSize: 18, color: k.vc }}>{k.value}</div>
            <div className="stat-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Revenue ramp chart */}
      <div className="pw-card" style={{ marginBottom: 14 }}>
        <div className="pw-card-header">
          <span className="pw-card-title">Revenue Ramp — 8-Quarter View (AUD &#39;000)</span>
        </div>
        <div className="pw-card-body">
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80, borderBottom: '1px solid var(--border)', marginBottom: 8, padding: '0 4px' }}>
            {quarters.map((q) => (
              <div key={q.q} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: q.ebitda >= 0 ? '#15803d' : 'var(--muted)' }}>{q.rev}K</div>
                <div style={{ width: '100%', height: `${(q.rev / maxRev) * 68}px`, background: q.ebitda >= 0 ? 'var(--primary)' : 'var(--primary-light)', borderRadius: '3px 3px 0 0', border: '1px solid var(--border)' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {quarters.map((q) => <div key={q.q} style={{ flex: 1, textAlign: 'center', fontSize: 9.5, color: 'var(--muted)', fontWeight: 600 }}>{q.q.replace(' ', '\n')}</div>)}
          </div>
          <div style={{ marginTop: 10, background: '#fef9ee', border: '1px solid #fde68a', borderRadius: 8, padding: '8px 12px' }}>
            <span style={{ fontSize: 12, color: '#92400e' }}>📌 <strong>Breakeven:</strong> Cash flow crosses zero at <strong>Month 14</strong>. Revenue jump Q2 2027 driven by distributor channel activation.</span>
          </div>
        </div>
      </div>

      {/* 3-year projection */}
      <div className="pw-card" style={{ marginBottom: 14 }}>
        <div className="pw-card-header"><span className="pw-card-title">3-Year P&amp;L Scenarios (AUD)</span><span style={{ fontSize: 11, color: 'var(--muted)' }}>Bear / Base / Bull</span></div>
        <div className="pw-card-body" style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: 'var(--primary)' }}>
                <th style={{ padding: '9px 14px', color: '#fff', textAlign: 'left', fontSize: 11 }}>Metric</th>
                {['Year 1 Bear','Year 1 Base','Year 1 Bull','Year 2 Bear','Year 2 Base','Year 2 Bull','Year 3 Base'].map((h) => (
                  <th key={h} style={{ padding: '9px 10px', color: '#fff', textAlign: 'right', fontSize: 10.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Revenue', '110K', '180K', '260K', '320K', '540K', '720K', '1.26M'],
                ['Gross Margin', '54%', '57%', '58%', '55%', '58%', '60%', '60%'],
                ['Marketing', '110K', '118K', '130K', '120K', '131K', '160K', '210K'],
                ['EBITDA', '−227K', '−180K', '−120K', '−74K', '+82K', '+160K', '+340K'],
              ].map((r, ri) => (
                <tr key={r[0]} style={{ background: ri % 2 === 1 ? '#f8fafc' : '#fff', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '8px 14px', fontWeight: 700, color: 'var(--text)' }}>{r[0]}</td>
                  {r.slice(1).map((cell, ci) => (
                    <td key={ci} style={{ padding: '8px 10px', textAlign: 'right', color: cell.startsWith('+') ? '#15803d' : cell.startsWith('−') ? '#b91c1c' : 'var(--text)', fontWeight: cell.startsWith('+') || cell.startsWith('−') ? 700 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost structure */}
      <div className="pw-card">
        <div className="pw-card-header"><span className="pw-card-title">Cost Structure — Year 1</span></div>
        <div className="pw-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {[
              { label: 'COGS', pct: 43, amt: 'AUD 78K', color: '#334155' },
              { label: 'Marketing & Acquisition', pct: 66, amt: 'AUD 118K', color: 'var(--primary)' },
              { label: 'Logistics & Fulfilment', pct: 16, amt: 'AUD 28K', color: '#0369a1' },
              { label: 'Compliance & Legal', pct: 10, amt: 'AUD 18K', color: '#92400e' },
              { label: 'Technology & Platform', pct: 7, amt: 'AUD 12K', color: '#0891b2' },
              { label: 'Overheads & Admin', pct: 8, amt: 'AUD 14K', color: '#4f46e5' },
            ].map((c) => (
              <div key={c.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{c.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700 }}>{c.amt}</span>
                </div>
                <div style={{ height: 6, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.min(c.pct, 100)}%`, background: c.color, borderRadius: 99 }} />
                </div>
                <div style={{ fontSize: 10.5, color: 'var(--muted)', marginTop: 2 }}>{c.pct}% of revenue</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
