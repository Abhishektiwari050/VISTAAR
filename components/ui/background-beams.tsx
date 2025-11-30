"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            <div className="absolute h-full w-full inset-0 bg-neutral-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-900 to-transparent h-px w-1/2 mx-auto -translate-y-1/2 opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-900 to-transparent h-px w-3/4 mx-auto -translate-y-1/2 opacity-20 blur-sm" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 - 50 + "%",
                            y: -100,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: "100vh",
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                        className="absolute w-[2px] h-[20vh] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
