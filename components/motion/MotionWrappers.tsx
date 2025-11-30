"use client"

import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { ReactNode } from "react"

interface MotionProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
}

export const FadeIn = ({ children, delay = 0, duration = 0.5, className, ...props }: MotionProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
)

export const SlideUp = ({ children, delay = 0, duration = 0.5, className, ...props }: MotionProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
)

export const StaggerContainer = ({ children, delay = 0, stagger = 0.1, className, ...props }: MotionProps & { stagger?: number }) => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
            hidden: {},
            show: {
                transition: {
                    staggerChildren: stagger,
                    delayChildren: delay,
                },
            },
        }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
)

export const StaggerItem = ({ children, className, ...props }: MotionProps) => {
    const variants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }

    return (
        <motion.div variants={variants} className={className} {...props}>
            {children}
        </motion.div>
    )
}
