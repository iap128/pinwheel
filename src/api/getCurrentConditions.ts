import { formUrlParams } from "./helpers";

// api reference: https://docs.google.com/document/d/1KGb8bTVYRsNgljnNH67AMhckY8AQT2FVwZ9urj8SWBs/edit

const currentConditionsAPI = 'https://api.weather.com/v2/pws/observations/current';

export interface CurrentResponse {
    neighborhood: string;
    humidity: number;
    imperial: {
        dewpt: number;
        heatIndex: number;
        precipRate: number;
        precipTotal: number;
        temp: number;
        windChill: number;
        windGust: number;
        windSpeed: number;
        pressure: number;
    };
    obsTimeLocal: string;
    solarRadiation: number;
    winddir: number;
    uv: number;
}

export const getCurrentConditions = async (station: string, key: string): Promise<any> => {
    const formedURL = currentConditionsAPI + formUrlParams(station, key);

    const response = await fetch(formedURL).then(res => res.json());
    return response.observations[0];
};