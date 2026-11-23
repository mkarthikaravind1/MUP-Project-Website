import { ArrowUpRight, Clock, KeyRound } from 'lucide-react'
import { links, live } from '../../content'
import { ButtonLink } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function LiveMvp() {
  return (
    <section id="live" aria-labelledby="live-title" className="px-4 py-16 sm:px-6">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0f3b5c] px-6 py-12 text-white shadow-2xl sm:px-12 dark:bg-[#0d2a42]">
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[#1f6fd6]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-[#f59e0b]/25 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9cc4f5]">{live.eyebrow}</p>
            <h2 id="live-title" className="mt-3 text-3xl font-bold sm:text-4xl">
              {live.title}
            </h2>
            <p className="mt-3 text-lg text-white/85">{live.intro}</p>
            <ButtonLink
              href={links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 !bg-white !text-[#0f3b5c] !shadow-black/20"
            >
              {live.cta} <ArrowUpRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <p className="mt-3 text-xs break-all text-white/70">{links.liveDemo}</p>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-[#fbbf24]" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-white/90">{live.coldStart}</p>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
              <KeyRound className="mt-0.5 size-5 shrink-0 text-[#9cc4f5]" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-white/90">{live.access}</p>
            </div>
            <dl className="grid grid-cols-3 gap-2 text-center">
              {live.hosting.map((h) => (
                <div key={h.label} className="rounded-xl bg-white/5 px-2 py-2">
                  <dt className="text-[11px] text-white/70">{h.label}</dt>
                  <dd className="text-xs font-semibold">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
