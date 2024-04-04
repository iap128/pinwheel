export const formUrlParams = (station: string, key: string): string => {
    return `?stationId=${station}&format=json&units=e&apiKey=${key}`;
};

export const timestampToDate = (timestamp: string): string => {
    const formedDate = new Date(timestamp);

    return formedDate.getHours() + ':' + formedDate.getMinutes();
}