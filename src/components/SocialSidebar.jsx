import { Briefcase, Code2, Compass } from 'lucide-react'
import { profile } from '../data/profile'

const LINKS = [
  { icon: Briefcase, label: 'LinkedIn', href: profile.linkedin },
  { icon: Code2, label: 'GitHub', href: profile.github },
  { icon: Compass, label: 'Trailhead', href: profile.trailhead.profileUrl },
]

export function SocialSidebar() {
  return (
    <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-6 lg:flex">
      <ul className="flex flex-col items-center gap-4">
        {LINKS.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon size={18} />
            </a>
          </li>
        ))}
      </ul>
      <span aria-hidden="true" className="h-24 w-px bg-border" />
    </div>
  )
}
