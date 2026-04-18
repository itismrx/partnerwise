'use client'

import { useRouter } from 'next/navigation'
import SphereCanvas from '@/components/SphereCanvas'

export default function LoginPage() {
  const router = useRouter()

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* ── Left panel ── */}
      <div style={{
        flex: '0 0 480px', background: '#fff',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '48px 56px',
      }}>
        {/* Logo mark */}
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ marginBottom: 28 }}>
          <rect width="52" height="52" rx="13" fill="#11205D"/>
          <polygon points="26,10 42,40 10,40" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="26" cy="10" r="3" fill="#f59e0b"/>
          <circle cx="42" cy="40" r="3" fill="#f59e0b"/>
          <circle cx="10" cy="40" r="3" fill="#f59e0b"/>
        </svg>

        <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 6, textAlign: 'center' }}>
          Login to your account
        </h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 28, textAlign: 'center' }}>
          Welcome back — let&apos;s grow with data-led insights
        </p>

        <div style={{ width: '100%', marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Email address</label>
          <input className="ob-input" type="email" defaultValue="nebil@ultraproventures.com" placeholder="you@company.com" />
        </div>

        <div style={{ width: '100%', marginBottom: 8 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input className="ob-input" type="password" defaultValue="password123" placeholder="••••••••" id="pw-input" />
            <button
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', padding: 0 }}
              onClick={() => {
                const el = document.getElementById('pw-input') as HTMLInputElement
                if (el) el.type = el.type === 'password' ? 'text' : 'password'
              }}
              tabIndex={-1}
              aria-label="Toggle password"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>

        <div style={{ width: '100%', textAlign: 'right', marginBottom: 20 }}>
          <a href="#" style={{ fontSize: 12.5, color: 'var(--primary)', fontWeight: 600 }}>Forgot Password?</a>
        </div>

        <button className="btn-ob-primary" style={{ width: '100%' }} onClick={() => router.push('/onboarding/profile')}>
          Sign in with email
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', margin: '16px 0' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <p style={{ fontSize: 12, color: 'var(--muted)', whiteSpace: 'nowrap' }}>OR CONTINUE WITH</p>
          <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <button style={{
          width: '100%', padding: '12px', background: '#fff',
          border: '1.5px solid var(--border)', borderRadius: 99,
          fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          fontFamily: 'inherit',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/>
            <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
          </svg>
          Continue with Google
        </button>

        <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 24, lineHeight: 1.6 }}>
          By signing in you agree to our{' '}
          <a href="#" style={{ color: 'var(--primary)' }}>Terms of Service</a> and{' '}
          <a href="#" style={{ color: 'var(--primary)' }}>Privacy Policy</a>
        </p>
      </div>

      {/* ── Right panel: dark canvas ── */}
      <div style={{ flex: 1, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <SphereCanvas />
        <div style={{ position: 'absolute', bottom: 48, left: 48, right: 48, color: '#fff' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.25, marginBottom: 8 }}>
            Grow with Data-Led<br/>Insights
          </h2>
          <p style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.6 }}>
            Identify your best-fit markets, validate entry strategies,<br/>
            and build an execution roadmap — all in one place.
          </p>
        </div>
      </div>
    </div>
  )
}
