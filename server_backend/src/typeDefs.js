import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
    test: String
  }

  type User {
    _id: String!
  }
`;
