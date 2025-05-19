import ProjectCard from "./project-card"
import { TechTagList } from "./tech-tag-list"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "DNN Models for Blood Clot Detection",
      description:
        "Conducted research to develop foundational DNN models using PyTorch and Ray Tune for predicting blood clots (Thrombogenesis) in COVID-19 patients, analyzing Computational Fluid Dynamics (CFD) data. Explored hyperparameter optimization, dimensionality reduction, data-streaming techniques, GPU optimization and scheduling techniques, and data encoding techniques.",
      image: "/dnn_cover.jpg?height=550&width=500",
      tags: ["Python", "PyTorch", "Ray Tune", "Machine Learning", "Research", "XGBoost", "TensorFlow", "Scikit-learn", "AWS", "CFD", "Pandas"],
      liveLink: "https://iacis.org/iis/2024/4_iis_2024_136-142.pdf",
      githubLink: "https://github.com/hozaifaO/covid-clot-detection",
    },
    {
      id: 2,
      title: "Internet Routing Integrity Project",
      description:
        "Led a student team in a full-stack research project with the NSA Lab (LAS @ NCSU). Explored ARIN datasets, visualized RPKI information and helped develop a full-stack website for policymakers using Angular and Flask. Built ETL pipelines and integrated REST APIs. Later presented and demoed the project to NIST.",
      image: "/IRI_cover.png?height=550&width=500",
      tags: ["Angular", "Flask", "MongoDB", "AWS", "Data Analysis", "Python", "TypeScript", "REST-API", "ETL", "ARIN", "RPKI", "Full-Stack", "Model deployment","Hyperparameter Optimization", "Model Finetuning", "OpenAI / Claude / Gemini", "Hugging Face", "Research", "W&B"],
      liveLink: "https://ncsu-las.org/2024/11/internet-routing-integrity/",
      githubLink: "",
    },
    {
      id: 5,
      title: "1-Layer Digit Recognition from Scratch",
      description:
        "Developed a single-layer neural network for digit recognition using only Pandas (83% accuracy) by manually implementing propagation and updates. Later version with PyTorch achieved 94% accuracy.",
      image: "/1layerDigitRecog.jpeg?height=550&width=500",
      tags: ["Python", "Pandas", "PyTorch", "Neural Networks", "Machine Learning"],
      liveLink: "https://www.kaggle.com/code/hozaifa/guidednn-1layer-learning",
      githubLink: "https://www.kaggle.com/code/hozaifa/nn-image-learning-usingpytorch",
    },
    {
      id: 4,
      title: "Car Reviews Analysis with LLMs ('Car-ing')",
      description:
        "Built a FastAPI-based NLP service ('Car-ing') using DistilBERT, Helsinki-NLP, BART, etc. for sentiment analysis, translation, Q&A, and summarization. Deployed with Docker Compose and experimented with Azure Kubernetes. Implemented MLOps pipelines.",
      image: "/caring.jpg?height=550&width=500",
      tags: ["Python", "NLP", "DistilBERT", "BART", "Machine Learning", "FastAPI", "Docker", "Azure", "Kubernetes", "MLOps"],
      liveLink: "https://www.datacamp.com/datalab/w/69d93e2d-9bbb-4544-b117-4aef94532895/edit",
      githubLink: "https://github.com/hozaifaO/Car-Review-Analytics-Chatbot",
    },
    {
      id: 3,
      title: "AI-Udoin? Personal Therapy Multi Voice Agent",
      description:
        "Developed a therapy-oriented multi-call agent (HackUNCP 2025 Healthcare Track Winner). Engineered context-aware conversations using LLMs augmented via Pinecone vector DB (RAG) and built a dynamic multi-voice synthesis pipeline. We are exploring further implimentations of this project",
      image: "/IMG_6806.jpg?height=300&width=500",
      tags: ["Python", "LLM", "RAG", "Pinecone", "Vector DB", "Azure", "Voice Synthesis", "Hackathon"],
      liveLink: "", // Add link if available, e.g., to hackathon page or demo
      githubLink: "", // Add link if available
    },
  ]

  const sortedProjects = projects.sort((a, b) => a.id - b.id);

  return (
    <section id="projects" className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of my research and personal projects focusing on machine learning, data analytics, and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
