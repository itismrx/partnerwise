'use client'

import { useState } from 'react'

const DIMENSIONS = [
  {
    key: 'P', label: 'Political', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe',
    status: 'Positive', statusCls: '#dcfce7',
    opp: 7, risk: 2,
    factors: ['Stable democratic government with strong trade policy', 'UK FTA (2022) and NZ CER provide tariff-free access', 'ESG disclosure mandates for listed companies from 2026', 'Austrade landing-pad programme for foreign SMEs', 'State-level alignment on sustainable procurement'],
    watch: ['State-level policy variation in packaging law', 'Election cycle impact on ESG prioritisation'],
    actions: ['Apply for Austrade landing-pad support programme', 'Monitor FTA tariff updates for cost optimisation', 'Engage with state government sustainability tender opportunities'],
    whatChanges: 'A change of federal government that de-prioritises ESG regulation could slow institutional demand. Conversely, stronger greenwashing enforcement post-2026 review would accelerate B2B opportunities.',
    soWhat: 'Use Austrade support to reduce market entry costs. The political tailwinds are strong — lead with the regulatory compliance story in B2B pitches.',
  },
  {
    key: 'E', label: 'Economic', color: '#92400e', bg: '#fef3c7', border: '#fde68a',
    status: 'Mixed', statusCls: '#fef3c7',
    opp: 7.5, risk: 6,
    factors: ['GDP growth 2.1% forecast (2026)', 'Consumer spending on discretionary apparel up 3.8%', 'AUD relatively stable; interest rates normalising', 'Premium segment more resilient to economic cycles', 'BNPL penetration driving higher AOV in fashion'],
    watch: ['AUD/USD volatility — can compress margin 18% unhedged', 'Household debt elevated post-rate hike cycle', 'Inflation pressure on mid-tier consumer discretionary'],
    actions: ['Implement 3–6 month forward FX contracts from Month 3', 'Target premium segment to reduce price sensitivity exposure', 'Monitor RBA rate decisions and AUD forecasts quarterly'],
    whatChanges: 'Recession scenario: premium segment resilience holds but growth slows. AUD appreciation >5%: margin improves significantly and CAC in AUD terms drops.',
    soWhat: 'The economic risk is primarily FX and consumer confidence. Both are manageable with hedging and premium positioning. The BNPL opportunity is immediate — integrate Afterpay from Day 1.',
  },
  {
    key: 'S', label: 'Social', color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0',
    status: 'Positive', statusCls: '#dcfce7',
    opp: 8.5, risk: 2,
    factors: ['84% of AU millennials willing to pay premium for ethical fashion', 'Circular fashion and take-back programmes growing fast', 'Social media fashion influence strong (IG, TikTok)', 'B-Corp brand recognition increasing among AU consumers', 'Post-COVID value shift to quality-over-quantity'],
    watch: ['Greenwashing backlash risk if claims unsubstantiated', 'Shifting trend cycles in fashion can reduce relevance'],
    actions: ['Lead with certifications (GOTS, Fair Trade) — proof not aspiration', 'Activate influencer programme with AU sustainability micro-influencers', 'Promote take-back programme as circular-economy differentiator'],
    whatChanges: 'A major industry greenwashing scandal (not EcoThread) could create tailwind by raising awareness of genuine certification. Or consumer fatigue with sustainability claims could require stronger proof points.',
    soWhat: 'Social tailwinds are the strongest of the 6 PESTLE dimensions. This is EcoThread\'s biggest opportunity. Speed to market matters — capture first-mover premium while the cohort is growing.',
  },
  {
    key: 'T', label: 'Technology', color: '#0369a1', bg: '#e0f2fe', border: '#bae6fd',
    status: 'Positive', statusCls: '#dcfce7',
    opp: 8, risk: 1.5,
    factors: ['High smartphone penetration (94%) enabling DTC commerce', 'Afterpay/Zip BNPL dominant in AU fashion (drives +22% AOV)', 'Shopify ecosystem mature — AU operations straightforward', 'Same-day delivery in Sydney/Melbourne via 3PL tech', 'AI-personalisation tools available for email marketing'],
    watch: ['Platform dependency (Meta/Google) for digital acquisition', 'AU Privacy Act reform tightening data collection rules'],
    actions: ['Launch on Shopify AU with Afterpay/Zip integration Day 1', 'Diversify acquisition: SEO + email + paid social from Month 1', 'Prepare Privacy Act compliance — first-party data strategy'],
    whatChanges: 'Meta algorithm changes could increase paid CAC. Shopify\s AU logistics network expansion (planned 2026) would reduce 3PL costs by an estimated 12%.',
    soWhat: 'The technology landscape is highly favourable. BNPL integration alone is worth 20%+ AOV uplift. Invest in SEO from Day 1 to reduce dependence on paid acquisition as brand grows.',
  },
  {
    key: 'L', label: 'Legal', color: '#b91c1c', bg: '#fff1f2', border: '#fecdd3',
    status: 'Negative', statusCls: '#fee2e2',
    opp: 5, risk: 7,
    factors: ['ACL consumer protections apply — strong buyer rights', 'ACCC greenwashing enforcement escalating (AUD 50M penalty)', 'Modern Slavery Act 2018 — supply chain reporting obligations', 'GST registration required from AUD 75K annual revenue', 'AS/NZS kids safety certification required for under-14 products'],
    watch: ['ACCC investigation pipeline specifically targeting fashion sector', 'Children\s product safety regulation updates (2026 review)', 'Privacy Act reform — data collection and retention rules'],
    actions: ['AU legal review of ALL marketing claims before launch — non-negotiable', 'Register for GST and ABN in Month 1', 'Initiate kids cert process Month 2 (12–14 month process)', 'Modern Slavery supply chain audit before any AU revenue'],
    whatChanges: 'If ACCC enforcement escalates further, brands with genuine certification (EcoThread) gain competitive advantage as competitors are forced to walk back claims. Higher legal risk for unverified entrants is an opportunity.',
    soWhat: 'Legal is the highest-risk PESTLE dimension and the only one that could be existential. The ACCC greenwashing risk must be resolved before any marketing spend. This is not optional.',
  },
  {
    key: 'En', label: 'Environmental', color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0',
    status: 'Mixed', statusCls: '#fef3c7',
    opp: 7.5, risk: 4,
    factors: ['AU government 43% emission reduction target by 2030', 'Packaging regulations tightening state-by-state', 'Sustainability certification as purchase trigger (not just PR)', 'Carbon-neutral logistics available from established AU providers', 'Consumer awareness of garment end-of-life waste growing'],
    watch: ['State-by-state packaging law divergence complicates compliance', 'AU carbon tariff / border adjustment policy uncertain for 2027'],
    actions: ['Partner with carbon-neutral AU logistics provider from Day 1', 'Source compostable packaging compliant with all AU state laws', 'Promote take-back programme with measurable outcome reporting'],
    whatChanges: 'A federal carbon tariff policy (possible 2027) could significantly increase landed cost for all non-AU sourced goods. EcoThread\s carbon-neutral supply chain provides structural advantage if this occurs.',
    soWhat: 'EcoThread\'s existing environmental credentials are a natural fit here. The main risk is packaging compliance divergence across states — address this before national distribution.',
  },
]

