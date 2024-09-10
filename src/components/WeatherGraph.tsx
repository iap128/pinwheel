import { DownOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

interface Props {
  data: {name: string, value: number}[];
  title: string;
}

const WeatherGraph: FC<Props> = ({ data, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button shape="circle" size="small" onClick={() => setOpen(true)} icon={<DownOutlined />} />
      <Modal title={title} open={open} onCancel={() => setOpen(false)} footer={[]}>
        <div style={{ overflow: 'scroll' }}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip labelStyle={{ color: 'black' }}/>
          <Area type="monotone" dataKey="value" stroke="#000" fill="#499ff5" />
        </AreaChart>
        </div>
      </Modal>
    </div>
  );
};

export default WeatherGraph;
