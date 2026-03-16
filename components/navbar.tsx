"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-xl py-4 shadow-2xl shadow-neutral-950/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-white tracking-tight hover:opacity-80 transition-opacity duration-300"
        >
          <Image src="/logo.png" alt="LuxeLiving Logo" width={70} height={70} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13px] text-neutral-300 hover:text-white transition-colors duration-300 tracking-[0.12em] uppercase font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 bg-transparent rounded-full px-6 text-[13px] tracking-wide font-medium"
          >
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-neutral-950 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex flex-col gap-8 items-start justify-center flex-grow">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-4xl font-serif font-medium text-white hover:text-neutral-400 transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className={`mt-12 transition-all duration-500 delay-500 transform ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <Button
              asChild
              className="w-full bg-white text-neutral-900 hover:bg-neutral-200 rounded-full py-7 text-lg font-medium"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Schedule a Tour
              </Link>
            </Button>
            
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col gap-4">
              <p className="text-neutral-500 text-sm tracking-widest uppercase">Contact</p>
              <a href="tel:9837067289" className="text-white text-lg">+91 98370 67289</a>
              <a href="mailto:anil2494@gmail.com" className="text-white text-lg">anil2494@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
