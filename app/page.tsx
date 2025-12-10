"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Statistics from "@/components/statistics"
import Products from "@/components/products"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative w-full overflow-hidden">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Statistics />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
