import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { CapabilitiesLab } from "@/components/capabilities-lab"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background" id="top">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <CapabilitiesLab />
      <ContactSection />
      <Footer />
    </main>
  )
}
