import { getProperties } from "@/lib/properties-data";
import PropertiesClient from "./properties-client";

export const metadata = {
  title: "Properties | Real Estate",
  description: "Explore our curated collection of luxury homes.",
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return <PropertiesClient initialProperties={properties} />;
}
