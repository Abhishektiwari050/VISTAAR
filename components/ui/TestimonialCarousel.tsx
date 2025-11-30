"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        content: "Vistaar transformed our manual export process into a fully automated sales machine. We've seen a 3x increase in leads within 3 months.",
        author: "Rajesh Kumar",
        role: "Director, Global Exports Ltd",
        rating: 5
    },
    {
        id: 2,
        content: "The team's understanding of the Alibaba ecosystem is unmatched. They didn't just design a website; they built a business asset.",
        author: "Sarah Jenkins",
        role: "CEO, TechTrade India",
        rating: 5
    },
    {
        id: 3,
        content: "Professional, responsive, and results-driven. The new UI/UX has significantly improved our brand perception in international markets.",
        author: "Amit Patel",
        role: "Founder, Patel Spices",
        rating: 5
    }
]

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full max-w-4xl mx-auto p-8 md:p-12 bg-card rounded-3xl border border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-24 h-24 text-white" />
            </div>

            <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="flex gap-1">
                            {[...Array(testimonials[current].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                            &quot;{testimonials[current].content}&quot;
                        </p>

                        <div>
                            <h4 className="text-white font-bold text-lg">{testimonials[current].author}</h4>
                            <p className="text-accent text-sm">{testimonials[current].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-8">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
