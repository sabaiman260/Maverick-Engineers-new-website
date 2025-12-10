"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        const elements = containerRef.current.querySelectorAll("[data-float]")
        elements.forEach((el) => {
          const moveX = (x - 0.5) * 10
          const moveY = (y - 0.5) * 10
          ;(el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-background overflow-hidden pt-20 flex items-center justify-center"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" data-float />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" data-float />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-block mb-6 animate-fadeInDown">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
            Premium Electrical Solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fadeInUp text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Power Your Vision with
          <span className="block text-primary">Maverick Engineers</span>
        </h1>

        {/* Description */}
        <p className="animate-fadeInUp text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Delivering world-class electrical products and services with cutting-edge technology, professional expertise,
          and luxury craftsmanship since day one.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover-glow w-full sm:w-auto">
            Explore Services
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="animate-fadeInUp grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-primary/10"
        >
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <p className="text-sm text-foreground/60">Projects Delivered</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              99%
            </div>
            <p className="text-sm text-foreground/60">Client Satisfaction</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <p className="text-sm text-foreground/60">Years Experience</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <p className="text-sm text-foreground/60">Expert Engineers</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
