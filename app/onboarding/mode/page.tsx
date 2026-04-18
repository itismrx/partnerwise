'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MODES = [
  { id: 'uppsala', name: 'Uppsala Model', speed: { label: 'Slow', cls: 'bm' }, cost: { label: 'Low → Medium', cls: 'bl' }, risk: { label: 'Low', cls: 'bl' }, control: { label: 'Medium → High', cls: 'bm' }, best: 'SMEs entering unfamiliar markets', recommended: false },
  { id: 'innovation', name: 'Innovation Models', speed: { label: 'Medium', cls: 'bm' }, cost: { label: 'Low → Medium', cls: 'bl' }, risk: { label: 'Medium', cls: 'bm' }, control: { label: 'Medium', cls: 'bm' }, best: 'B2B with product-led growth', recommended: true },
  { id: 'eclectic', name: 'Eclectic Paradigm', speed: { label: 'Medium → Slow', cls: 'bh' }, cost: { label: 'High', cls: 'bh' }, risk: { label: 'Medium', cls: 'bm' }, control: { label: 'High', cls: 'bh' }, best: 'Strategic FDI decisions', recommended: false },
  { id: 'bornglobal', name: 'Born Global', speed: { label: 'Fast', cls: 'bl' }, cost: { label: 'Medium', cls: 'bm' }, risk: { label: 'High', cls: 'bh' }, control: { label: 'Low → Medium', cls: 'bm' }, best: 'Digital-first / SaaS companies', recommended: false },
  { id: 'transaction', name: 'Transaction Cost Model', speed: { label: 'Medium', cls: 'bm' }, cost: { label: 'Medium → High', cls: 'bm' }, risk: { label: 'Low → Medium', cls: 'bl' }, control: { label: 'Medium → High', cls: 'bm' }, best: 'Cost optimisation decisions', recommended: false },
]

const clsColor: Record<string, string> = {
  bh: '#b91c1c', bm: '#92400e', bl: '#15803d',
}

export default function ModePage() {
  const router = useRouter()
  const [selected, setSelected] = useState('innovation')

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Illustration */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
              <rect x="10" y="30" width="70" height="36" rx="4" fill="#e8edf7" stroke="#c7d2e8" strokeWidth="1.5"/>
              <rect x="33" y="14" width="24" height="52" rx="3" fill="#fff" stroke="#c7d2e8" strokeWidth="1.5"/>
              <rect x="38" y="20" width="5" height="6" rx="1" fill="#11205D" opacity=".4"/>
              <rect x="47" y="20" width="5" height="6" rx="1" fill="#11205D" opacity=".4"/>
              <rect x="38" y="30" width="5" height="6" rx="1" fill="#11205D" opacity=".4"/>
              <rect x="47" y="30" width="5" height="6" rx="1" fill="#11205D" opacity=".4"/>
              <rect x="40" y="52" width="10" height="14" rx="2" fill="#11205D" opacity=".5"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: 6, textAlign: 'center' }}>Select Market Entry Mode</h2>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 24, textAlign: 'center' }}>Choose the strategic framework that best fits your business stage and risk tolerance.</p>

          <table className="mode-table">
            <thead>
              <tr>
                <th style={{ width: 40 }}></th>
                <th>Model</th><th>Speed</th><th>Cost</th><th>Risk</th><th>Control</th><th>Best For</th>
              </tr>
            </thead>
            <tbody>
              {MODES.map((m) => (
                <tr key={m.id} className={selected === m.id ? 'mode-selected' : ''} onClick={() => setSelected(m.id)}>
                  <td>
                    <input type="radio" name="mode" style={{ accentColor: 'var(--primary)', cursor: 'pointer', width: 18, height: 18 }} checked={selected === m.id} onChange={() => setSelected(m.id)} />
                  </td>
                  <td>
                    <span style={{ fontWeight: 700 }}>{m.name}</span>
                    {m.recommended && (
                      <span style={{ display: 'inline-block', padding: '2px 8px', background: '#dcfce7', color: '#15803d', borderRadius: 99, fontSize: 10.5, fontWeight: 700, marginLeft: 8 }}>RECOMMENDED</span>
                    )}
                  </td>
                  {[m.speed, m.cost, m.risk, m.control].map((f, i) => (
                    <td key={i}><span style={{ fontWeight: 600, color: clsColor[f.cls] }}>{f.label}</span></td>
                  ))}
                  <td style={{ color: 'var(--muted)' }}>{m.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '24px 32px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
        <button className="btn-ob-outline" onClick={() => router.push('/onboarding/goal')}>← Back</button>
        <button className="btn-ob-primary" onClick={() => router.push('/onboarding/generating')}>Proceed →</button>
      </div>
    </div>
  )
}
