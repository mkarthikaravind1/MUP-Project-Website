import { m, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { hero, heroCalls, links } from '../../content'
import { LiveCallMock } from '../mocks/LiveCallMock'
import { AppWindow } from '../mocks/parts'
import { ButtonLink } from '../ui/Button'

export function Hero() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  // Cycle through the sample calls; stops for good once the visitor picks a language.
  useEffect(() => {
    if (reduce || paused) return
    const t = window.setInterval(() => setIdx((i) => (i + 1) % heroCalls.length), 6000)
    return () => window.clearInterval(t)
  }, [reduce, paused])

  const call = heroCalls[idx]

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-10 pb-20 sm:pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-muted shadow-sm">
            <span className="live-dot size-2 rounded-full bg-success" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            Multilingual Call Intelligence
          </h1>
          <p className="mt-4 text-xl font-semibold text-brand sm:text-2xl">{hero.title}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#video">
              <Play className="size-4" aria-hidden="true" /> {hero.primaryCta}
            </ButtonLink>
            <ButtonLink variant="secondary" href={links.liveDemo} target="_blank" rel="noopener noreferrer">
              {hero.secondaryCta} <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Languages supported">
            {hero.languages.map((l) => (
              <li key={l} className="rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-ink">
                {l}
              </li>
            ))}
          </ul>
        </div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative min-w-0"
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div role="tablist" aria-label="Sample call language" className="flex flex-wrap gap-1 rounded-xl border border-line bg-surface p-1">
              {heroCalls.map((c, i) => (
                <button
                  key={c.lang}
                  role="tab"
                  type="button"
                  aria-selected={i === idx}
                  aria-controls="hero-mock"
                  onClick={() => {
                    setIdx(i)
                    setPaused(true)
                  }}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${i === idx ? 'bg-brand text-white dark:text-[#06121d]' : 'text-muted hover:text-ink'}`}
                >
                  {c.langLabel}
                </button>
              ))}
            </div>
          </div>
          <div id="hero-mock" role="tabpanel" aria-label={`Sample live call in ${call.langLabel}`}>
            <AppWindow active="Live Call" sidebar={false}>
              <m.div key={call.lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <LiveCallMock call={call} compact />
              </m.div>
            </AppWindow>
          </div>
          <p className="mt-2 text-center text-xs text-muted">{hero.mockNote}</p>
        </m.div>
      </div>
    </section>
  )
}
