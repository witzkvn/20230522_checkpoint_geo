import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_COUNTRY } from "../graphql/getCountry";
import { useQuery } from "@apollo/client";
import { Country } from "../types/countryType";
import HeaderTitle from "../components/HeaderTitle";
import { Continent } from "../types/continentType";
import { Button, Card } from "antd";

const CountryDetails = () => {
    const { countryCode } = useParams();
    const navigate = useNavigate();

    const { loading, error, data } = useQuery<{ country: Country }>(
        GET_COUNTRY,
        {
            variables: { countryCode },
        }
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured : {error.message}</div>;
    }

    if (!data || !data.country) {
        return <div>No data could be found.</div>;
    }

    const targetCountry: Country & { continent: Continent } =
        data.country as Country & { continent: Continent };

    return (
        <div>
            <Button
                onClick={() =>
                    navigate(`/continents/${targetCountry.continent.code}`)
                }
            >
                {"< Back to Countries"}
            </Button>
            <HeaderTitle title={`${targetCountry.name}`} />
            <Card style={{ textAlign: "left" }}>
                <p>Flag: {targetCountry.emoji}</p>
                <p>Capital: {targetCountry.capital}</p>
                <p>Currencies: {targetCountry.currency}</p>
                <div>
                    Is part of continent:{" "}
                    <Link to={`/continents/${targetCountry.continent.code}`}>
                        {targetCountry.continent.name}
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default CountryDetails;
