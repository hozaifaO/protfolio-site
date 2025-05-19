"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0) // Optional: For hiding on scroll down, showing on scroll up

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const projectsSection = document.getElementById("projects")
      let projectsTop = Infinity // Default to infinity if not found

      if (projectsSection) {
        projectsTop = projectsSection.offsetTop
      }

      // Logic: Hide if scrolled past projects section
      if (currentScrollY >= projectsTop) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      
       if (currentScrollY > lastScrollY && currentScrollY > 50) { // Hide when scrolling down (past a small threshold)
         setIsNavbarVisible(false);
       } else if (currentScrollY < lastScrollY || currentScrollY <= 50) { // Show when scrolling up or near top
         // Only make visible again if we are above the projects section
         if (currentScrollY < projectsTop) {
            setIsNavbarVisible(true);
         }
       }

      setLastScrollY(currentScrollY) // Update last scroll position
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY]) // Dependency includes lastScrollY for the optional logic

  return (
    <nav 
      id="main-navbar"
      className={`bg-card text-card-foreground shadow-sm sticky top-0 z-10 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Portfolio
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="#experience" 
              className="hover:text-foreground transition-colors"
            >
              Experience
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */} 
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card">
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="block px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={toggleMenu}
            >
              Resume
            </Link>
            <Link 
              href="#experience" 
              className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
