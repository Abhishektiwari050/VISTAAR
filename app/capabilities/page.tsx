import Link from "next/link"
import Image from "next/image";
import { CapabilitiesLab } from "@/components/capabilities-lab"

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-4 md:py-6 z-50">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/vistaar-logo.svg" alt="Vistaar Logo" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-lg md:text-2xl font-heading font-black text-white">Vistaar</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Services</Link>
            <Link href="/work" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Work</Link>
            <Link href="/capabilities" className="text-white bg-white/10 font-medium text-sm px-4 py-2 rounded-full">Capabilities</Link>
            <Link href="/contact" className="text-white hover:text-white/70 font-medium text-sm px-4 py-2 rounded-full hover:bg-white/10">Contact</Link>
          </div>
          <Link href="/contact" className="bg-white text-black hover:bg-white/90 font-semibold rounded-full text-xs md:text-sm px-4 py-2 md:px-6 md:py-3">Let&apos;s Build</Link>
        </div>
      </nav>
      <div className="pt-20 md:pt-32">
        <CapabilitiesLab />
      </div>
    </main>
  )
}