"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SharedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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

  return (
    <nav className={`fixed z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? "top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-xl max-w-4xl"
        : "top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/5 px-8 py-6"
    }`}>
      <div className={`flex items-center transition-all duration-300 ease-out ${
        isScrolled ? "justify-center gap-12" : "justify-between"
      }`}>
        <Link href="/" className="cursor-pointer flex items-center gap-3">
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
        </Link>
        
        <div className={`hidden md:flex items-center transition-all duration-200 ease-out ${
          isScrolled ? "space-x-8" : "space-x-8"
        }`}>
          <Link
            href="/services"
            className={`transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10 ${
              pathname === '/services' ? 'text-white bg-white/10' : 'text-white hover:text-white/70'
            }`}
          >
            Services
          </Link>
          <Link
            href="/work"
            className={`transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10 ${
              pathname === '/work' ? 'text-white bg-white/10' : 'text-white hover:text-white/70'
            }`}
          >
            Work
          </Link>
          <Link
            href="/capabilities"
            className={`transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10 ${
              pathname === '/capabilities' ? 'text-white bg-white/10' : 'text-white hover:text-white/70'
            }`}
          >
            Capabilities
          </Link>
          <Link
            href="/contact"
            className={`transition-colors duration-150 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10 ${
              pathname === '/contact' ? 'text-white bg-white/10' : 'text-white hover:text-white/70'
            }`}
          >
            Contact
          </Link>
        </div>
        
        <Link href="/contact">
          <Button
            className={`bg-white text-black hover:bg-white/90 font-semibold rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg ${
              isScrolled ? "px-5 py-2" : "px-6 py-3"
            }`}
          >
            Let's Build
          </Button>
        </Link>
      </div>
    </nav>
  )
}