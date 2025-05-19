import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiAmazoneks,
  SiAmazonec2,
  SiAmazons3,
  SiGit,
  SiBitbucket,
  SiAngular,
  SiSpring,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiApachespark,
  SiNumpy,
  SiPandas,
  SiGithubactions,
  SiJupyter
} from 'react-icons/si';
import Image from 'next/image';
import React, {JSX} from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechIconProps {
  tech: string;
  showLabel?: boolean;
}

export function TechIcon({ tech, showLabel = true }: TechIconProps) {
  // Increase icon size for better visibility
  const iconSize = 20;

  // Normalize tech names for consistent mapping
  const normalizeTech = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const normalizedKey = normalizeTech(tech);

  // Map of normalized tech names to display names
  const displayNames: Record<string, string> = {
    scikitlearn: "Scikit-learn",
    pytorch: "PyTorch",
    tensorflow: "TensorFlow",
    keras: "Keras",
    langchain: "LangChain",
    rag: "RAG",
    awseks: "AWS EKS",
    awsec2: "AWS EC2",
    awss3: "AWS S3",
    git: "Git",
    bitbucket: "Bitbucket",
    angular: "Angular",
    springboot: "Spring Boot",
    django: "Django",
    mongodb: "MongoDB",
    postgresql: "PostgreSQL",
    pgvector: "pgVector",
    pyunit: "PyUnit",
    apachespark: "Apache Spark",
    numpy: "NumPy",
    pandas: "Pandas",
    githubactions: "GitHub Actions",
    raytune: "Ray Tune",
    jupyter: "Jupyter",
    aws: "AWS",
    awslambda: "AWS Lambda",
    awssagemaker: "AWS SageMaker",
    dynamodb: "DynamoDB",
    java: "Java",
    llms: "LLMs",
    vllms: "vLLMs",
    restapis: "REST APIs",
    etlelt: "ETL/ELT",
    custombenchmarkingtools: "Custom Benchmarking Tools",
    agile: "Agile",
    cicd: "CI/CD"
  };
  const displayName = displayNames[normalizedKey] || tech;

  // Custom SVG icons for specific services (normalized keys)
  const customSvgIcons: Record<string, string> = {
    aws: "/amazonwebservices.svg",
    awslambda: "/awslambda.svg",
    awssagemaker: "/SageMaker.svg",
    dynamodb: "/DynamoDB.svg",
    java: "/java.svg",
  };

  // Check if we have a custom SVG for this tech
  if (customSvgIcons[normalizedKey]) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="px-3 py-1.5 bg-muted hover:bg-muted/80 text-muted-foreground rounded-full text-xs flex items-center gap-2 transition-colors min-w-[40px] justify-center">
              <Image 
                src={customSvgIcons[normalizedKey]} 
                alt={displayName}
                width={iconSize} 
                height={iconSize} 
                className="min-w-[20px]"
              />
              {showLabel && <span className="whitespace-nowrap">{displayName}</span>}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{displayName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  // Icon map using normalized keys
  const iconMap: Record<string, JSX.Element> = {
    python: <SiPython size={iconSize} className="text-[#3776AB]" />,
    pytorch: <SiPytorch size={iconSize} className="text-[#EE4C2C]" />,
    tensorflow: <SiTensorflow size={iconSize} className="text-[#FF6F00]" />,
    keras: <SiKeras size={iconSize} className="text-[#D00000]" />,
    scikitlearn: <SiScikitlearn size={iconSize} className="text-[#F7931E]" />,
    langchain: <span className="font-bold">LC</span>,
    rag: <span className="font-bold">RAG</span>,
    awseks: <SiAmazoneks size={iconSize} className="text-[#FF9900]" />,
    awsec2: <SiAmazonec2 size={iconSize} className="text-[#FF9900]" />,
    awss3: <SiAmazons3 size={iconSize} className="text-[#FF9900]" />,
    git: <SiGit size={iconSize} className="text-[#F05032]" />,
    bitbucket: <SiBitbucket size={iconSize} className="text-[#0052CC]" />,
    angular: <SiAngular size={iconSize} className="text-[#DD0031]" />,
    springboot: <SiSpring size={iconSize} className="text-[#6DB33F]" />,
    django: <SiDjango size={iconSize} className="text-[#092E20]" />,
    mongodb: <SiMongodb size={iconSize} className="text-[#47A248]" />,
    postgresql: <SiPostgresql size={iconSize} className="text-[#336791]" />,
    pgvector: <SiPostgresql size={iconSize} className="text-[#336791]" />,
    pyunit: <SiPython size={iconSize} className="text-[#3776AB]" />,
    apachespark: <SiApachespark size={iconSize} className="text-[#E25A1C]" />,
    numpy: <SiNumpy size={iconSize} className="text-[#013243]" />,
    pandas: <SiPandas size={iconSize} className="text-[#150458]" />,
    githubactions: <SiGithubactions size={iconSize} className="text-[#2088FF]" />,
    raytune: <span className="font-bold">RT</span>,
    jupyter: <SiJupyter size={iconSize} className="text-[#F37626]" />,
    // Add other technologies as needed
  };

  // For technologies without an icon, show only the full display name (no abbreviation)
  const icon = iconMap[normalizedKey] || customSvgIcons[normalizedKey]
    ? iconMap[normalizedKey]
    : null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="px-3 py-1.5 bg-muted hover:bg-muted/80 text-muted-foreground rounded-full text-xs flex items-center gap-2 transition-colors min-w-[40px] justify-center">
            {icon}
            {showLabel && <span className="whitespace-nowrap">{displayName}</span>}
            {!icon && !showLabel && <span className="whitespace-nowrap">{displayName}</span>}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{displayName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}