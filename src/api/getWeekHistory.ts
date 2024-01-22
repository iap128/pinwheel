import { formUrlParams } from './helpers';

// api reference: https://docs.google.com/document/d/1OlAIqLb8kSfNV_Uz1_3je2CGqSnynV24qGHHrLWn7O8/edit

const weekHistoryAPI = 'https://api.weather.com/v2/pws/dailysummary/7day';

export interface DailySummary {
  humidityAvg: number;
  humidityHigh: number;
  humidityLow: number;
  imperial: {
    dewptAvg: number;
    dewptHigh: number;
    dewptLow: number;
    heatindexAvg: number;
    heatindexHigh: number;
    heatindexLow: number;
    precipRate: number;
    precipTotal: number;
    pressureMax: number;
    pressureMin: number;
    pressureTrend: number;
    tempAvg: number;
    tempHigh: number;
    tempLow: number;
    windchillAvg: number;
    windchillHigh: number;
    windchillLow: number;
    windgustAvg: number;
    windgustHigh: number;
    windgustLow: number;
    windspeedAvg: number;
    windspeedHigh: number;
    windspeedLow: number;
  };
  obsTimeLocal: string;
  solarRadiationHigh: number;
  uvHight: number;
  winddirAvg: number;
}

export const getWeekHistory = async (station: string, key: string): Promise<any> => {
  const formedURL = weekHistoryAPI + formUrlParams(station, key);

  const response = await fetch(formedURL).then(res => res.json());

  // reverse so that index 0 is today
  const formedResponse: DailySummary[] = response.summaries.reverse();

  return formedResponse;
};
