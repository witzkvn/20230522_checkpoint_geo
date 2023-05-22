import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const UnstyledLink = ({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) => {
    return <StyledLink to={to}>{children}</StyledLink>;
};

export default UnstyledLink;
