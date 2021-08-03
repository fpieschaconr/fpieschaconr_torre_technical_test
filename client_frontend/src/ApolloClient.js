import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_TORRETEST_URI ||"http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
