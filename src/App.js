import { Route, Routes } from 'react-router-dom';
import Top_bar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
<<<<<<< Updated upstream
  const [coinData,setCoinData]=useState(null);

  useEffect(()=>{
    async function fetch() {
        const response = await axios.get('https://api.bithumb.com/public/ticker/ALL');
        setCoinData("aa");
        console.log(coinData)
    };
    fetch();
    

}, [])
=======

  const [data, setData] = useState([]);
  	
  useEffect(() => {
  const fetchData = async() => {
        const res = await fetch('https://https://api.coinpaprika.com/v1/tickers?quotes=KRW.typicode.com/news');
        const result = res.json();
        return result;
      }	
      
      fetchData().then(res => setData(res));
  }, []);
>>>>>>> Stashed changes
  return (
    <div>
      <Top_bar />
      <Routes>
        <Route path='/'element={<Main coinData={coinData}/>}/>
      </Routes>
      <div>{data}</div>
    </div>
  );
}

export default App;
