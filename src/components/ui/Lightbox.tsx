import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

type Props = { open: boolean; onClose: () => void; label: string; children: ReactNode }

/** Modal dialog for enlarged screens and images. Closes on Escape, backdrop click or the close button. */
export function Lightbox({ open, onClose, label, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      className="m-auto max-h-[92vh] w-[min(1200px,94vw)] overflow-auto rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-surface/95 px-4 py-3 backdrop-blur">
        <p className="text-sm font-semibold">{label}</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-ink"
          aria-label="Close"
          autoFocus
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="p-3 sm:p-5">{open && children}</div>
    </dialog>
  )
}
