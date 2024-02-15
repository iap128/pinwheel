import { useContext, useEffect, useState } from 'react';
import { StationContext } from '../StationContext';
import Current from './Current';
import DailyReview from './DailyReview';
import { DailySummary, getWeekHistory } from '../api/getWeekHistory';
import HeaderBar from '../components/HeaderBar';
import SetupPage from '../components/SetupPage';

const Home = () => {
  const { selectedDate, stationID, apiKey, needsSetup, setNeedsSetup } = useContext(StationContext);

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
      <SetupPage isOpen={needsSetup} setIsOpen={setNeedsSetup} />
    </div>
  );
};

export default Home;
