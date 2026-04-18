import OnboardingNav from '@/components/OnboardingNav'

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <OnboardingNav />
      {children}
    </div>
  )
}
