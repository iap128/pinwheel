import { Button, Typography } from 'antd';
import DateSelector from './DateSelector';
import { useContext } from 'react';
import { StationContext } from '../StationContext';

const HeaderBar = () => {
  const { setSelectedDate, currentConditions } = useContext(StationContext);

  const now = new Date();
  const then = new Date(currentConditions?.obsTimeLocal || 0);

  const diff = Math.round((now.getTime() - then.getTime()) / 60000);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',
      }}
    >
      {currentConditions?.obsTimeLocal && (
        <Typography.Text>
          Last update: {diff} {diff === 1 ? 'second' : 'seconds'} ago
        </Typography.Text>
      )}
      <DateSelector />
      <Button type="primary" onClick={() => setSelectedDate(0)}>
        Today
      </Button>
    </div>
  );
};

export default HeaderBar;
