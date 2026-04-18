function ScoreBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12.5, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--primary)' }}>{pct}%</span>
      </div>
      <div className="score-bar-wrap" style={{ height: 8 }}>
        <div className="score-bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  )
}

export default function Business() {
  return (
    <div>
      {/* Amber blocker banner */}
      <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 12, padding: '14px 18px', marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#92400e', marginBottom: 10 }}>⚠️ What&apos;s holding you back? — 3 gaps to resolve before scaling</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {[
            { title: 'Operations Gap', sub: 'No AU 3PL secured', action: 'Select & contract 3PL by Month 2' },
            { title: 'Compliance Gap', sub: 'ACCC review pending', action: 'Legal review before any marketing' },
            { title: 'Market Knowledge', sub: 'Limited AU research', action: 'Consumer research programme Month 1' },
          ].map((b) => (
            <div key={b.title} style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid #fde68a' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#92400e', marginBottom: 3 }}>{b.title}</div>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 5 }}>{b.sub}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)' }}>→ {b.action}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Success probability strip */}
      <div style={{ background: 'var(--primary)', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: 2 }}>SUCCESS PROBABILITY</div>
          <div style={{ fontSize: 36, fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>68%</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', marginBottom: 8 }}>Close 3 gaps to reach 95%+ confidence</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { label: 'Distributor confirm', lift: '+12%' },
              { label: 'Brand compliance', lift: '+8%' },
              { label: 'Product cert', lift: '+7%' },
            ].map((g) => (
              <div key={g.label} style={{ background: 'rgba(255,255,255,.1)', borderRadius: 8, padding: '6px 10px', flex: 1 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>{g.label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f59e0b' }}>{g.lift}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Company info */}
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Company Overview</span></div>
          <div className="pw-card-body">
            {[
              ['Company', 'EcoThread Apparel Pty Ltd'],
              ['Founded', '2019 · Sydney, NSW'],
              ['Employees', '47 FT · 12 contract'],
              ['Revenue FY25', 'AUD 2.1M'],
              ['Gross Margin', '58% · Net 12%'],
              ['Markets', 'NZ, Singapore (digital), AU domestic'],
              ['Certifications', 'GOTS · Fair Trade · OEKO-TEX'],
              ['Awards', '2× National Sustainability 2023, 2024'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 8, marginBottom: 7 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', width: 110, flexShrink: 0 }}>{k}</span>
                <span style={{ fontSize: 12, color: 'var(--text)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Readiness score */}
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">International Readiness Score</span></div>
          <div className="pw-card-body">
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>68%</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Moderate Readiness · 3 gaps to address</div>
            </div>
            <ScoreBar label="Brand Strength" pct={82} color="#15803d" />
            <ScoreBar label="Financial Capacity" pct={71} color="var(--primary)" />
            <ScoreBar label="Product Readiness" pct={76} color="var(--primary)" />
            <ScoreBar label="Market Knowledge" pct={65} color="#f59e0b" />
            <ScoreBar label="Compliance & Legal" pct={54} color="#f59e0b" />
            <ScoreBar label="Operations & Supply" pct={47} color="#dc2626" />
          </div>
        </div>
      </div>

      {/* BMC */}
      <div className="pw-card" style={{ marginBottom: 16 }}>
        <div className="pw-card-header"><span className="pw-card-title">Business Model Canvas — Key Elements</span></div>
        <div className="pw-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              ['Value Propositions', 'Premium sustainable everyday wear; take-back recycling; GOTS & Fair Trade certified; design-led aesthetics without environmental compromise.'],
              ['Customer Segments', 'Eco-conscious millennials (25–40), B2B retailers (premium fashion multi-brand stores), corporate gifting & uniform market.'],
              ['Channels', 'DTC e-commerce (primary), boutique retail partnerships, pop-up activations, wholesale to multi-brand stores.'],
              ['Key Partners', 'GOTS-certified manufacturers (India, Portugal), sustainable logistics (carbon-neutral), Austrade market entry support.'],
              ['Revenue Streams', 'Product sales (DTC 60%, wholesale 40%), seasonal collections, limited-edition collabs, corporate B2B orders.'],
              ['Cost Structure', 'COGS 42%, marketing 22%, logistics 11%, compliance & legal 8%, technology & ops 9%, overheads 8%.'],
            ].map(([k, v]) => (
              <div key={k} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 11.5, color: '#334155', lineHeight: 1.55 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership check */}
      <div className="pw-card">
        <div className="pw-card-header"><span className="pw-card-title">Partnership Readiness Check</span></div>
        <div className="pw-card-body" style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
            <thead>
              <tr style={{ background: '#f8fafc' }}>
                <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Readiness Item</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Status</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Owner</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Deadline</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Next Step</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ACCC legal review complete', 'pending', 'CEO + Legal', 'Month 2', 'Brief AU counsel this week'],
                ['AU 3PL partner contracted', 'pending', 'Ops Lead', 'Month 2', 'RFP to 3 shortlisted providers'],
                ['GST registration', 'ready', 'CFO', 'Month 1', 'Submit ABN application'],
                ['Kids cert (AS/NZS) initiated', 'review', 'Ops Lead', 'Month 2', 'Identify testing lab'],
                ['FX hedging strategy', 'review', 'CFO', 'Month 3', 'Brief bank on forward contracts'],
                ['Shopify AU storefront', 'ready', 'Tech Lead', 'Month 3', 'Clone from NZ store'],
              ].map(([item, status, owner, deadline, next]) => (
                <tr key={item} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 16px', color: 'var(--text)' }}>{item}</td>
                  <td style={{ padding: '10px 16px' }}><span className={`badge badge-${status}`}>{status}</span></td>
                  <td style={{ padding: '10px 16px', color: 'var(--muted)' }}>{owner}</td>
                  <td style={{ padding: '10px 16px', color: 'var(--muted)' }}>{deadline}</td>
                  <td style={{ padding: '10px 16px', color: 'var(--primary)', fontWeight: 600 }}>{next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
