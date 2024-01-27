import { Button, Col, Row, Typography } from 'antd';
import DateSelector from './DateSelector';
import { useContext } from 'react';
import { StationContext } from '../StationContext';

const HeaderBar = () => {
  const { setSelectedDate, currentConditions } = useContext(StationContext);

  const now = new Date();
  const then = new Date(currentConditions?.obsTimeLocal || 0);

  const diff = Math.round((now.getTime() - then.getTime()) / 60000);

  return (
    <Row gutter={16} align='middle' style={{ margin: '0px 10px' }}>
      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        {currentConditions?.obsTimeLocal && (
          <Typography.Text>
            Last update: {diff} {diff === 1 ? 'second' : 'seconds'} ago
          </Typography.Text>
        )}
      </Col>

      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        <DateSelector />
      </Col>

      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        <Button block type='primary' onClick={() => setSelectedDate(0)}>
          Today
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderBar;
