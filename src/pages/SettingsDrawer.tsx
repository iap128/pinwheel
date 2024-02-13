import { Button, Checkbox, Drawer, Input, Space, Typography } from "antd";
import { FC, useContext, useState } from "react";
import { StationContext } from "../StationContext";
import { setCookie } from "typescript-cookie";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SettingsDrawer: FC<Props> = ({isOpen, setIsOpen}) => {
    const {stationID, setStationID, currentConditions} = useContext(StationContext);
    const [saveID, setSaveID] = useState(true);

    //todo: the new station id isn't updating when the context updates
    const [newID, setNewID] = useState(stationID);

    const saveAction = () => {
        setStationID(newID);

        if (saveID) {
            setCookie('stationID', newID);
        }

        setIsOpen(false);
    };

    return (
        <Drawer title='Settings' open={isOpen} onClose={() => setIsOpen(false)}>
            <Space direction="vertical">
                <Typography.Text>{currentConditions?.neighborhood}</Typography.Text>
                <Input placeholder="Station ID" value={newID} onChange={(e) => setNewID(e.target.value)} />
                <Checkbox checked={saveID} onChange={() => setSaveID(!saveID)}>Remember Station ID</Checkbox>
                <Button type='primary' onClick={saveAction}>Save</Button>
            </Space>
        </Drawer>
    );
};

export default SettingsDrawer;