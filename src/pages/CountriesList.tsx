import { useNavigate, useParams } from "react-router-dom";
import { GET_CONTINENT_COUNTRIES } from "../graphql/getContinentCountries";
import { useQuery } from "@apollo/client";
import { Button, Card } from "antd";
import HeaderTitle from "../components/HeaderTitle";
import { Continent } from "../types/continentType";
import { Country } from "../types/countryType";
import UnstyledLink from "../components/UnstyledLink";
import CustomGrid from "../components/CustomGrid";
import CustomGridElement from "../components/CustomGridElement";

const CountriesList = () => {
    const { continentCode } = useParams();
    const navigate = useNavigate();

    const { loading, error, data } = useQuery<{ continent: Continent }>(
        GET_CONTINENT_COUNTRIES,
        {
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
            <Button onClick={() => navigate(`/`)}>
                {"< Back to Continents"}
            </Button>

            <HeaderTitle title={`Countries in ${data.continent.name}`} />
            <CustomGrid>
                {data.continent.countries ? (
                    data.continent.countries.map((country: Country) => (
                        <CustomGridElement key={country.code}>
                            <UnstyledLink
                                key={country.code}
                                to={`/continents/${continentCode}/countries/${country.code}`}
                            >
                                <Card>
                                    <p>{country.emoji}</p>
                                    {country.name}
                                </Card>
                            </UnstyledLink>
                        </CustomGridElement>
                    ))
                ) : (
                    <p>No countries could be found for this continent.</p>
                )}
            </CustomGrid>
        </div>
    );
};

export default CountriesList;
