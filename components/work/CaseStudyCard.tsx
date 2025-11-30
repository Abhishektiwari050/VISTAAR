"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CaseStudyCardProps {
    title: string
    category: string
    image: string
    results: { label: string; value: string }[]
    href: string
    delay?: number
}

export default function CaseStudyCard({ title, category, image, results, href, delay = 0 }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative grid md:grid-cols-2 gap-8 items-center bg-card/50 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
        >
            <div className="relative h-64 md:h-full min-h-[300px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-accent text-sm font-bold tracking-wider uppercase mb-3">{category}</span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">{title}</h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    {results.map((res, idx) => (
                        <div key={idx}>
                            <p className="text-3xl font-bold text-white mb-1">{res.value}</p>
                            <p className="text-sm text-gray-400">{res.label}</p>
                        </div>
                    ))}
                </div>

                <Link
                    href={href}
                    className="inline-flex items-center text-white font-bold hover:text-accent transition-colors group/link"
                >
                    View Case Study
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
            </div>
        </motion.div>
    )
}
