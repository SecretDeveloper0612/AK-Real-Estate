import { InnerNavbar } from "@/components/inner-navbar";
import { PageHero } from "@/components/page-hero";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowUpRight,
  Award,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "15,000+", label: "Happy Families" },
  { value: "25+", label: "Cities Presence" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue perfection in every detail, from architectural design to the final finishing touches.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your vision drives our work. We listen, understand, and deliver beyond expectations.",
  },
  {
    icon: Building2,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and sustainable practices to build for the future.",
  },
  {
    icon: TrendingUp,
    title: "Integrity",
    description:
      "Transparent dealings, honest communication, and unwavering commitment to our promises.",
  },
];

const milestones = [
  {
    year: "1994",
    title: "Founded",
    description:
      "LuxeLiving was established with a vision to transform real estate",
  },
  {
    year: "2002",
    title: "First Landmark",
    description: "Completed our first luxury high-rise in Mumbai",
  },
  {
    year: "2010",
    title: "National Expansion",
    description: "Expanded operations to 10 major cities across India",
  },
  {
    year: "2015",
    title: "10,000 Homes",
    description: "Milestone of delivering 10,000 premium homes",
  },
  {
    year: "2020",
    title: "Sustainability Focus",
    description: "Launched green building initiative across all projects",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description:
      "Awarded Best Luxury Developer at International Real Estate Awards",
  },
];

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Priya Mehta",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Vikram Singh",
    role: "Chief Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Ananya Rao",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <InnerNavbar />

      <PageHero
        label="Our Story"
        title="Building Dreams Since 1994"
        description="For over three decades, we've been crafting exceptional living spaces that blend timeless elegance with modern comfort."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Stats Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[13px] text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-5 block font-medium">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-[1.1] mb-8">
                A Legacy of Excellence in Real Estate
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Founded in 1994 by Rajesh Sharma, LuxeLiving began with a
                  simple yet profound vision: to create homes that people
                  genuinely want to live in. What started as a small family
                  business in Mumbai has grown into one of India&apos;s most
                  respected real estate developers.
                </p>
                <p>
                  Our journey has been defined by an unwavering commitment to
                  quality, innovation, and customer satisfaction. Every project
                  we undertake is a testament to our belief that a home should
                  be more than just a structure—it should be a sanctuary that
                  enhances the quality of life.
                </p>
                <p>
                  Today, with over 500 projects across 25 cities and more than
                  15,000 happy families, we continue to push the boundaries of
                  what&apos;s possible in residential development, embracing
                  sustainable practices and cutting-edge design.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/5 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="LuxeLiving headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-neutral-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-serif font-medium text-white">
                    30+
                  </div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider mt-1">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 lg:py-36 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Our Values"
            title="The Principles That Guide Us"
            description="These core values form the foundation of everything we do, from design to delivery."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl border border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-500">
                  <value.icon
                    className="w-6 h-6 text-neutral-700 group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-serif font-medium text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-500 text-[15px] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Milestones"
            title="Our Journey Through the Years"
            description="Key moments that have shaped our path to becoming a leader in luxury real estate."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative lg:flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-2xl border border-neutral-200/60 hover:shadow-lg transition-shadow duration-300">
                      <span className="text-3xl font-serif font-medium text-neutral-900">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-medium text-neutral-800 mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-500 text-[15px]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-900 border-4 border-white shadow-md hidden lg:block" />

                  {/* Spacer */}
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 lg:py-36 bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Leadership"
            title="Meet Our Team"
            description="The visionaries behind LuxeLiving's success and commitment to excellence."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-3/4 rounded-2xl overflow-hidden mb-6 bg-neutral-900">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif font-medium text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-neutral-500 text-[14px]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    alt="Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
                    alt="Kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
                    alt="Bedroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                    alt="Bathroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-5 block font-medium">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-[1.1] mb-8">
                The LuxeLiving Difference
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                When you choose LuxeLiving, you&apos;re not just buying a
                property—you&apos;re investing in a lifestyle crafted with care,
                expertise, and an unwavering commitment to quality.
              </p>

              <ul className="space-y-4">
                {[
                  "Premium locations handpicked for growth potential",
                  "World-class architects and interior designers",
                  "Sustainable and eco-friendly construction",
                  "Transparent pricing with no hidden costs",
                  "Post-possession support and maintenance",
                  "Flexible payment plans with HDFC partnership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-neutral-900 text-white rounded-full text-[14px] font-medium hover:bg-neutral-800 transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
