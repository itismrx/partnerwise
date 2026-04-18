'use client'

import { Icon } from '@iconify/react'

export default function Topbar() {
  return (
    <div className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon icon="hugeicons:earth" style={{ color: 'var(--primary)', fontSize: 17 }} />
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Australia</span>
        <span style={{ color: 'var(--border)' }}>|</span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Textiles &amp; Apparel</span>
        <span style={{ color: 'var(--border)' }}>|</span>
        <span className="badge badge-primary">Uppsala Model</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>Updated Apr 15, 2026</span>
        <button
          className="btn-primary"
          onClick={() => window.open('/market_planner_report.html', '_blank')}
        >
          <Icon icon="hugeicons:download-04" style={{ fontSize: 13 }} />
          Export Plan
        </button>
      </div>
    </div>
  )
}
