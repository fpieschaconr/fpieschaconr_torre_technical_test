import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
    test: String
    getUserStats(filters: [Filter!]): [Stat]
    getJobStats(filters: [Filter!]): [Stat]
  }

  type Stat {
    category: String!
    total: Int
    subcategories: [Subcategory]
  }

  type Subcategory {
    total: Int
    value: String
  }

  input Filter {
    key: String!
    value: String!
  }
`;
