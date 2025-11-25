import { SectionHeading } from "./section-heading";
import { Award, Users, Home, Globe } from "lucide-react";

const stats = [
  { icon: Award, value: "30+", label: "Years of Excellence" },
  { icon: Users, value: "5000+", label: "Happy Families" },
  { icon: Home, value: "150+", label: "Projects Delivered" },
  { icon: Globe, value: "25+", label: "Cities Worldwide" },
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
              At LuxeLiving, we believe that a home is more than just four walls
              and a roof. It&apos;s where memories are made, dreams are
              nurtured, and life unfolds in its most beautiful moments.
            </p>
            <p className="text-neutral-600 leading-[1.8] mb-12 text-base">
              Our commitment to excellence has made us a trusted name in premium
              real estate, with a portfolio spanning across continents and a
              legacy built on integrity, innovation, and impeccable
              craftsmanship.
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
                &quot;Building dreams into reality, one home at a time.&quot;
              </p>
              <p className="text-[13px] text-neutral-500 mt-5 tracking-wide">
                — The LuxeLiving Promise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
