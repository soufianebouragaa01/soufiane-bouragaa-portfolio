import { useState } from 'react'
import { CaseStudyContent } from '../components/CaseStudyContent'
import { Modal } from '../components/Modal'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/projects'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="border-t border-border bg-surface/40">
      <Reveal className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          eyebrow="Projets"
          title="Des projets Salesforce et Data concrets"
          description="Chaque projet part d'un problème métier réel, résolu avec les technologies adaptées."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>
      </Reveal>

      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name ?? ''}
      >
        {selectedProject && <CaseStudyContent project={selectedProject} />}
      </Modal>
    </section>
  )
}
