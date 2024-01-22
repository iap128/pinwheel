import { FC } from 'react';
import { CardProps } from '../constants/interfaces';
import { Button, Card, Statistic, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ClipLoader } from 'react-spinners';

const WeatherCard: FC<CardProps> = ({ title, value, suffix, icon, tooltip, hasGraph }) => {
  return (
    <Card
    //   actions={
    //     hasGraph
    //       ? [
    //           <GraphModal
    //             title={title}
    //             dataKey={hasGraph.dataKey}
    //             type1Hr={hasGraph.type1Hr}
    //             type12Hr={hasGraph.type12Hr}
    //             type24Hr={hasGraph.type24Hr}
    //           />,
    //         ]
    //       : undefined
    //   }
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
