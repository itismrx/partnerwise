import { Icon } from '@iconify/react'

function Card({ title, icon, children, viewAll }: { title: string; icon: string; children: React.ReactNode; viewAll?: string }) {
  return (
    <div className="pw-card">
      <div className="pw-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon icon={icon} style={{ fontSize: 15, color: 'var(--primary)' }} />
          <span className="pw-card-title">{title}</span>
        </div>
        {viewAll && <span className="view-all-btn">{viewAll} <Icon icon="hugeicons:arrow-right-01" style={{ fontSize: 12 }} /></span>}
      </div>
      <div className="pw-card-body">{children}</div>
    </div>
  )
}

function ScoreRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text)' }}>{label}</span>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--text)' }}>{pct}%</span>
      </div>
      <div className="score-bar-wrap"><div className="score-bar-fill" style={{ width: `${pct}%`, background: color }} /></div>
    </div>
  )
}

export default function Overview() {
  return (
    <div>
      {/* Decision banner */}
      <div style={{ background: 'var(--primary)', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 20 }}>⚡</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 2 }}>PROCEED WITH CAUTION — Market Entry Viable, Conditions Apply</div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', lineHeight: 1.5 }}>Australia presents a high-opportunity market for EcoThread. Entry should be phased: validate DTC before committing to wholesale, resolve compliance before scaling.</div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em' }}>Market Score</div>
          <div style={{ fontSize: 36, fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>72</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)' }}>/100</div>
        </div>
      </div>

      {/* KPI strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginBottom: 20 }}>
        {[
          { label: 'Total Addressable Market', value: 'AUD 3.4B', sub: 'Sustainable apparel AU' },
          { label: 'Serviceable Market', value: 'AUD 840M', sub: 'Premium tier segment' },
          { label: 'Market CAGR', value: '11.2%', sub: '2024–2028 forecast' },
          { label: 'Breakeven', value: 'Month 14', sub: 'Base case scenario' },
          { label: 'Opportunity Score', value: '72/100', sub: 'Proceed with Caution' },
        ].map((k) => (
          <div key={k.label} className="stat-tile">
            <div className="stat-label">{k.label}</div>
            <div className="stat-value" style={{ fontSize: 18 }}>{k.value}</div>
            <div className="stat-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* 6-card grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
        <Card title="SWOT Snapshot" icon="hugeicons:chart-bar-01" viewAll="Full view">
          {[
            { label: 'S — GOTS/Fair Trade certified, Award-winning, Take-back programme', color: '#15803d' },
            { label: 'W — Zero AU brand awareness, No 3PL, ACCC compliance pending', color: '#b91c1c' },
            { label: 'O — AUD 3.4B TAM, No dominant sustainable brand, ESG mandates', color: '#1d4ed8' },
            { label: 'T — ACCC greenwashing (AUD 50M), Price war, Currency risk', color: '#92400e' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: 5 }} />
              <span style={{ fontSize: 11.5, color: 'var(--text)', lineHeight: 1.5 }}>{s.label}</span>
            </div>
          ))}
        </Card>

        <Card title="Competitor Landscape" icon="hugeicons:user-group" viewAll="Full view">
          {[
            { name: 'Patagonia', origin: 'USA', threat: 'Medium', cls: 'badge-med' },
            { name: 'Cotton On Eco', origin: 'AU', threat: 'Low', cls: 'badge-low' },
            { name: 'Arnhem', origin: 'AU', threat: 'Medium', cls: 'badge-med' },
            { name: 'Allbirds', origin: 'NZ/USA', threat: 'Low', cls: 'badge-low' },
          ].map((c) => (
            <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 700 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{c.origin}</div>
              </div>
              <span className={`badge ${c.cls}`}>{c.threat}</span>
            </div>
          ))}
        </Card>

        <Card title="Value Proposition" icon="hugeicons:idea-01" viewAll="Full view">
          <div style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.6, marginBottom: 10 }}>
            &ldquo;Premium sustainable apparel with triple certification — GOTS, Fair Trade, OEKO-TEX — and a circular take-back programme.&rdquo;
          </div>
          {['GOTS + Fair Trade + OEKO-TEX certified', 'Design-led aesthetic, sustainably made', 'Take-back garment recycling — unique in AU', 'Carbon-neutral delivery from Day 1'].map((p) => (
            <div key={p} style={{ display: 'flex', gap: 7, marginBottom: 5 }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 13 }}>✓</span>
              <span style={{ fontSize: 11.5, color: 'var(--text)' }}>{p}</span>
            </div>
          ))}
        </Card>

        <Card title="PESTLE At a Glance" icon="hugeicons:analysis-text-link" viewAll="Full view">
          {[
            { dim: 'Political', opp: 70, risk: 20 },
            { dim: 'Economic', opp: 75, risk: 60 },
            { dim: 'Social', opp: 85, risk: 20 },
            { dim: 'Technology', opp: 80, risk: 15 },
            { dim: 'Legal', opp: 50, risk: 70 },
            { dim: 'Environmental', opp: 75, risk: 40 },
          ].map((p) => (
            <div key={p.dim} style={{ marginBottom: 7 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600 }}>{p.dim}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 10, color: '#15803d' }}>Opp {p.opp / 10}</span>
                  <span style={{ fontSize: 10, color: '#b91c1c' }}>Risk {p.risk / 10}</span>
                </div>
              </div>
              <div className="score-bar-wrap" style={{ marginBottom: 2 }}>
                <div className="score-bar-fill" style={{ width: `${p.opp}%`, background: '#16a34a' }} />
              </div>
              <div className="score-bar-wrap">
                <div className="score-bar-fill" style={{ width: `${p.risk}%`, background: '#dc2626' }} />
              </div>
            </div>
          ))}
        </Card>

        <Card title="Porter's Five Forces" icon="hugeicons:pentagon-01" viewAll="Full view">
          {[
            { label: 'Competitive Rivalry', score: 'Medium', color: '#92400e' },
            { label: 'New Entrants', score: 'Medium', color: '#92400e' },
            { label: 'Supplier Power', score: 'Low–Med', color: '#15803d' },
            { label: 'Buyer Power', score: 'Medium', color: '#92400e' },
            { label: 'Substitutes', score: 'Medium', color: '#92400e' },
          ].map((f) => (
            <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
              <span style={{ fontSize: 12, color: 'var(--text)' }}>{f.label}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: f.color }}>{f.score}</span>
            </div>
          ))}
        </Card>

        <Card title="Entry Strategy" icon="hugeicons:rocket-01" viewAll="Full view">
          <div style={{ background: 'var(--primary)', borderRadius: 8, padding: '10px 12px', marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.6)', marginBottom: 3 }}>Selected Model</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>Uppsala Model</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 2 }}>Phased, low-risk market entry</div>
          </div>
          <ScoreRow label="Phase 1 — Establish" pct={33} color="var(--primary)" />
          <ScoreRow label="Phase 2 — Grow" pct={0} color="var(--primary)" />
          <ScoreRow label="Phase 3 — Scale" pct={0} color="var(--primary)" />
        </Card>
      </div>
    </div>
  )
}
