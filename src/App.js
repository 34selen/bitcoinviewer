import { Route, Routes } from 'react-router-dom';
import TopBar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useEffect,useState } from 'react';

function App() {
  const [coinData,setCoinData]=useState(null);
useEffect(()=>{
  async function fetchData(){
    const response = await fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW");
    const data= await response.json();
    setCoinData(data);
  }
  fetchData();
},[])

  return (
    <div>
      <TopBar  coinData={coinData}/>
      <Routes>
        <Route path='/'element={<Main/>} coinData={coinData}/>
      </Routes>
  

    </div>
  );
}

export default App;
