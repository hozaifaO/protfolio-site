import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="text-gray-800">Hozaifa Owaisi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Computer Science student and researcher passionate about machine learning, data analytics, and full-stack development.
          </p>
          <div className="flex justify-center space-x-4 mb-10">
            <Link
              href="https://github.com/hozaifaO"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hozaifa-o-a0b580266/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:howaisi.h@gmail.com"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
