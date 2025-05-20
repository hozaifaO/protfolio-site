import Image from "next/image"
import { SectionContainer } from "./ui/section-container"
import { SectionHeading } from "./ui/section-heading"

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionHeading 
        title="About Me" 
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <Image 
              src="/profile_pic.JPG" 
              alt="Hozaifa Owaisi profile picture from hackathon" 
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Education</h3>
            <div className="mb-6">
              <p className="text-foreground font-medium">University of North Carolina at Pembroke</p>
              <p className="text-muted-foreground">Bachelor of Science, Major: Computer Science, Minor: Cybersecurity</p>
              <p className="text-muted-foreground/80 text-sm mb-2">Expected May 2025</p>
              
              <p className="text-foreground font-medium mt-4">Wake Technical Community College</p>
              <p className="text-muted-foreground">Associates in Engineering Transfer Program, Major: Computer Science</p>
              <p className="text-muted-foreground/80 text-sm">August 2022</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-foreground">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "TypeScript", "React", "Express", "SpringBoot", "MongoDB", "AWS", "PyTorch", "TensorFlow", "Git", "Docker"].map(
                  (skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>            <p className="text-muted-foreground">
              I am a dedicated and passionate individual pursuing my interests in Computer Science, Data Science, and AI/ML. My drive stems from a deep love for tackling intricate challenges, whether in machine learning, data exploration and engineering, AI, web security, or development and operations. I thrive on the process of problem-solving, spending days searching for solutions, experimenting with different approaches, learning from failures, and eventually uncovering the right path. It&apos;s the journey, not just the result, that excites me most. I am a quick learner, often eager to join and explore new things.            </p>
          </div>
      </div>
    </SectionContainer>
  )
}
