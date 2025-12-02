import React from "react";
import Image from "next/image";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export const testimonials = [
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

export const bentoItems = [
    {
        title: "AI-Driven Automation",
        description: "Auto-reply to RFQs 24/7 with intelligent, personalized messages that nurture leads while you sleep.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                    alt="AI Automation"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Global SEO Dominance",
        description: "Rank #1 for high-intent buyer keywords in target markets like USA, UK, and UAE.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
                    alt="SEO Dominance"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </div>
        ),
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Conversion-Focused Design",
        description: "Premium, trust-building web design that turns visitors into serious inquiries.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
                    alt="Web Design"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </div>
        ),
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Centralized CRM",
        description: "Track every interaction, deal stage, and follow-up in one unified dashboard.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    alt="CRM Dashboard"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </div>
        ),
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

export const stickyContent = [
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
