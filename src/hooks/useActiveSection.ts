import { useEffect, useState } from 'react'

/** Id of the section currently in the upper part of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')

  // Sections below the hero load in a separate chunk; re-observe once they exist.
  const [ready, setReady] = useState(0)
  useEffect(() => {
    const onReady = () => setReady((n) => n + 1)
    window.addEventListener('sections-ready', onReady)
    return () => window.removeEventListener('sections-ready', onReady)
  }, [])

  useEffect(() => {
    const visible = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting)
        const first = ids.find((id) => visible.get(id))
        setActive(first ?? '')
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids, ready])

  return active
}
