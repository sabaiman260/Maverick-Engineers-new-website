"use client"

import { useEffect, useRef, useState } from "react"

interface StatItem {
  number: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successful installations across residential and commercial sectors",
  },
  {
    number: "99%",
    label: "Satisfaction Rate",
    description: "Consistently exceeding client expectations and quality standards",
  },
  {
    number: "15+",
    label: "Years of Excellence",
    description: "Serving the industry with innovation and reliability",
  },
  {
    number: "50+",
    label: "Expert Engineers",
    description: "Certified professionals with diverse specializations",
  },
]

export default function Statistics() {
  const [counts, setCounts] = useState<{ [key: number]: number }>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true

          stats.forEach((stat, index) => {
            const target = Number.parseInt(stat.number.replace(/\D/g, ""))
            let current = 0
            const increment = Math.ceil(target / 50)

            const interval = setInterval(() => {
              current += increment
              if (current >= target) {
                setCounts((prev) => ({ ...prev, [index]: target }))
                clearInterval(interval)
              } else {
                setCounts((prev) => ({ ...prev, [index]: current }))
              }
            }, 30)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative w-full py-20 md:py-32 bg-secondary/20 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our track record speaks for itself with consistent excellence and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                {counts[index] ? `${counts[index]}` : "0"}
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>

              {/* Description */}
              <p className="text-foreground/60 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
