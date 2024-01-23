import { Button, Drawer, Input } from "antd";
import { FC, useContext, useState } from "react";
import { StationContext } from "../StationContext";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SettingsDrawer: FC<Props> = ({isOpen, setIsOpen}) => {
    const {stationID, setStationID} = useContext(StationContext);

    const [newID, setNewID] = useState(stationID);

    const saveAction = () => {
        setStationID(newID);
        setIsOpen(false);
    };

    return (
        <Drawer title='Settings' open={isOpen} onClose={() => setIsOpen(false)}>
            <Input placeholder="Station ID" value={newID} onChange={(e) => setNewID(e.target.value)} />
            <Button type='primary' onClick={saveAction}>Save</Button>
        </Drawer>
    );
};

export default SettingsDrawer;