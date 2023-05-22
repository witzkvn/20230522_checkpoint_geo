import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
    query GetCountry($countryCode: ID!) {
        country(code: $countryCode) {
            name
            capital
            capital
            currency
            emoji
            continent {
                name
                code
            }
        }
    }
`;
