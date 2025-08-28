"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Users, Globe, TrendingUp, ArrowRight, Zap, Target, BarChart3 } from "lucide-react"

const services = [
  {
    id: "seo",
    title: "SEO",
    subtitle: "Data-driven visibility",
    description:
      "Dominate search results with our advanced SEO strategies. We use cutting-edge analytics and proven techniques to boost your organic traffic and online presence.",
    icon: Search,
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Performance Tracking"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
  },
  {
    id: "social",
    title: "Social Media Management",
    subtitle: "Virality, engagement, brand-building",
    description:
      "Create viral content and build engaged communities. Our social media experts craft compelling narratives that resonate with your audience and drive meaningful interactions.",
    icon: Users,
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Analytics & Insights"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
  },
  {
    id: "design",
    title: "Websites & Design",
    subtitle: "Custom-built, sleek, futuristic interfaces",
    description:
      "Transform your digital presence with stunning, high-performance websites. We create immersive experiences that captivate users and drive conversions.",
    icon: Globe,
    features: ["UI/UX Design", "Web Development", "Mobile Optimization", "Brand Identity"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
  },
  {
    id: "growth",
    title: "Growth Strategy",
    subtitle: "Full-stack digital acceleration",
    description:
      "Accelerate your business growth with comprehensive digital strategies. We analyze, optimize, and scale your operations for maximum impact and ROI.",
    icon: TrendingUp,
    features: ["Market Analysis", "Conversion Optimization", "Performance Marketing", "Strategic Planning"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary mb-6 text-balance">
            Everything You Need to
            <br />
            <span className="text-accent">Dominate Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            From SEO mastery to viral social campaigns, we're your complete digital growth partner. Each service is
            designed to work seamlessly together for maximum impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon
            const isActive = activeService === service.id

            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden transition-all duration-200 hover:shadow-lg cursor-pointer ${
                  isActive ? service.borderColor : "border-border"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <CardContent className="relative p-8">
                  {/* Service Icon */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} ${service.borderColor} border`}>
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-heading font-black text-primary group-hover:text-accent transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Service Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Target className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn text-accent hover:text-accent-foreground hover:bg-accent transition-all duration-200 p-0 h-auto font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-heading font-black text-primary">Ready to Accelerate Your Growth?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our integrated approach can transform your digital presence and drive measurable results
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                Get Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
