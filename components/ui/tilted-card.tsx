"use client";

"use client";

import type { SpringOptions } from "framer-motion";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltedCardProps {
    imageSrc?: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string | number;
    containerWidth?: string | number;
    imageHeight?: string | number;
    imageWidth?: string | number;
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    className,
    children,
}: TiltedCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [rotateAmplitude, -rotateAmplitude]), springValues);
    const rotateY = useSpring(useTransform(x, [-100, 100], [-rotateAmplitude, rotateAmplitude]), springValues);

    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
    const rotate = useTransform(x, [-100, 100], [-3, 3]);

    const [lastY, setLastY] = useState(0);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = ((offsetY - (lastY - offsetY)) / rect.height) * rotateAmplitude;
        const rotationY = ((offsetX - (lastY - offsetX)) / rect.width) * rotateAmplitude;

        x.set(offsetX);
        y.set(offsetY);

        setLastY(offsetY);
    }

    function handleMouseEnter() {
        // scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setLastY(0);
    }

    return (
        <figure
            ref={ref}
            className={cn("relative w-full h-full [perspective:800px] flex flex-col items-center justify-center", className)}
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative [transform-style:preserve-3d] w-full h-full"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                }}
                whileHover={{ scale: scaleOnHover }}
                transition={springValues}
            >
                {children ? (
                    <div className="w-full h-full [transform:translateZ(0)]">
                        {children}
                    </div>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden will-change-transform [transform:translateZ(0)]"
                        style={{
                            width: imageWidth,
                            height: imageHeight,
                        }}
                    >
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}

                {displayOverlayContent && overlayContent && (
                    <motion.div
                        className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]"
                    >
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
