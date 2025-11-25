import { SectionHeading } from "./section-heading"
import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    quote:
      "LuxeLiving transformed our dream into reality. Their attention to detail and commitment to quality is unmatched. We couldn't be happier with our new home.",
    author: "Michael & Sarah Johnson",
    role: "Homeowners, Beverly Hills",
    image: "/professional-couple-portrait-smiling.jpg",
  },
  {
    quote:
      "The team's professionalism and expertise made the entire process seamless. They truly understand what luxury living means.",
    author: "David Chen",
    role: "Investment Property Owner",
    image: "/asian-businessman-professional-headshot.jpg",
  },
  {
    quote:
      "From the architectural design to the final finishing touches, every aspect exceeded our expectations. LuxeLiving sets the standard.",
    author: "Emily Rodriguez",
    role: "Interior Designer",
    image: "/woman-designer-professional-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36 bg-neutral-100/50">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Hear from the families and investors who have experienced the LuxeLiving difference."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
