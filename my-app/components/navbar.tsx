"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LightSwitch } from "./LightSwitch"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  // Theme state
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Toggle theme handler
  const handleThemeToggle = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement
      if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        localStorage.setItem("theme", "light")
        setIsDark(false)
      } else {
        html.classList.add("dark")
        localStorage.setItem("theme", "dark")
        setIsDark(true)
      }
    }
  }

  // On mount, sync theme with localStorage or system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored === "dark") {
        document.documentElement.classList.add("dark")
        setIsDark(true)
      } else if (stored === "light") {
        document.documentElement.classList.remove("dark")
        setIsDark(false)
      } else {
        // Fallback to system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) {
          document.documentElement.classList.add("dark")
          setIsDark(true)
        } else {
          document.documentElement.classList.remove("dark")
          setIsDark(false)
        }
      }
    }
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsNavbarVisible(false) // Hide on scroll down
          } else {
            setIsNavbarVisible(true) // Show on scroll up or near top
          }
          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  if (!mounted) return null

  return (
    <nav
      id="main-navbar"
      className={`bg-card text-card-foreground shadow-sm sticky top-0 z-20 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ overflow: 'visible', position: 'sticky', top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Portfolio
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/resume"
              className="ml-4 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Resume
            </Link>
            {/* Theme toggle button */}
            <div className="ml-2">
              <LightSwitch onToggle={handleThemeToggle} isDark={isDark} visible={isNavbarVisible} />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LightSwitch onToggle={handleThemeToggle} isDark={isDark} visible={isNavbarVisible} />
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
