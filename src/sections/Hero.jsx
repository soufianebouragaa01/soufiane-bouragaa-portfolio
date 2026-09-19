import { Cloud, Database } from 'lucide-react'
import portrait from '../assets/soufiane-portrait.jpg'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="hero">
      <Reveal className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 py-20 md:min-h-[85vh] md:flex-row md:justify-between md:py-0">
      <div className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">
        <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
          Bonjour, je m'appelle
        </p>

        <h1 className="whitespace-nowrap bg-gradient-to-r from-primary to-secondary bg-clip-text text-[clamp(1.75rem,7vw,3.5rem)] font-extrabold tracking-tight text-transparent">
          {profile.name}
        </h1>

        <p className="text-xl font-medium text-muted-foreground">{profile.title}</p>

        <p className="text-base text-foreground">{profile.tagline}</p>

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          <Button as="a" href="#projects" variant="primary">
            Voir mes projets
          </Button>
          <Button as="a" href="/cv.pdf" download variant="outline">
            Télécharger mon CV
          </Button>
          <Button as="a" href="#contact" variant="ghost">
            Me contacter
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2 md:justify-start">
          {profile.heroTechnologies.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative flex h-64 w-64 shrink-0 items-center justify-center sm:h-72 sm:w-72">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-[-10px] animate-spin-slow rounded-full border-2 border-dashed border-primary/30"
        />

        <img
          src={portrait}
          alt={profile.name}
          fetchpriority="high"
          className="relative h-full w-full rounded-full border-4 border-surface object-cover object-[50%_20%] shadow-xl"
        />

        <div className="absolute right-0 top-4 flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-xs font-medium text-primary shadow-sm sm:-right-2">
          <Cloud size={14} />
          Salesforce
        </div>
        <div className="absolute left-0 bottom-6 flex items-center gap-1.5 rounded-full border border-secondary/20 bg-background px-3 py-1.5 text-xs font-medium text-secondary shadow-sm sm:-left-4">
          <Database size={14} />
          Data
        </div>
      </div>
      </Reveal>
    </section>
  )
}
