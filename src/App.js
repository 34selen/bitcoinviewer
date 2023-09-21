import { Route, Routes } from 'react-router-dom';
import Top_bar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
  const [coinData,setCoinData]=useState(null);

  useEffect(()=>{
    async function fetch() {
        const response = await axios.get('https://api.bithumb.com/public/ticker/ALL')
        setCoinData(response.data)
    };
    fetch();
  
}, [])
  return (
    <div>
      <Top_bar />
      <Routes>
        <Route path='/'element={<Main coinData={coinData}/>}/>
      </Routes>
      <div>{coinData}</div>
    </div>
  );
}

export default App;
