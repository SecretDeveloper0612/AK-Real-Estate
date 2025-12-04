import { SectionHeading } from "./section-heading";
import { Award, Users, Home, Globe } from "lucide-react";

const stats = [
  { icon: Award, value: "22+", label: "Years in Service" },
  { icon: Home, value: "250+", label: "Delivered Projects" },
  { icon: Users, value: "400+", label: "Families Settled" },
  { icon: Globe, value: "Haldwani", label: "City We Serve" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-36 bg-neutral-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionHeading
              label="About Us"
              title="Crafting Homes With Passion & Precision"
              align="left"
            />
            <p className="text-neutral-600 leading-[1.8] mb-6 text-base">
              AK Real Estate was born in 2003 when Anil Singh decided families
              in Haldwani deserved thoughtfully planned homes built with care.
              Two decades later we still design every villa and flat around the
              routines, festivals, and milestones of the people who live in
              them.
            </p>
            <p className="text-neutral-600 leading-[1.8] mb-12 text-base">
              We have now completed more than 250 projects and handed over keys
              to 400+ families, all within the city we call home. Our team
              remains focused on dependable construction, clear communication,
              and delivering homes you are proud to show your children.
            </p>

            <div className="grid grid-cols-2 gap-5 animate-fade-up-delay-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 md:p-7 bg-white rounded-xl border border-neutral-200/80 group hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-500"
                >
                  <stat.icon
                    className="w-7 h-7 text-neutral-300 mb-5 group-hover:text-neutral-900 transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                  <div className="text-3xl font-serif font-semibold text-neutral-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-neutral-500 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up-delay-2">
            <div className="aspect-square md:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-neutral-300/30">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Luxury home interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-neutral-900 text-white p-8 rounded-xl max-w-[280px] hidden lg:block shadow-2xl">
              <p className="text-lg font-serif italic leading-relaxed text-neutral-200">
                &quot;Every plan starts with a family conversation, never a
                sales target.&quot;
              </p>
              <p className="text-[13px] text-neutral-500 mt-5 tracking-wide">
                — Anil Singh, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
