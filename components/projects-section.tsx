import { SectionHeading } from "./section-heading";
import { PropertyCard } from "./property-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getHomeProperties } from "@/lib/properties-data";
import Link from "next/link";

export async function ProjectsSection() {
  const featuredProperties = await getHomeProperties();
  const hasFeatured = featuredProperties.length > 0;

  return (
    <section id="projects" className="py-16 md:py-36 bg-neutral-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeading
          label="Featured Haldwani Projects"
          title="Exceptional Homes Await"
          description="From AK Tower flats to villa communities near Kathgodam, every plan is tailored for local families."
        />

        {hasFeatured ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                status={property.status}
                image={property.image}
                slug={property.slug}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white/70 p-10 text-center text-neutral-500 text-sm">
            No properties are currently highlighted for the home page. Toggle
            "Show on Home" in Hygraph to feature a project here.
          </div>
        )}

        <div className="text-center mt-14">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 bg-transparent rounded-full px-8 text-sm font-medium tracking-wide"
          >
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
