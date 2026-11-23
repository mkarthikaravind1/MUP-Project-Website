import { deployment } from '../../content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Deployment() {
  const { plan, bom } = deployment
  return (
    <Section id="deploy" eyebrow={deployment.eyebrow} title={deployment.title} intro={deployment.intro} alt>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-3 sm:grid-cols-2">
          {plan.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-5 shadow-card">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <p className="mt-3 font-bold text-ink">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="h-full">
          <div className="h-full rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">Bill of materials</p>
            <p className="mt-2 font-display text-5xl font-extrabold text-ink">{bom.total}</p>
            <p className="mt-1 text-sm font-medium text-muted">{bom.period}</p>
            <p className="mt-1 text-sm text-muted">{bom.load}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {bom.categories.map((c) => (
                <li key={c.label} className="flex gap-3 rounded-xl bg-surface-2 p-3">
                  <Icon name={c.icon} className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <span className="block text-sm font-semibold text-ink">{c.label}</span>
                    <span className="block text-xs leading-snug text-muted">{c.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
