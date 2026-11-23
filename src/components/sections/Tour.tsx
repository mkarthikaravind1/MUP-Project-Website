import { AnimatePresence, m } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { tour, type TourId } from '../../content'
import { TourScreen } from '../mocks/Screens'
import { Lightbox } from '../ui/Lightbox'
import { Section } from '../ui/Section'

function Screen({ id, file, label }: { id: TourId; file: string; label: string }) {
  if (tour.useScreenshots) {
    return (
      <img
        src={`/screenshots/${file}`}
        alt={`Screenshot of the ${label} screen`}
        width={1600}
        height={1000}
        loading="lazy"
        className="w-full rounded-2xl border border-line shadow-card"
      />
    )
  }
  return <TourScreen id={id} />
}

export function Tour({ active, onChange }: { active: TourId; onChange: (id: TourId) => void }) {
  const [open, setOpen] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const index = tour.tabs.findIndex((t) => t.id === active)
  const tab = tour.tabs[index]

  const onKey = (e: KeyboardEvent) => {
    let next: number
    if (e.key === 'ArrowRight') next = (index + 1) % tour.tabs.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + tour.tabs.length) % tour.tabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = tour.tabs.length - 1
    else return
    e.preventDefault()
    onChange(tour.tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section id="tour" eyebrow={tour.eyebrow} title={tour.title} intro={tour.intro} alt>
      <div
        role="tablist"
        aria-label="App screens"
        onKeyDown={onKey}
        className="scrollbar-none -mx-4 mb-6 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {tour.tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            type="button"
            id={`tour-tab-${t.id}`}
            aria-selected={t.id === active}
            aria-controls="tour-panel"
            tabIndex={t.id === active ? 0 : -1}
            onClick={() => onChange(t.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${t.id === active ? 'border-brand bg-brand text-white dark:text-[#06121d]' : 'border-line bg-surface text-muted hover:text-ink'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${active}`} className="mx-auto max-w-5xl">
        <p className="mb-4 text-center text-sm text-muted">{tab.caption}</p>
        <AnimatePresence mode="wait">
          <m.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative">
              <div className="cursor-zoom-in" onClick={() => setOpen(true)}>
                <div className="pointer-events-none">
                  <Screen id={tab.id} file={tab.screenshot} label={tab.label} />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg bg-black/75 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-black"
              >
                <Maximize2 className="size-3.5" aria-hidden="true" /> Enlarge<span className="sr-only"> the {tab.label} screen</span>
              </button>
            </div>
          </m.div>
        </AnimatePresence>
        {!tour.useScreenshots && <p className="mt-4 text-center text-xs text-muted">{tour.note}</p>}
      </div>

      <Lightbox open={open} onClose={() => setOpen(false)} label={`${tab.label}: ${tab.caption}`}>
        <div className="min-w-0">
          <Screen id={tab.id} file={tab.screenshot} label={tab.label} />
        </div>
      </Lightbox>
    </Section>
  )
}
