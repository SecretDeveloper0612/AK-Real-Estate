export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqft: string;
  sqftValue: number;
  status: "available" | "sold" | "coming-soon";
  type: "villa" | "apartment" | "penthouse" | "townhouse";
  image: string;
  images: string[];
  description: string;
  features: string[];
  amenities: string[];
  yearBuilt: number;
  parking: number;
  floorPlan?: string;
  videoUrl?: string;
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "skyline-penthouse-mumbai",
    title: "Skyline Penthouse",
    location: "Worli Sea Face, Mumbai",
    city: "Mumbai",
    price: "₹12.5 Cr",
    priceValue: 125000000,
    beds: 4,
    baths: 5,
    sqft: "4,500 sq ft",
    sqftValue: 4500,
    status: "available",
    type: "penthouse",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "An extraordinary penthouse offering unparalleled views of the Arabian Sea and Mumbai skyline. This residence features floor-to-ceiling windows, Italian marble flooring, and a private terrace with infinity pool.",
    features: [
      "Private elevator access",
      "Smart home automation",
      "Italian marble flooring",
      "Floor-to-ceiling windows",
      "Private infinity pool",
      "Wine cellar",
    ],
    amenities: [
      "24/7 Concierge",
      "Gymnasium",
      "Spa & Wellness Center",
      "Rooftop Lounge",
      "Valet Parking",
      "Private Cinema",
    ],
    yearBuilt: 2023,
    parking: 4,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "2",
    slug: "forest-villa-lonavala",
    title: "Forest Villa",
    location: "Lonavala Hills",
    city: "Lonavala",
    price: "₹8.2 Cr",
    priceValue: 82000000,
    beds: 5,
    baths: 6,
    sqft: "6,200 sq ft",
    sqftValue: 6200,
    status: "available",
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
    ],
    description:
      "Nestled in the serene Sahyadri hills, this contemporary villa offers a perfect blend of luxury and nature. Features expansive living spaces, a private pool, and breathtaking valley views.",
    features: [
      "Expansive valley views",
      "Private swimming pool",
      "Landscaped gardens",
      "Home theater",
      "Modular kitchen",
      "Solar powered",
    ],
    amenities: [
      "24/7 Security",
      "Backup generator",
      "Water treatment plant",
      "Guest cottage",
      "BBQ area",
      "Fire pit lounge",
    ],
    yearBuilt: 2022,
    parking: 3,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "3",
    slug: "lakeside-manor-udaipur",
    title: "Lakeside Manor",
    location: "Lake Pichola, Udaipur",
    city: "Udaipur",
    price: "₹15.8 Cr",
    priceValue: 158000000,
    beds: 6,
    baths: 7,
    sqft: "8,500 sq ft",
    sqftValue: 8500,
    status: "coming-soon",
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "A palatial residence on the banks of Lake Pichola, blending Rajasthani heritage with contemporary luxury. Features traditional architecture, private courtyard, and unobstructed lake views.",
    features: [
      "Lake-facing orientation",
      "Traditional courtyard",
      "Jharokha balconies",
      "Private jetty",
      "Handcrafted interiors",
      "Climate control",
    ],
    amenities: [
      "Butler service",
      "Private dock",
      "Heritage tours",
      "In-house chef",
      "Yoga pavilion",
      "Boat house",
    ],
    yearBuilt: 2024,
    parking: 5,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "4",
    slug: "sea-breeze-apartment-goa",
    title: "Sea Breeze Apartment",
    location: "Candolim Beach, Goa",
    city: "Goa",
    price: "₹3.5 Cr",
    priceValue: 35000000,
    beds: 3,
    baths: 3,
    sqft: "2,200 sq ft",
    sqftValue: 2200,
    status: "available",
    type: "apartment",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
    ],
    description:
      "A stunning beachfront apartment just steps from Candolim Beach. Features contemporary coastal design, private balcony with sea views, and access to world-class amenities.",
    features: [
      "Direct beach access",
      "Sea-facing balcony",
      "Open floor plan",
      "Designer interiors",
      "High ceilings",
      "Wooden flooring",
    ],
    amenities: [
      "Beach club access",
      "Swimming pool",
      "Fitness center",
      "Spa services",
      "Restaurant",
      "Concierge",
    ],
    yearBuilt: 2023,
    parking: 2,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "5",
    slug: "golf-view-townhouse-gurugram",
    title: "Golf View Townhouse",
    location: "DLF Golf Course Road, Gurugram",
    city: "Gurugram",
    price: "₹6.8 Cr",
    priceValue: 68000000,
    beds: 4,
    baths: 5,
    sqft: "3,800 sq ft",
    sqftValue: 3800,
    status: "available",
    type: "townhouse",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "An elegant townhouse overlooking the prestigious DLF Golf Course. Features modern architecture, private garden, rooftop terrace, and exclusive clubhouse access.",
    features: [
      "Golf course views",
      "Private garden",
      "Rooftop terrace",
      "Home office",
      "Modular kitchen",
      "Smart security",
    ],
    amenities: [
      "Golf club membership",
      "Clubhouse access",
      "Tennis courts",
      "Swimming pool",
      "Kids play area",
      "24/7 Security",
    ],
    yearBuilt: 2022,
    parking: 3,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "6",
    slug: "heritage-haveli-jaipur",
    title: "Heritage Haveli",
    location: "Civil Lines, Jaipur",
    city: "Jaipur",
    price: "₹9.5 Cr",
    priceValue: 95000000,
    beds: 5,
    baths: 6,
    sqft: "7,200 sq ft",
    sqftValue: 7200,
    status: "sold",
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2076&auto=format&fit=crop",
    ],
    description:
      "A meticulously restored heritage haveli in the heart of Jaipur. Combines traditional Rajasthani craftsmanship with modern amenities for comfortable contemporary living.",
    features: [
      "Original frescoes",
      "Central courtyard",
      "Carved stone work",
      "Modern HVAC",
      "Updated plumbing",
      "Wooden ceilings",
    ],
    amenities: [
      "Private parking",
      "Staff quarters",
      "Garden space",
      "Water storage",
      "Power backup",
      "Security system",
    ],
    yearBuilt: 1920,
    parking: 4,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "7",
    slug: "mountain-retreat-shimla",
    title: "Mountain Retreat",
    location: "Mashobra, Shimla",
    city: "Shimla",
    price: "₹4.2 Cr",
    priceValue: 42000000,
    beds: 4,
    baths: 4,
    sqft: "3,200 sq ft",
    sqftValue: 3200,
    status: "available",
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
    ],
    description:
      "A serene mountain retreat in the pine forests of Mashobra. Features warm wooden interiors, panoramic Himalayan views, and a perfect escape from city life.",
    features: [
      "Himalayan views",
      "Wood-burning fireplace",
      "Heated floors",
      "Large deck",
      "Apple orchard",
      "Double glazing",
    ],
    amenities: [
      "Caretaker cottage",
      "Private parking",
      "Generator backup",
      "Water storage",
      "Garden",
      "Storage shed",
    ],
    yearBuilt: 2021,
    parking: 2,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
  {
    id: "8",
    slug: "tech-park-apartment-bangalore",
    title: "Tech Park Apartment",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    price: "₹2.8 Cr",
    priceValue: 28000000,
    beds: 3,
    baths: 3,
    sqft: "1,950 sq ft",
    sqftValue: 1950,
    status: "available",
    type: "apartment",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "A contemporary apartment in Bangalore's thriving tech corridor. Features modern design, excellent connectivity, and world-class amenities for the discerning professional.",
    features: [
      "City skyline views",
      "Open kitchen",
      "Utility room",
      "Large balconies",
      "Vitrified tiles",
      "Video door phone",
    ],
    amenities: [
      "Rooftop pool",
      "Co-working space",
      "Gymnasium",
      "Jogging track",
      "Kids zone",
      "EV charging",
    ],
    yearBuilt: 2023,
    parking: 2,
    videoUrl: "https://www.youtube.com/embed/y9j-BL5ocW8",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getRelatedProperties(
  currentSlug: string,
  limit = 3
): Property[] {
  const current = getPropertyBySlug(currentSlug);
  if (!current) return properties.slice(0, limit);

  return properties
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same city or type
      const aScore =
        (a.city === current.city ? 2 : 0) + (a.type === current.type ? 1 : 0);
      const bScore =
        (b.city === current.city ? 2 : 0) + (b.type === current.type ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}
