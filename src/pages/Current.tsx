import {
  faCompass,
  faDroplet,
  faGauge,
  faPercent,
  faSolarPanel,
  faTemperatureThreeQuarters,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FC, useContext } from 'react';
import { StationContext } from '../StationContext';
import ResponsiveRow from '../components/ResponsiveRow';
import { DailySummary } from '../api/getWeekHistory';
import TemperatureGraph from '../components/TemperatureGraph';

interface Props {
  recentHistory: DailySummary[];
}

const Current: FC<Props> = ({ recentHistory }) => {
  const { currentConditions } = useContext(StationContext);

  const temperatureTrend = recentHistory?.map(item => ({time: item.obsTimeLocal, value: item?.imperial?.tempAvg}));
  const rainTrend = recentHistory?.map(item => ({time: item.obsTimeLocal, value: item?.imperial?.precipTotal}));
  const humidityTrend = recentHistory?.map(item => ({time: item.obsTimeLocal, value: item?.humidityAvg}));

  return (
    <div>
      <ResponsiveRow
        columnItems={[
          {
            title: 'Temperature',
            value: currentConditions?.imperial.temp,
            suffix: 'f',
            icon: faTemperatureThreeQuarters,
            tooltip: 'Feels like ' + currentConditions?.imperial.windChill + ' f',
            extras: <TemperatureGraph value={temperatureTrend} />,
          },
          {
            title: 'Wind Speed',
            value: currentConditions?.imperial.windSpeed,
            suffix: 'mph',
            icon: faWind,
          },
          {
            title: "Gust Speed",
            value: currentConditions?.imperial.windGust,
            suffix: "mph",
            icon: faWind,
          },
          {
            title: 'Wind Direction',
            value: currentConditions?.winddir,
            suffix: 'degrees',
            icon: faCompass,
          },
          {
            title: "Rain",
            value: currentConditions?.imperial.precipTotal,
            suffix: "in",
            icon: faDroplet,
            tooltip: 'Falling at a rate of ' + currentConditions?.imperial.precipRate + ' in/hr',
            extras: <TemperatureGraph value={rainTrend} />,
          },
          {
            title: "Pressure",
            value: currentConditions?.imperial.pressure,
            suffix: "inHg",
            icon: faGauge,
          },
          {
            title: "Humidity",
            value: currentConditions?.humidity,
            suffix: "%",
            icon: faPercent,
            tooltip: 'Dew point: ' + currentConditions?.imperial.dewpt + ' f',
            extras: <TemperatureGraph value={humidityTrend} />,
          },
          {
            title: "Solar Radiation",
            value: currentConditions?.solarRadiation,
            suffix: "w",
            icon: faSolarPanel,
            tooltip: 'UV Index: ' + currentConditions?.uv
          }
        ]}
      />
    </div>
  );
};

export default Current;
