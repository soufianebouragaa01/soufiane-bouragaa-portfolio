import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const STATS = [
  { value: '2022–2027', label: 'Formation EMSI' },
  { value: String(projects.length), label: 'Projets réalisés' },
  { value: String(profile.certifications.length), label: 'Certifications' },
  { value: String(profile.trailhead.badges), label: 'Badges Trailhead' },
]

export function About() {
  return (
    <section id="about">
      <Reveal className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle eyebrow="À propos" title="Qui je suis" />

      <div className="mt-10 flex flex-col gap-4">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="max-w-3xl text-base leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-surface p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          >
            <p className="text-2xl font-semibold text-primary">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  )
}
