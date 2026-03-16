import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_ENDPOINT;
const token = process.env.HYGRAPH_TOKEN;

export const isHygraphConfigured = !!(endpoint && token);

if (!isHygraphConfigured) {
  console.warn(
    "Warning: HYGRAPH_ENDPOINT or HYGRAPH_TOKEN is not defined in environment variables. Hygraph data will not be available."
  );
}

export const hygraphClient = isHygraphConfigured
  ? new GraphQLClient(endpoint!, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  : null;
