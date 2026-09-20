import { ArrowRight, Cloud, Code2, Database } from 'lucide-react'
import { Badge } from './Badge'
import { Button } from './Button'

const DOMAIN_STYLES = {
  salesforce: {
    icon: Cloud,
    gradient: 'from-primary/20 via-primary/10 to-transparent',
    iconColor: 'text-primary',
    badgeVariant: 'primary',
  },
  data: {
    icon: Database,
    gradient: 'from-secondary/20 via-secondary/10 to-transparent',
    iconColor: 'text-secondary',
    badgeVariant: 'secondary',
  },
  dev: {
    icon: Code2,
    gradient: 'from-accent/20 via-accent/10 to-transparent',
    iconColor: 'text-accent',
    badgeVariant: 'accent',
  },
}

export function ProjectCard({ project, onOpenCaseStudy }) {
  const style = DOMAIN_STYLES[project.domain]
  const Icon = style.icon

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-32 items-center justify-center bg-gradient-to-br ${style.gradient}`}
      >
        <Icon size={40} className={style.iconColor} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          {project.featured && <Badge variant={style.badgeVariant}>Projet phare</Badge>}
        </div>

        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {project.company}
        </p>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {project.businessProblem}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          variant="outline"
          size="sm"
          className="mt-2"
        >
          Voir le Case Study
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  )
}
