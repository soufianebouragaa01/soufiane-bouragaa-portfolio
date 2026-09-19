import { Badge } from './Badge'

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
      <div className="mt-1.5 text-sm text-foreground">{children}</div>
    </div>
  )
}

function FieldList({ items }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
          <span className="text-primary">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CaseStudyContent({ project }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">{project.company}</p>

      <Field label="Problème métier">
        <p>{project.businessProblem}</p>
      </Field>

      <Field label="Objectif">
        <p>{project.objective}</p>
      </Field>

      <Field label="Solution">
        <p>{project.solution}</p>
      </Field>

      {project.dataModel && (
        <Field label="Modèle de données">
          <pre className="overflow-x-auto rounded-lg bg-surface p-3 font-mono text-xs text-foreground">
            {project.dataModel.diagram}
          </pre>
          <FieldList items={project.dataModel.fields} />
        </Field>
      )}

      {project.architecture.length > 0 && (
        <Field label="Architecture">
          <FieldList items={project.architecture} />
        </Field>
      )}

      {project.automation.length > 0 && (
        <Field label="Automatisation">
          <FieldList items={project.automation} />
        </Field>
      )}

      {project.security.length > 0 && (
        <Field label="Sécurité">
          <FieldList items={project.security} />
        </Field>
      )}

      {project.reporting.length > 0 && (
        <Field label="Reporting">
          <FieldList items={project.reporting} />
        </Field>
      )}

      <Field label="Fonctionnalités clés">
        <FieldList items={project.keyFeatures} />
      </Field>

      <Field label="Mon rôle">
        <p>{project.role}</p>
      </Field>

      <Field label="Technologies">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </Field>

      {project.results.length > 0 && (
        <Field label="Résultats">
          <FieldList items={project.results} />
        </Field>
      )}
    </div>
  )
}
