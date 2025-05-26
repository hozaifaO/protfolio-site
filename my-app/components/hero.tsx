import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hi, I&apos;m <span className="text-primary">Hozaifa Owaisi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI Developer and Researcher
          </p>
          <div className="flex justify-center space-x-4 mb-10">
            <Link
              href="https://github.com/hozaifaO"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hozaifa-o-a0b580266/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:howaisi.h@gmail.com"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail size={24} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={16} />
            </Link>            <Link
              href="/resumeHozaifaNew.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} /> Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
