import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { useContext } from 'react';
import { StationContext } from '../StationContext';

const DatePicker = () => {
  const { selectedDate, setSelectedDate } = useContext(StationContext);

  const getDayName = (): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const now = new Date();

    if (selectedDate === 0) {
      return days[now.getDay()];
    }

    return '';
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
      }}
    >
      <Button
        icon={<LeftOutlined />}
        disabled={selectedDate === 6}
        onClick={() => setSelectedDate(selectedDate - 1)}
      />
      <Typography.Text>{getDayName()}</Typography.Text>
      <Button
        icon={<RightOutlined />}
        disabled={selectedDate === 0}
        onClick={() => setSelectedDate(selectedDate + 1)}
      />
    </div>
  );
};

export default DatePicker;
