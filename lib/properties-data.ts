import { gql } from "graphql-request";
import { hygraphClient } from "./hygraph";

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
  floorPlan?: string;
  videoUrl?: string;
  yearBuilt?: number;
  parking?: number;
  isOnHomePage?: boolean;
}

const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    slug: "ak-tower-premium-apartment",
    title: "AK Tower Premium Apartment",
    location: "AK Tower, Durga City Centre",
    city: "Durga City Centre",
    price: "₹ 75,00,000",
    priceValue: 7500000,
    beds: 3,
    baths: 2,
    sqft: "1,800 Sq. Ft.",
    sqftValue: 1800,
    status: "available",
    type: "apartment",
    image: "/images/completed_project_1.jpeg",
    images: ["/images/completed_project_1.jpeg", "/images/completed_project_2.jpeg", "/images/completed_project_3.jpeg"],
    description: "Centrally located at Durga City Centre, this premium AK Tower apartment offers modern living with easy access to all city amenities. Perfect for families looking for comfort and convenience.",
    features: ["Smart Home Ready", "Modular Kitchen", "High Ceilings", "Centralized A/C", "Spacious Balcony"],
    amenities: ["24/7 Security", "Power Backup", "Car Parking", "Elevator", "Water Softener"],
    yearBuilt: 2023,
    parking: 1,
    isOnHomePage: true,
  },
  {
    id: "2",
    slug: "kathgodam-hill-view-villa",
    title: "Kathgodam Hill View Villa",
    location: "Kathgodam, Nainital Road",
    city: "Kathgodam",
    price: "₹ 1,25,00,000",
    priceValue: 12500000,
    beds: 4,
    baths: 4,
    sqft: "3,200 Sq. Ft.",
    sqftValue: 3200,
    status: "coming-soon",
    type: "villa",
    image: "/images/upcoming_project_2.jpeg",
    images: ["/images/upcoming_project_2.jpeg", "/images/upcoming_project_1.jpeg", "/images/upcoming_project_4.png"],
    description: "Nestled in the serene outskirts of Kathgodam, this upcoming villa offers breathtaking hill views and a peaceful environment. Designed for luxury and tranquility.",
    features: ["Private Garden", "Rooftop Terrace", "Walk-in Closets", "Natural Stone Flooring", "Home Theater Room"],
    amenities: ["Gated Community", "Clubhouse Access", "Swimming Pool", "Landscaped Gardens", "Solar Power"],
    yearBuilt: 2024,
    parking: 2,
    isOnHomePage: true,
  },
  {
    id: "3",
    slug: "nainital-road-luxury-penthouse",
    title: "Nainital Road Luxury Penthouse",
    location: "Nainital Road",
    city: "Nainital Road",
    price: "₹ 95,00,000",
    priceValue: 9500000,
    beds: 3,
    baths: 3,
    sqft: "2,400 Sq. Ft.",
    sqftValue: 2400,
    status: "available",
    type: "penthouse",
    image: "/images/upcoming_project_7.jpg",
    images: ["/images/upcoming_project_7.jpg", "/images/upcoming_project_6.jpg", "/images/upcoming_project_3.jpeg"],
    description: "Experience sky-high luxury on Nainital Road. This penthouse features expansive windows with panoramic city views and a high-end interior finish.",
    features: ["Private Elevator Access", "Designer Interior", "Wine Cellar", "Automated Curtains", "Sky Bar"],
    amenities: ["Fitness Center", "Concierge Service", "Meeting Rooms", "Rooftop Bar", "Guest Suites"],
    yearBuilt: 2023,
    parking: 2,
    isOnHomePage: true,
  },
  {
    id: "4",
    slug: "modern-duplex-lal-danth",
    title: "Modern Duplex Lal Danth",
    location: "Lal Danth Road",
    city: "Lal Danth",
    price: "₹ 60,00,000",
    priceValue: 6000000,
    beds: 3,
    baths: 2,
    sqft: "1,650 Sq. Ft.",
    sqftValue: 1650,
    status: "sold",
    type: "townhouse",
    image: "/images/completed_project_3.jpeg",
    images: ["/images/completed_project_3.jpeg", "/images/completed_project_2.jpeg"],
    description: "A beautifully crafted modern duplex in the popular Lal Danth area. This home combines functional layout with high-quality construction materials.",
    features: ["Marble Flooring", "Teak Wood Doors", "PVC Plumbing", "Modular Switches", "Heat Insulation"],
    amenities: ["Safe Neighborhood", "Street Lighting", "24/7 Water Supply", "Nearby Schools", "Market Access"],
    yearBuilt: 2022,
    parking: 1,
    isOnHomePage: false,
  }
];

