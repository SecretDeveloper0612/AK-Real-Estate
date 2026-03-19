import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getProperties,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/properties-data";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  ArrowUpRight,
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { PropertyGallery } from "@/components/property-gallery";

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.title} | AK Real Estate`,
    description: property.description,
    openGraph: {
      title: `${property.title} | AK Real Estate`,
      description: property.description,
      images: property.images.map((img) => ({ url: img })),
      type: "website",
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = await getRelatedProperties(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    image: property.images,
    url: `https://akrealestatehaldwani.com/properties/${property.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.location,
    },
    numberOfRooms: property.beds,
    numberOfBathroomsTotal: property.baths,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.sqftValue,
      unitCode: "FTK",
    },
    price: property.priceValue,
    priceCurrency: "INR",
  };

  const statusConfig = {
    available: {
      label: "Available",
      className: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    sold: {
      label: "Sold",
      className: "bg-neutral-100 text-neutral-600 border border-neutral-200",
    },
    "coming-soon": {
      label: "Coming Soon",
      className: "bg-amber-50 text-amber-700 border border-amber-200",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Gallery */}
      <section className="pt-24">
        <PropertyGallery images={property.images} title={property.title} />
      </section>

      {/* Property Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Properties
              </Link>

              {/* Header */}
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium ${
                    statusConfig[property.status].className
                  }`}
                >
                  {statusConfig[property.status].label}
                </span>
                <span className="px-4 py-1.5 rounded-full text-[12px] font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
                  {property.type.charAt(0).toUpperCase() +
                    property.type.slice(1)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-neutral-900 mb-4">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-neutral-500 mb-8">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-lg">{property.location}</span>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-neutral-50 rounded-2xl mb-10">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Bed
                      className="w-5 h-5 text-neutral-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-2xl font-serif font-medium text-neutral-900">
                      {property.beds}
                    </span>
                  </div>
                  <span className="text-[13px] text-neutral-500">Bedrooms</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Bath
                      className="w-5 h-5 text-neutral-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-2xl font-serif font-medium text-neutral-900">
                      {property.baths}
                    </span>
                  </div>
                  <span className="text-[13px] text-neutral-500">
                    Bathrooms
                  </span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Square
                      className="w-5 h-5 text-neutral-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-2xl font-serif font-medium text-neutral-900">
                      {property.sqftValue.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[13px] text-neutral-500">Sq. Ft.</span>
                </div>
                {property.parking && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Car
                        className="w-5 h-5 text-neutral-400"
                        strokeWidth={1.5}
                      />
                      <span className="text-2xl font-serif font-medium text-neutral-900">
                        {property.parking}
                      </span>
                    </div>
                    <span className="text-[13px] text-neutral-500">
                      Parking
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-xl font-serif font-medium text-neutral-900 mb-4">
                  About This Property
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Video Tour */}
              {property.videoUrl && (
                <div className="mb-10">
                  <h2 className="text-xl font-serif font-medium text-neutral-900 mb-4">
                    Video Tour
                  </h2>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                    <iframe
                      width="100%"
                      height="100%"
                      src={property.videoUrl}
                      title="Property Video Tour"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-10">
                <h2 className="text-xl font-serif font-medium text-neutral-900 mb-6">
                  Property Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-neutral-900"
                        strokeWidth={1.5}
                      />
                      <span className="text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h2 className="text-xl font-serif font-medium text-neutral-900 mb-6">
                  Building Amenities
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-neutral-400"
                        strokeWidth={1.5}
                      />
                      <span className="text-neutral-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Year Built */}
              {property.yearBuilt && (
                <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl">
                  <Calendar
                    className="w-5 h-5 text-neutral-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-neutral-600">
                    Built in{" "}
                    <span className="font-medium text-neutral-900">
                      {property.yearBuilt}
                    </span>
                  </span>
                </div>
              )}

              {/* Location Map */}
              <div className="mt-10">
                <h2 className="text-xl font-serif font-medium text-neutral-900 mb-6">
                  Location & Surroundings
                </h2>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm relative group">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      property.location + ", " + property.city
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-[14px] text-neutral-700 leading-relaxed">
                    This property is located in the premium <span className="font-semibold">{property.location}</span> area of {property.city}. 
                    It offers excellent connectivity to major landmarks and everyday essentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Price Card */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-8 mb-6 shadow-lg shadow-neutral-200/30">


                  <div className="space-y-3 mb-8">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-neutral-900 text-white rounded-full text-[14px] font-medium hover:bg-neutral-800 transition-all duration-300"
                    >
                      Schedule a Viewing
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:9837067289"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-transparent border border-neutral-200 text-neutral-900 rounded-full text-[14px] font-medium hover:bg-neutral-50 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call 98370 67289
                    </a>
                  </div>

                  <div className="pt-6 border-t border-neutral-100">
                    <h4 className="text-[13px] font-medium text-neutral-900 mb-4">
                      Property Consultant
                    </h4>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="AK Real Estate Desk"
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-neutral-900">
                          AK Real Estate Desk
                        </p>
                        <p className="text-[13px] text-neutral-500">
                          AK Tower, Durga City Centre
                        </p>
                      </div>
                    </div>
                    <a
                      href="mailto:anil2494@gmail.com"
                      className="flex items-center gap-2 mt-4 text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      anil2494@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Info Banner */}
                <div className="bg-neutral-950 rounded-2xl p-6 text-center">
                  <p className="text-[13px] text-neutral-400 mb-2">
                    Visit AK Tower Office
                  </p>
                  <p className="text-white font-medium mb-3">
                    Durga City Centre, Haldwani
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    Walk in daily between 9AM-1PM or 4PM-7PM for paperwork
                    support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      {relatedProperties.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-3 block font-medium">
                  Similar Properties
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-neutral-900">
                  You May Also Like
                </h2>
              </div>
              <Link
                href="/properties"
                className="hidden md:flex items-center gap-2 text-[13px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                View All Properties
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map((prop) => (
                <Link
                  key={prop.id}
                  href={`/properties/${prop.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={prop.image || "/placeholder.svg"}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-medium text-neutral-900 mb-2">
                      {prop.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-neutral-500 mb-4">
                      <MapPin className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-[13px]">{prop.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-neutral-500">
                        {prop.beds} Beds • {prop.sqft}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
