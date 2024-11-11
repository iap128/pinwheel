import { DownOutlined } from '@ant-design/icons';
import { LineChart } from '@mui/x-charts';
import { Button, Modal } from 'antd';
import { FC, useState } from 'react';

interface Props {
  data: { name: string; value: number }[];
  title: string;
}

const WeatherGraph: FC<Props> = ({ data, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button shape='circle' size='small' onClick={() => setOpen(true)} icon={<DownOutlined />} />
      <Modal title={title} open={open} onCancel={() => setOpen(false)} footer={[]}>
        <LineChart
          colors={['orange']}
          xAxis={[{ scaleType: 'point', data: data.map(item => item.name) }]}
          series={[{ data: data.map(item => item.value), area: true, showMark: false }]}
          height={400}
          slotProps={{
            popper: {
              placement: 'top',
            }
          }}
        />
      </Modal>
    </div>
  );
};

export default WeatherGraph;
