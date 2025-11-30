"use client"
import Image from "next/image";

import { useState } from "react"
import { motion } from "framer-motion"
import TrustSignals from "@/components/contact/TrustSignals"
import { FadeIn, SlideUp } from "@/components/motion/MotionWrappers"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    goal: "automation"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-20 relative overflow-hidden">
      <BackgroundBeams className="z-0 opacity-40" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Context & Trust */}
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Let&apos;s <span className="text-accent">Scale</span> Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to automate your sales and dominate the international market?
              Fill out the form, and our team will get back to you within 2 hours.
            </p>

            <div className="mb-12">
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Why Vistaar?</h3>
              <TrustSignals />
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/vistaar-logo.svg" alt="Vistaar Logo" width={32} height={32} className="w-8 h-8 rounded-full object-cover border-2 border-accent" />
                <div>
                  <p className="text-white font-bold">Direct Access</p>
                  <p className="text-xs text-gray-300">Founder-led strategy sessions</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm italic">
                &quot;We don&apos;t take every project. We only work with exporters who are serious about 10x growth.&quot;
              </p>
            </div>
          </FadeIn>

          {/* Right Column: High-Conversion Form */}
          <SlideUp delay={0.2} className="bg-card/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-gray-400">We&apos;ll be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                    <input
                      id="company"
                      type="text"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="Global Exports Ltd"
                      value={formState.company}
                      onChange={e => setFormState({ ...formState, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="goal" className="text-sm font-medium text-gray-300">Primary Goal</label>
                  <select
                    id="goal"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none"
                    value={formState.goal}
                    onChange={e => setFormState({ ...formState, goal: e.target.value })}
                  >
                    <option value="automation">Alibaba Automation</option>
                    <option value="website">New Website / Re-design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="crm">CRM Implementation</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="premium"
                  size="xl"
                  className="w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : "Book Free Strategy Session"}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  No commitment required. 100% free consultation.
                </p>
              </form>
            )}
          </SlideUp>
        </div>
      </div>
    </main>
  )
}