import { Route, Routes } from 'react-router-dom';
import Top_bar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
import { useState } from 'react';
function App() {
  const [favorits,setFavorits]=useState(["aa","bb"]);
  return (
    <div>
      <Top_bar favorits={favorits}/>
      <Routes>
        <Route path='/'element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
