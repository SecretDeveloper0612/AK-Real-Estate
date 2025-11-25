"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/properties", label: "Properties" },
  { href: "/contact", label: "Contact" },
]

export function InnerNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-neutral-950/90 backdrop-blur-xl py-4 shadow-2xl shadow-neutral-950/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-white tracking-tight hover:opacity-80 transition-opacity duration-300"
        >
          LuxeLiving
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13px] text-neutral-400 hover:text-white transition-colors duration-300 tracking-[0.12em] uppercase font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            variant="outline"
            className="border-neutral-500/40 text-white hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 bg-transparent rounded-full px-6 text-[13px] tracking-wide font-medium"
          >
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-neutral-950/98 backdrop-blur-xl border-t border-neutral-800/50">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-neutral-400 hover:text-white transition-colors py-3 border-b border-neutral-800/50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-6 bg-white text-neutral-950 hover:bg-neutral-200 rounded-full">
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
