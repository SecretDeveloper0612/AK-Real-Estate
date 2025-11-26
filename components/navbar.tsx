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
          <Image src="/logo.png" alt="LuxeLiving Logo" width={48} height={48} />
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-neutral-950 flex flex-col pt-24 px-6 pb-8 animate-fade-in">
          <nav className="flex flex-col gap-6 items-center justify-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl md:text-3xl text-white hover:text-neutral-400 transition-colors font-serif font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-8 bg-white text-neutral-900 hover:bg-neutral-200 rounded-full px-8 py-6 text-lg w-full max-w-xs"
            >
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

