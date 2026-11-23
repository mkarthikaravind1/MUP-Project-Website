import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const styles = {
  primary:
    'bg-brand text-white shadow-lg shadow-brand/25 hover:brightness-110 dark:text-[#06121d]',
  secondary:
    'border border-line bg-surface text-ink shadow-sm hover:border-brand hover:text-brand',
  ghost: 'text-brand hover:bg-brand-soft',
}

/** A link styled as a button. */
export function ButtonLink({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
