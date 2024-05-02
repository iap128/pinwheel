import { formUrlParams } from "./helpers";

// api reference: https://docs.google.com/document/d/1wzejRIUONpdGv0P3WypGEqvSmtD5RAsNOOucvdNRi6k/edit

const recentHistoryAPI = 'https://api.weather.com/v2/pws/observations/all/1day';

export const getRecentHistory = async (station: string, key: string): Promise<any> => {
    const formedURL = recentHistoryAPI + formUrlParams(station, key);

    const response = await fetch(formedURL).then(res => res.json());
    return response.observations;
};