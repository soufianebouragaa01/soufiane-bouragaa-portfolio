import { ExternalLink } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Timeline } from '../components/Timeline'
import { SectionTitle } from '../components/SectionTitle'
import { experience } from '../data/experience'
import { profile } from '../data/profile'

const experienceItems = experience.map((item) => ({
  title: item.role,
  subtitle: item.location ? `${item.company} — ${item.location}` : item.company,
  period: item.period,
  description: item.description,
  technologies: item.technologies,
}))

const educationItems = profile.education.map((item) => ({
  title: item.school,
  subtitle: item.degree,
  period: item.period,
}))

export function Experience() {
  return (
    <section id="experience">
      <Reveal className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle eyebrow="Expérience" title="Parcours professionnel et formation" />

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
            Expérience
          </h3>
          <Timeline items={experienceItems} />
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-secondary">
            Formation
          </h3>
          <Timeline items={educationItems} />
        </div>
      </div>

      <div className="mt-14">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Certifications
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {profile.certifications.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span>
                  <span className="block font-medium text-foreground">{cert.title}</span>
                  <span className="block text-muted-foreground">
                    {cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ''}
                  </span>
                </span>
                <ExternalLink
                  size={14}
                  className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
                <span className="sr-only">(ouvre dans un nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      </Reveal>
    </section>
  )
}
