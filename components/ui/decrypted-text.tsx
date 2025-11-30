"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    className?: string;
    parentClassName?: string;
    animateOnHover?: boolean;
    revealDirection?: "start" | "end" | "center";
    useOriginalCharsOnly?: boolean;
    characters?: string;
    sequential?: boolean;
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    className,
    parentClassName,
    animateOnHover = false,
    revealDirection = "start",
    useOriginalCharsOnly = false,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",
    sequential = false,
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const availableChars = useOriginalCharsOnly
        ? Array.from(new Set(text.split(""))).join("")
        : characters;

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = text.split("").map((char, index) => {
                if (char === " ") return char;
                if (pos / maxIterations > index) {
                    return char;
                }
                return availableChars[Math.floor(Math.random() * availableChars.length)];
            }).join("");

            setDisplayText(scrambled);
            pos++;

            if (pos >= text.length * maxIterations) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(text);
            }
        }, speed);
    };

    useEffect(() => {
        let iteration = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return char;

                        if (index < iteration) {
                            return text[index];
                        }
                        return availableChars[Math.floor(Math.random() * availableChars.length)];
                    })
                    .join("")
            );

            if (sequential) {
                iteration += 1 / maxIterations;
            } else {
                iteration += 1; // Simple linear reveal for now to ensure stability
            }

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(text);
            }
        }, speed);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text, speed, maxIterations, availableChars, sequential]);

    return (
        <span
            className={cn("inline-block whitespace-pre-wrap", parentClassName)}
            onMouseEnter={() => animateOnHover && setIsHovering(true)}
            onMouseLeave={() => animateOnHover && setIsHovering(false)}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
}
