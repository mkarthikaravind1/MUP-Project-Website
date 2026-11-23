import { useEffect } from 'react'

/**
 * Sections below the hero use `content-visibility: auto` (fast first load), so their real
 * heights are only known once they render. A long smooth scroll to #section can therefore
 * end a little off; when the scroll finishes, snap the target to the top if it moved.
 */
export function useAnchorFix() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]')
      const id = a?.getAttribute('href')?.slice(1)
      const target = id ? document.getElementById(id) : null
      if (!target) return
      const fix = () => {
        const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
        if (Math.abs(target.getBoundingClientRect().top - offset) > 4) {
          target.scrollIntoView({ behavior: 'instant' })
        }
      }
      if ('onscrollend' in window) addEventListener('scrollend', fix, { once: true })
      else setTimeout(fix, 900)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
