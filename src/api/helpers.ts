
export const formUrlParams = (station: string, key: string): string => {
    return `?stationId=${station}&format=json&units=e&apiKey=${key}`;
};