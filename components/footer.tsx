"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ["Security Systems", "Solar Installation", "Electrical Wiring", "Generators", "Telecom Equipment"],
    Company: ["About Us", "Blog", "Careers", "Press", "Partners"],
    Support: ["Contact Us", "FAQ", "Documentation", "Warranty", "Returns"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "License"],
  }

  return (
    <footer className="relative w-full bg-secondary/20 border-t border-primary/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">ME</span>
              </div>
              <span className="text-lg font-bold text-foreground">Maverick</span>
            </div>
            <p className="text-foreground/60 text-sm mb-6">
              Premium electrical solutions and engineering services for the modern world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-all"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-all"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-all"
              >
                tw
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">© {currentYear} Maverick Engineers. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover-glow shadow-lg"
      >
        ↑
      </button>
    </footer>
  )
}
