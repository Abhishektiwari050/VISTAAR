"use client"

import { FadeIn } from "@/components/motion/MotionWrappers"
import { FocusCards } from "@/components/ui/focus-cards"

const caseStudies = [
  {
    title: "Global Exports Ltd",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    href: "/work/global-exports"
  },
  {
    title: "TechTrade India",
    src: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
    href: "/work/techtrade"
  },
  {
    title: "Patel Spices",
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    href: "/work/patel-spices"
  },
  {
    title: "EuroFoods Logistics",
    src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop",
    href: "/work/eurofoods"
  },
  {
    title: "Asian Textiles",
    src: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop",
    href: "/work/asian-textiles"
  },
  {
    title: "Future Tech",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    href: "/work/future-tech"
  }
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-16 md:mb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Selected <span className="text-accent">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real results for ambitious exporters. We let the numbers speak for themselves.
          </p>
        </FadeIn>

        <div className="mb-24">
          <FocusCards cards={caseStudies} />
        </div>

        <FadeIn className="mt-24 text-center">
          <p className="text-gray-500 mb-6">Want to see more?</p>
          <a
            href="/contact"
            className="text-white font-bold border-b border-accent hover:text-accent transition-colors pb-1"
          >
            Request Full Portfolio
          </a>
        </FadeIn>
      </div>
    </main>
  )
}