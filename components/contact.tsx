"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" ref={containerRef} className="relative w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Discuss Your Project</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ready to power your vision? Contact our experts for a free consultation
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className={`${isVisible ? "animate-fadeInLeft" : ""}`}>
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover-glow">
                <div className="text-3xl mb-3">📞</div>
                <h4 className="text-lg font-bold text-foreground mb-1">Phone</h4>
                <p className="text-foreground/60">+1 (555) 123-4567</p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-primary/20 hover-glow">
                <div className="text-3xl mb-3">✉️</div>
                <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                <p className="text-foreground/60">contact@maverickengineers.com</p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-primary/20 hover-glow">
                <div className="text-3xl mb-3">📍</div>
                <h4 className="text-lg font-bold text-foreground mb-1">Location</h4>
                <p className="text-foreground/60">123 Engineering Plaza, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? "animate-fadeInRight" : ""}`}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="security">Security Systems</option>
                    <option value="solar">Solar Installation</option>
                    <option value="wiring">Electrical Wiring</option>
                    <option value="generator">Generator Services</option>
                    <option value="telecom">Telecom Equipment</option>
                    <option value="smart-home">Smart Home Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-8 px-6 py-4 bg-primary text-background rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover-glow"
              >
                {submitted ? "Message Sent Successfully! ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
