'use client'

import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>Company Profile</h2>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 32 }}>
            Tell us about your business so we can tailor the market entry plan to your context.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Company Name</label>
              <input className="ob-input" type="text" defaultValue="EcoThread Apparel" placeholder="e.g. EcoThread Apparel" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Website</label>
              <input className="ob-input" type="url" defaultValue="https://ecothread.com.au" placeholder="https://yourcompany.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Country of Origin</label>
              <select className="ob-select" defaultValue="Australia">
                <option>Australia</option><option>United States</option><option>United Kingdom</option><option>Singapore</option><option>Canada</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Sector / Industry</label>
              <select className="ob-select" defaultValue="Textiles & Apparel">
                <option>Textiles &amp; Apparel</option><option>Technology</option><option>Consumer Goods</option><option>Healthcare</option><option>Food &amp; Beverage</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Target Market</label>
              <select className="ob-select" defaultValue="Australia">
                <option>Australia</option><option>United States</option><option>United Kingdom</option><option>Japan</option><option>Germany</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Annual Budget (USD)</label>
              <input className="ob-input" type="text" defaultValue="420,000" placeholder="e.g. 500,000" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Risk Appetite</label>
              <select className="ob-select">
                <option>Low — Prefer steady, proven paths</option>
                <option defaultValue="Medium">Medium — Balanced growth &amp; caution</option>
                <option>High — Bold, move fast</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Target Customers</label>
              <input className="ob-input" type="text" defaultValue="Eco-conscious millennials, B2B retailers" placeholder="e.g. Eco-conscious millennials" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Collaboration Areas</label>
              <textarea className="ob-textarea" defaultValue="Distribution partnerships, co-marketing with local eco brands, retail licensing" placeholder="e.g. Distribution partnerships, co-marketing…" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Company Bio</label>
              <textarea className="ob-textarea" style={{ minHeight: 100 }} defaultValue="EcoThread is an Australian sustainable apparel brand founded in 2019. We design ethically sourced, climate-conscious clothing for everyday wear. Our hero product line — the Terra Collection — has won two national sustainability awards and ships across APAC." placeholder="Brief description of your company, mission, and key products…" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '24px 32px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
        <button className="btn-ob-outline" onClick={() => router.push('/login')}>← Back</button>
        <button className="btn-ob-primary" onClick={() => router.push('/onboarding/goal')}>Proceed →</button>
      </div>
    </div>
  )
}
