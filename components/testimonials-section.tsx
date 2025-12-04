import { SectionHeading } from "./section-heading";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    quote:
      "AK Real Estate planned our duplex exactly around our parents' routine. The team met us daily during the 4PM slot and delivered keys before Diwali.",
    author: "Sharma Family",
    role: "Residents, Nainital Road, Haldwani",
    image: "/professional-couple-portrait-smiling.jpg",
  },
  {
    quote:
      "Every document was explained in plain Hindi and the payment schedule stayed transparent. It felt like working with neighbours, not a distant builder.",
    author: "Nidhi & Saurabh",
    role: "Flat Owners, Durga City Centre",
    image: "/asian-businessman-professional-headshot.jpg",
  },
  {
    quote:
      "Their focus on ventilation and storage makes day-to-day living so easy. We moved in with our extended family and still have room for guests.",
    author: "Col. (Retd.) Rawat",
    role: "Villa Owner, Kathgodam",
    image: "/woman-designer-professional-portrait.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36 bg-neutral-100/50">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Families from across Haldwani share how AK Real Estate kept their home journey simple and dependable."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
