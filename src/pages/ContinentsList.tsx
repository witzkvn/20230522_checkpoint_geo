import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../graphql/getAllContinents";
import { Card } from "antd";
import { Continent } from "../types/continentType";
import HeaderTitle from "../components/HeaderTitle";
import UnstyledLink from "../components/UnstyledLink";
import CustomGrid from "../components/CustomGrid";
import CustomGridElement from "../components/CustomGridElement";

const ContinentsList = () => {
    const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured : {error.message}</div>;
    }

    if (!data.continents) {
        return <div>No data could be found.</div>;
    }

    return (
        <div>
            <HeaderTitle title="Continents" />
            <CustomGrid>
                {data.continents.map((continent: Continent) => (
                    <CustomGridElement key={continent.code}>
                        <UnstyledLink
                            key={continent.code}
                            to={`/continents/${continent.code}`}
                        >
                            <Card>{continent.name}</Card>
                        </UnstyledLink>
                    </CustomGridElement>
                ))}
            </CustomGrid>
        </div>
    );
};

export default ContinentsList;
