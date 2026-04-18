export default function Entry() {
  return (
    <div>
      {/* Uppsala stages */}
      <div className="pw-card" style={{ marginBottom: 14 }}>
        <div className="pw-card-header"><span className="pw-card-title">Uppsala Model — 3-Stage Entry Plan</span></div>
        <div className="pw-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              { num: 1, title: 'Phase 1 — Establish', period: 'Months 1–12 · AUD 180K', active: true, items: ['Launch Shopify AU + Afterpay/Zip', 'ACCC legal review & GST registration', 'AU 3PL partner secured & operational', 'Influencer programme (20 micro)', 'PR — AU Fashion Week pitch', 'Revenue target: AUD 180K'], gate: 'Rev ≥ AUD 150K · CAC ≤ AUD 45 · NPS ≥ 55' },
              { num: 2, title: 'Phase 2 — Grow', period: 'Months 13–24 · AUD 160K', active: false, items: ['Wholesale partnerships (3–5 boutiques)', 'Distributor channel launch (M7)', 'Kids product certification completion', 'B-Corp application submitted', 'Paid social scaled', 'Revenue target: AUD 540K'], gate: 'Rev ≥ AUD 450K · Margin ≥ 52% · 2+ distributors' },
              { num: 3, title: 'Phase 3 — Scale', period: 'Months 25–36 · AUD 80K', active: false, items: ['Full catalogue inc. kids range', 'Corporate B2B / gifting channel', 'B-Corp certification active', 'Potential pop-up (Sydney/Melbourne)', 'Trans-Tasman expansion review', 'Revenue target: AUD 1.26M'], gate: 'EBITDA positive · 1.5% SAM share · ROI ≥ 200%' },
            ].map((p) => (
              <div key={p.num} style={{ borderRadius: 10, border: `1px solid ${p.active ? 'var(--primary)' : 'var(--border)'}`, background: p.active ? 'var(--primary)' : '#fff', padding: 14 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: p.active ? '#f59e0b' : 'var(--primary)', color: p.active ? 'var(--primary)' : '#fff', fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>{p.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: p.active ? '#fff' : 'var(--text)', marginBottom: 3 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: p.active ? 'rgba(255,255,255,.55)' : 'var(--muted)', marginBottom: 10 }}>{p.period}</div>
                <ul style={{ paddingLeft: 14, marginBottom: 10 }}>
                  {p.items.map((item) => <li key={item} style={{ fontSize: 11, color: p.active ? 'rgba(255,255,255,.8)' : '#334155', lineHeight: 1.6, marginBottom: 2 }}>{item}</li>)}
                </ul>
                <div style={{ paddingTop: 8, borderTop: `1px solid ${p.active ? 'rgba(255,255,255,.2)' : 'var(--border)'}` }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: p.active ? 'rgba(255,255,255,.4)' : 'var(--muted)', marginBottom: 3 }}>Gate to Proceed</div>
                  <div style={{ fontSize: 10.5, color: p.active ? 'rgba(255,255,255,.75)' : 'var(--text)' }}>{p.gate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key trade-offs */}
      <div className="pw-card" style={{ marginBottom: 14 }}>
        <div className="pw-card-header"><span className="pw-card-title">Key Strategic Trade-offs</span></div>
        <div className="pw-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              { title: 'Uppsala vs Born Global', gain: 'Lower capital risk; phased validation protects balance sheet', giveUp: 'Slower to market; first-mover advantage ceded in fast segments' },
              { title: 'DTC vs Wholesale First', gain: 'Validate demand with direct data; higher margin (58% vs 35%)', giveUp: 'Volume slower to build; shelf presence takes longer' },
              { title: 'Premium vs Mid-market', gain: 'Certification justifies price; margin sustainability; brand integrity', giveUp: 'Smaller addressable audience; risk of pricing out eco-curious buyers' },
            ].map((t) => (
              <div key={t.title} style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{t.title}</div>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 3 }}>You gain</div>
                  <div style={{ fontSize: 11.5, color: '#334155', lineHeight: 1.55 }}>{t.gain}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 3 }}>You give up</div>
                  <div style={{ fontSize: 11.5, color: '#334155', lineHeight: 1.55 }}>{t.giveUp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {/* VP Canvas */}
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Value Proposition Canvas</span></div>
          <div className="pw-card-body">
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 6 }}>Pain Relievers</div>
              {['GOTS + Fair Trade + OEKO-TEX = verified, not claimed', 'Transparent supply chain map on website', 'Take-back programme with circular outcome proof', '2× national awards as third-party validation'].map((p) => <div key={p} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: '#15803d', fontWeight: 700, flexShrink: 0 }}>→</span><span style={{ fontSize: 12, color: 'var(--text)' }}>{p}</span></div>)}
            </div>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 6 }}>Gain Creators</div>
              {['Design-led aesthetic — sustainable & beautiful', 'B-Corp certification (pending) — community membership', 'Carbon-neutral delivery from Day 1', 'Each purchase funds 1 tree planted (AU programme)'].map((p) => <div key={p} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 12, color: 'var(--text)' }}>{p}</span></div>)}
            </div>
          </div>
        </div>

        {/* Marketing channels */}
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Marketing Channel Strategy</span></div>
          <div className="pw-card-body" style={{ padding: 0 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11.5 }}>
              <thead><tr style={{ background: '#f8fafc' }}><th style={{ padding: '8px 12px', textAlign: 'left', fontSize: 10.5, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Channel</th><th style={{ padding: '8px 12px', fontSize: 10.5, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Budget</th><th style={{ padding: '8px 12px', fontSize: 10.5, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>CAC</th><th style={{ padding: '8px 12px', fontSize: 10.5, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>ROAS</th></tr></thead>
              <tbody>
                {[
                  ['Micro-influencer (IG/TikTok)', 'AUD 28K', 'AUD 22', '4.2×'],
                  ['SEO + Content', 'AUD 18K', 'AUD 31', '3.8×'],
                  ['Paid social (Meta/IG)', 'AUD 32K', 'AUD 44', '2.9×'],
                  ['PR & Earned media', 'AUD 14K', 'AUD 8', 'Est 6×'],
                  ['Email / CRM', 'AUD 6K', 'AUD 3', '7.1×'],
                ].map((r) => (
                  <tr key={r[0]} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '8px 12px' }}>{r[0]}</td>
                    {r.slice(1).map((c, i) => <td key={i} style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: 'var(--text)' }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
