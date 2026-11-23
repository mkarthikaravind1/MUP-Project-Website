import { Check, FileSpreadsheet, Filter, Upload, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { heroCalls, type TourId } from '../../content'
import { LiveCallMock } from './LiveCallMock'
import { AppWindow, Chip, Panel, ToneBadge } from './parts'

/* Mock screens drawn from the real app's pages (frontend/src/app/pages). Sample data only. */

function PageTitle({ title, sub, right }: { title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
      <div>
        <p className="text-base font-bold">{title}</p>
        {sub && <p className="text-[11px] text-muted">{sub}</p>}
      </div>
      {right}
    </div>
  )
}

function FilterBar({ items }: { items: string[] }) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-1.5">
      <Filter className="size-3.5 text-muted" aria-hidden="true" />
      {items.map((i) => (
        <span key={i} className="rounded-md border border-line bg-surface px-2 py-1 text-[10px] text-muted">
          {i} ▾
        </span>
      ))}
    </div>
  )
}

function Dashboard() {
  const tiles = [
    { label: 'Open escalations', value: '2', hi: true },
    { label: 'Live calls with an alert', value: '3', hi: true },
    { label: 'Calls in progress', value: '6' },
    { label: 'Follow-ups flagged', value: '4' },
    { label: 'Calls today', value: '38' },
    { label: 'Negative-tone calls today', value: '7' },
    { label: 'Completed calls', value: '32' },
  ]
  return (
    <AppWindow active="Dashboard">
      <PageTitle title="Dashboard" sub="What needs attention" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
        {tiles.map((t) => (
          <div
            key={t.label}
            className={`rounded-xl border p-3 ${t.hi ? 'border-accent/40 bg-accent-soft' : 'border-line bg-surface'}`}
          >
            <p className="text-[10px] font-medium text-muted">{t.label}</p>
            <p className={`mt-1 text-2xl font-bold ${t.hi ? 'text-accent' : ''}`}>{t.value}</p>
          </div>
        ))}
      </div>
      <Panel title="Recent calls" className="mt-3">
        <div className="space-y-1.5 text-[11px]">
          {[
            ['#1042', 'Tamil + English', 'frustrated', 'Turnaround Time, Cost'],
            ['#1041', 'Telugu', 'escalating', 'Communication'],
            ['#1040', 'English', 'positive', 'None'],
          ].map(([id, lang, tone, c]) => (
            <div key={id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-surface-2 px-2 py-1.5">
              <span className="font-semibold">{id}</span>
              <span className="text-muted">{lang}</span>
              <ToneBadge tone={tone as 'positive'} size="xs" />
              <span className="text-muted">{c}</span>
            </div>
          ))}
        </div>
      </Panel>
    </AppWindow>
  )
}

function Ongoing() {
  const rows = [
    { id: '#1041', who: 'Executive A', loc: 'Chennai', tone: 'escalating', c: 'Turnaround Time, Communication', alert: 'Escalation: manager requested' },
    { id: '#1042', who: 'Executive B', loc: 'Chennai', tone: 'frustrated', c: 'Turnaround Time, Cost', alert: 'Complaint not asked about' },
    { id: '#1043', who: 'Executive C', loc: 'Bengaluru', tone: 'negative', c: 'Hygiene', alert: 'Severe category: Hygiene' },
    { id: '#1044', who: 'Executive D', loc: 'Kochi', tone: 'neutral', c: 'Parts Availability', alert: '' },
    { id: '#1045', who: 'Executive E', loc: 'Hyderabad', tone: 'positive', c: 'None', alert: '' },
  ] as const
  return (
    <AppWindow active="Ongoing Calls">
      <PageTitle title="Ongoing calls" sub="Every call in progress, most urgent first" />
      <FilterBar items={['Location', 'Executive', 'Tone', 'Alert']} />
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.id} className="grid grid-cols-2 items-center gap-2 rounded-lg border border-line bg-surface p-2 text-[11px] sm:grid-cols-[60px_1fr_1fr_auto]">
            <span className="font-bold">{r.id}</span>
            <span className="text-muted">
              {r.who} · {r.loc}
            </span>
            <span className="col-span-2 sm:col-span-1">{r.c}</span>
            <span className="flex flex-wrap items-center gap-1.5">
              <ToneBadge tone={r.tone} size="xs" />
              {r.alert && <Chip tone={r.tone === 'escalating' ? 'danger' : 'accent'}>{r.alert}</Chip>}
            </span>
          </div>
        ))}
      </div>
    </AppWindow>
  )
}

