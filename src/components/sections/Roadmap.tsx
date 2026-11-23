import { Check, CircleDashed } from 'lucide-react'
import { roadmap } from '../../content'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow={roadmap.eyebrow} title={roadmap.title} intro={roadmap.intro}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
            <span className="flex size-7 items-center justify-center rounded-full bg-success text-white dark:text-[#04140a]">
              <Check className="size-4" aria-hidden="true" />
            </span>
            Done
          </h3>
          <ol className="relative space-y-6 border-l-2 border-success/40 pl-6">
            {roadmap.done.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 0.04} className="relative">
                  <span className="absolute top-1.5 -left-[31px] size-3 rounded-full border-2 border-bg bg-success ring-2 ring-success/30" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-wider text-success">{m.date}</p>
                  <p className="mt-0.5 font-bold text-ink">{m.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
            <span className="flex size-7 items-center justify-center rounded-full bg-brand text-white dark:text-[#06121d]">
              <CircleDashed className="size-4" aria-hidden="true" />
            </span>
            What’s next
          </h3>
          <ol className="space-y-3">
            {roadmap.next.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 0.05} className="rounded-2xl border border-dashed border-brand/50 bg-surface p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold text-ink">{m.title}</p>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${m.status === 'In progress' ? 'bg-accent-soft text-accent' : 'bg-brand-soft text-brand'}`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
