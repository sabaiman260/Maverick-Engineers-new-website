"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-secondary/10 border-y border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "animate-fadeInLeft" : ""}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-4">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pioneering Excellence in Electrical Engineering
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              With over 15 years of industry experience, Maverick Engineers has established itself as a trusted leader
              in premium electrical products and services. Our commitment to innovation, quality, and customer
              satisfaction drives everything we do.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Quality Assured</h4>
                  <p className="text-foreground/60 text-sm">
                    Every product and service meets rigorous international standards
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Expert Team</h4>
                  <p className="text-foreground/60 text-sm">
                    50+ certified engineers with specialized expertise and training
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Innovation First</h4>
                  <p className="text-foreground/60 text-sm">
                    Constantly advancing with latest technologies and best practices
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-8 py-4 bg-primary text-background rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover-glow">
              Learn Our Story
            </button>
          </div>

          {/* Right Image */}
          <div className={`${isVisible ? "animate-fadeInRight" : ""}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                <img src="/professional-engineering-team-working-on-electrica.jpg" alt="Maverick Engineers Team" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
