import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ open, onClose, title, children }) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement
    panelRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-10"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl rounded-xl border border-border bg-background p-6 shadow-2xl outline-none sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground hover:bg-surface"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
