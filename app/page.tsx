"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-4 md:py-6 z-50">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/vistaar-logo.svg" alt="Vistaar Logo" className="w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-lg md:text-2xl font-heading font-black text-white">Vistaar</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Services</Link>
            <Link href="/work" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Work</Link>
            <Link href="/capabilities" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Capabilities</Link>
            <Link href="/contact" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Contact</Link>
          </div>
          <Link href="/contact" className="bg-white text-black hover:bg-white/90 font-semibold rounded-full text-xs md:text-sm px-4 py-2 md:px-6 md:py-3">Let's Build</Link>
        </div>
      </nav>
      
      <section className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/s9JX6Dq2mxbRuOvX/scene.splinecode"></spline-viewer>' }} />
        </div>
        <div className="absolute bottom-0 right-0 z-50 bg-black rounded-tl-lg px-4 py-2 md:px-8 md:py-4 flex items-center gap-2 md:gap-3 min-w-[120px] md:min-w-[200px] h-[40px] md:h-[60px]">
          <img src="/vistaar-logo.svg" alt="Vistaar" className="w-5 h-5 md:w-8 md:h-8" />
          <span className="text-white text-xs md:text-sm font-bold">Vistaar</span>
        </div>
      </section>
    </main>
  )
}