const HOME_PROPERTIES_QUERY = gql`
  query HomeProperties {
    properties(where: { isOnHomePage: true }) {
      id
      slug
      title
      location
      city
      price
      priceValue
      beds
      baths
      sqft
      sqftValue
      propertyStatus
      propertyType
      image {
        url
      }
      images {
        url
      }
      description
      features
      amenities
      floorPlan
      videoURl
      yearBuilt
      parking
      isOnHomePage
    }
  }
`;

const PROPERTIES_QUERY = gql`
  query Properties {
    properties {
      id
      slug
      title
      location
      city
      price
      priceValue
      beds
      baths
      sqft
      sqftValue
      propertyStatus
      propertyType
      image {
        url
      }
      images {
        url
      }
      description
      features
      amenities
      floorPlan
      videoURl
      yearBuilt
      parking
    }
  }
`;

const PROPERTY_BY_SLUG_QUERY = gql`
  query PropertyBySlug($slug: String!) {
    property(where: { slug: $slug }) {
      id
      slug
      title
      location
      city
      price
      priceValue
      beds
      baths
      sqft
      sqftValue
      propertyStatus
      propertyType
      image {
        url
      }
      images {
        url
      }
      description
      features
      amenities
      floorPlan
      videoURl
      yearBuilt
      parking
    }
  }
`;

function mapHygraphProperty(p: any): Property {
  let status: Property["status"] = "available";
  if (p.propertyStatus === "sold") status = "sold";
  if (p.propertyStatus === "commingSoon" || p.propertyStatus === "coming-soon")
    status = "coming-soon";

  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    location: p.location,
    city: p.city,
    price: p.price,
    priceValue: p.priceValue,
    beds: p.beds,
    baths: p.baths,
    sqft: p.sqft,
    sqftValue: p.sqftValue,
    status: status,
    type: p.propertyType,
    image: p.image?.url || "",
    images: p.images?.map((img: any) => img.url) || [],
    description: p.description,
    features: p.features || [],
    amenities: p.amenities || [],
    floorPlan: p.floorPlan, // Assuming it's a string or null based on user query
    videoUrl: p.videoURl,
    yearBuilt: p.yearBuilt,
    parking: p.parking,
    isOnHomePage:
      typeof p.isOnHomePage === "boolean" ? p.isOnHomePage : undefined,
  };
}

export async function getHomeProperties(): Promise<Property[]> {
  try {
    if (!hygraphClient) {
      return MOCK_PROPERTIES.filter(p => p.isOnHomePage).slice(0, 6);
    }
    const { properties } = await hygraphClient.request<{ properties: any[] }>(
      HOME_PROPERTIES_QUERY
    );
    return properties
      .map(mapHygraphProperty)
      .filter((property) => property.isOnHomePage)
      .slice(0, 6);
  } catch (error) {
    console.error("Error fetching home properties:", error);
    return [];
  }
}

export async function getProperties(): Promise<Property[]> {
  try {
    if (!hygraphClient) {
      return MOCK_PROPERTIES;
    }
    const { properties } = await hygraphClient.request<{ properties: any[] }>(
      PROPERTIES_QUERY
    );
    return properties.map(mapHygraphProperty);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export async function getPropertyBySlug(
  slug: string
): Promise<Property | undefined> {
  try {
    if (!hygraphClient) {
      return MOCK_PROPERTIES.find(p => p.slug === slug);
    }
    const { property } = await hygraphClient.request<{ property: any }>(
      PROPERTY_BY_SLUG_QUERY,
      { slug }
    );
    return property ? mapHygraphProperty(property) : undefined;
  } catch (error) {
    console.error(`Error fetching property with slug ${slug}:`, error);
    return undefined;
  }
}

export async function getRelatedProperties(
  currentSlug: string,
  limit = 3
): Promise<Property[]> {
  const allProperties = await getProperties();
  const current = allProperties.find((p) => p.slug === currentSlug);
  if (!current) return allProperties.slice(0, limit);

  return allProperties
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
