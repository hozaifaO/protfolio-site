"use client"

import React from "react"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
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
      
      <div className="relative mt-12 md:mt-20">
        {/* Timeline line - hide on small screens */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2 hidden sm:block"></div>
        <div className="space-y-8 md:space-y-12">
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
  
  // For mobile expandable functionality
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  // Determine if position is on the left or right (for desktop view)
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={cn(
        "relative flex flex-wrap items-center w-full",
        isInView ? "opacity-100" : "opacity-0",
        "transition-opacity duration-500 ease-in-out",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline node */}
      <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className={cn(
          "w-6 h-6 rounded-full border-2 border-primary",
          experience.current ? "bg-primary" : "bg-card"
        )}></div>
      </div>
      {/* Desktop view: all cards on the left */}
      <div className="hidden md:block w-1/2 pr-8">
        <div className="ml-auto max-w-[550px] bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-border hover:scale-[1.02] hover:-translate-y-1">
          <ExperienceCardContent experience={experience} />
        </div>
      </div>
      {/* Mobile view card - unchanged */}
      <div className="w-full px-4 block md:hidden">
        <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
          <div className="p-4">
            {/* Card header with essential information */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                <p className="text-primary text-sm font-medium">{experience.company}</p>
              </div>
              {experience.current && (
                <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                  Current
                </span>
              )}
            </div>
            
            {/* Basic details */}
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar size={12} className="mr-1" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={12} className="mr-1" />
                <span>{experience.location}</span>
              </div>
            </div>
            
            {/* Project name */}
            <p className="text-sm text-foreground/80 italic mt-2">Project: {experience.project}</p>
            
            {/* Top technologies - limit to 5 */}
            <TechTagList tags={experience.technologies.slice(0, 5)} className="mt-3" />
            
            {/* Expandable content section */}
            <div 
              className={cn(
                "mt-3 overflow-hidden transition-all duration-300",
                isExpanded ? "max-h-[500px]" : "max-h-0"
              )}
            >
              <div className="pt-3 border-t border-border/40 mt-2">
                <ul className="list-disc pl-5 mb-3 space-y-1.5 text-xs text-muted-foreground">
                  {experience.description.map((item, i) => (
                    <li key={i} className="leading-normal">{item}</li>
                  ))}
                </ul>
                
                {/* Show all technologies when expanded */}
                <div className="mt-3">
                  <p className="text-xs font-medium text-foreground mb-1">All Technologies:</p>
                  <TechTagList tags={experience.technologies} className="mt-1" />
                </div>
                
                {experience.projectLink && (
                  <div className="mt-3">
                    <Link 
                      href={experience.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-xs font-medium"
                    >
                      View Project Details →
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Toggle button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center mt-2 pt-1 text-muted-foreground text-xs font-medium"
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={14} className="ml-1" /></>
              ) : (
                <>Show More <ChevronDown size={14} className="ml-1" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop card content - kept separate
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
