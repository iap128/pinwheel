import { useContext, useEffect, useState } from 'react';
import { StationContext } from '../StationContext';
import DatePicker from '../components/DatePicker';
import Current from './Current';
import DailyReview from './DailyReview';
import { DailySummary, getWeekHistory } from '../api/getWeekHistory';

const Home = () => {
  const { selectedDate, stationID, apiKey } = useContext(StationContext);

  const [dayHistory, setDayHistory] = useState<DailySummary[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getWeekHistory(stationID, apiKey);
      setDayHistory(data);
    };

    loadData();
  }, [stationID, apiKey]);

  console.log(selectedDate);

  return (
    <div>
      <DatePicker />
      {selectedDate === 0 ? <Current /> : <DailyReview summaryObject={dayHistory[selectedDate]} />}
    </div>
  );
};

export default Home;
