const RISKS = [
  { id: 'R1', desc: 'ACCC greenwashing investigation', cat: 'Legal', likelihood: 'High', impact: 'High', rating: 'Critical', mitigation: 'Legal review all claims pre-launch; lead with certifications', owner: 'CEO + Legal' },
  { id: 'R2', desc: 'Distributor partnership delays', cat: 'Operations', likelihood: 'Medium', impact: 'High', rating: 'High', mitigation: 'Begin outreach Month 6; maintain 3 pipeline partners', owner: 'BD Lead' },
  { id: 'R3', desc: 'AUD/USD currency depreciation', cat: 'Financial', likelihood: 'Medium', impact: 'Medium', rating: 'Medium', mitigation: 'Forward FX contracts from Month 3; price in AUD', owner: 'CFO' },
  { id: 'R4', desc: 'Phase 1 revenue gate not met', cat: 'Financial', likelihood: 'Medium', impact: 'High', rating: 'High', mitigation: 'Monthly marketing pivot reviews; weekly CAC monitoring', owner: 'CMO' },
  { id: 'R5', desc: '3PL setup delays in AU', cat: 'Operations', likelihood: 'Medium', impact: 'Medium', rating: 'Medium', mitigation: '3PL contract signed before any marketing spend', owner: 'Ops Lead' },
  { id: 'R6', desc: 'Kids certification overrun', cat: 'Compliance', likelihood: 'Medium', impact: 'Medium', rating: 'Medium', mitigation: 'Initiate AS/NZS cert Month 2; not blocking Phase 1', owner: 'Ops Lead' },
  { id: 'R7', desc: 'Price war from mid-market incumbents', cat: 'Market', likelihood: 'Low', impact: 'Medium', rating: 'Medium', mitigation: 'Premium positioning with proof; avoid mid-market messaging', owner: 'CMO' },
  { id: 'R8', desc: 'Supply chain disruption', cat: 'Operations', likelihood: 'Low', impact: 'High', rating: 'Medium', mitigation: 'Dual supplier India/Portugal; 60-day AU safety stock', owner: 'Supply Chain' },
]

const ratingBadge: Record<string, string> = {
  Critical: 'badge-high',
  High: 'badge-high',
  Medium: 'badge-med',
  Low: 'badge-low',
}

export default function Risk() {
  return (
    <div>
      {/* Top 3 impact cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 16 }}>
        <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 12, padding: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 6 }}>If High Risks Remain Unresolved</div>
          {['ACCC enforcement → delay Phase 2 by 2–3 months', 'Currency unhedged → increase CAC by est. 18%', 'Price war intensifies → compress EBITDA margin 12%'].map((i) => <div key={i} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: '#b91c1c', flexShrink: 0 }}>•</span><span style={{ fontSize: 12, color: '#334155' }}>{i}</span></div>)}
        </div>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 6 }}>If All Risks Mitigated — Upside</div>
          {['Breakeven at Month 12 (vs Month 14 base)', 'Gross margin 66% (DTC dominant mix)', 'ROI 340% by Year 3 on AUD 420K', 'Risk score drops to 3/10'].map((i) => <div key={i} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: '#15803d', flexShrink: 0 }}>•</span><span style={{ fontSize: 12, color: '#334155' }}>{i}</span></div>)}
        </div>
        <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 12, padding: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 6 }}>Risk Monitoring Cadence</div>
          {['R1–R2: Weekly review by CEO', 'R3 (FX): Monthly CFO vs forward contracts', 'R4 (Revenue gate): Bi-weekly pipeline review', 'All risks: Monthly board report from Month 3'].map((i) => <div key={i} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: '#92400e', flexShrink: 0 }}>•</span><span style={{ fontSize: 12, color: '#334155' }}>{i}</span></div>)}
        </div>
      </div>

      {/* Risk register table */}
      <div className="pw-card">
        <div className="pw-card-header"><span className="pw-card-title">Risk Register — Top 8 Risks</span></div>
        <div className="pw-card-body" style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: 'var(--primary)' }}>
                {['#', 'Risk', 'Category', 'Likelihood', 'Impact', 'Rating', 'Primary Mitigation', 'Owner'].map((h) => (
                  <th key={h} style={{ padding: '9px 12px', color: '#fff', textAlign: 'left', fontSize: 10.5, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RISKS.map((r, i) => (
                <tr key={r.id} style={{ background: i % 2 === 1 ? '#f8fafc' : '#fff', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--muted)' }}>{r.id}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--text)', maxWidth: 200 }}>{r.desc}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--muted)' }}>{r.cat}</td>
                  <td style={{ padding: '9px 12px' }}><span className={`badge ${r.likelihood === 'High' ? 'badge-high' : r.likelihood === 'Medium' ? 'badge-med' : 'badge-low'}`}>{r.likelihood}</span></td>
                  <td style={{ padding: '9px 12px' }}><span className={`badge ${r.impact === 'High' ? 'badge-high' : r.impact === 'Medium' ? 'badge-med' : 'badge-low'}`}>{r.impact}</span></td>
                  <td style={{ padding: '9px 12px' }}><span className={`badge ${ratingBadge[r.rating]}`}>{r.rating}</span></td>
                  <td style={{ padding: '9px 12px', color: '#334155', fontSize: 11.5 }}>{r.mitigation}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{r.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
