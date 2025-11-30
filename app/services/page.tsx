"use client"

import { Globe, BarChart3, ShoppingCart, Zap, Users, Layout } from "lucide-react"
import TestimonialCarousel from "@/components/ui/TestimonialCarousel"
import { FadeIn } from "@/components/motion/MotionWrappers"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { SparklesCore } from "@/components/ui/sparkles"

const services = [
  {
    title: "Alibaba Automation",
    description: "Automate product posting, inquiries, and analytics. Save 80% of manual work hours and respond to leads instantly.",
    link: "/services/alibaba-automation",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Export CRM Implementation",
    description: "Custom CRM solutions tailored for exporters. Track every lead from inquiry to shipment with automated follow-ups.",
    link: "/services/export-crm",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "High-Performance Websites",
    description: "Awwwards-tier websites designed for trust and conversion. Fast, secure, and optimized for international SEO.",
    link: "/services/web-development",
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Digital Marketing for Exporters",
    description: "Targeted B2B campaigns on LinkedIn and Google. Reach international buyers with precision and authority.",
    link: "/services/digital-marketing",
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    title: "E-commerce Solutions",
    description: "Direct-to-consumer or B2B e-commerce platforms. Seamless payment gateways and logistics integration.",
    link: "/services/ecommerce",
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    title: "Process Consulting",
    description: "End-to-end audit of your export workflow. Identify bottlenecks and implement technology-driven solutions.",
    link: "/services/consulting",
    icon: <Zap className="w-8 h-8" />
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20 bg-grid-white/[0.02] relative overflow-hidden">

      {/* Sparkles Hero Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Solutions That <span className="text-accent">Scale</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We don&apos;t just build websites; we build digital ecosystems designed to dominate international markets.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto px-8 mb-24">
          <HoverEffect items={services} />
        </div>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-400">Don&apos;t just take our word for it.</p>
          </div>
          <TestimonialCarousel />
        </section>

        <FadeIn className="bg-gradient-to-r from-accent/20 to-blue-600/20 rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a free strategy session with our export technology experts.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-accent rounded-full hover:bg-accent-hover hover:scale-105 shadow-[0_0_20px_rgba(0,217,255,0.4)]"
            >
              Get Started Now
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}