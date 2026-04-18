export default function Market() {
  return (
    <div>
      {/* KPI tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginBottom: 20 }}>
        {[
          { label: 'Total Addressable Market', value: 'AUD 3.4B', sub: 'Sustainable apparel AU 2026', color: 'var(--primary)' },
          { label: 'Serviceable Market (SAM)', value: 'AUD 840M', sub: 'Premium tier, millennial segment', color: '#15803d' },
          { label: 'SOM — Year 3', value: 'AUD 12.6M', sub: '1.5% SAM share target', color: '#92400e' },
          { label: 'CAC (Digital)', value: 'AUD 38', sub: 'Paid social + SEO blended', color: 'var(--primary)' },
          { label: 'Customer LTV', value: 'AUD 280', sub: '24-month LTV estimate', color: '#15803d' },
        ].map((k) => (
          <div key={k.label} className="stat-tile">
            <div className="stat-label">{k.label}</div>
            <div className="stat-value" style={{ fontSize: 18, color: k.color }}>{k.value}</div>
            <div className="stat-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        {/* Market drivers */}
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Market Drivers</span></div>
          <div className="pw-card-body" style={{ padding: 0 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
              <thead><tr style={{ background: '#f8fafc' }}><th style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Driver</th><th style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Strength</th><th style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Relevance</th></tr></thead>
              <tbody>
                {[
                  ['Consumer sustainability awareness', 'High', 'badge-low', 'Core brand alignment'],
                  ['Government ESG mandates (2026)', 'High', 'badge-low', 'Tailwind for certified brands'],
                  ['E-commerce growth (18% YoY)', 'High', 'badge-low', 'DTC channel viability'],
                  ['FTA tariff advantages', 'High', 'badge-low', 'Reduces landed cost'],
                  ['Millennial spending power +14%', 'Medium', 'badge-med', 'Primary customer segment'],
                ].map(([d, s, cls, r]) => (
                  <tr key={d} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '8px 14px' }}>{d}</td>
                    <td style={{ padding: '8px 14px' }}><span className={`badge ${cls}`}>{s}</span></td>
                    <td style={{ padding: '8px 14px', color: 'var(--muted)', fontSize: 11.5 }}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market barriers */}
        <div className="pw-card">
          <div className="pw-card-header"><span className="pw-card-title">Market Barriers</span></div>
          <div className="pw-card-body" style={{ padding: 0 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
              <thead><tr style={{ background: '#f8fafc' }}><th style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Barrier</th><th style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Severity</th><th style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Mitigation</th></tr></thead>
              <tbody>
                {[
                  ['ACCC greenwashing enforcement', 'High', 'badge-high', 'Legal review of all claims'],
                  ['Distributor lead times 6–9 mo', 'Medium', 'badge-med', 'DTC-first to bridge gap'],
                  ['AUD/USD currency exposure', 'Medium', 'badge-med', 'Forward contracts from M3'],
                  ['Low brand awareness in AU', 'High', 'badge-high', 'Influencer + earned media first'],
                  ['Kids product certification', 'Medium', 'badge-med', 'Phase 2 only; initiate Year 1'],
                ].map(([d, s, cls, r]) => (
                  <tr key={d} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '8px 14px' }}>{d}</td>
                    <td style={{ padding: '8px 14px' }}><span className={`badge ${cls}`}>{s}</span></td>
                    <td style={{ padding: '8px 14px', color: 'var(--muted)', fontSize: 11.5 }}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Opportunity scorecard */}
      <div className="pw-card" style={{ marginBottom: 14 }}>
        <div className="pw-card-header"><span className="pw-card-title">Opportunity Scorecard — Dimension Breakdown</span></div>
        <div className="pw-card-body" style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
            <thead><tr style={{ background: 'var(--primary)' }}>
              {['Dimension','Score','Weight','Weighted','Assessment'].map((h) => (
                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 11, color: '#fff', fontWeight: 700 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Market Size & Growth', '8.5/10', '20%', '17.0', 'Large TAM with strong CAGR'],
                ['Consumer Demand Alignment', '8.0/10', '20%', '16.0', 'High purchase intent for sustainability'],
                ['Competitive Intensity', '6.0/10', '15%', '9.0', 'Moderate — no dominant sustainable player'],
                ['Regulatory Environment', '6.5/10', '15%', '9.75', 'ACCC risk mitigated by certification'],
                ['Ease of Market Entry', '7.5/10', '15%', '11.25', 'DTC first reduces capital requirements'],
                ['Strategic Fit', '9.0/10', '15%', '13.5', 'Brand & product highly aligned'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 1 ? '#f8fafc' : '#fff' }}>
                  {r.map((cell, ci) => <td key={ci} style={{ padding: '8px 14px', color: 'var(--text)' }}>{cell}</td>)}
                </tr>
              ))}
              <tr style={{ background: 'var(--primary-light)', fontWeight: 700 }}>
                <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: 800 }}>COMPOSITE SCORE</td>
                <td style={{ padding: '10px 14px', color: 'var(--primary)' }}>—</td>
                <td style={{ padding: '10px 14px', color: 'var(--primary)' }}>100%</td>
                <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: 800 }}>72 / 100</td>
                <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: 800 }}>Proceed with Caution</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitor map */}
      <div className="pw-card">
        <div className="pw-card-header"><span className="pw-card-title">Competitive Landscape</span></div>
        <div className="pw-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {[
              { name: 'Patagonia', origin: 'USA', price: 'Premium', sustainability: 'Very High', threat: 'Medium', tc: 'badge-med' },
              { name: 'Cotton On Eco', origin: 'AU', price: 'Mass-market', sustainability: 'Medium', threat: 'Low', tc: 'badge-low' },
              { name: 'Arnhem', origin: 'AU', price: 'Premium', sustainability: 'Medium', threat: 'Medium', tc: 'badge-med' },
              { name: 'Allbirds', origin: 'NZ/USA', price: 'Premium', sustainability: 'High', threat: 'Low', tc: 'badge-low' },
              { name: 'Spell', origin: 'AU', price: 'Luxury-adj', sustainability: 'Medium', threat: 'Medium', tc: 'badge-med' },
              { name: 'H&M Conscious', origin: 'Sweden', price: 'Mid-market', sustainability: 'Low–Med', threat: 'Low', tc: 'badge-low' },
            ].map((c) => (
              <div key={c.name} style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{c.name}</span>
                  <span className={`badge ${c.tc}`}>{c.threat}</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 3 }}>{c.origin} · {c.price}</div>
                <div style={{ fontSize: 11, color: 'var(--text)' }}>Sustainability: {c.sustainability}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
