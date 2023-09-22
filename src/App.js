import { Route, Routes } from 'react-router-dom';
import TopBar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useEffect,useState } from 'react';

function App() {
  const [coinData,setCoinData]=useState(null);

  useEffect(()=>{
       
          //https://api.bithumb.com/public/ticker/ALL
          const fetchData = async () => {
              // 데이터를 가져오는 API 엔드포인트 URL을 지정합니다.
              const API_KEY="dda78a424124c3d1e0e32fe0473545ee"
              const lat=37.635511;
              const lon=127.064501;
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metrix`)
              .then((res)=>res.json())
              
      
          
      
        
              
            } 
          fetchData();
  
    }
    , [])
  return (
    <div>
      <TopBar  />
      <Routes>
        <Route path='/'element={<Main/>}/>
      </Routes>
  
     {JSON.stringify(coinData)}
    </div>
  );
}

export default App;
