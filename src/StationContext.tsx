import { FC, createContext, useEffect, useState } from 'react';
import { CurrentResponse, getCurrentConditions } from './api/getCurrentConditions';

interface OwnProps {
  children: React.ReactNode;
}

interface ContextProps {
  stationID: string;
  apiKey: string;
  selectedDate: number;
  setSelectedDate: (date: number) => void;
  currentConditions: CurrentResponse | null;
  setCurrentConditions: (data: CurrentResponse | null) => void;
}

export const StationContext = createContext({} as ContextProps);

const StationProvider: FC<OwnProps> = ({ children }) => {
  const stationID = 'KORBEAVE588';
  const apiKey = '7c8632e7f0c34cfa8632e7f0c36cfa4a';

  const [selectedDate, setSelectedDate] = useState(0);
  const [currentConditions, setCurrentConditions] = useState<CurrentResponse | null>(null);

  const loadData = async () => {
    const data = await getCurrentConditions(stationID, apiKey);
    setCurrentConditions(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StationContext.Provider
      value={{
        stationID,
        apiKey,
        selectedDate,
        setSelectedDate,
        currentConditions,
        setCurrentConditions,
      }}
    >
      {children}
    </StationContext.Provider>
  );
};

export default StationProvider;