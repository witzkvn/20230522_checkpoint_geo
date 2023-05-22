import React from "react";
import { Row } from "antd";

const CustomGrid = ({
    children,
}: {
    children: React.ReactNode[] | React.ReactNode;
}) => {
    return <Row gutter={[8, 8]}>{children}</Row>;
};

export default CustomGrid;
