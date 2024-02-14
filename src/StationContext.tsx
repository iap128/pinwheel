import { FC, createContext, useCallback, useEffect, useState } from 'react';
import { CurrentResponse, getCurrentConditions } from './api/getCurrentConditions';
//import { getCookie } from 'typescript-cookie';

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
  needsSetup: boolean;
  setNeedsSetup: (needsSetup: boolean) => void;
}

export const StationContext = createContext({} as ContextProps);

const StationProvider: FC<OwnProps> = ({ children }) => {
  //KORBEAVE588
  const [stationID, setStationID] = useState('');
  const apiKey = '7c8632e7f0c34cfa8632e7f0c36cfa4a';

  const [selectedDate, setSelectedDate] = useState(0);
  const [currentConditions, setCurrentConditions] = useState<CurrentResponse | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);

  const loadData = useCallback(async () => {
    const data = await getCurrentConditions(stationID, apiKey);
    setCurrentConditions(data);
  }, [stationID]);


  useEffect(() => {
    //const id = getCookie('stationID');
    const id = window.localStorage.getItem('stationID');

    if (id && id !== stationID) {
      setStationID(id);
    }

    if (!id) {
      setNeedsSetup(true);
    }

    if (stationID) {
      loadData();
    }
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
        loadData,
        needsSetup,
        setNeedsSetup
      }}
    >
      {children}
    </StationContext.Provider>
  );
};

export default StationProvider;
