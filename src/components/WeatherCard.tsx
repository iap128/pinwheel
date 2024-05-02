import { FC } from 'react';
import { CardProps } from '../constants/interfaces';
import { Button, Card, Statistic, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ClipLoader } from 'react-spinners';

const WeatherCard: FC<CardProps> = ({ title, value, suffix, icon, tooltip, extras }) => {
  return (
    <Card
      actions={
        extras
          ? [
              extras
            ]
          : undefined
      }
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {value === undefined ? (
          <ClipLoader color='white'/>
        ) : (
          <Statistic
            title={title}
            value={value}
            prefix={<FontAwesomeIcon icon={icon} />}
            suffix={suffix}
            precision={2}
          />
        )}
        {tooltip && (
          <Tooltip title={tooltip}>
            <Button icon={<InfoCircleOutlined />} type="text" />
          </Tooltip>
        )}
      </div>
    </Card>
  );
};

export default WeatherCard;
