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
import CustomSearchInput from "../components/CustomSearchInput";
import { useState } from "react";

const CountriesList = () => {
    const { continentCode } = useParams();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("");

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

    const filteredCountries =
        data.continent.countries !== undefined
            ? searchValue === ""
                ? data.continent.countries
                : data.continent.countries.filter((country: Country) =>
                      country.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                  )
            : [];

    return (
        <div>
            <Button onClick={() => navigate(`/`)}>
                {"< Back to Continents"}
            </Button>

            <HeaderTitle title={`Countries in ${data.continent.name}`} />
            <CustomSearchInput value={searchValue} setValue={setSearchValue} />
            <CustomGrid>
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country: Country) => (
                        <CustomGridElement key={country.code}>
                            <UnstyledLink
                                key={country.code}
                                to={`/continents/${continentCode}/countries/${country.code}`}
                            >
                                <Card
                                    style={{ height: "100%" }}
                                    hoverable={true}
                                >
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
