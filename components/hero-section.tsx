"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Enhanced Background Elements with Mouse Parallax */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-secondary rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Main Content with Staggered Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Tagline with Slide Up Animation */}
          <div
            className={`inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="text-accent font-medium text-sm">Next-Gen Digital Services</span>
          </div>

          {/* Main Headline with Staggered Animation */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-primary leading-tight text-balance">
              <span
                className={`inline-block transition-all duration-1000 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Heavy Design,
              </span>
              <br />
              <span
                className={`inline-block text-accent transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Light Feel
              </span>
            </h1>
            <p
              className={`text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty transition-all duration-1000 delay-600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              We handle every creative and technical challenge while keeping the experience minimal and effortless. Your
              growth partner for the digital age.
            </p>
          </div>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 transition-all duration-1000 delay-800 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/25 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group bg-transparent backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-125" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats with Counter Animation */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5x", label: "Average Growth" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-3xl font-heading font-black text-accent transition-all duration-300 group-hover:scale-125 group-hover:text-secondary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center group-hover:border-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse group-hover:h-4 transition-all duration-300"></div>
        </div>
        <div className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
