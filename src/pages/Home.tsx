import { useContext, useEffect, useState } from 'react';
import { StationContext } from '../StationContext';
import Current from './Current';
import DailyReview from './DailyReview';
import { DailySummary, getWeekHistory } from '../api/getWeekHistory';
import HeaderBar from '../components/HeaderBar';
import SetupPage from '../components/SetupPage';
import { getRecentHistory } from '../api/getRecentHistory';

const Home = () => {
  const { selectedDate, stationID, apiKey, needsSetup, setNeedsSetup } = useContext(StationContext);

  const [dayHistory, setDayHistory] = useState<DailySummary[]>([]);
  const [recentHistory, setRecentHistory] = useState<DailySummary[]>([]);

  useEffect(() => {
    const loadDataWeek = async () => {
      const data = await getWeekHistory(stationID, apiKey);
      setDayHistory(data);
    };

    const loadDataRecent = async () => {
      const recentData = await getRecentHistory(stationID, apiKey);
      setRecentHistory(recentData);
    };

    if (selectedDate !== 0) {
      loadDataWeek();
    }
    else {
      if (stationID && apiKey) {
        loadDataRecent();
      }
    }
  }, [stationID, apiKey, selectedDate]);

  return (
    <div>
      <HeaderBar />
      {selectedDate === 0 ? <Current recentHistory={recentHistory}/> : <DailyReview summaryObject={dayHistory[selectedDate]} />}
      <SetupPage isOpen={needsSetup} setIsOpen={setNeedsSetup} />
    </div>
  );
};

export default Home;
