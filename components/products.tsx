"use client"

import { useState, useEffect, useRef } from "react"

const products = [
  {
    id: 1,
    name: "Premium LED Lighting Systems",
    category: "Lighting Solutions",
    price: "From $299",
    image: "/premium-led-lighting-system-installation.jpg",
    features: ["Energy Efficient", "Smart Control", "Long Lifespan"],
  },
  {
    id: 2,
    name: "Security Camera Systems",
    category: "Security Equipment",
    price: "From $499",
    image: "/professional-security-camera-system.jpg",
    features: ["4K Resolution", "Night Vision", "24/7 Monitoring"],
  },
  {
    id: 3,
    name: "Solar Panel Kits",
    category: "Renewable Energy",
    price: "From $1,999",
    image: "/solar-panel-installation-kit.jpg",
    features: ["High Efficiency", "Weather Resistant", "25-Year Warranty"],
  },
  {
    id: 4,
    name: "Industrial Power Panels",
    category: "Electrical Equipment",
    price: "From $1,299",
    image: "/industrial-power-factor-panel.jpg",
    features: ["Energy Saving", "Professional Grade", "Certified"],
  },
  {
    id: 5,
    name: "Smart Home Hub",
    category: "Home Automation",
    price: "From $399",
    image: "/smart-home-automation.png",
    features: ["Voice Control", "IoT Integration", "Mobile App"],
  },
  {
    id: 6,
    name: "Backup Power Generator",
    category: "Generators",
    price: "From $799",
    image: "/backup-power-generator-system.jpg",
    features: ["Silent Operation", "Fuel Efficient", "Portable"],
  },
]

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section id="products" ref={containerRef} className="relative w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-4">
            PRODUCT CATALOG
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Premium Products & Solutions</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our curated selection of professional-grade electrical and smart home products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group luxury-card rounded-xl overflow-hidden bg-card border border-primary/20 ${
                isVisible ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex items-center justify-center animate-fadeIn">
                    <button className="px-6 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all">
                      View Details
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{product.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{product.name}</h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-primary/10">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <button className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-background transition-all duration-300 group-hover:scale-110">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* E-Commerce Link */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover-glow">
            Browse Full E-Commerce Store
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