function Complaints() {
  const groups = [
    { cat: 'Turnaround Time', items: [['Car not ready on promised day', 'Probed'], ['Delivery delayed twice', 'Follow-up']] },
    { cat: 'Cost', items: [['Bill higher than estimate', 'Covered'], ['Labour charge not explained', 'Resolved']] },
    { cat: 'Parts Availability', items: [['AC part not in stock', 'Detected']] },
  ]
  const stageTone: Record<string, 'brand' | 'accent' | 'success' | 'danger' | 'muted'> = {
    Detected: 'muted',
    Probed: 'brand',
    Covered: 'brand',
    'Follow-up': 'accent',
    Resolved: 'success',
  }
  return (
    <AppWindow active="Complaints">
      <PageTitle title="Complaints" sub="Every complaint across calls, until it is resolved" />
      <FilterBar items={['Show: Open', 'Group by: Category', 'Category', 'Stage']} />
      <div className="space-y-3">
        {groups.map((g) => (
          <Panel key={g.cat} title={g.cat} right={<span className="text-[10px] text-muted">{g.items.length} open</span>}>
            <ul className="space-y-1.5">
              {g.items.map(([t, s]) => (
                <li key={t} className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
                  <span>{t}</span>
                  <Chip tone={stageTone[s]}>{s}</Chip>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </AppWindow>
  )
}

function AiImprovement() {
  return (
    <AppWindow active="AI Improvement Center">
      <PageTitle title="AI Improvement Center" />
      <div className="mb-3 flex gap-1 rounded-lg bg-surface p-1 text-[11px] font-semibold">
        <span className="rounded-md bg-brand-soft px-2.5 py-1 text-brand">Improvements</span>
        <span className="px-2.5 py-1 text-muted">New complaint themes</span>
        <span className="px-2.5 py-1 text-muted">Corrections</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="Suggested improvements" right={<Chip tone="accent">Waiting for review</Chip>}>
          <p className="text-[12px] font-medium">Report “Hygiene” only when the customer clearly raises it.</p>
          <p className="mt-1 text-[10px] text-muted">Reviewers corrected this on 4 of 9 calls (44%). Sample figures.</p>
          <div className="mt-2 flex gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-success px-2 py-1 text-[10px] font-semibold text-white dark:text-[#04140a]">
              <Check className="size-3" aria-hidden="true" /> Approve
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-[10px] font-semibold text-muted">
              <X className="size-3" aria-hidden="true" /> Reject
            </span>
          </div>
        </Panel>
        <Panel title="Improvements the AI follows on every call" right={<Chip tone="success">In use</Chip>}>
          <p className="text-[12px]">Ask about the delivery date before cost when both are raised.</p>
          <p className="mt-1 text-[10px] text-muted">Since approval: corrected less often.</p>
        </Panel>
        <Panel title="New complaint theme" className="md:col-span-2" right={<span className="text-[10px] text-muted">seen on 3 calls</span>}>
          <p className="text-[12px] font-medium">Insurance claim paperwork delays</p>
          <p className="mt-1 text-[10px] text-muted">
            Matches no known category. Accept to turn it into a new complaint category.
          </p>
        </Panel>
      </div>
    </AppWindow>
  )
}

function Reports() {
  const bars = [
    ['Turnaround Time', 82],
    ['Cost', 64],
    ['Service Quality', 51],
    ['Communication', 44],
    ['Parts Availability', 30],
    ['Staff Behaviour', 18],
  ] as const
  const trend = [12, 18, 15, 22, 19, 26, 21, 17, 14]
  const max = Math.max(...trend)
  return (
    <AppWindow active="Reports">
      <PageTitle
        title="Reports"
        right={
          <span className="flex gap-1">
            {['CSV', 'Excel', 'PDF'].map((f) => (
              <span key={f} className="rounded-md border border-line bg-surface px-2 py-1 text-[10px] font-semibold text-muted">
                {f}
              </span>
            ))}
          </span>
        }
      />
      <FilterBar items={['Dates', 'Location', 'Executive', 'Category', 'Tone']} />
      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="Complaints by category">
          <div className="space-y-1.5">
            {bars.map(([l, v]) => (
              <div key={l} className="grid grid-cols-[110px_1fr] items-center gap-2 text-[10px]">
                <span className="truncate text-muted">{l}</span>
                <span className="h-2.5 rounded-full bg-brand" style={{ width: `${v}%` }} />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Category trend">
          <svg viewBox="0 0 200 70" className="h-24 w-full" role="img" aria-label="Sample trend line">
            <polyline
              fill="none"
              stroke="var(--brand)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              points={trend.map((v, i) => `${(i / (trend.length - 1)) * 196 + 2},${66 - (v / max) * 60}`).join(' ')}
            />
          </svg>
          <p className="text-[10px] text-muted">By week</p>
        </Panel>
        <Panel title="Customer tone">
          <div className="flex h-3 overflow-hidden rounded-full">
            {[
              ['positive', 22],
              ['neutral', 38],
              ['negative', 20],
              ['frustrated', 14],
              ['escalating', 6],
            ].map(([t, w]) => (
              <span key={t} style={{ width: `${w}%`, background: `var(--tone-${t})` }} />
            ))}
          </div>
          <p className="mt-1.5 text-[10px] text-muted">Tone at the start and end of each call</p>
        </Panel>
        <Panel title="Root causes">
          <p className="text-[11px]">“Car not ready on the promised day”</p>
          <p className="text-[10px] text-muted">Turnaround Time · links to its calls</p>
        </Panel>
      </div>
    </AppWindow>
  )
}

function PriceList() {
  const rows = [
    ['Periodic service', 'Hatchback', '3,450', '18%'],
    ['Brake pad replacement', 'Sedan', '2,800', '28%'],
    ['AC gas top-up and check', 'SUV', '1,950', '18%'],
    ['Interior cleaning', 'All models', '1,200', '18%'],
  ]
  return (
    <AppWindow active="Price List">
      <PageTitle
        title="Price list"
        sub="Used for live service estimates"
        right={
          <span className="inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1 text-[10px] font-semibold text-white dark:text-[#06121d]">
            <Upload className="size-3" aria-hidden="true" /> Upload from Excel
          </span>
        }
      />
      <Panel title="Rows" right={<FileSpreadsheet className="size-4 text-success" aria-hidden="true" />}>
        <div className="overflow-hidden rounded-lg border border-line text-[11px]">
          <div className="grid grid-cols-[1.6fr_1fr_0.8fr_0.5fr] gap-2 bg-surface-2 px-2 py-1.5 font-semibold text-muted">
            <span>Item</span>
            <span>Model</span>
            <span className="text-right">Price ₹</span>
            <span className="text-right">GST</span>
          </div>
          {rows.map((r) => (
            <div key={r[0]} className="grid grid-cols-[1.6fr_1fr_0.8fr_0.5fr] gap-2 border-t border-line px-2 py-1.5">
              <span className="truncate">{r[0]}</span>
              <span className="truncate text-muted">{r[1]}</span>
              <span className="text-right tabular-nums">{r[2]}</span>
              <span className="text-right text-muted">{r[3]}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[10px] text-muted">Sample prices. Each centre uploads its own.</p>
      </Panel>
      <Panel title="Labour and GST" className="mt-3">
        <p className="text-[11px] text-muted">Labour rate and GST are set per row, per vehicle model.</p>
      </Panel>
    </AppWindow>
  )
}

function PostCall() {
  const sections = [
    ['Issues raised', 'Car not ready on the promised day; bill higher than expected.'],
    ['What we promised', 'Call back with a delivery time today; explain the bill line by line.'],
    ['Still open', 'Cost: the customer was not satisfied yet.'],
    ['Next step', 'Follow-up flagged for the supervisor.'],
  ]
  return (
    <AppWindow active="Live Call">
      <PageTitle title="Call #1042 · Ended" sub="Tamil + English · 4 min 12 s" right={<ToneBadge tone="negative" size="xs" />} />
      <div className="grid gap-3 md:grid-cols-[1.4fr_1fr]">
        <Panel title="Post-call summary">
          <dl className="space-y-2">
            {sections.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-bold uppercase tracking-wide text-muted">{k}</dt>
                <dd className="text-[12px]">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
        <div className="space-y-3">
          <Panel title="Complaints on this call">
            <div className="flex flex-wrap gap-1.5">
              <Chip>Turnaround Time · Covered</Chip>
              <Chip tone="accent">Cost · Follow-up</Chip>
            </div>
          </Panel>
          <Panel title="Customer SMS">
            <p className="text-[11px] text-muted">Summary text sent with the call reference (opt-in, DLT template).</p>
          </Panel>
          <Panel title="Audit score">
            <p className="text-xl font-bold">
              78<span className="text-xs text-muted"> / 100 · estimate</span>
            </p>
          </Panel>
        </div>
      </div>
    </AppWindow>
  )
}

export function TourScreen({ id }: { id: TourId }) {
  switch (id) {
    case 'live-call':
      return (
        <AppWindow active="Live Call">
          <LiveCallMock call={heroCalls[0]} />
        </AppWindow>
      )
    case 'dashboard':
      return <Dashboard />
    case 'ongoing':
      return <Ongoing />
    case 'complaints':
      return <Complaints />
    case 'ai-improvement':
      return <AiImprovement />
    case 'reports':
      return <Reports />
    case 'price-list':
      return <PriceList />
    case 'post-call':
      return <PostCall />
  }
}
