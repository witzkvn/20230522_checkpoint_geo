import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../graphql/getAllContinents";
import { useEffect } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { Continent } from "../types/continentType";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const ContinentsList = () => {
    const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);

    useEffect(() => {
        console.log(data?.continents);
    }, [data]);

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
            {data.continents.map((continent: Continent) => (
                <StyledLink
                    key={continent.code}
                    to={`/continents/${continent.code}`}
                >
                    <Card>{continent.name}</Card>
                </StyledLink>
            ))}
        </div>
    );
};

export default ContinentsList;
