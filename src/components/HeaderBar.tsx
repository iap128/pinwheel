import { Button } from "antd";
import DateSelector from "./DateSelector";
import { SettingFilled } from "@ant-design/icons";
import { useContext, useState } from "react";
import SettingsDrawer from "../pages/SettingsDrawer";
import { StationContext } from "../StationContext";

const HeaderBar = () => {
    const {setSelectedDate} = useContext(StationContext);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0px 20px',
        }}>
            <Button icon={<SettingFilled />} onClick={() => setIsOpen(true)} />
            <DateSelector />
            <SettingsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            <Button type="primary" onClick={() => setSelectedDate(0)}>Today</Button>
        </div>
    )
};

export default HeaderBar;