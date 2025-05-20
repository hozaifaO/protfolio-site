"use client"

import React from "react"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TechTagList } from "./tech-tag-list"
import { SectionContainer } from "./ui/section-container"
import { SectionHeading } from "./ui/section-heading"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { experiences } from "@/data/experiences"
import { WorkExperience as WorkExperienceType } from "@/types"

export default function WorkExperience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading 
        title="Work Experience" 
        subtitle="My professional journey in AI research, development, and engineering."
      />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function TimelineExperienceCard({ experience, index }: { experience: WorkExperienceType, index: number }) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true
  });

  // Determine if position is on the left or right (for desktop view)
  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={ref}
      className={cn(
        "relative flex items-center min-h-[200px]",
        isInView ? "opacity-100" : "opacity-0",
        "transition-opacity duration-500 ease-in-out"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline node */}
      <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10">
        <div className={cn(
          "w-6 h-6 rounded-full border-2 border-primary",
          experience.current ? "bg-primary" : "bg-card"
        )}></div>
      </div>

      {/* Left side - Only shown if index is even on desktop */}
      <div className={cn(
        "hidden md:block w-1/2 pr-8",
        isEven ? "block" : "hidden"
      )}>
        {isEven && (
          <div className="ml-auto max-w-[550px] bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-border hover:scale-[1.02] hover:-translate-y-1">
            <ExperienceCardContent experience={experience} />
          </div>
        )}
      </div>

      {/* Right side - Only shown if index is odd on desktop */}
      <div className={cn(
        "hidden md:block w-1/2 pl-8",
        !isEven ? "block" : "hidden"
      )}>
        {!isEven && (
          <div className="max-w-[550px] bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-border hover:scale-[1.02] hover:-translate-y-1">
            <ExperienceCardContent experience={experience} />
          </div>
        )}
      </div>

      {/* Mobile view card - always centered and shown only on mobile */}
      <div className="w-full px-4 md:hidden">
        <div className="ml-6 bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-border">
          <ExperienceCardContent experience={experience} />
        </div>
      </div>
    </div>
  );
}

// Extracted card content to a separate component to avoid duplication
function ExperienceCardContent({ experience }: { experience: WorkExperienceType }) {
  return (
    <div className="p-6">
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
        <p className="text-primary font-medium">{experience.company}</p>
        
        <p className="text-foreground/80 italic mt-1">Project: {experience.project}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1.5" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-1.5" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <ul className="list-disc pl-5 mb-4 space-y-1.5 text-sm text-muted-foreground">
        {experience.description.map((item, i) => (
          <li key={i} className="leading-normal">{item}</li>
        ))}
      </ul>

      <TechTagList tags={experience.technologies} className="mt-4" />

      {experience.projectLink && (
        <div className="mt-4">
          <Link 
            href={experience.projectLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            View Project Details →
          </Link>
        </div>
      )}
    </div>
  );
}