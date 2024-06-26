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
import CardExtras from '../components/CardExtras';

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
            extras: (
              <CardExtras
                extras={[
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
                ]}
                suffix="f"
              />
            ),
          },
          {
            title: 'Avg Wind Speed',
            value: summaryObject?.imperial.windspeedAvg,
            suffix: 'mph',
            icon: faWind,
            extras: (
              <CardExtras
                extras={[
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
                ]}
                suffix="mph"
              />
            ),
          },
          {
            title: 'Avg Gust Speed',
            value: summaryObject?.imperial.windgustAvg,
            suffix: 'mph',
            icon: faWind,
            extras: (
              <CardExtras
                extras={[
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
                ]}
                suffix="mph"
              />
            ),
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
