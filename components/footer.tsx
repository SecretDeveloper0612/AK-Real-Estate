import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  properties: [
    { label: "All Properties", href: "/properties" },
    { label: "Featured", href: "/properties" },
    { label: "New Listings", href: "/properties" },
    { label: "Virtual Tours", href: "#" },
  ],
  services: [
    { label: "Buy a Home", href: "/properties" },
    { label: "Sell a Home", href: "/contact" },
    { label: "Investment", href: "/contact" },
    { label: "Property Management", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Market Reports", href: "#" },
    { label: "Home Valuation", href: "#" },
    { label: "Mortgage Calculator", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="/"
              className="text-3xl font-serif font-bold tracking-tight text-white"
            >
              LuxeLiving
            </Link>
            <p className="text-neutral-400 mt-6 leading-relaxed max-w-xs text-[15px] font-light">
              Creating exceptional living spaces for over 30 years. Your dream
              home awaits in the world's most coveted locations.
            </p>
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-900/50 border border-neutral-800 flex items-center justify-center hover:bg-white hover:border-white hover:text-neutral-950 transition-all duration-300 group"
                >
                  <social.icon
                    className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 transition-colors"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-6 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-[14px] font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Properties
            </h4>
            <ul className="space-y-4">
              {footerLinks.properties.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-[14px] font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-[14px] font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-[14px] font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-neutral-900/30 p-6 md:p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
            <div>
              <h4 className="font-serif text-2xl mb-2 text-white">
                Stay Updated
              </h4>
              <p className="text-neutral-400 text-[14px] font-light">
                Subscribe to receive exclusive property listings and market
                insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-neutral-950 border border-neutral-800 rounded-full text-[14px] w-full md:w-80 focus:outline-none focus:border-neutral-600 placeholder:text-neutral-600 transition-colors text-white"
              />
              <button className="px-8 py-3 bg-white text-neutral-950 rounded-full text-[13px] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 tracking-wide uppercase w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-neutral-500 font-light tracking-wide">
            <p>
              &copy; {new Date().getFullYear()} LuxeLiving. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
