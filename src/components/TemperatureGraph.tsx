import { FC, useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

interface Props {
  temperatures: number[];
}

const TemperatureGraph: FC<Props> = ({ temperatures }) => {
    const [data, setData] = useState<{time: string, temp: number}[]>([]);

    useEffect(() => {
        const tempData = [];
        for (const item in temperatures) {
            tempData.push({time: item, temp: temperatures[item]});
        }

        setData(tempData);
    }, [temperatures]);
    
  return (
    <div>
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
        <XAxis dataKey='time' />
        <YAxis dataKey='temp' />
        <Tooltip />
        <Area type="monotone" dataKey='temp' stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default TemperatureGraph;
