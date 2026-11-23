import { architecture } from '../../content'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

type BoxProps = {
  x: number
  y: number
  w: number
  h: number
  title: string
  lines?: string[]
  kind?: 'default' | 'brand' | 'ai' | 'data' | 'accent'
  size?: number
}

const fills = {
  default: { fill: 'var(--surface)', stroke: 'var(--border)', title: 'var(--text)' },
  brand: { fill: 'var(--brand-soft)', stroke: 'var(--brand)', title: 'var(--brand)' },
  ai: { fill: 'var(--accent-soft)', stroke: 'var(--accent)', title: 'var(--accent)' },
  data: { fill: 'var(--surface-2)', stroke: 'var(--border)', title: 'var(--text)' },
  accent: { fill: 'var(--success-soft)', stroke: 'var(--success)', title: 'var(--success)' },
}

function Box({ x, y, w, h, title, lines = [], kind = 'default', size = 14 }: BoxProps) {
  const c = fills[kind]
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} fill={c.fill} stroke={c.stroke} strokeWidth={1.5} />
      <text x={x + 14} y={y + size + 10} fontSize={size} fontWeight={700} fill={c.title}>
        {title}
      </text>
      {lines.map((l, i) => (
        <text key={l} x={x + 14} y={y + size + 12 + (i + 1) * (size + 4)} fontSize={size - 2} fill="var(--muted)">
          {l}
        </text>
      ))}
    </g>
  )
}

function Arrow({ d, label, lx, ly, dashed = false }: { d: string; label?: string; lx?: number; ly?: number; dashed?: boolean }) {
  return (
    <g>
      <path d={d} fill="none" stroke="var(--brand)" strokeWidth={2} markerEnd="url(#arrow)" strokeDasharray={dashed ? '6 5' : undefined} />
      {label && (
        <text x={lx} y={ly} fontSize={11} fill="var(--muted)" textAnchor="middle" fontWeight={600}>
          {label}
        </text>
      )}
    </g>
  )
}

function Defs() {
  return (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--brand)" />
      </marker>
    </defs>
  )
}

const desc =
  'Customer phone calls reach the telephony layer (Asterisk with our bridge, or Plivo), which streams audio to the FastAPI backend. The backend stores data in PostgreSQL and live state in Redis, calls the AI providers (Sarvam for speech, Groq-hosted LLMs, pyannote for speakers, and rule-based fallbacks), pushes live updates to the React web app over a WebSocket, and sends the customer SMS through MSG91.'

/** Wide layout for tablet and desktop. */
function Wide() {
  return (
    <svg viewBox="0 0 1000 470" className="hidden w-full md:block" role="img" aria-labelledby="arch-wide-title arch-wide-desc">
      <title id="arch-wide-title">System architecture</title>
      <desc id="arch-wide-desc">{desc}</desc>
      <Defs />
      {/* Caller */}
      <Box x={10} y={170} w={130} h={80} title="Customer" lines={['calls the', 'service centre']} />
      {/* Telephony */}
      <text x={175} y={40} fontSize={12} fontWeight={700} fill="var(--muted)" letterSpacing="0.1em">TELEPHONY</text>
      <Box x={175} y={55} w={175} h={92} title="Asterisk + bridge" lines={['our own phone server', 'softphones, click-to-call']} kind="brand" />
      <Box x={175} y={163} w={175} h={92} title="Plivo" lines={['inbound calls', 'one audio track per side']} kind="brand" />
      <Box x={175} y={300} w={175} h={74} title="MSG91 SMS" lines={['DLT templates']} />
      {/* Backend */}
      <text x={395} y={40} fontSize={12} fontWeight={700} fill="var(--muted)" letterSpacing="0.1em">BACKEND</text>
      <rect x={395} y={55} width={250} height={320} rx={16} fill="var(--surface)" stroke="var(--brand)" strokeWidth={2} />
      <text x={412} y={84} fontSize={16} fontWeight={800} fill="var(--text)">FastAPI</text>
      <text x={412} y={106} fontSize={12} fill="var(--muted)">REST API · live-call WebSocket</text>
      <text x={412} y={124} fontSize={12} fill="var(--muted)">telephony media stream</text>
      <text x={412} y={142} fontSize={12} fill="var(--muted)">post-call jobs · theme discovery</text>
      <Box x={412} y={165} w={216} h={84} title="PostgreSQL 16" lines={['calls, complaints, summaries,', 'learning data']} kind="data" size={13} />
      <Box x={412} y={265} w={216} h={92} title="Redis 7" lines={['live analysis, speaker roles,', 'shared between servers']} kind="data" size={13} />
      {/* AI */}
      <text x={690} y={40} fontSize={12} fontWeight={700} fill="var(--muted)" letterSpacing="0.1em">AI PROVIDERS (SWAPPABLE)</text>
      <Box x={690} y={55} w={145} h={72} title="Sarvam" lines={['speech + language']} kind="ai" size={13} />
      <Box x={845} y={55} w={145} h={72} title="Groq LLMs" lines={['complaints, tone,', 'questions, summary']} kind="ai" size={13} />
      <Box x={690} y={137} w={145} h={72} title="pyannote" lines={['who is speaking']} kind="ai" size={13} />
      <Box x={845} y={137} w={145} h={72} title="Rule fallbacks" lines={['danger words,', 'price-list keywords']} kind="ai" size={13} />
      {/* Web app */}
      <Box x={690} y={265} w={300} h={110} title="React web app" lines={['ICR · Supervisor · Admin · Management', 'live call, dashboard, complaints,', 'reports, AI Improvement Center']} kind="accent" />
      {/* Arrows */}
      <Arrow d="M140 200 C 158 200, 158 101, 173 101" />
      <Arrow d="M140 215 L173 209" />
      <Arrow d="M350 101 L393 101" label="audio" lx={372} ly={94} />
      <Arrow d="M350 209 L393 209" label="audio" lx={372} ly={202} />
      <Arrow d="M395 337 L352 337" label="summary" lx={372} ly={330} />
      <Arrow d="M645 92 L688 92" />
      <Arrow d="M688 173 L647 173" dashed />
      <Arrow d="M645 320 L688 320" label="WebSocket" lx={667} ly={311} />
      <text x={500} y={420} fontSize={12} fill="var(--muted)" textAnchor="middle">
        Production: one Docker Compose stack behind Caddy (HTTPS), with Prometheus + Grafana monitoring.
      </text>
      <text x={500} y={442} fontSize={12} fill="var(--muted)" textAnchor="middle">
        Each AI capability sits behind its own interface, so a provider can be swapped by a setting.
      </text>
    </svg>
  )
}

