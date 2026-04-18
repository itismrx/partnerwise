export default function Roadmap() {
  return (
    <div>
      {/* Phase cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 16 }}>
        {[
          { num: 1, title: 'Phase 1 — Establish', period: 'Apr 2026 – Mar 2027 · AUD 180K', color: '#11205D', items: ['ABN registration + GST enrolment (M1)', 'ACCC legal review (M1–2)', 'Kids cert process initiated (M2)', 'AU 3PL partner contracted & live (M2)', 'Shopify AU + Afterpay/Zip live (M3)', 'Influencer programme — 20 micro (M3)', 'PR — AU Fashion Week pitch (M4)', 'Wholesale conversations initiated (M6)', 'Revenue gate review: AUD 150K+ (M12)'] },
          { num: 2, title: 'Phase 2 — Grow', period: 'Apr 2027 – Mar 2028 · AUD 160K', color: '#2d4899', items: ['Breakeven achieved (M14)', 'Distributor channel activation (M7 of phase)', '3–5 boutique retail partnerships signed', 'Kids certification completed (M8)', 'B-Corp application submitted', 'Paid social scaled with proven creative', 'Revenue gate: AUD 450K+ (M24)', 'Decision: invest in pop-up retail?'] },
          { num: 3, title: 'Phase 3 — Scale', period: 'Apr 2028 – Mar 2029 · AUD 80K', color: '#4c669f', items: ['Full catalogue including kids range', 'Corporate B2B / gifting channel launch', 'B-Corp certification active', 'Potential owned retail pop-up review', 'Trans-Tasman expansion assessment', 'Target: 1.5% SAM share · AUD 1.26M', 'EBITDA positive · ROI ≥ 200%', 'Decision: Series A fundraise?'] },
        ].map((p) => (
          <div key={p.num} style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <div style={{ background: p.color, padding: '10px 14px', color: '#fff' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700 }}>Phase {p.num} — {p.title.split('— ')[1]}</div>
              <div style={{ fontSize: 10.5, opacity: 0.6, marginTop: 2 }}>{p.period}</div>
            </div>
            <div style={{ padding: '12px 14px', background: '#f8fafc' }}>
              <ul style={{ paddingLeft: 14, margin: 0 }}>
                {p.items.map((item) => <li key={item} style={{ fontSize: 11, color: '#334155', lineHeight: 1.65, marginBottom: 2 }}>{item}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Milestones table */}
      <div className="pw-card" style={{ marginBottom: 14 }}>
        <div className="pw-card-header"><span className="pw-card-title">Quarterly Milestone Summary</span></div>
        <div className="pw-card-body" style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead><tr style={{ background: 'var(--primary)' }}>{['Quarter','Key Milestone','Revenue Target','Owner','Status'].map((h) => <th key={h} style={{ padding: '9px 14px', color: '#fff', textAlign: 'left', fontSize: 10.5 }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                ['Q1 2026', 'Legal setup, 3PL contracted, storefront live', 'AUD 22K', 'CEO, Ops', 'badge-primary', 'Planned'],
                ['Q2 2026', 'Influencer launch, ACCC clearance, PR programme', 'AUD 38K', 'CMO', 'badge-primary', 'Planned'],
                ['Q3 2026', 'Revenue growth, distributor pipeline, FX hedging', 'AUD 56K', 'BD, CFO', 'badge-primary', 'Planned'],
                ['Q4 2026', 'Phase 1 revenue gate — AUD 150K+ cumulative', 'AUD 64K', 'CEO', 'badge-med', 'Gate'],
                ['Q1 2027', 'Breakeven milestone achieved (Month 14)', 'AUD 82K', 'CFO', 'badge-primary', 'Planned'],
                ['Q2–Q3 2027', 'Distributor channel live; wholesale revenue begins', 'AUD 148K', 'BD', 'badge-primary', 'Planned'],
                ['Q4 2027', 'Phase 2 revenue gate — AUD 450K+ cumul. Y2', 'AUD 154K', 'CEO', 'badge-med', 'Gate'],
                ['2028 (Y3)', 'Full catalogue, B-Corp active, EBITDA positive', 'AUD 1.26M', 'CEO', 'badge-primary', 'Planned'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ background: i % 2 === 1 ? '#f8fafc' : '#fff', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '9px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{r[0]}</td>
                  <td style={{ padding: '9px 14px', color: 'var(--text)' }}>{r[1]}</td>
                  <td style={{ padding: '9px 14px', fontWeight: 700, color: 'var(--primary)' }}>{r[2]}</td>
                  <td style={{ padding: '9px 14px', color: 'var(--muted)' }}>{r[3]}</td>
                  <td style={{ padding: '9px 14px' }}><span className={`badge ${r[4]}`}>{r[5]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision gates */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Critical Dependencies</span></div>
          <div className="pw-card-body">
            {[
              { from: 'ABN', to: 'GST registration', note: 'ABN required before GST — blocks revenue recognition' },
              { from: '3PL live', to: 'First marketing spend', note: 'Fulfilment must be operational before any acquisition' },
              { from: 'Legal clearance', to: 'Marketing launch', note: 'ACCC review must complete first — existential risk' },
              { from: 'Distributor outreach M6', to: 'Phase 2 activation M13', note: '6-month minimum lead time for distributor signing' },
            ].map((d) => (
              <div key={d.from} style={{ display: 'flex', gap: 10, marginBottom: 10, padding: '8px 10px', background: 'var(--primary-light)', borderRadius: 8 }}>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--primary)' }}>{d.from}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--muted)' }}> → </span>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--primary)' }}>{d.to}</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55 }}>{d.note}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Decision Gates</span></div>
          <div className="pw-card-body">
            {[
              { gate: 'Month 6 Gate', pass: 'Rev ≥ AUD 80K · CAC ≤ AUD 45 · NPS ≥ 50 → Continue Phase 1 as planned.', fail: 'Rev < AUD 55K → Pause paid social; double down on influencer + PR; extend 2 months.' },
              { gate: 'Month 18 Gate', pass: 'Rev ≥ AUD 320K · Margin ≥ 54% · 1+ distributor active → Proceed to Phase 3.', fail: 'Delay Phase 3 by 6 months; focus on wholesale conversion; reassess Series A timing.' },
            ].map((g) => (
              <div key={g.gate} style={{ background: 'var(--primary-light)', borderLeft: '3px solid var(--primary)', borderRadius: '0 8px 8px 0', padding: '10px 14px', marginBottom: 10 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--primary)', marginBottom: 5 }}>{g.gate}</div>
                <div style={{ fontSize: 11.5, color: '#334155', marginBottom: 4 }}><strong>Pass:</strong> {g.pass}</div>
                <div style={{ fontSize: 11.5, color: '#334155' }}><strong>Fail:</strong> {g.fail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
