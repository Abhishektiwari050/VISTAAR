"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Code,
  Smartphone,
  BarChart3,
  Zap,
  Layers,
  MousePointer,
  Sparkles,
  ArrowRight,
  Play,
  Eye,
} from "lucide-react"

const capabilities = [
  {
    id: "branding",
    title: "Brand Identity Design",
    description: "Complete visual identity systems that capture your brand essence",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-500",
    demo: "Interactive logo animation",
    tags: ["Logo Design", "Color Systems", "Typography"],
  },
  {
    id: "development",
    title: "Advanced Web Development",
    description: "Cutting-edge websites with smooth animations and interactions",
    icon: Code,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    demo: "3D CSS animations",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "mobile",
    title: "Mobile-First Design",
    description: "Responsive experiences that work flawlessly across all devices",
    icon: Smartphone,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    demo: "Device mockup showcase",
    tags: ["Responsive", "PWA", "Mobile UX"],
  },
  {
    id: "analytics",
    title: "Data Visualization",
    description: "Transform complex data into beautiful, actionable insights",
    icon: BarChart3,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    demo: "Interactive charts",
    tags: ["D3.js", "Charts", "Dashboards"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Lightning-fast loading times and seamless user experiences",
    icon: Zap,
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-500",
    demo: "Speed test results",
    tags: ["Core Web Vitals", "SEO", "Optimization"],
  },
  {
    id: "ui-systems",
    title: "Design Systems",
    description: "Scalable component libraries for consistent user experiences",
    icon: Layers,
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    demo: "Component showcase",
    tags: ["Figma", "Storybook", "Components"],
  },
]

const showcaseItems = [
  {
    title: "Interactive 3D Product Showcase",
    description: "Immersive product experiences with WebGL",
    image: "/3d-product-showcase.png",
    tech: ["Three.js", "WebGL", "GSAP"],
  },
  {
    title: "AI-Powered Content Generator",
    description: "Smart content creation with machine learning",
    image: "/ai-content-generator.png",
    tech: ["OpenAI", "React", "Python"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Live data visualization with custom charts",
    image: "/analytics-dashboard.png",
    tech: ["D3.js", "WebSocket", "Node.js"],
  },
  {
    title: "Motion Graphics Landing Page",
    description: "Cinematic animations and scroll effects",
    image: "/motion-graphics-landing.png",
    tech: ["Framer Motion", "GSAP", "CSS3"],
  },
]

export function CapabilitiesLab() {
  const [activeCapability, setActiveCapability] = useState<string | null>(null)
  const [activeShowcase, setActiveShowcase] = useState(0)

  return (
    <section id="capabilities" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm">Capabilities Lab</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary mb-6 text-balance">
            Where Ideas Become
            <br />
            <span className="text-accent">Digital Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Our creative playground where we push the boundaries of what's possible. Every project is an opportunity to
            innovate and exceed expectations.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((capability) => {
            const IconComponent = capability.icon
            const isActive = activeCapability === capability.id

            return (
              <Card
                key={capability.id}
                className={`group relative overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer ${
                  isActive ? capability.borderColor : "border-border"
                }`}
                onMouseEnter={() => setActiveCapability(capability.id)}
                onMouseLeave={() => setActiveCapability(null)}
              >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <CardContent className="relative p-6">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${capability.color} ${capability.borderColor} border mb-4 w-fit`}
                    >
                      <IconComponent className={`w-6 h-6 ${capability.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-heading font-black text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{capability.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {capability.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Demo Link */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn text-accent hover:text-accent-foreground hover:bg-accent transition-all duration-200 p-0 h-auto font-medium text-sm"
                    >
                      <Play className="mr-2 w-3 h-3" />
                      {capability.demo}
                    </Button>
                  </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Showcase Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-black text-primary mb-4">Featured Innovations</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our most ambitious projects that showcase the cutting edge of digital creativity and
              technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {showcaseItems.map((item, index) => (
              <Card
                key={index}
                className={`group overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  activeShowcase === index ? "ring-2 ring-accent/50" : ""
                }`}
                onClick={() => setActiveShowcase(index)}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-accent/10 to-secondary/10">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <Eye className="mr-2 w-5 h-5" />
                        View Demo
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-heading font-black text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MousePointer className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-heading font-black text-primary">Ready to Push Boundaries?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate on something extraordinary. Whether it's a complex technical challenge or a creative
              vision, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                Discuss Your Vision
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore More Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
