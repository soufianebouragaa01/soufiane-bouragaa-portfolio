import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import portrait from '../assets/soufiane-portrait.jpg'
import { navLinks as LINKS } from '../data/navigation'
import { Button } from './Button'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#hero" aria-label="Retour en haut de page">
          <img
            src={portrait}
            alt=""
            className="h-10 w-10 rounded-full border-2 border-primary/30 object-cover object-[50%_20%]"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button as="a" href="/cv.pdf" download size="sm">
            <Download size={14} />
            CV
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="/cv.pdf" download size="sm" className="mt-2 justify-center">
            <Download size={14} />
            Télécharger mon CV
          </Button>
        </nav>
      )}
    </header>
  )
}
