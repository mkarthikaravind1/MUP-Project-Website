import { ArrowRight, CircleCheck, Hourglass } from 'lucide-react'
import type { ReactNode } from 'react'
import { scope } from '../../content'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

function Column({
  title,
  note,
  items,
  icon,
  tone,
  className = '',
}: {
  title: string
  note: string
  items: string[]
  icon: ReactNode
  tone: 'success' | 'accent' | 'brand'
  className?: string
}) {
  const ring = { success: 'border-success/40', accent: 'border-accent/40', brand: 'border-line' }[tone]
  const head = { success: 'bg-success-soft text-success', accent: 'bg-accent-soft text-accent', brand: 'bg-brand-soft text-brand' }[tone]
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-surface shadow-card ${ring} ${className}`}>
      <div className={`flex items-center gap-2 px-5 py-4 ${head}`}>
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="flex-1 px-5 py-4">
        <p className="mb-4 text-sm text-muted">{note}</p>
        <ul className="space-y-2.5">
          {items.map((t) => (
            <li key={t} className="flex gap-2.5 text-sm leading-snug text-ink">
              <span
                className={`mt-1.5 size-1.5 shrink-0 rounded-full ${tone === 'success' ? 'bg-success' : tone === 'accent' ? 'bg-accent-bright' : 'bg-brand'}`}
                aria-hidden="true"
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Scope() {
  return (
    <Section id="scope" eyebrow={scope.eyebrow} title={scope.title} intro={scope.intro} alt>
      <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="h-full">
          <Column
            title={scope.does.title}
            note={scope.does.note}
            items={scope.does.items}
            tone="success"
            icon={<CircleCheck className="size-5" aria-hidden="true" />}
          />
        </Reveal>
        <div className="grid gap-6">
          <Reveal delay={0.08}>
            <Column
              title={scope.waiting.title}
              note={scope.waiting.note}
              items={scope.waiting.items}
              tone="accent"
              icon={<Hourglass className="size-5" aria-hidden="true" />}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <Column
              title={scope.after.title}
              note={scope.after.note}
              items={scope.after.items}
              tone="brand"
              icon={<ArrowRight className="size-5" aria-hidden="true" />}
            />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
