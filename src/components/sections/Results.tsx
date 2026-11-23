import { m } from 'framer-motion'
import { CircleCheck, Hourglass, Info } from 'lucide-react'
import { results } from '../../content'
import { useCountUp } from '../../hooks/useCountUp'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const fmt = new Intl.NumberFormat('en-IN')

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const { ref, value: v } = useCountUp(value)
  return (
    <span ref={ref} className="tabular-nums">
      {decimals ? v.toFixed(decimals) : fmt.format(Math.round(v))}
    </span>
  )
}

/** Donut of met / waiting / not met. */
function SrdRing() {
  const { total, met, waiting, notMet } = results.srd
  const r = 70
  const c = 2 * Math.PI * r
  const segs = [
    { n: met, color: 'var(--success)', label: 'Met' },
    { n: waiting, color: 'var(--accent-bright)', label: 'Waiting' },
    { n: notMet, color: 'var(--danger)', label: 'Not met' },
  ]
  let offset = 0
  return (
    <svg viewBox="0 0 180 180" className="size-48 shrink-0 -rotate-90" role="img" aria-label={`SRD coverage: ${met} met, ${waiting} waiting, ${notMet} not met, out of ${total} requirements`}>
      <circle cx="90" cy="90" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="20" />
      {segs.map((s) => {
        const len = (s.n / total) * c
        const el = (
          <m.circle
            key={s.label}
            cx="90"
            cy="90"
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="20"
            strokeDasharray={`${len - 2} ${c - len + 2}`}
            strokeDashoffset={-offset}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        )
        offset += len
        return el
      })}
    </svg>
  )
}

export function Results() {
  const { srd, stats, languages, accuracy } = results
  return (
    <Section id="results" eyebrow={results.eyebrow} title={results.title} intro={results.intro} alt>
      {/* SRD coverage */}
      <Reveal className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative">
            <SrdRing />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-ink">
                <Counter value={srd.met} />
              </span>
              <span className="text-xs font-semibold text-muted">of {srd.total} met</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-ink">SRD coverage: {srd.total} requirements</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{srd.note}</p>
            <dl className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: 'Met', v: srd.met, c: 'text-success', b: 'bg-success' },
                { k: 'Waiting', v: srd.waiting, c: 'text-accent', b: 'bg-accent-bright' },
                { k: 'Not met', v: srd.notMet, c: 'text-danger', b: 'bg-danger' },
              ].map((x) => (
                <div key={x.k} className="rounded-xl border border-line p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                    <span className={`size-2 rounded-full ${x.b}`} aria-hidden="true" />
                    {x.k}
                  </dt>
                  <dd className={`mt-1 text-2xl font-extrabold ${x.c}`}>
                    <Counter value={x.v} />
                  </dd>
                </div>
              ))}
            </dl>
            <details className="group mt-4 text-sm">
              <summary className="cursor-pointer font-semibold text-brand">Why 9 are not met</summary>
              <ul className="mt-2 space-y-1.5 text-muted">
                {srd.notMetReasons.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-danger" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </Reveal>

      {/* Stat tiles */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={(i % 3) * 0.06} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
              <p className="font-display text-4xl font-extrabold text-brand">
                {s.prefix}
                <Counter value={s.value} decimals={s.decimals} />
                {s.suffix}
              </p>
              <p className="mt-1 font-semibold text-ink">{s.label}</p>
              <p className="mt-3 flex gap-1.5 border-t border-line pt-3 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">How measured: </span>
                  {s.how}
                </span>
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Languages */}
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
            <h3 className="text-lg font-bold text-ink">Languages tested end to end</h3>
            <ul className="mt-4 space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2.5 text-sm">
                  <span className="font-medium text-ink">{l.name}</span>
                  {l.status === 'tested' ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-success">
                      <CircleCheck className="size-4" aria-hidden="true" /> Tested on real replays
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-accent">
                      <Hourglass className="size-4" aria-hidden="true" /> Waiting for recordings
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Accuracy sample */}
        <Reveal delay={0.08} className="h-full">
          <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
            <h3 className="text-lg font-bold text-ink">{accuracy.title}</h3>
            <p className="mt-2 rounded-lg bg-accent-soft p-3 text-xs leading-relaxed text-ink">
              <strong>Read with care:</strong> {accuracy.caveat}
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Accuracy sample against SRD targets</caption>
                <thead>
                  <tr className="border-b border-line text-xs text-muted">
                    <th scope="col" className="py-2 pr-3 font-semibold">Measure</th>
                    <th scope="col" className="py-2 pr-3 font-semibold">Measured</th>
                    <th scope="col" className="py-2 font-semibold">SRD target</th>
                  </tr>
                </thead>
                <tbody>
                  {accuracy.rows.map((r) => (
                    <tr key={r.label} className="border-b border-line last:border-0">
                      <th scope="row" className="py-2 pr-3 font-medium text-ink">{r.label}</th>
                      <td className="py-2 pr-3 text-muted">{r.measured}</td>
                      <td className="py-2 text-muted">{r.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
