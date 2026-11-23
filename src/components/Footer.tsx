import { ExternalLink, Mail, Play } from 'lucide-react'
import { footer, links, nav, site, team } from '../content'
import { Logo } from './Header'
import { GithubIcon } from './ui/GithubIcon'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.team} · {site.program} · {site.year}. Built with {site.startup}, mentored by {team.mentor.name} (
            {team.mentor.org}).
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted">{footer.note}</p>
        </div>
        <nav aria-label="Footer sections">
          <p className="text-sm font-bold text-ink">On this page</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-muted hover:text-brand">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-bold text-ink">Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={links.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-brand">
                <ExternalLink className="size-4" aria-hidden="true" /> Live MVP
              </a>
            </li>
            <li>
              <a href="#video" className="inline-flex items-center gap-2 text-muted hover:text-brand">
                <Play className="size-4" aria-hidden="true" /> Demo video
              </a>
            </li>
            {links.github && (
              <li>
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-brand">
                  <GithubIcon className="size-4" /> GitHub
                </a>
              </li>
            )}
            {links.email && (
              <li>
                <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 text-muted hover:text-brand">
                  <Mail className="size-4" aria-hidden="true" /> {links.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {site.year} {site.name} · {site.team}, {site.program}
      </div>
    </footer>
  )
}
