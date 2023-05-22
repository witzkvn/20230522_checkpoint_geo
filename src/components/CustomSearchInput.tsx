import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Dispatch, SetStateAction } from "react";

const CustomSearchInput = ({
    value,
    setValue,
}: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <Input
            size="large"
            placeholder="Search by country name"
            prefix={<SearchOutlined />}
            style={{ marginBottom: "20px" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default CustomSearchInput;
