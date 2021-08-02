import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.TORRETEST_BACKEND_GRAPHQL_URI,
  cache: new InMemoryCache(),
});
