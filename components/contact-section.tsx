"use client"

import type React from "react"

import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@luxeliving.com",
    href: "mailto:hello@luxeliving.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Luxury Lane, Beverly Hills, CA 90210",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9AM - 6PM",
    href: "#",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Contact Us"
          title="Let's Start a Conversation"
          description="Have questions or ready to explore your options? Our team is here to help."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-neutral-50/80 p-8 md:p-10 rounded-2xl">
            <h3 className="text-xl font-serif font-medium text-neutral-900 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] text-neutral-600 mb-2 block font-medium">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-neutral-200 focus:border-neutral-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <label className="text-[13px] text-neutral-600 mb-2 block font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-neutral-200 focus:border-neutral-400 rounded-lg h-12"
                  />
                </div>
              </div>
              <div>
                <label className="text-[13px] text-neutral-600 mb-2 block font-medium">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-neutral-200 focus:border-neutral-400 rounded-lg h-12"
                />
              </div>
              <div>
                <label className="text-[13px] text-neutral-600 mb-2 block font-medium">Message</label>
                <Textarea
                  placeholder="Tell us about your dream home..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-neutral-200 focus:border-neutral-400 resize-none rounded-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-neutral-900 text-white hover:bg-neutral-800 rounded-full text-sm font-medium tracking-wide"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-serif font-medium text-neutral-900 mb-6">Get in Touch</h3>
            <p className="text-neutral-500 leading-relaxed mb-10 text-[15px]">
              Whether you&apos;re looking to buy, sell, or simply explore the possibilities, we&apos;re here to make
              your real estate journey exceptional.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[12px] text-neutral-400 mb-0.5 uppercase tracking-wider font-medium">
                      {item.label}
                    </div>
                    <div className="text-neutral-900 group-hover:text-neutral-600 transition-colors text-[15px]">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 aspect-video rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60">
              <img src="/minimal-google-maps-style-map-beverly-hills.jpg" alt="Location map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
