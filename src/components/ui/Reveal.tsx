import { m } from 'framer-motion'
import type { ReactNode } from 'react'

/** Fades content up when it scrolls into view. MotionConfig turns this off for reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const Cmp = as === 'li' ? m.li : m.div
  return (
    <Cmp
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </Cmp>
  )
}
