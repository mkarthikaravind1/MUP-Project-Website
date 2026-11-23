import type { ReactNode } from 'react'
import type { Tone } from '../../content'

const toneLabel: Record<Tone, string> = {
  positive: 'Positive',
  neutral: 'Neutral',
  negative: 'Negative',
  frustrated: 'Frustrated',
  escalating: 'Escalating',
}

/** Tone pill: always colour + name, as in the real app. */
export function ToneBadge({ tone, size = 'sm' }: { tone: Tone; size?: 'xs' | 'sm' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-semibold whitespace-nowrap ${size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-0.5 text-xs'}`}
      style={{
        color: `var(--tone-${tone})`,
        borderColor: `color-mix(in srgb, var(--tone-${tone}) 35%, transparent)`,
        background: `color-mix(in srgb, var(--tone-${tone}) 10%, transparent)`,
      }}
    >
      <span className="size-1.5 rounded-full" style={{ background: `var(--tone-${tone})` }} />
      {toneLabel[tone]}
    </span>
  )
}

type ChipTone = 'brand' | 'accent' | 'danger' | 'success' | 'muted'

export function Chip({ children, tone = 'brand' }: { children: ReactNode; tone?: ChipTone }) {
  const map: Record<ChipTone, string> = {
    brand: 'bg-brand-soft text-brand',
    accent: 'bg-accent-soft text-accent',
    danger: 'bg-danger-soft text-danger',
    success: 'bg-success-soft text-success',
    muted: 'bg-surface-2 text-muted',
  }
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap ${map[tone]}`}>
      {children}
    </span>
  )
}

/** Panel inside a mock screen. */
export function Panel({
  title,
  right,
  children,
  className = '',
}: {
  title?: string
  right?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-line bg-surface p-3 ${className}`}>
      {title && (
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-xs font-bold text-ink">{title}</p>
          {right}
        </div>
      )}
      {children}
    </div>
  )
}

const navItems = [
  'Dashboard',
  'Live Call',
  'Complaints',
  'AI Improvement Center',
  'Ongoing Calls',
  'Escalations',
  'Reports',
  'Price List',
]

/** Browser-like frame with the real app's sidebar navigation. */
export function AppWindow({
  active,
  children,
  sidebar = true,
}: {
  active?: string
  children: ReactNode
  sidebar?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-card">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate rounded-md bg-surface-2 px-2 py-0.5 text-[10px] text-muted">
          Multilingual Call Intelligence · {active}
        </span>
      </div>
      <div className="flex">
        {sidebar && (
          <div className="hidden w-40 shrink-0 flex-col gap-0.5 bg-[#0f3b5c] p-2 text-[11px] text-white/80 lg:flex dark:bg-[#0a2236]">
            <p className="mb-2 px-2 pt-1 text-[11px] font-bold tracking-wide text-white">Call Intelligence</p>
            {navItems.map((n) => (
              <span
                key={n}
                className={`rounded-md px-2 py-1.5 ${n === active ? 'bg-white/15 font-semibold text-white' : ''}`}
              >
                {n}
              </span>
            ))}
          </div>
        )}
        <div className="min-w-0 flex-1 p-3 text-ink">{children}</div>
      </div>
    </div>
  )
}
