import { useParams } from "react-router-dom";
import { GET_CONTINENT_COUNTRIES } from "../graphql/getContinentCountries";
import { useQuery } from "@apollo/client";
import { Card } from "antd";
import HeaderTitle from "../components/HeaderTitle";
import { Continent } from "../types/continentType";
import { Country } from "../types/countryType";
import UnstyledLink from "../components/UnstyledLink";

const CountriesList = () => {
    const { continentCode } = useParams();

    const { loading, error, data } = useQuery<{ continent: Continent }>(
        GET_CONTINENT_COUNTRIES,
        {
            fetchPolicy: "no-cache", // Used for first execution
            variables: { continentCode },
        }
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured : {error.message}</div>;
    }

    if (!data || !data.continent) {
        return <div>No data could be found.</div>;
    }

    return (
        <div>
            <HeaderTitle title={`Countries in ${data?.continent.name}`} />
            {data.continent.countries ? (
                data.continent.countries.map((country: Country) => (
                    <UnstyledLink
                        key={country.code}
                        to={`/continents/${continentCode}/countries/${country.code}`}
                    >
                        <Card>{country.name}</Card>
                    </UnstyledLink>
                ))
            ) : (
                <p>No countries could be found for this continent.</p>
            )}
        </div>
    );
};

export default CountriesList;
