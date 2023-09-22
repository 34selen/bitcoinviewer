import { Route, Routes } from 'react-router-dom';
import Top_bar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
  const [coinData,setCoinData]=useState(null);

  useEffect(()=>{
    
    
    const fetchData = async() => {
      const res = await fetch('https://api.bithumb.com/public/ticker/ALL');
    //  const result = res.json();
      return res;
    }	
    
    fetchData().then(res => setCoinData(res));
    
   
}, [])
  return (
    <div>
      <Top_bar  />
      <Routes>
        <Route path='/'element={<Main/>}/>
      </Routes>
      {coinData}
     
    </div>
  );
}

export default App;
