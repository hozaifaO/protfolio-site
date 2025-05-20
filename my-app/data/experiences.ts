import { WorkExperience } from "@/types";

export const experiences: WorkExperience[] = [
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
    projectLink: "https://iacis.org/iis/2024/4_iis_2024_136-142.pdf",
    tags: ["Python", "PyTorch", "TensorFlow", "AWS", "CI/CD"]
  }
];
