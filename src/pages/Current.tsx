import { Col, Row } from 'antd';
import WeatherCard from '../components/WeatherCard';
import {
  faCompass,
  faDroplet,
  faGauge,
  faPercent,
  faSolarPanel,
  faTemperatureThreeQuarters,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StationContext } from '../StationContext';

const Current = () => {
  const { currentConditions } = useContext(StationContext);

  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Temperature"
            value={currentConditions?.imperial.temp}
            suffix="f"
            icon={faTemperatureThreeQuarters}
            tooltip={'Feels like ' + currentConditions?.imperial.windChill + ' f'}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Wind Speed"
            value={currentConditions?.imperial.windSpeed}
            suffix="mph"
            icon={faWind}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Wind Direction"
            value={currentConditions?.winddir}
            suffix="degrees"
            icon={faCompass}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Pressure"
            value={currentConditions?.imperial.pressure}
            suffix="inHg"
            icon={faGauge}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Gust Speed"
            value={currentConditions?.imperial.windGust}
            suffix="mph"
            icon={faWind}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Humidity"
            value={currentConditions?.humidity}
            suffix="%"
            icon={faPercent}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Rain"
            value={currentConditions?.imperial.precipTotal}
            suffix="in"
            icon={faDroplet}
            tooltip={'Falling at a rate of ' + currentConditions?.imperial.precipRate + ' in/hr'}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WeatherCard
            title="Solar Radiation"
            value={currentConditions?.solarRadiation}
            suffix="w"
            icon={faSolarPanel}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Current;
