import { Route, Routes } from 'react-router-dom';
import Top_bar from "./page/top-bar/top-bar.js"
import Main from "./page/main/main.js"
import "./App.css"
function App() {
  return (
    <div>
      <Top_bar/>
      <Routes>
        <Route path='/'element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
