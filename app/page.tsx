import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HeroParallax } from "@/components/hero-parallax"
import { CapabilitiesLab } from "@/components/capabilities-lab"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ClientOnly } from "@/components/client-only"

export default function HomePage() {
  return (
    <ClientOnly>
      <main className="min-h-screen bg-black" id="top">
        <HeroSection />
        <ServicesSection />
        <HeroParallax />
        <CapabilitiesLab />
        <ContactSection />
        <Footer />
      </main>
    </ClientOnly>
  )
}
