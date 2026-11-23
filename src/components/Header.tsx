import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { links, nav } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

const ids = nav.map((n) => n.id)

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <img src="/favicon.svg" alt="" width={32} height={32} className="size-8" />
      <span className="font-display text-[15px] font-bold leading-tight text-ink">
        Multilingual Call
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">Intelligence</span>
      </span>
    </span>
  )
}

export function Header() {
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition ${scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" title="Back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Sections" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? 'true' : undefined}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${active === n.id ? 'bg-brand-soft text-brand' : 'text-muted hover:text-ink'}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            className="rounded-lg p-2.5 text-muted transition hover:bg-surface-2 hover:text-ink"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
          </button>
          <a
            href={links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex dark:text-[#06121d]"
          >
            Live MVP
          </a>
          <button
            type="button"
            className="rounded-lg p-2.5 text-ink hover:bg-surface-2 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="border-t border-line bg-bg px-4 pb-4 xl:hidden">
          <ul className="grid grid-cols-2 gap-1 pt-3">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === n.id ? 'true' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${active === n.id ? 'bg-brand-soft text-brand' : 'text-ink hover:bg-surface-2'}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="col-span-2 mt-2">
              <a
                href={links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white dark:text-[#06121d]"
              >
                Open the live MVP
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
