'use client'

import { Icon } from '@iconify/react'

const NAV = [
  { key: 'overview',  label: 'Overview',         icon: 'hugeicons:dashboard-square-01' },
  { key: 'business',  label: 'Business Profile',  icon: 'hugeicons:building-03' },
  { key: 'market',    label: 'Market Opportunity', icon: 'hugeicons:earth' },
  { key: 'entry',     label: 'Entry Strategy',    icon: 'hugeicons:rocket-01' },
  { key: 'financial', label: 'Financial Model',   icon: 'hugeicons:money-bag-01' },
  { key: 'risk',      label: 'Risk & Mitigation', icon: 'hugeicons:alert-02' },
  { key: 'roadmap',   label: 'Execution Roadmap', icon: 'hugeicons:time-schedule' },
  { key: 'compare',   label: 'Compare Scenarios', icon: 'hugeicons:compare' },
  { key: 'pestle',    label: 'PESTLE Detail',     icon: 'hugeicons:analysis-text-link' },
]

interface Props { active: string; onNavigate: (key: string) => void }

export default function Sidebar({ active, onNavigate }: Props) {
  return (
    <div id="sidebar" style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, paddingBottom: 20, overflowY: 'auto' }}>
      {/* Logo */}
      <div style={{ padding: '0 16px', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon icon="hugeicons:compass" style={{ fontSize: 15, color: '#fff' }} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--primary)', lineHeight: 1.1 }}>PartnerWise</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>Market Entry Planner</div>
          </div>
        </div>
      </div>

      {/* Active plan chip */}
      <div style={{ margin: '0 12px 14px', padding: '9px 12px', background: 'var(--primary-light)', borderRadius: 10, border: '1px solid #c7d4ec' }}>
        <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--primary)', marginBottom: 4 }}>Active Plan</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>EcoThread → Australia</div>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>Uppsala Model · 36 months</div>
      </div>

      {/* Navigation */}
      <div style={{ padding: '0 8px' }}>
        <div className="sec-hdr">Navigation</div>
        {NAV.map((n) => (
          <div
            key={n.key}
            className={`nav-item${active === n.key ? ' active' : ''}`}
            onClick={() => onNavigate(n.key)}
          >
            <Icon icon={n.icon} style={{ fontSize: 16 }} />
            {n.label}
          </div>
        ))}
      </div>

      {/* Progress tracker */}
      <div style={{ margin: '16px 12px 0', padding: '12px', background: 'var(--primary)', borderRadius: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>Progress</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 3 }}>18%</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,.55)', marginBottom: 8 }}>of milestones complete</div>
        <div style={{ height: 5, background: 'rgba(255,255,255,.15)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '18%', background: '#f59e0b', borderRadius: 99 }} />
        </div>
      </div>
    </div>
  )
}
