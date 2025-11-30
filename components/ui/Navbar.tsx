"use client";
import Link from "next/link"
import Image from "next/image"
import MobileNav from "./MobileNav"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-4 md:py-6 z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/vistaar-logo.svg" alt="Vistaar Logo" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
                    <h1 className="text-lg md:text-2xl font-heading font-black text-white">Vistaar</h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/services" className="text-white hover:text-accent font-medium text-sm transition-colors">Services</Link>
                    <Link href="/work" className="text-white hover:text-accent font-medium text-sm transition-colors">Work</Link>
                    <Link href="/capabilities" className="text-white hover:text-accent font-medium text-sm transition-colors">Capabilities</Link>
                    <Link href="/contact" className="text-white hover:text-accent font-medium text-sm transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:inline-flex bg-white text-black hover:bg-accent hover:text-black font-semibold rounded-full text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 transition-all duration-300">
                        Let&apos;s Build
                    </Link>

                    {/* Mobile Nav Trigger */}
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}
