import {gql} from "@apollo/client";

export const PROFILEUSER = gql`
    query ProfileUser($_id: String!) {
        profileUser(_id: $_id) {
            name
            surname
            email
            _id
            phone
        }
    }
`;