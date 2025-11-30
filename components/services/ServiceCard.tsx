"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

interface ServiceCardProps {
    title: string
    description: string
    metric: string
    icon: React.ReactNode
    href: string
    delay?: number
}

export default function ServiceCard({ title, description, metric, icon, href, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <CardContainer className="inter-var w-full h-full">
                <CardBody className="bg-card relative group/card border-white/5 w-full h-full rounded-xl p-6 border hover:border-accent/50 transition-colors duration-300">
                    <CardItem
                        translateZ="50"
                        className="mb-6 p-3 w-fit rounded-lg bg-accent/10 text-accent"
                    >
                        {icon}
                    </CardItem>

                    <CardItem
                        translateZ="60"
                        className="text-2xl font-heading font-bold text-white mb-3"
                    >
                        {title}
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ="40"
                        className="text-gray-400 mb-6 leading-relaxed"
                    >
                        {description}
                    </CardItem>

                    <div className="flex items-center justify-between mt-auto">
                        <CardItem
                            translateZ="30"
                            className="py-2 px-3 bg-white/5 rounded-lg border border-white/5"
                        >
                            <span className="text-accent font-bold">{metric}</span>
                        </CardItem>

                        <CardItem
                            translateZ="20"
                            as={Link}
                            href={href}
                            className="flex items-center text-sm font-bold text-white hover:text-accent transition-colors"
                        >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    )
}
