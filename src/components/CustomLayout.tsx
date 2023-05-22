import { Layout, Row } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const CustomLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ padding: "2vh 8vw" }}>
                <Row justify="center" align="middle" style={{ height: "100%" }}>
                    <Outlet />
                </Row>
            </Content>
        </Layout>
    );
};

export default CustomLayout;