export default function Pestle() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const toggle = (key: string) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))
  const expandAll = () => setExpanded(Object.fromEntries(DIMENSIONS.map((d) => [d.key, true])))
  const collapseAll = () => setExpanded({})

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 2 }}>PESTLE Analysis — Australia 2026</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Click any dimension to expand full analysis, key factors, watch points, and actions.</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={expandAll} style={{ padding: '7px 16px', background: 'var(--primary-light)', color: 'var(--primary)', border: '1px solid #c7d4ec', borderRadius: 99, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Expand All</button>
          <button onClick={collapseAll} style={{ padding: '7px 16px', background: '#fff', color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Collapse All</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {DIMENSIONS.map((d) => (
          <div key={d.key} className="pw-card" style={{ overflow: 'visible' }}>
            {/* Header row */}
            <div
              onClick={() => toggle(d.key)}
              style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', background: d.bg, borderRadius: expanded[d.key] ? '14px 14px 0 0' : 14 }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 8, background: d.color, color: '#fff', fontSize: 16, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{d.key}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: d.color }}>{d.label}</div>
                <div style={{ display: 'flex', gap: 16, marginTop: 4, alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 10, color: '#15803d', fontWeight: 700 }}>OPP</span>
                    <div style={{ width: 80, height: 5, background: 'rgba(0,0,0,.08)', borderRadius: 99, overflow: 'hidden' }}><div style={{ height: '100%', width: `${d.opp * 10}%`, background: '#16a34a', borderRadius: 99 }} /></div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#15803d' }}>{d.opp}/10</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 10, color: '#b91c1c', fontWeight: 700 }}>RISK</span>
                    <div style={{ width: 80, height: 5, background: 'rgba(0,0,0,.08)', borderRadius: 99, overflow: 'hidden' }}><div style={{ height: '100%', width: `${d.risk * 10}%`, background: '#dc2626', borderRadius: 99 }} /></div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#b91c1c' }}>{d.risk}/10</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ padding: '3px 10px', borderRadius: 99, fontSize: 11, fontWeight: 700, background: d.statusCls, color: d.color }}>{d.status}</span>
                <span style={{ fontSize: 16, color: d.color, transform: expanded[d.key] ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>
              </div>
            </div>

            {/* Expandable body */}
            {expanded[d.key] && (
              <div style={{ padding: '16px 18px', borderTop: `1px solid ${d.border}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 8 }}>Key Factors</div>
                    {d.factors.map((f) => <div key={f} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: d.color, flexShrink: 0, marginTop: 1 }}>•</span><span style={{ fontSize: 12, color: '#334155', lineHeight: 1.55 }}>{f}</span></div>)}
                  </div>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 8 }}>Watch Points</div>
                    {d.watch.map((w) => <div key={w} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: '#92400e', flexShrink: 0 }}>⚠</span><span style={{ fontSize: 12, color: '#334155', lineHeight: 1.55 }}>{w}</span></div>)}
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 8 }}>Action Items</div>
                      {d.actions.map((a) => <div key={a} style={{ display: 'flex', gap: 7, marginBottom: 5 }}><span style={{ color: d.color, fontWeight: 700, flexShrink: 0 }}>→</span><span style={{ fontSize: 12, color: '#334155', lineHeight: 1.55 }}>{a}</span></div>)}
                    </div>
                  </div>
                  <div>
                    <div style={{ background: '#fef9ee', border: '1px solid #fde68a', borderRadius: 8, padding: '10px 12px', marginBottom: 10 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: '#92400e', marginBottom: 5 }}>What would change this?</div>
                      <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.6 }}>{d.whatChanges}</div>
                    </div>
                    <div style={{ background: 'var(--primary)', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,.6)', marginBottom: 5 }}>So what for EcoThread?</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.85)', lineHeight: 1.6 }}>{d.soWhat}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
