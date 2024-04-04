import { DownOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

interface Props {
  value: {time: string, value: number}[];
  title: string;
}

const TemperatureGraph: FC<Props> = ({ value, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button shape="circle" size="small" onClick={() => setOpen(true)} icon={<DownOutlined />} />
      <Modal title={title} open={open} onCancel={() => setOpen(false)} footer={[]}>
        <AreaChart
          width={500}
          height={400}
          data={value}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </Modal>
    </div>
  );
};

export default TemperatureGraph;
