import { Col, Row } from "antd";
import { FC } from "react";
import { CardProps } from "../constants/interfaces";
import WeatherCard from "./WeatherCard";

interface Props {
    columnItems: CardProps[];
}

const ResponsiveRow: FC<Props> = ({columnItems}) => {
    return (
        <Row gutter={16}>
            {columnItems.map(item => (
                <Col key={item.title} xs={24} sm={24} md={8} lg={8} xl={8} style={{ margin: '5px 0px'}}>
                    <WeatherCard
                        title={item.title}
                        value={item.value}
                        suffix={item.suffix}
                        icon={item.icon}
                        tooltip={item.tooltip}
                        extras={item.extras}
                    />
                </Col>
            ))}
        </Row>
    )
};

export default ResponsiveRow;