const SCENARIOS = [
  { label: 'Revenue — Year 1', bear: 'AUD 110K', base: 'AUD 180K', bull: 'AUD 260K', key: true },
  { label: 'Revenue — Year 2', bear: 'AUD 320K', base: 'AUD 540K', bull: 'AUD 720K', key: true },
  { label: 'Revenue — Year 3', bear: 'AUD 720K', base: 'AUD 1.26M', bull: 'AUD 1.9M', key: true },
  { label: 'Gross Margin Y1', bear: '54%', base: '57%', bull: '58%', key: false },
  { label: 'Gross Margin Y3', bear: '60%', base: '60%', bull: '61%', key: false },
  { label: 'EBITDA Y1', bear: '−AUD 227K', base: '−AUD 180K', bull: '−AUD 120K', key: true },
  { label: 'EBITDA Y2', bear: '−AUD 74K', base: '+AUD 82K', bull: '+AUD 160K', key: true },
  { label: 'EBITDA Y3', bear: '+AUD 157K', base: '+AUD 340K', bull: '+AUD 680K', key: true },
  { label: 'Breakeven', bear: 'Not achieved', base: 'Month 14', bull: 'Month 11', key: false },
  { label: 'ROI on AUD 420K — Y3', bear: '−54% → +37%', base: '+340%', bull: '+619%', key: true },
  { label: 'CAC (Year 1)', bear: 'AUD 54', base: 'AUD 44', bull: 'AUD 36', key: false },
  { label: 'CAC (Year 3)', bear: 'AUD 42', base: 'AUD 31', bull: 'AUD 24', key: false },
  { label: 'Market Share Y3', bear: '0.8%', base: '1.5%', bull: '2.2%', key: false },
]

function getColor(val: string) {
  if (val.startsWith('+')) return '#15803d'
  if (val.startsWith('−') || val === 'Not achieved') return '#b91c1c'
  return 'var(--text)'
}

export default function Compare() {
  return (
    <div>
      <div style={{ background: 'var(--primary-light)', border: '1px solid #c7d4ec', borderRadius: 10, padding: '12px 16px', marginBottom: 16 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--primary)', marginBottom: 3 }}>Scenario Assumptions</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, fontSize: 12 }}>
          <div><span style={{ fontWeight: 700, color: '#b91c1c' }}>Bear: </span>Revenue 40% below base; ACCC fine risk materialises; currency drops 15%; distributor delayed 6 months.</div>
          <div><span style={{ fontWeight: 700, color: '#92400e' }}>Base: </span>Revenue per model; Month 14 breakeven; distributor activation M7 Phase 2; FX hedged from M3.</div>
          <div><span style={{ fontWeight: 700, color: '#15803d' }}>Bull: </span>Revenue 45% above base; early distributor (M4 Phase 2); strong earned media; B-Corp drives premium pricing.</div>
        </div>
      </div>

      <div className="pw-card" style={{ marginBottom: 16 }}>
        <div className="pw-card-header"><span className="pw-card-title">3-Year Scenario Comparison</span></div>
        <div className="pw-card-body" style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
            <thead>
              <tr style={{ background: 'var(--primary)' }}>
                <th style={{ padding: '10px 16px', color: '#fff', textAlign: 'left', fontSize: 11 }}>Metric</th>
                <th style={{ padding: '10px 16px', color: '#fca5a5', textAlign: 'right', fontSize: 11 }}>🐻 Bear</th>
                <th style={{ padding: '10px 16px', color: '#fde68a', textAlign: 'right', fontSize: 11 }}>📊 Base</th>
                <th style={{ padding: '10px 16px', color: '#86efac', textAlign: 'right', fontSize: 11 }}>🐂 Bull</th>
              </tr>
            </thead>
            <tbody>
              {SCENARIOS.map((s, i) => (
                <tr key={s.label} style={{ background: s.key ? '#fff' : '#f8fafc', borderBottom: '1px solid var(--border)', fontWeight: s.key ? 600 : 400 }}>
                  <td style={{ padding: '9px 16px', color: 'var(--text)' }}>{s.label}</td>
                  <td style={{ padding: '9px 16px', textAlign: 'right', color: getColor(s.bear) }}>{s.bear}</td>
                  <td style={{ padding: '9px 16px', textAlign: 'right', color: getColor(s.base), fontWeight: 700 }}>{s.base}</td>
                  <td style={{ padding: '9px 16px', textAlign: 'right', color: getColor(s.bull) }}>{s.bull}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {[
          { title: '🐻 Bear Scenario', bg: '#fff1f2', border: '#fecdd3', tc: '#b91c1c', desc: 'Revenue underperforms by 40%. ACCC enforcement triggered. Currency unhedged. Distributor delayed 6 months. Requires bridge funding in Month 10 to avoid runway exhaustion. ROI turns positive only by Month 32 at earliest.', verdict: 'Survivable with pivots' },
          { title: '📊 Base Scenario', bg: 'var(--primary-light)', border: '#c7d4ec', tc: 'var(--primary)', desc: 'All Phase 1 milestones met. Distributor activated in Phase 2 M7. FX hedged. Legal cleared. Breakeven Month 14. Year 3 EBITDA AUD 340K on AUD 420K investment.', verdict: 'Most likely — target this' },
          { title: '🐂 Bull Scenario', bg: '#f0fdf4', border: '#bbf7d0', tc: '#15803d', desc: 'Revenue 45% above base driven by early distributor activation, strong PR traction, and B-Corp as premium signal. Year 3 EBITDA AUD 680K. Market share reaches 2.2% of SAM.', verdict: 'Achievable with execution excellence' },
        ].map((sc) => (
          <div key={sc.title} style={{ background: sc.bg, border: `1px solid ${sc.border}`, borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: sc.tc, marginBottom: 8 }}>{sc.title}</div>
            <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.6, marginBottom: 8 }}>{sc.desc}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: sc.tc }}>Verdict: {sc.verdict}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
