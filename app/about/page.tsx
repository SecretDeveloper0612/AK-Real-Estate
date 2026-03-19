import { Navbar } from "@/components/navbar";
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
  { value: "22+", label: "Years Serving Haldwani" },
  { value: "250+", label: "Completed Projects" },
  { value: "400+", label: "Families Rehoused" },
  { value: "1 City", label: "Always in Haldwani" },
];

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every villa and flat is supervised by our in-house engineers to ensure finishes stay strong for decades.",
  },
  {
    icon: Users,
    title: "Family-First Planning",
    description:
      "Floor plans prioritise ventilation, storage, and shared family areas so daily routines stay effortless.",
  },
  {
    icon: Building2,
    title: "Clear Communication",
    description:
      "From booking to handover we keep paperwork simple, timelines visible, and costs transparent.",
  },
  {
    icon: TrendingUp,
    title: "Local Commitment",
    description:
      "We only build in Haldwani, allowing us to stay close to every site and every customer.",
  },
];

const milestones = [
  {
    year: "2003",
    title: "Founding Vision",
    description:
      "Anil Singh starts AK Real Estate to design dependable homes for Haldwani families.",
  },
  {
    year: "2008",
    title: "First Villa Community",
    description:
      "Delivered a 40-villa gated neighbourhood that set our benchmark for open, airy plans.",
  },
  {
    year: "2012",
    title: "Flats Portfolio",
    description:
      "Introduced mid-rise flats near Durga City Centre so young families could stay close to workplaces.",
  },
  {
    year: "2020",
    title: "AK Tower",
    description:
      "Completed AK Tower at Durga City Centre, now home to our head office and premium residences.",
  },
  {
    year: "2024",
    title: "400 Families",
    description:
      "Celebrated 400th handover and reinforced our promise to keep building only in Haldwani.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        label="About AK Real Estate"
        title="Haldwani Homes Since 2003"
        description="For 22 years we have planned and delivered villas and flats exclusively for families living in and around Haldwani."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
        backgroundImage="/images/upcoming_project_3.jpeg"
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
                Two Decades of Homes in Haldwani
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Anil Singh started AK Real Estate in 2003 with one promise to
                  local families: deliver homes that feel personal, practical,
                  and ready for everyday life. From our very first plotted
                  houses to present-day towers, we have never stepped outside
                  Haldwani.
                </p>
                <p>
                  Our journey is defined by steady construction practices,
                  transparent paperwork, and layouts that respect Kumaoni
                  weather and traditions. We build villas with open courtyards
                  and apartments with smart ventilation so every family gets the
                  comfort they expect.
                </p>
                <p>
                  Having completed more than 250 projects for 400+ families, we
                  continue to grow with the city. Each new phase in Durga City
                  Centre or Kathgodam carries forward the same founding vision—
                  keep homes accessible, honest, and rooted in Haldwani.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/5 rounded-2xl overflow-hidden">
                <img
                  src="/images/whatsapp-20image-202025-11-25-20at-2011.jpeg"
                  alt="AK Tower exterior in Durga City Centre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-neutral-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-serif font-medium text-white">
                    22
                  </div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider mt-1">
                    Years in Haldwani
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

      {/* Why Choose Us */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="/images/upcoming_project_1.jpeg"
                    alt="Premium villa concept elevations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/upcoming_project_6.jpg"
                    alt="Upcoming project arrival court"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/upcoming_project_7.jpg"
                    alt="Upcoming hillside apartment cluster"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="/images/upcomign_project_5.jpg"
                    alt="Clubhouse concept render"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-5 block font-medium">
                Why Families Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-[1.1] mb-8">
                Built for Haldwani, by Haldwani
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Our entire team, material network, and customer support sit in
                the same city as every project we deliver. That closeness keeps
                commitments honest and handovers on time.
              </p>

              <ul className="space-y-4">
                {[
                  "Exclusive focus on Haldwani neighbourhoods and infrastructure",
                  "250+ completed villas and flats with reliable RCC construction",
                  "Daily site visits with project managers between 9AM-1PM & 4PM-7PM",
                  "Layouts planned for joint families with balconies, stores, and parking",
                  "Transparent agreements with milestone-based payment schedules",
                  "Dedicated maintenance desk located at AK Tower, Durga City Centre",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-neutral-900 mt-0.5 shrink-0"
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
