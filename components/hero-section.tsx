"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-black">
      <spline-viewer url="https://prod.spline.design/s9JX6Dq2mxbRuOvX/scene.splinecode"></spline-viewer>
      
      {/* Dynamic Navbar */}
      <nav className={`fixed z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? "top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-xl max-w-4xl"
          : "top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/5 px-8 py-6"
      }`}>
        <div className={`flex items-center transition-all duration-300 ease-out ${
          isScrolled ? "justify-center gap-12" : "justify-between"
        }`}>
          <div className="cursor-pointer flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/vistaar-logo.svg" 
              alt="Vistaar Logo" 
              className={`transition-all duration-200 ${
                isScrolled ? "w-6 h-6" : "w-8 h-8"
              }`}
            />
            <h1 className={`font-heading font-black text-white hover:text-white/80 transition-all duration-200 ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              Vistaar
            </h1>
          </div>
          
          <div className={`hidden md:flex items-center transition-all duration-200 ease-out ${
            isScrolled ? "space-x-8" : "space-x-8"
          }`}>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-white/70 transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-white hover:text-white/70 transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-white hover:text-white/70 transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-white/70 transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10"
            >
              Contact
            </button>
          </div>
          
          <Button
            onClick={() => scrollToSection("contact")}
            className={`bg-white text-black hover:bg-white/90 font-semibold rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg ${
              isScrolled ? "px-5 py-2" : "px-6 py-3"
            }`}
          >
            Let's Build
          </Button>
        </div>
      </nav>
    </section>
  )
}
