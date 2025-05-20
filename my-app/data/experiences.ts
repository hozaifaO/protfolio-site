import { WorkExperience } from "@/types";

export const experiences: WorkExperience[] = [
  {
    id: 1,
    current: true,
    title: "LLM Research and Development Engineer",
    company: "AI Institute of South Carolina – in collaboration with UNCP",
    location: "Pembroke, NC",
    duration: "January 2025 - April 2025",
    project: "Knowledge Editing and Testing Framework for LLMs", 
    description: [
      "Researched and implemented LLM knowledge editing techniques to efficiently update models without full retraining, reducing computational costs while improving adaptability",
      "Designed custom augmentation pipelines and benchmarking strategies to evaluate and optimize LLM performance across diverse data domains",
      "Developed multi-scale AI/ML solutions with MLOps workflows using Amazon SageMaker for automated training, tuning, and deployment",
      "Conducted comparative analysis of LLM architectures and contributed to system change management, ensuring seamless migrations aligned with stakeholder goals"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "RAG", "AWS SageMaker", "AWS Lambda", "AWS EKS", "Custom Benchmarking Tools", "Git", "Bitbucket"],
    tags: ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "RAG", "AWS SageMaker", "AWS Lambda", "AWS EKS"]
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
      "Developed full stack application using Angular, Spring Boot, and REST APIs with real-time data visualizations for routing integrity analytics",
      "Implemented ETL/ELT pipelines for large-scale datasets and collaborated with data engineering to model organizational metadata for AI pipelines",
      "Built LLM-based classification models and an interactive RAG-powered chat interface with custom PostgreSQL pgVector database integration",
      "Established scalable LLM workflows including preprocessing, fine-tuning, and deployment with RayTune optimization, presenting findings at NSA-hosted conferences"
    ],
    technologies: ["Angular", "Java", "Spring Boot", "Python", "Django", "REST APIs", "LLMs", "vLLMs", "RayTune", "AWS EC2", "AWS S3", "ETL/ELT", "Apache Spark", "MongoDB", "PostgreSQL", "pgVector", "Git", "JUnit", "PyUnit", "Agile"],
    projectLink: "https://ncsu-las.org/2024/11/internet-routing-integrity/",
    tags: ["Angular", "Java", "Spring Boot", "Python", "LLMs", "AWS", "MongoDB", "PostgreSQL"]
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
      "Designed and implemented PyTorch-based DNN models for blood clot prediction with Ray Tune hyperparameter optimization",
      "Developed automated data preprocessing pipelines for complex CFD datasets, improving model generalization and training convergence",
      "Established modular ML pipelines with CI/CD integration and migrated development to AWS cloud infrastructure for improved collaboration",
      "Optimized inference latency and model deployment, contributing to peer-reviewed publications and delivering presentations at academic events"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Ray Tune", "Pandas", "NumPy", "Git", "AWS", "Jupyter", "Apache Spark", "DynamoDB", "REST APIs", "CI/CD", "GitHub Actions"],
    projectLink: "https://iacis.org/iis/2024/4_iis_2024_136-142.pdf",
    tags: ["Python", "PyTorch", "TensorFlow", "AWS", "CI/CD"]
  }
];
