import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_ENDPOINT;
const token = process.env.HYGRAPH_TOKEN;

if (!endpoint) {
  throw new Error("HYGRAPH_ENDPOINT is not defined in environment variables");
}

if (!token) {
  throw new Error("HYGRAPH_TOKEN is not defined in environment variables");
}

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
