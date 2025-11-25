import { SectionHeading } from "./section-heading"
import { PenTool, Building2, Handshake, KeyRound, Ruler, Paintbrush } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Architectural Design",
    description: "Custom home designs that blend aesthetics with functionality, tailored to your lifestyle.",
  },
  {
    icon: Building2,
    title: "Construction Excellence",
    description: "Premium construction with finest materials and skilled craftsmen ensuring lasting quality.",
  },
  {
    icon: Ruler,
    title: "Interior Planning",
    description: "Thoughtfully designed interiors that maximize space and create harmonious living environments.",
  },
  {
    icon: Paintbrush,
    title: "Custom Finishes",
    description: "Bespoke finishing options from flooring to fixtures, reflecting your personal style.",
  },
  {
    icon: Handshake,
    title: "Investment Advisory",
    description: "Expert guidance on property investment with market insights and portfolio management.",
  },
  {
    icon: KeyRound,
    title: "Property Management",
    description: "Comprehensive property management services ensuring your investment is well-maintained.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-36 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Real Estate Solutions"
          description="From concept to completion, we offer end-to-end services to transform your vision into reality."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-neutral-50/80 rounded-xl border border-transparent hover:bg-neutral-900 hover:border-neutral-800 transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <service.icon
                className="w-9 h-9 text-neutral-400 group-hover:text-neutral-400 mb-7 transition-colors duration-500"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-serif font-medium text-neutral-900 group-hover:text-white mb-3 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-neutral-500 group-hover:text-neutral-400 leading-relaxed transition-colors duration-500 text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
