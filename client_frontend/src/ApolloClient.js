import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.TORRETEST_URI ||"http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
