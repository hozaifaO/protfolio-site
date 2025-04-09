import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "DNN Models for Blood Clot Detection",
      description:
        "Developed scalable DNN models using Ray Tune to predict washout for blood clot detection in COVID patients from computational fluid dynamics data.",
      image: "/dnn_cover.jpg?height=550&width=500",
      tags: ["Python", "PyTorch", "Ray Tune", "Machine Learning", "Research"],
      liveLink: "https://iacis.org/iis/2024/4_iis_2024_136-142.pdf",
      githubLink: "https://github.com/hozaifaO/covid-clot-detection",
    },
    {
      id: 2,
      title: "Internet Routing Integrity Project",
      description:
        "Full-stack project with NSA Lab exploring ARIN datasets and visualizing RPKI information for policymakers, with aggregated statistics and visualizations.",
      image: "/IRI_cover.png?height=550&width=500",
      tags: ["Angular", "ExpressJS", "MongoDB", "AWS", "Data Visualization"],
      liveLink: "https://ncsu-las.org/2024/11/internet-routing-integrity/",
      githubLink: "https://github.com/hozaifaO/routing-integrity",
    },
    {
      id: 3,
      title: "1-Layer Digit Recognition from Scratch",
      description:
        "Developed a single-layer neural network for digit recognition using only Pandas by manually implementing forward propagation, backpropagation, and weight updates.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Pandas", "Neural Networks", "Machine Learning"],
      liveLink: "https://www.kaggle.com/code/hozaifa/guidednn-1layer-learning",
      githubLink: "https://www.kaggle.com/code/hozaifa/nn-image-learning-usingpytorch",
    },
    {
      id: 4,
      title: "Car Reviews Analysis with LLMs",
      description:
        "Processing car reviews using NLP techniques including sentiment analysis, key sentence extraction, translation, and summarization with BART model.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "NLP", "DistilBERT", "BART", "Machine Learning"],
      liveLink: "https://www.datacamp.com/datalab/w/69d93e2d-9bbb-4544-b117-4aef94532895/edit",
      githubLink: "https://github.com/hozaifaO/car-reviews-llm",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gray-800 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of my research and personal projects focusing on machine learning, data analytics, and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.liveLink}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" /> View Project
                  </Link>
                  <Link
                    href={project.githubLink}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
