"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface WorkExperience {
  id: number;
  current: boolean;
  title: string;
  company: string;
  location: string;
  duration: string;
  project: string; 
  description: string[];
  technologies: string[];
  projectLink?: string;
}

export default function WorkExperience() {
  const experiences: WorkExperience[] = [
    {
      id: 1,
      current: true,
      title: "LLM Research and Development Engineer",
      company: "AI Institute of South Carolina – in collaboration with UNCP",
      location: "Pembroke, NC",
      duration: "January 2025 - Present",
      project: "Knowledge Editing and Testing Framework for LLMs", 
      description: [
        "Researched and implemented LLM knowledge editing techniques to update large models efficiently without full retraining, improving adaptability and reducing computational costs",
        "Designed custom augmentation pipelines and benchmarking strategies to evaluate and optimize LLM editing outcomes across different data domains",
        "Developed and deployed multi-scale AI/ML solutions tailored for generative AI applications, ensuring high scalability and low latency for a diverse user base of researchers",
        "Leveraged Amazon SageMaker for end-to-end MLOps workflows including automated training, tuning, evaluation, and deployment of models",
        "Conducted comparative analysis of reasoning vs. non-reasoning LLM architectures, generating insights into performance trade-offs and inference optimization",
        "Led system change management, including LLM migrations, updates, and deprecation strategies, ensuring seamless transitions aligned with stakeholder goals"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "RAG", "AWS SageMaker", "AWS Lambda", "AWS EKS", "Custom Benchmarking Tools", "Git", "Bitbucket"],
    },
    {
      id: 2,
      current: false,
      title: "Full Stack AI Engineer",
      company: "NSA Laboratory for Analytic Sciences (LAS) @ NCSU",
      location: "Raleigh, NC",
      duration: "August 2023 - January 2025",
      project: "Internet Routing Integrity & RPKI Visualization Platform", 
      description: [
        "Spearheaded frontend and backend development using Angular, Spring Boot, and REST APIs, building responsive dashboards with real-time data visualizations",
        "Designed and implemented ETL/ELT pipelines for ingesting and processing large-scale ARIN and sector classification datasets",
        "Collaborated with the data engineering team to model, clean, and encode organizational metadata for downstream AI pipelines",
        "Developed and deployed LLM-based classification models to categorize organizations by CISA sectors, enhancing routing integrity analytics",
        "Built an interactive LLM-powered chat interface for querying internal data using RAG (Retrieval-Augmented Generation)",
        "Established a scalable LLM workflow including data preprocessing, model training, fine-tuning, validation, and deployment using RayTune for hyperparameter optimization",
        "Integrated a custom vector database using PostgreSQL pgVector to enable semantically enriched RAG queries",
        "Authored comprehensive technical reports and presented research findings at the NSA-hosted conference on NCSU's campus"
      ],
      technologies: ["Angular", "Java", "Spring Boot", "Python", "Django", "REST APIs", "LLMs", "vLLMs", "RayTune", "AWS EC2", "AWS S3", "ETL/ELT", "Apache Spark", "MongoDB", "PostgreSQL", "pgVector", "Git", "JUnit", "PyUnit", "Agile"],
      projectLink: "https://ncsu-las.org/2024/11/internet-routing-integrity/"
    },
    {
      id: 3,
      current: false,
      title: "DL Research and Development Engineer",
      company: "Corvid Technologies @UNCP",
      location: "Pembroke, NC",
      duration: "January 2023 - January 2024",
      project: "Foundational Model Development for Rapid Blood Clot Detection using DNNs", 
      description: [
        "Designed and implemented deep neural network (DNN) models using PyTorch for blood clot prediction, significantly improving detection accuracy",
        "Conducted hyperparameter tuning using Ray Tune, enhancing model performance through optimized training configurations in a scalable manner",
        "Developed and automated data preprocessing pipelines to encode and scale complex CFD datasets, improving generalization and training convergence",
        "Established a modular ML pipeline for data ingestion, training, validation, and evaluation, supporting reproducibility and long-term research scalability",
        "Led the transition from a local development environment to a cloud-orchestrated experimentation platform using AWS, streamlining collaboration and resource usage",
        "Built and maintained CI/CD pipelines for continuous experimentation, integrated with Jupyter Notebooks to support iterative model development",
        "Explored and implemented techniques for minimizing inference latency and model deployment time, improving real-time usability of the system",
        "Contributed to two peer-reviewed journal publications and delivered three oral presentations at academic and client-sponsored events"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Ray Tune", "Pandas", "NumPy", "Git", "AWS", "Jupyter", "Apache Spark", "DynamoDB", "REST APIs", "CI/CD", "GitHub Actions"],
      projectLink: "https://iacis.org/iis/2024/4_iis_2024_136-142.pdf"
    },
  ];

  return (
    <section id="experience" className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey in AI research, development, and engineering.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineExperienceCard({ experience, index }: { experience: WorkExperience, index: number }) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  // Determine if position is on the left or right (for desktop view)
  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={cardRef}
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
function ExperienceCardContent({ experience }: { experience: WorkExperience }) {
  return (
    <div className="p-6">
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
        <p className="text-primary font-medium">{experience.company}</p>
        
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

      <div className="flex flex-wrap gap-1.5 mt-4">
        {experience.technologies.map((tech) => (
          <span key={tech} className="px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>

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