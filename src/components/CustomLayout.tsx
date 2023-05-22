import { Layout, Row } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const CustomLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ padding: "2vh 8vw" }}>
                <Row
                    align="middle"
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <div style={{ width: "100%" }}>
                        <Outlet />
                    </div>
                </Row>
            </Content>
        </Layout>
    );
};

export default CustomLayout;
