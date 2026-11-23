import { Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { problem } from '../../content'
import { Icon } from '../ui/Icon'
import { Lightbox } from '../ui/Lightbox'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Problem() {
  const [open, setOpen] = useState(false)
  return (
    <Section id="problem" eyebrow={problem.eyebrow} title={problem.title} intro={problem.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {problem.pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-5 shadow-card transition hover:-translate-y-1">
              <span className="flex size-10 items-center justify-center rounded-xl bg-danger-soft text-danger">
                <Icon name={p.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <h3 className="text-xl font-bold text-ink">{problem.triedTitle}</h3>
          <ul className="mt-4 space-y-3">
            {problem.tried.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-bright" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border-l-4 border-brand bg-brand-soft p-4 text-sm font-medium text-ink">
            None of these help the agent <em>during</em> the call, or link complaints across repeat calls.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card"
              aria-label="Enlarge the customer discovery canvas"
            >
              <img
                src={problem.canvas.src}
                srcSet="/images/customer-discovery-canvas-800.webp 800w, /images/customer-discovery-canvas-1200.webp 1200w"
                sizes="(min-width: 1024px) 680px, calc(100vw - 32px)"
                alt={problem.canvas.alt}
                width={1200}
                height={671}
                loading="lazy"
                decoding="async"
                className="w-full transition duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg bg-black/70 px-2.5 py-1.5 text-xs font-semibold text-white">
                <Maximize2 className="size-3.5" aria-hidden="true" /> Enlarge
              </span>
            </button>
            <figcaption className="mt-3 text-sm text-muted">
              <strong className="text-ink">{problem.canvas.title}.</strong> {problem.canvas.caption}
              <span className="mt-1 block text-xs">{problem.canvas.credit}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Lightbox open={open} onClose={() => setOpen(false)} label={problem.canvas.title}>
        <img src={problem.canvas.srcLarge} alt={problem.canvas.alt} width={3364} height={1880} className="w-full rounded-lg bg-white" />
      </Lightbox>
    </Section>
  )
}
