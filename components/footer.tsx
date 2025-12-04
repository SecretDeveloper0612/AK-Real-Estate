import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const footerLinks = {
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Contact", href: "/contact" },
  ],
  properties: [
    { label: "Family Villas", href: "/properties" },
    { label: "City Flats", href: "/properties" },
    { label: "Under-Construction", href: "/properties" },
    { label: "Ready-to-Move", href: "/properties" },
  ],
};

const contactInfo = {
  address: "AK Tower, Durga City Centre, Haldwani 263139",
  phones: "98370 67289 / 97195 49415",
  landline: "05946 293888",
  email: "anil2494@gmail.com",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-3xl font-serif font-bold tracking-tight text-white"
            >
              AK Real Estate
            </Link>
            <p className="text-neutral-400 mt-6 leading-relaxed max-w-xs text-[15px] font-light">
              Since 2003 we have been designing villas and flats exclusively in
              Haldwani, helping more than 400 families settle into dependable
              homes.
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

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-medium mb-6 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.nav.map((link) => (
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

          {/* Properties */}
          <div className="lg:col-span-2">
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

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-medium mb-6 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Contact Us
            </h4>
            <ul className="space-y-4 text-neutral-400 text-[14px] font-light tracking-wide">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-500 shrink-0" />
                <span>{contactInfo.phones}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-500 shrink-0" />
                <span>Landline: {contactInfo.landline}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-500 shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-neutral-500 shrink-0" />
                <span>Daily: 9AM – 1PM & 4PM – 7PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-neutral-500 font-light tracking-wide">
            <p>
              &copy; {new Date().getFullYear()} AK Real Estate. All rights reserved.
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
