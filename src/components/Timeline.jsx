import { Badge } from './Badge'

export function Timeline({ items }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-border pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.subtitle}`} className="relative">
          <span className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {item.period ?? 'Période non précisée'}
          </p>
          <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-muted-foreground">{item.subtitle}</p>}
          {item.description && (
            <p className="mt-2 text-sm text-foreground">{item.description}</p>
          )}
          {item.technologies && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
