import { MapPin, Bed, Bath, Square, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "available" | "sold" | "coming-soon";
  slug?: string;
}

export function PropertyCard({
  image,
  title,
  location,
  beds,
  baths,
  sqft,
  status,
  slug,
}: PropertyCardProps) {
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
    <div className="group bg-white rounded-xl overflow-hidden border border-neutral-200/60 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-900/5 hover:-translate-y-1 transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide backdrop-blur-md ${statusConfig[status].className}`}
          >
            {statusConfig[status].label}
          </span>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-serif font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">
            {title}
          </h3>
          <Link
            href={slug ? `/properties/${slug}` : "#"}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300"
            aria-label={`View details for ${title}`}
          >
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
          </Link>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-500 mb-5">
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-[13px]">{location}</span>
        </div>

        <div className="flex items-center gap-5 text-[13px] text-neutral-500 pb-5 border-b border-neutral-100">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" strokeWidth={1.5} />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" strokeWidth={1.5} />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4" strokeWidth={1.5} />
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
