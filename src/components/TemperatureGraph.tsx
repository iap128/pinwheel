import { FC } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

interface Props {
  temperatures: any[];
}

const TemperatureGraph: FC<Props> = ({ temperatures }) => {

  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={temperatures}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='time' />
        <YAxis dataKey='temp' />
        <Tooltip />
        <Area type="monotone" dataKey='temp' stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default TemperatureGraph;
