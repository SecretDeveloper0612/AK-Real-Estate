"use client";

import type React from "react";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail, Clock, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "AK Tower, Durga City Centre",
      "Haldwani, Uttarakhand 263139",
      "India",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "Mobile: 98370 67289",
      "Mobile: 97195 49415",
      "Landline: 05946 293888",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "anil2494@gmail.com",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "All days: 9AM – 1PM",
      "Evening: 4PM – 7PM",
      "Site visits by appointment",
    ],
  },
];

const offices = [
  {
    city: "Haldwani",
    address: "AK Tower, Durga City Centre",
    phone: "98370 67289",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyInterest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        label="Contact AK Real Estate"
        title="Visit Our AK Tower Office"
        description="Call or meet us in Durga City Centre any day between 9AM-1PM or 4PM-7PM. We handle every inquiry directly from Haldwani."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80"
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6">
                  <info.icon
                    className="w-5 h-5 text-neutral-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-medium text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-neutral-500 text-[14px]">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-5 block font-medium">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 leading-[1.1] mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-neutral-500 mb-10 leading-relaxed">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-medium text-neutral-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all placeholder:text-neutral-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-medium text-neutral-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all placeholder:text-neutral-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[13px] font-medium text-neutral-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all placeholder:text-neutral-400"
                      placeholder="98370 00000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-[13px] font-medium text-neutral-700 mb-2"
                    >
                      Property Interest
                    </label>
                    <select
                      id="interest"
                      value={formData.propertyInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyInterest: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all text-neutral-700"
                    >
                      <option value="">Select an option</option>
                      <option value="villa">Villa</option>
                      <option value="apartment">Apartment</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[13px] font-medium text-neutral-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all placeholder:text-neutral-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-neutral-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all resize-none placeholder:text-neutral-400"
                    placeholder="Tell us more about what you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto px-10 py-6 bg-neutral-900 text-white rounded-full text-[14px] font-medium hover:bg-neutral-800 transition-all duration-300 h-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Offices */}
            <div>
              {/* Map Placeholder */}
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100 mb-10">
                <img
                  src="https://images.unsplash.com/photo-1560184897-6b9a7c2f7c66?auto=format&fit=crop&w=1200&q=80"
                  alt="AK Tower exterior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offices List */}
              <div>
                <h3 className="text-xl font-serif font-medium text-neutral-900 mb-6">
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="flex items-center justify-between p-5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100/50 transition-all duration-300 group"
                    >
                      <div>
                        <h4 className="font-medium text-neutral-900 mb-1">
                          {office.city}
                        </h4>
                        <p className="text-[13px] text-neutral-500">
                          {office.address}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[13px] text-neutral-600">
                          {office.phone}
                        </p>
                        <a
                          href="https://maps.app.goo.gl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1 ml-auto mt-1"
                        >
                          Get Directions
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-6 block font-medium">
            Site Visits & Paperwork Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.1] mb-6 max-w-2xl mx-auto">
            Speak Directly with Anil Singh&apos;s Team
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Call between 9AM-1PM or 4PM-7PM for availability, pricing, and
            same-day walkthroughs at AK Tower, Durga City Centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9837067289"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-full text-[14px] font-medium hover:bg-neutral-100 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call 98370 67289
            </a>
            <a
              href="mailto:anil2494@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-700 text-white rounded-full text-[14px] font-medium hover:bg-white hover:text-neutral-900 hover:border-white transition-all duration-300"
            >
              Email anil2494@gmail.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
