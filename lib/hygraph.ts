import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_ENDPOINT;
const token = process.env.HYGRAPH_TOKEN;

export const isHygraphConfigured = !!(endpoint && token);

// Note: We use mock data as a fallback in lib/properties-data.ts if this is null.
if (!isHygraphConfigured && process.env.NODE_ENV !== "production") {
  console.log("Hygraph: Using mock data fallback (Keys not found in .env)");
}

export const hygraphClient = isHygraphConfigured
  ? new GraphQLClient(endpoint!, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  : null;
