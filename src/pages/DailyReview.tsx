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
import { DailySummary } from '../api/getWeekHistory';
import { FC } from 'react';
import ResponsiveRow from '../components/ResponsiveRow';

interface Props {
  summaryObject: DailySummary;
}

const DailyReview: FC<Props> = ({ summaryObject }) => {
  return (
    <div>
      <ResponsiveRow
        columnItems={[
          {
            title: 'Avg Temperature',
            value: summaryObject?.imperial.tempAvg,
            suffix: 'f',
            icon: faTemperatureThreeQuarters,
            hasExtras: [
              {
                label: 'Max Temperature',
                value: summaryObject?.imperial.tempHigh,
                icon: faUpLong,
              },
              {
                label: 'Min Temperature',
                value: summaryObject?.imperial.tempLow,
                icon: faDownLong,
              },
            ],
          },
          {
            title: 'Avg Wind Speed',
            value: summaryObject?.imperial.windspeedAvg,
            suffix: 'mph',
            icon: faWind,
            hasExtras: [
              {
                label: 'Max Wind Speed',
                value: summaryObject?.imperial.windspeedHigh,
                icon: faUpLong,
              },
              {
                label: 'Min Wind Speed',
                value: summaryObject?.imperial.windspeedLow,
                icon: faDownLong,
              },
            ],
          },
          {
            title: 'Avg Gust Speed',
            value: summaryObject?.imperial.windgustAvg,
            suffix: 'mph',
            icon: faWind,
            hasExtras: [
              {
                label: 'Max Gust Speed',
                value: summaryObject?.imperial.windgustHigh,
                icon: faUpLong,
              },
              {
                label: 'Min Gust Speed',
                value: summaryObject?.imperial.windgustLow,
                icon: faDownLong,
              },
            ],
          },
          {
            title: 'Avg Wind Direction',
            value: summaryObject?.winddirAvg,
            suffix: 'degrees',
            icon: faCompass,
          },
          {
            title: 'Total Rain',
            value: summaryObject?.imperial.precipTotal,
            suffix: 'in',
            icon: faDroplet,
          },
          {
            title: 'Max Pressure',
            value: summaryObject?.imperial.pressureMax,
            suffix: 'inHg',
            icon: faGauge,
          },
          {
            title: 'Avg Humidity',
            value: summaryObject?.humidityAvg,
            suffix: '%',
            icon: faPercent,
          },
          {
            title: 'Max Solar Radiation',
            value: summaryObject?.solarRadiationHigh,
            suffix: 'w',
            icon: faSolarPanel,
          },
        ]}
      />
    </div>
  );
};

export default DailyReview;
