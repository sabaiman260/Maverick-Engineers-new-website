"use client"

import { useState } from "react"
import Link from "next/link"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-lg">ME</span>
          </div>
          <span className="text-xl font-bold gold-text hidden sm:inline">Maverick Engineers</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover-glow">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:bg-secondary rounded-lg transition-colors"
        >
          <div
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <div
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20 animate-fadeInDown">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-2 px-6 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
