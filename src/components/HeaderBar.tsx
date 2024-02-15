import { Button, Col, Row, Space, Typography } from 'antd';
import DateSelector from './DateSelector';
import { useCallback, useContext, useEffect, useState } from 'react';
import { StationContext } from '../StationContext';
import { ReloadOutlined } from '@ant-design/icons';

const HeaderBar = () => {
  const { setSelectedDate, currentConditions, loadData } = useContext(StationContext);
  const [lastUpdate, setLastUpdate] = useState(0);

  const updateTime = useCallback(() => {
    const now = new Date();
    const then = new Date(currentConditions?.obsTimeLocal || 0);

    const diff = Math.round((now.getTime() - then.getTime()) / 1000);
    setLastUpdate(diff);
  }, [currentConditions?.obsTimeLocal]);

  useEffect(() => {
    updateTime();
  }, [updateTime]);

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 10000);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <Row gutter={16} align='middle' style={{ margin: '0px 10px' }}>
      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        {currentConditions?.obsTimeLocal && (
          <Space direction='horizontal'>
            <Typography.Text>
              Last update: {lastUpdate} {lastUpdate === 1 ? 'second' : 'seconds'} ago
            </Typography.Text>
            <Button icon={<ReloadOutlined />} onClick={loadData} />
          </Space>
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
