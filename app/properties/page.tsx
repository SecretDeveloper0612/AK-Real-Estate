"use client";

import { useState, useMemo } from "react";
import { InnerNavbar } from "@/components/inner-navbar";
import { PageHero } from "@/components/page-hero";
import { Footer } from "@/components/footer";
import { properties } from "@/lib/properties-data";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const propertyTypes = ["All", "Villa", "Apartment", "Penthouse", "Townhouse"];
const statusOptions = ["All", "Available", "Coming Soon", "Sold"];
const cities = [
  "All",
  "Mumbai",
  "Lonavala",
  "Udaipur",
  "Goa",
  "Gurugram",
  "Jaipur",
  "Shimla",
  "Bangalore",
];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "All" ||
        property.type.toLowerCase() === selectedType.toLowerCase();

      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Available" && property.status === "available") ||
        (selectedStatus === "Coming Soon" &&
          property.status === "coming-soon") ||
        (selectedStatus === "Sold" && property.status === "sold");

      const matchesCity =
        selectedCity === "All" || property.city === selectedCity;

      return matchesSearch && matchesType && matchesStatus && matchesCity;
    });
  }, [searchQuery, selectedType, selectedStatus, selectedCity]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedStatus("All");
    setSelectedCity("All");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedType !== "All" ||
    selectedStatus !== "All" ||
    selectedCity !== "All";

  const statusConfig = {
    available: {
      label: "Available",
      className: "bg-emerald-50 text-emerald-700 border border-emerald-200/50",
    },
    sold: {
      label: "Sold",
      className: "bg-neutral-100 text-neutral-600 border border-neutral-200/50",
    },
    "coming-soon": {
      label: "Coming Soon",
      className: "bg-amber-50 text-amber-700 border border-amber-200/50",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <InnerNavbar />

      <PageHero
        label="Our Portfolio"
        title="Discover Exceptional Properties"
        description="Explore our curated collection of luxury homes, from contemporary penthouses to serene hillside villas."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Filters Section */}
      <section className="py-8 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-xl z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by name, location, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-full text-[14px] focus:outline-none focus:border-neutral-400 focus:bg-white transition-all"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-full text-[13px] focus:outline-none focus:border-neutral-400 transition-all cursor-pointer"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Types" : type}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-full text-[13px] focus:outline-none focus:border-neutral-400 transition-all cursor-pointer"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === "All" ? "All Status" : status}
                  </option>
                ))}
              </select>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-full text-[13px] focus:outline-none focus:border-neutral-400 transition-all cursor-pointer"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "All" ? "All Cities" : city}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden rounded-full bg-transparent"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 w-5 h-5 bg-neutral-900 text-white rounded-full text-[11px] flex items-center justify-center">
                  !
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-neutral-50 rounded-2xl space-y-4 animate-fade-in">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-[14px]"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Types" : type}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-[14px]"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === "All" ? "All Status" : status}
                  </option>
                ))}
              </select>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-[14px]"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "All" ? "All Cities" : city}
                  </option>
                ))}
              </select>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-3 text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-10">
            <p className="text-[14px] text-neutral-500">
              Showing{" "}
              <span className="text-neutral-900 font-medium">
                {filteredProperties.length}
              </span>{" "}
              properties
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide ${
                          statusConfig[property.status].className
                        }`}
                      >
                        {statusConfig[property.status].label}
                      </span>
                      <span className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide bg-white/90 text-neutral-700 backdrop-blur-sm">
                        {property.type.charAt(0).toUpperCase() +
                          property.type.slice(1)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-serif font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">
                        {property.title}
                      </h3>
                      <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-neutral-500 mb-5">
                      <MapPin className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-[13px]">{property.location}</span>
                    </div>

                    <div className="flex items-center gap-5 text-[13px] text-neutral-500 mb-5 pb-5 border-b border-neutral-100">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4" strokeWidth={1.5} />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4" strokeWidth={1.5} />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Square className="w-4 h-4" strokeWidth={1.5} />
                        <span>{property.sqft}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-serif font-semibold text-neutral-900">
                        {property.price}
                      </span>
                      <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                        Starting Price
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-serif font-medium text-neutral-900 mb-2">
                No Properties Found
              </h3>
              <p className="text-neutral-500 mb-6">
                Try adjusting your filters or search criteria.
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="rounded-full bg-transparent"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Our property consultants can help you find exclusive off-market
            listings that match your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full text-[14px] font-medium hover:bg-neutral-800 transition-all duration-300 group"
          >
            Contact Our Team
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
