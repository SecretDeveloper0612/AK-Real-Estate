"use client";

import { SectionHeading } from "./section-heading";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    alt: "Luxury living room",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern kitchen",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    alt: "Master bedroom",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
    alt: "Home exterior",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    alt: "Infinity pool",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1974&auto=format&fit=crop",
    alt: "Garden area",
    category: "Exterior",
  },
];

const categories = ["All", "Interior", "Exterior"];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-36 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeading
          label="Gallery"
          title="A Glimpse Into Luxury"
          description="Experience the artistry and attention to detail that defines every LuxeLiving property."
          light
        />

        <div className="flex justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-neutral-900"
                  : "bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-xl"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-serif">{image.alt}</p>
                  <p className="text-neutral-400 text-[13px] mt-1">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
