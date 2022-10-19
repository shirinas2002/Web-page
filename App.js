import Login from './login';
import Pages from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {          
  return (
  <div>
    
    <BrowserRouter>
    <Routes>
      <Route path="/pages" element= {<Pages/>} ></Route>
      <Route path="/login" element= {<Login/>} ></Route>

    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
