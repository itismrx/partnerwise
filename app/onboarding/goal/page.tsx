'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'

const GOALS = [
  { icon: 'hugeicons:chart-increase', title: 'Increase Revenue', desc: 'Expand sales into new international markets and grow top-line revenue.' },
  { icon: 'hugeicons:distribution', title: 'Find Distributors', desc: 'Identify and onboard local distribution partners in the target market.' },
  { icon: 'hugeicons:computer', title: 'Launch Digital Product', desc: 'Introduce a new digital-first offering or e-commerce channel internationally.' },
  { icon: 'hugeicons:building-04', title: 'Build Local Presence', desc: 'Establish a physical footprint, local team, or regional office in a new market.' },
  { icon: 'hugeicons:factory-02', title: 'Manufacturing / Operations', desc: 'Optimise supply chain by sourcing manufacturing or operations in new geographies.' },
]

export default function GoalPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(0)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: 6, textAlign: 'center' }}>Define Goal</h2>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 28, textAlign: 'center' }}>What are you trying to achieve? Select one primary goal.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {GOALS.map((g, i) => (
              <div key={i} className={`goal-item${selected === i ? ' selected' : ''}`} onClick={() => setSelected(i)}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: selected === i ? 'var(--primary)' : 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon icon={g.icon} style={{ fontSize: 20, color: selected === i ? '#fff' : 'var(--primary)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', display: 'block' }}>{g.title}</strong>
                  <span style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 2, display: 'block' }}>{g.desc}</span>
                </div>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                  border: selected === i ? 'none' : '2px solid var(--border)',
                  background: selected === i ? 'var(--primary)' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {selected === i && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '24px 32px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
        <button className="btn-ob-outline" onClick={() => router.push('/onboarding/profile')}>← Back</button>
        <button className="btn-ob-primary" onClick={() => router.push('/onboarding/mode')}>Proceed →</button>
      </div>
    </div>
  )
}
