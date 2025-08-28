"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, TrendingUp, Users, Zap } from "lucide-react"

const caseStudies = [
  {
    id: "techstartup",
    title: "TechFlow SaaS",
    category: "SaaS Platform",
    challenge:
      "A B2B SaaS startup needed to establish market presence and generate qualified leads in a competitive space.",
    solution:
      "Comprehensive digital strategy combining SEO optimization, targeted content marketing, and conversion-focused web design.",
    results: [
      { metric: "Organic Traffic", value: "+340%", period: "6 months" },
      { metric: "Lead Generation", value: "+280%", period: "3 months" },
      { metric: "Conversion Rate", value: "+125%", period: "4 months" },
    ],
    tags: ["SEO", "Web Design", "Growth Strategy"],
    image: "/modern-saas-dashboard.png",
    color: "from-blue-500/10 to-cyan-500/10",
    accentColor: "text-blue-500",
    borderColor: "border-blue-500/20",
  },
  {
    id: "ecommerce",
    title: "LuxeStyle Fashion",
    category: "E-commerce",
    challenge:
      "Fashion retailer struggling with low social media engagement and declining online sales during competitive season.",
    solution: "Viral social media campaigns, influencer partnerships, and UX-optimized e-commerce platform redesign.",
    results: [
      { metric: "Social Engagement", value: "+520%", period: "2 months" },
      { metric: "Online Sales", value: "+190%", period: "4 months" },
      { metric: "Brand Mentions", value: "+380%", period: "3 months" },
    ],
    tags: ["Social Media", "E-commerce", "Brand Strategy"],
    image: "/luxury-fashion-e-commerce-website.png",
    color: "from-purple-500/10 to-pink-500/10",
    accentColor: "text-purple-500",
    borderColor: "border-purple-500/20",
  },
  {
    id: "healthcare",
    title: "MedConnect Clinic",
    category: "Healthcare",
    challenge:
      "Medical practice needed to improve online visibility and streamline patient acquisition in local market.",
    solution: "Local SEO optimization, patient-focused website redesign, and automated appointment booking system.",
    results: [
      { metric: "Local Visibility", value: "+450%", period: "5 months" },
      { metric: "New Patients", value: "+200%", period: "6 months" },
      { metric: "Booking Efficiency", value: "+300%", period: "2 months" },
    ],
    tags: ["Local SEO", "Healthcare", "Automation"],
    image: "/modern-medical-clinic-website.png",
    color: "from-green-500/10 to-emerald-500/10",
    accentColor: "text-green-500",
    borderColor: "border-green-500/20",
  },
]

export function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState<string | null>(null)

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <TrendingUp className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary mb-6 text-balance">
            Real Results for
            <br />
            <span className="text-accent">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Every project tells a story of transformation. Here's how we've helped businesses like yours achieve
            extraordinary growth through strategic digital solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                activeStudy === study.id ? study.borderColor : "border-border"
              } ${activeStudy === study.id ? "shadow-xl" : ""}`}
              onMouseEnter={() => setActiveStudy(study.id)}
              onMouseLeave={() => setActiveStudy(null)}
            >
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content Side */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                            {study.category}
                          </Badge>
                          <div className="flex gap-2">
                            {study.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <h3 className="text-3xl font-heading font-black text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                          {study.title}
                        </h3>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">The Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {study.results.map((result, idx) => (
                            <div
                              key={idx}
                              className={`p-4 rounded-lg bg-gradient-to-br ${study.color} border ${study.borderColor}`}
                            >
                              <div className={`text-2xl font-heading font-black ${study.accentColor} mb-1`}>
                                {result.value}
                              </div>
                              <div className="text-sm font-medium text-foreground">{result.metric}</div>
                              <div className="text-xs text-muted-foreground">in {result.period}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-4 pt-4">
                        <Button
                          variant="ghost"
                          className="group/btn text-accent hover:text-accent-foreground hover:bg-accent transition-all duration-200 p-0 h-auto font-semibold"
                        >
                          View Full Case Study
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-accent transition-colors duration-200 p-0 h-auto"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${study.color} ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.title} case study`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-heading font-black text-primary">Ready to Write Your Success Story?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the ranks of businesses that have transformed their digital presence and achieved remarkable growth
              with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
