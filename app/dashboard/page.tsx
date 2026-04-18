'use client'

import { useState } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'
import Overview from '@/components/dashboard/sections/Overview'
import Business from '@/components/dashboard/sections/Business'
import Market from '@/components/dashboard/sections/Market'
import Entry from '@/components/dashboard/sections/Entry'
import Financial from '@/components/dashboard/sections/Financial'
import Risk from '@/components/dashboard/sections/Risk'
import Roadmap from '@/components/dashboard/sections/Roadmap'
import Compare from '@/components/dashboard/sections/Compare'
import Pestle from '@/components/dashboard/sections/Pestle'

const SECTIONS: Record<string, React.ComponentType> = {
  overview: Overview,
  business: Business,
  market: Market,
  entry: Entry,
  financial: Financial,
  risk: Risk,
  roadmap: Roadmap,
  compare: Compare,
  pestle: Pestle,
}

export default function DashboardPage() {
  const [active, setActive] = useState('overview')
  const Section = SECTIONS[active] ?? Overview

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar active={active} onNavigate={setActive} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar />
        <div
          id="scroll-area"
          style={{ flex: 1, overflowY: 'auto', padding: '24px', background: 'var(--bg)' }}
        >
          <Section />
        </div>
      </div>
    </div>
  )
}
