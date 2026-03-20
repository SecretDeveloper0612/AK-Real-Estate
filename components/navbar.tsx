"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

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
      className={`absolute top-0 left-0 right-0 transition-all duration-500 ease-out ${
        isMobileMenuOpen
          ? "bg-neutral-950 z-[70] py-4"
          : isScrolled
          ? "bg-neutral-950/90 backdrop-blur-xl py-4 shadow-2xl shadow-neutral-950/10 z-50"
          : "bg-transparent py-6 z-50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-white tracking-tight hover:opacity-80 transition-opacity duration-300"
        >
          <Image src="/logo.png" alt="AK Real Estate Logo" width={100} height={100} className="object-contain" />
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

        {/* Mobile Menu (Using Sheet for better reliability) */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-lg transition-colors text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-[#050505] border-none p-0 flex flex-col z-[100]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access our site navigation links, contact details, and office location.
              </SheetDescription>
              <div className="flex flex-col h-full bg-noise">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#050505]">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image src="/logo.png" alt="AK Real Estate Logo" width={80} height={80} className="brightness-110 object-contain" />
                  </Link>
                  <SheetClose className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300 active:scale-95">
                    <X size={24} />
                  </SheetClose>
                </div>

                <div className="flex flex-col px-8 py-10 flex-grow overflow-y-auto">
                  <nav className="flex flex-col gap-5 items-start">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 mb-2 font-bold opacity-80">Navigate</span>
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-4xl font-serif font-light text-white hover:text-amber-200 transition-all duration-500 transform ${
                          isMobileMenuOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-12 opacity-0"
                        }`}
                        style={{ 
                          transitionDelay: `${index * 70 + 200}ms`,
                          transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)"
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="inline-block mr-4 text-xs font-sans italic text-neutral-600">0{index + 1}</span>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className={`mt-16 space-y-12 transition-all duration-1000 delay-500 transform ${
                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}>
                    <div className="p-1 rounded-full bg-linear-to-r from-amber-500/20 to-transparent">
                      <Button
                        asChild
                        className="w-full bg-white text-neutral-950 hover:bg-neutral-200 rounded-full py-7 text-base font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-white/5"
                      >
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                          Schedule a Tour
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-10">
                      <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">Inquiries</p>
                        <div className="flex flex-col gap-3">
                          <a href="tel:9837067289" className="text-white text-2xl font-light hover:text-amber-200 transition-colors tracking-tight flex items-center gap-3">
                            <span className="w-8 h-px bg-white/10" />
                            +91 98370 67289
                          </a>
                          <a href="mailto:anil2494@gmail.com" className="text-neutral-400 text-lg font-light hover:text-white transition-colors flex items-center gap-3">
                            <span className="w-8 h-px bg-white/10" />
                            anil2494@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">Location</p>
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-px bg-white/10 mt-3" />
                          <p className="text-neutral-400 font-light leading-relaxed text-lg">
                            Main Road, Haldwani <br />
                            Nainital, Uttarakhand
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Footer of menu */}
                <div className="p-8 border-t border-white/5 bg-[#050505]">
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-600 text-[9px] tracking-[0.2em] font-medium uppercase">
                      © 2024 AK Real Estate
                    </p>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[9px] text-neutral-500 tracking-wider uppercase font-semibold">Limited Availability</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
