import { useContext, useEffect, useState } from 'react';
import { StationContext } from '../StationContext';
import Current from './Current';
import DailyReview from './DailyReview';
import { DailySummary, getWeekHistory } from '../api/getWeekHistory';
import HeaderBar from '../components/HeaderBar';

const Home = () => {
  const { selectedDate, stationID, apiKey } = useContext(StationContext);

  const [dayHistory, setDayHistory] = useState<DailySummary[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getWeekHistory(stationID, apiKey);
      setDayHistory(data);
    };

    if (selectedDate !== 0) {
      loadData();
    }
  }, [stationID, apiKey, selectedDate]);

  return (
    <div>
      <HeaderBar />
      {selectedDate === 0 ? <Current /> : <DailyReview summaryObject={dayHistory[selectedDate]} />}
    </div>
  );
};

export default Home;
