import { Briefcase, Code2, Compass, Mail, MapPin, Phone } from 'lucide-react'
import portrait from '../assets/soufiane-portrait.jpg'
import { navLinks } from '../data/navigation'
import { profile } from '../data/profile'

const SOCIAL_LINKS = [
  { icon: Briefcase, label: 'LinkedIn', href: profile.linkedin },
  { icon: Code2, label: 'GitHub', href: profile.github },
  { icon: Compass, label: 'Trailhead', href: profile.trailhead.profileUrl },
]

const CONTACT_ITEMS = [
  { icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: MapPin, value: profile.location, href: null },
]

const linkClasses =
  'text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={portrait}
              alt=""
              loading="lazy"
              className="h-12 w-12 rounded-full border-2 border-primary/30 object-cover object-[50%_20%]"
            />
            <div>
              <p className="font-semibold text-foreground">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.title}</p>
            </div>
          </div>

          <ul className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navigation du pied de page">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground">
            Navigation
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={linkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {CONTACT_ITEMS.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex items-center gap-3 text-sm">
                <Icon size={16} className="shrink-0 text-primary" />
                {href ? (
                  <a href={href} className={linkClasses}>
                    {value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </p>
          <p>Conçu et développé avec React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
