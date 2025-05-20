"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { TechTagList } from "./tech-tag-list"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { Project } from "@/types"

interface ProjectCardProps {
  project: Project;
  index: number; // Add index for potential staggered animation delay
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });
  return (
    <div
      ref={ref}
      className={`bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-border hover:scale-[1.03] hover:-translate-y-1 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          width={500}
          height={500}
          priority={index < 2} // Prioritize loading images for the first couple of cards
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
        <TechTagList tags={project.tags} className="mb-4" />
        
        <div className="flex gap-4 pt-2 border-t border-border/50"> {/* Added border top */}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} className="mr-1.5" /> View Project {/* Adjusted size/margin */}
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} className="mr-1.5" /> Code {/* Adjusted size/margin */}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

