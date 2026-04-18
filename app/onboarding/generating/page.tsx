'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'

export default function GeneratingPage() {
  const router = useRouter()

  useEffect(() => {
    const t = setTimeout(() => router.push('/dashboard'), 3200)
    return () => clearTimeout(t)
  }, [router])

  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
      <div style={{ textAlign: 'center', maxWidth: 520 }}>
        {/* Stacked papers illustration */}
        <div style={{ position: 'relative', width: 120, height: 110, margin: '0 auto 28px' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 12, width: 96, height: 78, background: '#e8edf7', borderRadius: 10, border: '1.5px solid #c7d2e8', transform: 'rotate(-6deg)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 6, width: 96, height: 78, background: '#f0f4ff', borderRadius: 10, border: '1.5px solid #c7d2e8', transform: 'rotate(-2deg)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 10, width: 96, height: 88, background: '#fff', borderRadius: 10, border: '1.5px solid #c7d2e8', padding: '14px 12px' }}>
            <div style={{ height: 6, background: '#e8edf7', borderRadius: 4, marginBottom: 7 }} />
            <div style={{ height: 6, background: '#e8edf7', borderRadius: 4, marginBottom: 7, width: '75%' }} />
            <div style={{ height: 6, background: '#e8edf7', borderRadius: 4, marginBottom: 7, width: '88%' }} />
            <div style={{ height: 6, background: 'var(--primary-light)', borderRadius: 4, width: '60%' }} />
          </div>
          <div style={{
            position: 'absolute', top: -4, right: 0,
            width: 32, height: 32, borderRadius: '50%',
            background: 'linear-gradient(135deg,#e879f9,#8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(139,92,246,.35)',
          }}>
            <Icon icon="hugeicons:sparkles" style={{ fontSize: 15, color: '#fff' }} />
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>
          Generating Market Planner....
        </h2>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>
          We&apos;re analysing your profile, target market, and selected entry mode to build a comprehensive,
          data-led market entry plan tailored to your business.
        </p>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          {[
            { icon: 'hugeicons:location-01', label: 'Australia' },
            { icon: 'hugeicons:t-shirt', label: 'Textiles & Apparel' },
            { icon: 'hugeicons:hierarchy-square-02', label: 'Uppsala Mode' },
          ].map((c) => (
            <div key={c.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 16px', background: '#fff',
              border: '1.5px solid var(--border)', borderRadius: 99,
              fontSize: 13, fontWeight: 600, color: 'var(--text)',
            }}>
              <Icon icon={c.icon} style={{ fontSize: 14, color: 'var(--primary)' }} />
              {c.label}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
          <button className="btn-ob-outline" onClick={() => router.push('/onboarding/mode')}>← Abort &amp; Back</button>
          <button
            disabled
            style={{
              padding: '12px 32px', background: 'var(--primary)', color: '#fff',
              border: 'none', borderRadius: 99, fontSize: 14, fontWeight: 700,
              fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 10,
              opacity: 0.7, cursor: 'not-allowed',
            }}
          >
            <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
              {[0, 200, 400].map((d) => (
                <span key={d} className="spin-dot" style={{ animationDelay: `${d}ms` }} />
              ))}
            </span>
            Generating....
          </button>
        </div>
      </div>
    </div>
  )
}
