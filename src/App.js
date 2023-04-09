import logo from "./logo.svg";
import "./App.css";
import NavBarWea from "./components/NavBarWea";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherShow from "./components/WeatherShow";
import NameCity from "./components/NameCity";
import CardPref from "./components/CardPref";

function App() {
  return (
    <BrowserRouter>
      <NavBarWea />
      <Routes>
        <Route path="/" element={<CardPref />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<WeatherShow /> } />
       
        
        <Route path="/:nameCity/:lat/:lon" element={<NameCity />}></Route>
        {/* <Route path="/" element={} /> */}
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
