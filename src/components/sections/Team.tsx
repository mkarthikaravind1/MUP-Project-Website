import { Heart } from 'lucide-react'
import { site, team } from '../../content'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

function initials(name: string) {
  return name
    .split(' ')
    .filter((p) => p.length > 1)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
}

export function Team() {
  return (
    <Section id="team" eyebrow={team.eyebrow} title={team.title} intro={team.intro}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {team.members.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.06} className={`h-full ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <article className="flex h-full flex-col items-center rounded-2xl border border-line bg-surface p-6 text-center shadow-card">
              {m.photo ? (
                <img src={m.photo} alt={`Photo of ${m.name}`} width={96} height={96} loading="lazy" className="size-24 rounded-full object-cover" />
              ) : (
                <span
                  className="flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-[#1f6fd6] to-[#0f3b5c] font-display text-2xl font-bold text-white"
                  aria-hidden="true"
                >
                  {initials(m.name)}
                </span>
              )}
              <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
              <p className="text-sm font-semibold text-brand">{m.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.focus}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-line bg-surface p-6 text-center shadow-card sm:flex-row sm:p-8 sm:text-left">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <Heart className="size-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">Mentor</p>
            <p className="text-xl font-bold text-ink">
              {team.mentor.name} <span className="font-medium text-muted">· {team.mentor.org}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{team.mentor.thanks}</p>
            {site.institution && <p className="mt-2 text-sm font-medium text-ink">{site.institution}</p>}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
