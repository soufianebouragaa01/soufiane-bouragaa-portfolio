import { Code2, Database, ExternalLink, Settings2, Workflow } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { SkillCategoryCard } from '../components/SkillCategoryCard'
import { profile } from '../data/profile'
import { salesforceSkills } from '../data/skills'

const ICONS = {
  development: Code2,
  automation: Workflow,
  dataModeling: Database,
  tooling: Settings2,
}

export function Salesforce() {
  return (
    <section id="salesforce" className="border-t border-border bg-surface/40">
      <Reveal className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          eyebrow="Salesforce"
          title="Concevoir des solutions CRM orientées métier"
          description="De la modélisation des données à l'automatisation des processus, jusqu'au développement sur-mesure quand le déclaratif ne suffit plus."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {Object.entries(salesforceSkills).map(([key, category]) => (
            <SkillCategoryCard
              key={key}
              icon={ICONS[key]}
              label={category.label}
              items={category.items}
              accent="primary"
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Trailhead</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.trailhead.badges} badges · {profile.trailhead.points.toLocaleString('fr-FR')}{' '}
              points · Rang {profile.trailhead.rank}
            </p>
          </div>
          <Button as="a" href={profile.trailhead.profileUrl} target="_blank" variant="outline" size="sm">
            Voir mon profil Trailhead
            <ExternalLink size={14} />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
