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
      iamges {
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
      iamges {
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
    images: p.iamges?.map((img: any) => img.url) || [],
    description: p.description,
    features: p.features || [],
    amenities: p.amenities || [],
    floorPlan: p.floorPlan, // Assuming it's a string or null based on user query
    videoUrl: p.videoURl,
    yearBuilt: p.yearBuilt,
    parking: p.parking,
    isOnHomePage: Boolean(p.isOnHomePage),
  };
}

export async function getProperties(): Promise<Property[]> {
  try {
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
