import ProjectCard from "./project-card"
import { SectionContainer } from "./ui/section-container"
import { SectionHeading } from "./ui/section-heading"
import { projects } from "@/data/projects"

export default function Projects() {
  const sortedProjects = projects.sort((a, b) => a.id - b.id);
  return (
    <SectionContainer id="projects">
      <SectionHeading 
        title="My Projects" 
        subtitle="A selection of my research and personal projects focusing on machine learning, data analytics, and web development."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sortedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  )
}
