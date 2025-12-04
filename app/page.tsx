import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AK Real Estate",
    image: "https://akrealestatehaldwani.com/images/og-image.jpg",
    "@id": "https://akrealestatehaldwani.com",
    url: "https://akrealestatehaldwani.com",
    telephone: "+919837067289",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AK Tower, Durga City Centre",
      addressLocality: "Haldwani",
      postalCode: "263139",
      addressCountry: "IN",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
