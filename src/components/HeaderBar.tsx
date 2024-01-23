import { Button, Typography } from "antd";
import DateSelector from "./DateSelector";
import { useContext } from "react";
import { StationContext } from "../StationContext";

const HeaderBar = () => {
    const {setSelectedDate} = useContext(StationContext);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0px 20px',
        }}>
            <Typography.Text>Last update: 12 seconds ago</Typography.Text>
            <DateSelector />
            <Button type="primary" onClick={() => setSelectedDate(0)}>Today</Button>
        </div>
    )
};

export default HeaderBar;