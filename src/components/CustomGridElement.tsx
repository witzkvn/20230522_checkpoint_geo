import React from "react";
import { Col } from "antd";

const CustomGridElement = ({ children }: { children: React.ReactNode }) => {
    return (
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            {children}
        </Col>
    );
};

export default CustomGridElement;
