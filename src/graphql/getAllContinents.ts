import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
    query GetAllContinents {
        continents {
            code
            name
        }
    }
`;
