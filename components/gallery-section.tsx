"use client";

import { SectionHeading } from "./section-heading";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images/completed_project_1.jpeg",
    alt: "Completed AK Tower frontage",
    category: "Completed",
  },
  {
    src: "/images/completed_project_2.jpeg",
    alt: "Completed villa facade",
    category: "Completed",
  },
  {
    src: "/images/completed_project_3.jpeg",
    alt: "Delivered apartment interiors",
    category: "Completed",
  },
  {
    src: "/images/upcoming_project_1.jpeg",
    alt: "Upcoming Skyview Residences tower",
    category: "Upcoming",
  },
  {
    src: "/images/upcoming_project_2.jpeg",
    alt: "Upcoming courtyard block",
    category: "Upcoming",
  },
  {
    src: "/images/upcoming_project_3.jpeg",
    alt: "Upcoming elevations at Durga City Centre",
    category: "Upcoming",
  },
  {
    src: "/images/upcoming_project_4.png",
    alt: "Upcoming villa cluster render",
    category: "Upcoming",
  },
  {
    src: "/images/upcoming_project_6.jpg",
    alt: "Upcoming lakeside residence",
    category: "Upcoming",
  },
  {
    src: "/images/upcoming_project_7.jpg",
    alt: "Upcoming hill view apartments",
    category: "Upcoming",
  },
  {
    src: "/images/upcomign_project_5.jpg",
    alt: "Upcoming clubhouse perspective",
    category: "Upcoming",
  },
  {
    src: "/images/layout.png",
    alt: "Master layout plan",
    category: "Planning",
  },
];

const categories = ["All", "Completed", "Upcoming", "Planning"];

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
          description="Experience the craft and practical detailing inside every AK Real Estate villa and flat in Haldwani."
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