/** Tall layout for phones. */
function Tall() {
  return (
    <svg viewBox="0 0 340 870" className="w-full md:hidden" role="img" aria-labelledby="arch-tall-title arch-tall-desc">
      <title id="arch-tall-title">System architecture</title>
      <desc id="arch-tall-desc">{desc}</desc>
      <Defs />
      <Box x={95} y={5} w={150} h={58} title="Customer" lines={['phone call']} />
      <Arrow d="M170 63 L170 88" />
      <Box x={5} y={90} w={160} h={78} title="Asterisk" lines={['own phone server', '+ bridge']} kind="brand" />
      <Box x={175} y={90} w={160} h={78} title="Plivo" lines={['inbound calls,', 'track per side']} kind="brand" />
      <Arrow d="M170 168 L170 196" label="audio" lx={196} ly={186} />
      <rect x={5} y={198} width={330} height={250} rx={16} fill="var(--surface)" stroke="var(--brand)" strokeWidth={2} />
      <text x={20} y={226} fontSize={16} fontWeight={800} fill="var(--text)">FastAPI backend</text>
      <text x={20} y={246} fontSize={12} fill="var(--muted)">REST · live WebSocket · media stream</text>
      <text x={20} y={264} fontSize={12} fill="var(--muted)">post-call jobs · theme discovery</text>
      <Box x={20} y={280} w={300} h={70} title="PostgreSQL 16" lines={['calls, complaints, learning data']} kind="data" size={13} />
      <Box x={20} y={360} w={300} h={74} title="Redis 7" lines={['live state shared between servers']} kind="data" size={13} />
      <Arrow d="M170 448 L170 476" />
      <text x={5} y={494} fontSize={11} fontWeight={700} fill="var(--muted)" letterSpacing="0.1em">AI PROVIDERS (SWAPPABLE)</text>
      <Box x={5} y={502} w={160} h={64} title="Sarvam" lines={['speech + language']} kind="ai" size={13} />
      <Box x={175} y={502} w={160} h={64} title="Groq LLMs" lines={['complaints, questions']} kind="ai" size={13} />
      <Box x={5} y={574} w={160} h={64} title="pyannote" lines={['who is speaking']} kind="ai" size={13} />
      <Box x={175} y={574} w={160} h={64} title="Rule fallbacks" lines={['danger words']} kind="ai" size={13} />
      <Arrow d="M170 640 L170 668" label="WebSocket" lx={210} ly={658} />
      <Box x={5} y={670} w={330} h={92} title="React web app" lines={['ICR · Supervisor · Admin · Mgmt', 'live call, complaints, reports']} kind="accent" />
      <Arrow d="M170 762 L170 790" label="after the call" lx={222} ly={780} />
      <Box x={70} y={792} w={200} h={60} title="MSG91 SMS" lines={['summary to customer']} />
    </svg>
  )
}

export function Architecture() {
  const groups = ['AI', 'Backend', 'Data', 'Frontend', 'Telephony', 'Ops', 'Messaging']
  return (
    <Section id="architecture" eyebrow={architecture.eyebrow} title={architecture.title} intro={architecture.intro}>
      <Reveal className="rounded-3xl border border-line bg-surface p-3 shadow-card sm:p-6">
        <Wide />
        <Tall />
      </Reveal>

      <h3 className="mt-8 mb-4 text-center text-xl font-bold text-ink">Tech stack, and why we chose it</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {architecture.stack
          .slice()
          .sort((a, b) => groups.indexOf(a.group) - groups.indexOf(b.group))
          .map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-line bg-surface p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-ink">{s.name}</p>
                  <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold text-muted">{s.group}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.why}</p>
              </div>
            </Reveal>
          ))}
      </div>
    </Section>
  )
}
