import { Row, Col } from 'antd';
import {
  faCompass,
  faDownLong,
  faDroplet,
  faGauge,
  faPercent,
  faSolarPanel,
  faTemperatureThreeQuarters,
  faUpLong,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { DailySummary } from '../api/getWeekHistory';
import { FC } from 'react';

interface Props {
    summaryObject: DailySummary;
}

const DailyReview: FC<Props> = ({summaryObject}) => {

  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Avg Temperature"
            value={summaryObject?.imperial.tempAvg}
            suffix="f"
            icon={faTemperatureThreeQuarters}
            hasExtras={[
              {
                label: 'Max Temperature',
                value: summaryObject?.imperial.tempHigh,
                icon: faUpLong
              },
              {
                label: 'Min Temperature',
                value: summaryObject?.imperial.tempLow,
                icon: faDownLong
              },
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Avg Wind Speed"
            value={summaryObject?.imperial.windspeedAvg}
            suffix="mph"
            icon={faWind}
            hasExtras={[
              {
                label: 'Max Wind Speed',
                value: summaryObject?.imperial.windspeedHigh,
                icon: faUpLong
              },
              {
                label: 'Min Wind Speed',
                value: summaryObject?.imperial.windspeedLow,
                icon: faDownLong
              },
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Avg Wind Direction"
            value={summaryObject?.winddirAvg}
            suffix="degrees"
            icon={faCompass}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Max Pressure"
            value={summaryObject?.imperial.pressureMax}
            suffix="inHg"
            icon={faGauge}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Avg Gust Speed"
            value={summaryObject?.imperial.windgustAvg}
            suffix="mph"
            icon={faWind}
            hasExtras={[
              {
                label: 'Max Gust Speed',
                value: summaryObject?.imperial.windgustHigh,
                icon: faUpLong
              },
              {
                label: 'Min Gust Speed',
                value: summaryObject?.imperial.windgustLow,
                icon: faDownLong
              },
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Avg Humidity"
            value={summaryObject?.humidityAvg}
            suffix="%"
            icon={faPercent}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Total Rain"
            value={summaryObject?.imperial.precipTotal}
            suffix="in"
            icon={faDroplet}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Max Solar Radiation"
            value={summaryObject?.solarRadiationHigh}
            suffix="w"
            icon={faSolarPanel}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DailyReview;
