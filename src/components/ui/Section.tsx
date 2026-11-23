import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  alt?: boolean
  className?: string
}

/** A page section with the shared header: eyebrow label, title, one-line intro. */
export function Section({ id, eyebrow, title, intro, children, alt = false, className = '' }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`defer-render py-10 sm:py-12 ${alt ? 'bg-bg-alt' : ''} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-6 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
