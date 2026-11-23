import { Check } from 'lucide-react'
import { users } from '../../content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Users() {
  return (
    <Section id="users" eyebrow={users.eyebrow} title={users.title} intro={users.intro} alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {users.roles.map((r, i) => (
          <Reveal key={r.role} delay={i * 0.07} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name={r.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{r.role}</h3>
              <p className="text-sm text-muted">{r.who}</p>
              <ul className="mt-4 space-y-2.5">
                {r.gets.map((g) => (
                  <li key={g} className="flex gap-2 text-sm leading-snug text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
