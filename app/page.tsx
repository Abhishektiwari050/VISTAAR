"use client"

import Image from "next/image"
import Link from "next/link"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Spotlight } from "@/components/ui/Spotlight"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import SplineScene from "@/components/home/SplineScene"
import DecryptedText from "@/components/ui/decrypted-text"
import TiltedCard from "@/components/ui/tilted-card"
import SmoothScroll from "@/components/smooth-scroll"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { FadeIn, SlideUp } from "@/components/motion/MotionWrappers"
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from "@tabler/icons-react"

export default function HomePage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <ScrollProgress />

        {/* 0. SPLINE HERO SECTION (Sticky) */}
        <section className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <SplineScene />
          </div>
          <div className="absolute top-10 left-10 z-20 flex items-center gap-4 pointer-events-none select-none">
            <Image src="/vistaar-logo.svg" alt="Vistaar Logo" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter">
              Vistaar
            </h1>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>

          {/* Gradient Mask */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
        </section>

        {/* Spacer for Sticky Hero */}
        <div className="h-screen w-full relative z-0 pointer-events-none" />

        {/* CONTENT WRAPPER (Slides over Hero) */}
        <div className="relative z-10 bg-black/[0.96] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">

          {/* 1. HERO SECTION (Text Content) */}
          <section className="relative min-h-[80vh] w-full flex md:items-center md:justify-center overflow-hidden bg-black/50 backdrop-blur-sm border-t border-white/10 rounded-t-3xl">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
              <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
                <FadeIn>
                  <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-[1.1]">
                    <DecryptedText
                      text="Grow Your Export Business 2-3x Faster"
                      speed={100}
                      maxIterations={20}
                      className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-[1.1]"
                      parentClassName="block"
                      revealDirection="center"
                    />
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="max-w-2xl mx-auto">
                    <TextGenerateEffect
                      words="Join 200+ Indian exporters who automated sales, cut manual work 80%, and scaled with our award-winning digital solutions."
                      className="text-base md:text-lg text-neutral-300 leading-relaxed font-normal"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                      See How
                      <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </Link>

                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20"
                    >
                      View Success Stories
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* 2. SOCIAL PROOF (Infinite Marquee) */}
          <section className="py-20 relative z-10">
            <FadeIn>
              <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-10 opacity-80">
                Trusted by Industry Leaders
              </h2>
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </FadeIn>
          </section>

          {/* 3. SERVICES (Bento Grid) */}
          <section className="py-20 px-4 relative z-10 max-w-7xl mx-auto">
            <SlideUp>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                Everything you need to <span className="text-cyan-500">Dominate</span>
              </h2>
              <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                  <TiltedCard
                    key={i}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                  >
                    <BentoGridItem
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      icon={item.icon}
                      className="h-full"
                    />
                  </TiltedCard>
                ))}
              </BentoGrid>
            </SlideUp>
          </section>

          {/* 4. PROCESS (Sticky Scroll) */}
          <section className="py-20 relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                How We Scale You
              </h2>
              <StickyScroll content={content} />
            </FadeIn>
          </section>

          {/* 5. FINAL CTA */}
          <section className="py-20 relative z-10 text-center px-4 pb-40">
            <SlideUp>
              <div className="max-w-3xl mx-auto bg-neutral-900/50 border border-neutral-800 p-10 rounded-3xl backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to stop chasing leads?
                </h2>
                <p className="text-neutral-400 mb-8 text-lg">
                  Let us build the system that brings them to you.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-200"
                >
                  Start Your Transformation
                </Link>
              </div>
            </SlideUp>
          </section>
        </div>

      </main>
    </SmoothScroll>
  )
}

// DATA

const testimonials = [
  {
    quote: "Vistaar transformed our Alibaba presence. We went from 2 inquiries a month to 50 qualified leads.",
    name: "Rajesh Kumar",
    title: "Director, Global Exports",
  },
  {
    quote: "The automation tools saved us 20 hours a week. Incredible ROI within the first month.",
    name: "Sarah Jenkins",
    title: "CEO, TechTrade",
  },
  {
    quote: "Best digital agency for exporters. Period. They understand the international market like no one else.",
    name: "Amit Patel",
    title: "Founder, Patel Spices",
  },
  {
    quote: "Their design team is world-class. Our new site looks amazing and converts like crazy.",
    name: "John Smith",
    title: "MD, Smith & Co.",
  },
  {
    quote: "We scaled to 3 new countries in 6 months thanks to their SEO strategy.",
    name: "Elena Rodriguez",
    title: "CMO, EuroFoods",
  },
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse"></div>
);

const items = [
  {
    title: "AI-Driven Automation",
    description: "Auto-reply to RFQs 24/7 with intelligent, personalized messages that nurture leads while you sleep.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global SEO Dominance",
    description: "Rank #1 for high-intent buyer keywords in target markets like USA, UK, and UAE.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Conversion-Focused Design",
    description: "Premium, trust-building web design that turns visitors into serious inquiries.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Centralized CRM",
    description: "Track every interaction, deal stage, and follow-up in one unified dashboard.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

const content = [
  {
    title: "1. Audit & Strategy",
    description:
      "We start by deep-diving into your current export setup. We analyze your Alibaba account, website, and sales process to identify the biggest gaps and opportunities. No guesswork, just data-driven strategy.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Audit and Strategy"
        />
      </div>
    ),
  },
  {
    title: "2. Build & Automate",
    description:
      "We deploy our proprietary automation systems. We set up your AI auto-responders, build your premium website, and configure your CRM. This is where the heavy lifting happens, transforming your manual processes into a streamlined machine.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Build and Automate"
        />
      </div>
    ),
  },
  {
    title: "3. Scale & Optimize",
    description:
      "Once the system is live, we drive traffic. We launch SEO campaigns and paid ads. Then, we obsessively monitor data to tweak and optimize for maximum ROI, ensuring your export business scales sustainably.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Scale and Optimize"
        />
      </div>
    ),
  },
];
