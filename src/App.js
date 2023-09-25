import { Route, Routes } from 'react-router-dom';
import TopBar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useEffect, useState } from 'react';

function App() {
  const [coinData, setCoinData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
    .then((res) =>setCoinData(res));
    }
    fetchData();
  }, [])

  return (
    <div>
      <TopBar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>


    </div>
  );
}

export default App;
