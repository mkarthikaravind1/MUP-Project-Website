import { m, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { how } from '../../content'
import { Icon } from '../ui/Icon'
import { Section } from '../ui/Section'

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Section id="how" eyebrow={how.eyebrow} title={how.title} intro={how.intro}>
      <ol ref={ref} className="relative mx-auto max-w-3xl overflow-x-clip">
        {/* Rail, filled as the visitor scrolls */}
        <div className="absolute top-2 bottom-2 left-5 w-0.5 bg-line sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true">
          <m.div className="h-full w-full origin-top bg-brand" style={{ scaleY: progress }} />
        </div>

        {how.steps.map((s, i) => {
          const right = i % 2 === 1
          return (
            <li key={s.title} className="relative pb-10 pl-16 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-12 sm:pl-0">
              <m.span
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '0px 0px -25% 0px' }}
                transition={{ duration: 0.35 }}
                className="absolute top-0 left-0 z-10 flex size-10 items-center justify-center rounded-full border-4 border-bg bg-brand text-white sm:left-1/2 sm:-translate-x-1/2 dark:text-[#06121d]"
              >
                <Icon name={s.icon} className="size-4" />
              </m.span>
              <m.div
                initial={{ opacity: 0, x: right ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -20% 0px' }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border border-line bg-surface p-5 shadow-card ${right ? 'sm:col-start-2' : 'sm:col-start-1 sm:text-right'}`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                {'chips' in s && s.chips && (
                  <ul className={`mt-3 flex flex-wrap gap-1.5 ${right ? '' : 'sm:justify-end'}`}>
                    {s.chips.map((c) => (
                      <li key={c} className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </m.div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
