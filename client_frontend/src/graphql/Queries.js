import { gql } from "@apollo/client";

export const GET_STATS = gql`
  query GetStats {
    getJobStats {
      category
      total
      subcategories {
        total
        value
      }
    }
    getUserStats {
      category
      total
      subcategories {
        total
        value
      }
    }
  }
`;
