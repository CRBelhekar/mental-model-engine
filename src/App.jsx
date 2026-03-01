import React, { useState, useEffect } from 'react';
import DailyCard from './components/DailyCard';
import dailyContent from './data/dailyContent.json';
import { getTodayKeyIST } from './utils/getTodayKeyIST';

function App() {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const todayKey = getTodayKeyIST();
    const todayEntry = dailyContent[todayKey];
    setEntry(todayEntry || null);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gray-100">
      <DailyCard entry={entry} />
    </div>
  );
}

export default App;
