import { gql } from "@apollo/client";

export const GET_CONTINENT_COUNTRIES = gql`
    query GetContinentCountries($continentCode: ID!) {
        continent(code: $continentCode) {
            name
            countries {
                name
                code
                emoji
            }
        }
    }
`;
