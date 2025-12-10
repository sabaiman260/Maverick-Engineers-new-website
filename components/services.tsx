"use client"

import { useEffect, useRef, useState } from "react"

const servicesList = [
  {
    id: 1,
    title: "Security System Installation",
    description: "State-of-the-art security systems with 24/7 monitoring and advanced threat detection.",
    icon: "🔒",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    title: "Solar System Installation",
    description: "Sustainable solar energy solutions for residential and commercial properties.",
    icon: "☀️",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    id: 3,
    title: "Domestic & Industrial Wiring",
    description: "Professional electrical wiring services meeting international standards and codes.",
    icon: "⚡",
    color: "from-orange-600 to-orange-400",
  },
  {
    id: 4,
    title: "Generator Sales & Services",
    description: "Premium backup power solutions with maintenance and support services.",
    icon: "🔌",
    color: "from-red-600 to-red-400",
  },
  {
    id: 5,
    title: "Telecom Equipment Installation",
    description: "Complete telecom infrastructure setup and optimization services.",
    icon: "📡",
    color: "from-purple-600 to-purple-400",
  },
  {
    id: 6,
    title: "Smart Home Services",
    description: "Integrate IoT technology for intelligent home automation and control.",
    icon: "🏠",
    color: "from-green-600 to-green-400",
  },
  {
    id: 7,
    title: "Power Factor Panels",
    description: "Energy-efficient power factor correction panels for optimal performance.",
    icon: "⚙️",
    color: "from-cyan-600 to-cyan-400",
  },
  {
    id: 8,
    title: "Cooling Systems",
    description: "Advanced HVAC and cooling solutions for comfort and efficiency.",
    icon: "❄️",
    color: "from-blue-400 to-blue-200",
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={containerRef} className="relative w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-4">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Premium Services & Solutions</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive electrical and engineering services tailored to meet your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`luxury-card p-6 bg-card rounded-xl border border-primary/20 cursor-pointer transform transition-all duration-500 ${
                isVisible ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Learn More */}
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group">
                <span>Learn More</span>
                <span className="transform transition-transform group-hover:translate-x-2">→</span>
              </div>

              {/* Hover effect */}
              {hoveredId === service.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl -z-10 blur" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-16 border-t border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">E-Commerce Lighting Solutions</h3>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto mb-8">
            Explore our premium collection of professional lighting solutions and electrical products through our
            integrated e-commerce platform with nationwide delivery.
          </p>
          <button className="px-8 py-3 bg-primary/20 text-primary rounded-lg font-semibold border border-primary/50 hover:bg-primary hover:text-background transition-all duration-300">
            Browse Catalog
          </button>
        </div>
      </div>
    </section>
  )
}
