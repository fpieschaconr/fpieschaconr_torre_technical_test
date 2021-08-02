import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
    usersByName(name: String!): [User]
    mentorsBySkill(skill: String!): [User]
  }

  type User {
    _id: String!
    name: String!
    surname: String!
    phone: String!
    email: String!
    password: String!
}
`;
