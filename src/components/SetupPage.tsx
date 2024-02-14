import { Button, Input, Modal, Space, Typography } from "antd";
import { FC, useContext, useState } from "react";
//import { setCookie } from "typescript-cookie";
import { StationContext } from "../StationContext";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SetupPage: FC<Props> = ({ isOpen, setIsOpen }) => {
    const { setStationID } = useContext(StationContext);
    const [id, setID] = useState('');

    const save = () => {
        //setCookie('stationID', id);
        window.localStorage.setItem('stationID', id);
        setStationID(id);
        setIsOpen(false);
    };

    return (
        <Modal title='Welcome to Pinwheel' open={isOpen} footer={[]}>
            <Space direction="vertical">
                <Typography.Text>Enter a station ID to continue</Typography.Text>
                <Input placeholder="Station ID" value={id} onChange={(e) => setID(e.target.value)} />
                <Button type="primary" onClick={save}>Save</Button>
            </Space>
        </Modal>
    )
};

export default SetupPage;