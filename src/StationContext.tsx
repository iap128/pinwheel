import { FC, createContext, useCallback, useEffect, useState } from 'react';
import { CurrentResponse, getCurrentConditions } from './api/getCurrentConditions';
import { getCookie } from 'typescript-cookie';

interface OwnProps {
  children: React.ReactNode;
}

interface ContextProps {
  stationID: string;
  setStationID: (id: string) => void;
  apiKey: string;
  selectedDate: number;
  setSelectedDate: (date: number) => void;
  currentConditions: CurrentResponse | null;
  setCurrentConditions: (data: CurrentResponse | null) => void;
  loadData: () => void;
}

export const StationContext = createContext({} as ContextProps);

const StationProvider: FC<OwnProps> = ({ children }) => {
  const [stationID, setStationID] = useState('KORBEAVE588');
  const apiKey = '7c8632e7f0c34cfa8632e7f0c36cfa4a';

  const [selectedDate, setSelectedDate] = useState(0);
  const [currentConditions, setCurrentConditions] = useState<CurrentResponse | null>(null);

  const loadData = useCallback(async () => {
    const data = await getCurrentConditions(stationID, apiKey);
    setCurrentConditions(data);
  }, [stationID]);


  useEffect(() => {
    const id = getCookie('stationID');

    if (id && id !== stationID) {
      setStationID(id);
    }

    loadData();
  }, [loadData, stationID]);

  return (
    <StationContext.Provider
      value={{
        stationID,
        setStationID,
        apiKey,
        selectedDate,
        setSelectedDate,
        currentConditions,
        setCurrentConditions,
        loadData
      }}
    >
      {children}
    </StationContext.Provider>
  );
};

export default StationProvider;
