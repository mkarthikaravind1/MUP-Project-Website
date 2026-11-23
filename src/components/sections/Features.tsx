import { ArrowRight } from 'lucide-react'
import { features, type TourId } from '../../content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Features({ onSee }: { onSee: (id: TourId) => void }) {
  return (
    <Section
      id="features"
      eyebrow="Key features"
      title="Everything the agent and supervisor need."
      intro="Twelve features from the working app, each checked against the code and the SRD status."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.06} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-card transition hover:-translate-y-1 hover:border-brand/50">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white dark:group-hover:text-[#06121d]">
                <Icon name={f.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{f.text}</p>
              <a
                href="#tour"
                onClick={() => onSee(f.tour)}
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-brand hover:underline"
              >
                See it <span className="sr-only">: {f.title} in the product tour</span>
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
