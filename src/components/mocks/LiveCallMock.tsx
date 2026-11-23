import { CircleAlert, Clock, IndianRupee, Keyboard, Mic, Pause, PhoneOff } from 'lucide-react'
import type { heroCalls } from '../../content'
import { Chip, Panel, ToneBadge } from './parts'

type Call = (typeof heroCalls)[number]

/** The agent's live call screen, laid out like frontend/src/app/pages/LiveCallPage.tsx. */
export function LiveCallMock({ call, compact = false }: { call: Call; compact?: boolean }) {
  return (
    <div className="space-y-3">
      {/* Call header */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-surface px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-danger-soft">
            <span className="live-dot size-2 rounded-full bg-danger" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold">Call #1042 · Connected</p>
            <p className="flex items-center gap-1 text-[10px] text-muted">
              <Clock className="size-3" aria-hidden="true" /> 02:14 · {call.langLabel}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="hidden items-center gap-1 rounded-md bg-brand-soft px-2 py-1 text-[10px] font-semibold text-brand sm:inline-flex">
            <Mic className="size-3" aria-hidden="true" /> Listening
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-[10px] font-semibold text-muted">
            <Pause className="size-3" aria-hidden="true" /> Hold
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-danger px-2 py-1 text-[10px] font-semibold text-white dark:text-[#1a0505]">
            <PhoneOff className="size-3" aria-hidden="true" /> End
          </span>
        </div>
      </div>

      <div className={`grid gap-3 ${compact ? 'md:grid-cols-[1.45fr_1fr]' : 'lg:grid-cols-[1.5fr_1fr]'}`}>
        {/* Conversation */}
        <Panel title="Conversation" right={<ToneBadge tone={call.tone} size="xs" />}>
          <ul className="space-y-2">
            {call.lines.map((l, i) => {
              const mixed = !!l.english && /[a-zA-Z]/.test(l.text)
              return (
                <li
                  key={i}
                  className="rounded-lg border-l-[3px] border-brand/40 bg-surface-2 px-2.5 py-1.5"
                  style={l.tone ? { borderLeftColor: `var(--tone-${l.tone})` } : undefined}
                >
                  <div className="mb-0.5 flex flex-wrap items-center gap-1.5">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide ${l.speaker === 'ICR' ? 'text-brand' : 'text-accent'}`}
                    >
                      {l.speaker}
                    </span>
                    <span className="text-[10px] text-muted">
                      {l.english ? call.lang : 'en'}
                      {mixed ? ' + en' : ''}
                    </span>
                    {l.tone && <ToneBadge tone={l.tone} size="xs" />}
                    {l.tags?.map((t) => <Chip key={t}>{t}</Chip>)}
                  </div>
                  <p className="text-[13px] leading-snug text-ink" lang={l.english ? call.lang : 'en'}>
                    {l.text}
                  </p>
                  {l.english && <p className="mt-0.5 text-[11px] italic leading-snug text-muted">{l.english}</p>}
                </li>
              )
            })}
          </ul>
        </Panel>

        <div className="space-y-3">
          {call.escalation && (
            <div className="flex items-start gap-2 rounded-xl border border-danger/40 bg-danger-soft p-2.5">
              <CircleAlert className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold text-danger">Escalation risk: high</p>
                <p className="text-[11px] text-ink">{call.escalation}. Shown to supervisors.</p>
              </div>
            </div>
          )}
          <Panel title="Next question" right={<span className="text-[10px] text-muted">1 of 3</span>}>
            <p className="text-[13px] font-medium leading-snug">{call.question}</p>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded-md bg-brand px-2 py-1 text-[10px] font-semibold text-white dark:text-[#06121d]">
                Accept (A)
              </span>
              <span className="rounded-md border border-line px-2 py-1 text-[10px] font-semibold text-muted">
                Skip (S)
              </span>
            </div>
          </Panel>
          <Panel title="Complaints">
            <ul className="space-y-1.5">
              {call.complaints.map((c, i) => (
                <li key={c} className="flex items-center justify-between gap-2 text-[12px]">
                  <span className="font-medium">{c}</span>
                  <span className="shrink-0 text-[10px] text-muted">
                    {i === 0 ? 'Probed' : 'Detected'} · {i === 0 ? 90 : 80}% sure
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
          {!compact && (
            <Panel title="Service estimate">
              <p className="flex items-center gap-1 text-[12px] font-medium">
                <IndianRupee className="size-3.5 text-accent" aria-hidden="true" />
                {call.estimate.item}
              </p>
              <p className="text-[10px] text-muted">Priced {call.estimate.amount}, GST per row · indicative</p>
            </Panel>
          )}
        </div>
      </div>

      {!compact && (
        <p className="flex items-center gap-1.5 text-[10px] text-muted">
          <Keyboard className="size-3" aria-hidden="true" /> Shortcuts: H hold · A accept · S skip · Home newest line
          · ? help
        </p>
      )}
    </div>
  )
}
