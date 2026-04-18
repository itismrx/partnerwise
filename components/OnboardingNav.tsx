import { Icon } from '@iconify/react'

export default function OnboardingNav() {
  return (
    <nav
      style={{
        height: 60, background: '#fff',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px', flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 8,
          background: 'var(--primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon icon="hugeicons:compass" style={{ fontSize: 16, color: '#fff' }} />
        </div>
        <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)' }}>
          Internationalization
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          border: '1.5px solid var(--border)', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <Icon icon="hugeicons:notification-02" style={{ fontSize: 18, color: 'var(--muted)' }} />
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          border: '1.5px solid var(--border)', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <Icon icon="hugeicons:menu-01" style={{ fontSize: 18, color: 'var(--muted)' }} />
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'var(--primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer',
        }}>
          N
        </div>
      </div>
    </nav>
  )
}
