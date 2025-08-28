"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send, MessageCircle, Calendar, Rocket, CheckCircle, Clock, Users } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 2 hours",
    value: "services.vistaar@gmail.com",
    action: "mailto:services.vistaar@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9AM-6PM IST",
    value: "+91 8860110144",
    action: "tel:+918860110144",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    title: "Visit Us",
    description: "E1 Vasant Kunj, New Delhi",
    value: "Get Directions",
    action: "https://maps.google.com/?q=E1+Vasant+Kunj+New+Delhi",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

const projectTypes = [
  "Website Design & Development",
  "SEO & Digital Marketing",
  "Social Media Management",
  "Brand Identity & Design",
  "E-commerce Solutions",
  "Mobile App Development",
  "Growth Strategy Consulting",
  "Other",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12 animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-heading font-black text-primary mb-4">Message Sent Successfully!</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Thank you for reaching out! We've received your message and will get back to you within 2 hours during
              business hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-green-500/30 text-green-600 hover:bg-green-500/10 magnetic-button"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <Rocket className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm">Let's Build Together</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary mb-6 text-balance">
            Ready to Transform
            <br />
            <span className="text-accent">Your Digital Presence?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Every great project starts with a conversation. Tell us about your vision, and let's create something
            extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-black text-primary mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Choose your preferred way to connect with us. We're here to help bring your ideas to life.
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover-lift"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-lg ${method.bgColor} transition-all duration-300 group-hover:scale-110`}
                        >
                          <IconComponent className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          <a
                            href={method.action}
                            className={`font-medium ${method.color} hover:underline transition-colors duration-200`}
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {/* Quick Stats */}
              <div className="bg-muted/50 rounded-xl p-6 mt-8 hover-lift">
                <h4 className="font-semibold text-primary mb-4">Why Choose Vistaar?</h4>
                <div className="space-y-3">
                  <div className="flex items-center group">
                    <Clock className="w-4 h-4 text-accent mr-3 transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-sm text-muted-foreground">2-hour response time</span>
                  </div>
                  <div className="flex items-center group">
                    <Users className="w-4 h-4 text-accent mr-3 transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-sm text-muted-foreground">200+ successful projects</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-sm text-muted-foreground">98% client satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-accent/10 hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-black text-primary mb-2">Start Your Project</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a detailed proposal within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 hover:border-accent/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 hover:border-accent/50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 hover:border-accent/50"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <Label htmlFor="projectType" className="text-sm font-medium text-foreground mb-2 block">
                      Project Type *
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent hover:border-accent/50"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium text-foreground mb-2 block">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent hover:border-accent/50"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium text-foreground mb-2 block">
                        Timeline
                      </Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent hover:border-accent/50"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project goals, challenges, and any specific requirements..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 hover:border-accent/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 transition-all duration-300 hover:scale-105 group magnetic-button relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto hover-lift">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-heading font-black text-primary">Prefer to Schedule a Call?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free 30-minute strategy session to discuss your project in detail and get expert recommendations.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent magnetic-button"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
