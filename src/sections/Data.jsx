import { Brain, Library, Terminal, Workflow } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { SkillCategoryCard } from '../components/SkillCategoryCard'
import { dataSkills, skillStories } from '../data/skills'

const ICONS = {
  languages: Terminal,
  engineeringBI: Workflow,
  mlAi: Brain,
  librariesDb: Library,
}

const dataStories = skillStories.filter((story) => story.domain === 'data')

export function Data() {
  return (
    <section id="data" className="border-t border-border">
      <Reveal className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          eyebrow="Data"
          title="Transformer la donnée en informations exploitables"
          description="De l'intégration et du nettoyage jusqu'à la visualisation, en passant par la modélisation prédictive."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {Object.entries(dataSkills).map(([key, category]) => (
            <SkillCategoryCard
              key={key}
              icon={ICONS[key]}
              label={category.label}
              items={category.items}
              accent="secondary"
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataStories.map((story) => (
            <div key={story.name} className="rounded-xl border border-border bg-surface p-4">
              <p className="text-sm font-semibold text-secondary">{story.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{story.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
