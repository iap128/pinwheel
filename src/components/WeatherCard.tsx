import { FC } from 'react';
import { CardProps } from '../constants/interfaces';
import { Button, Card, Statistic, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ClipLoader } from 'react-spinners';
import CardExtras from './CardExtras';

const WeatherCard: FC<CardProps> = ({ title, value, suffix, icon, tooltip, hasExtras }) => {
  return (
    <Card
      actions={
        hasExtras
          ? [
              <CardExtras extras={hasExtras} suffix={suffix} />,
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
          <ClipLoader />
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
