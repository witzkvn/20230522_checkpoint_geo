import { Divider, Typography } from "antd";

const { Title } = Typography;

const HeaderTitle = ({ title }: { title: string }) => {
    return (
        <>
            <Typography>
                <Title>{title}</Title>
            </Typography>
            <Divider />
        </>
    );
};

export default HeaderTitle;
