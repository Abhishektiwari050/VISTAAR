"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Hover Effect */}
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection("top")}>
            <h1 className="text-2xl font-heading font-black text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110">
              Vistaar
            </h1>
          </div>

          {/* Desktop Navigation with Enhanced Hover Effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { label: "Services", id: "services" },
                { label: "Our Work", id: "work" },
                { label: "Capabilities", id: "capabilities" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-foreground hover:text-accent transition-all duration-300 font-medium group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 relative overflow-hidden group"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10">Let's Build</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button with Animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                  size={24}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                  size={24}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl border-t border-border">
            {[
              { label: "Services", id: "services" },
              { label: "Our Work", id: "work" },
              { label: "Capabilities", id: "capabilities" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-accent transition-all duration-300 font-medium hover:bg-accent/10 rounded-lg transform ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div
              className={`px-3 py-2 transform transition-all duration-300 ${
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Let's Build
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
