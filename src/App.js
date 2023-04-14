import logo from "./logo.svg";
import "./App.css";
import NavBarWea from "./components/NavBarWea";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherShow from "./components/WeatherShow";
import NameCity from "./components/NameCity";
import CardPref from "./components/CardPref";
import Preference from "./components/Preference";


function App() {
  return (
    <BrowserRouter>
      <NavBarWea />
      <WeatherShow /> 
      <Routes>
        {/* <Route path="/" element={} /> */}
       
        
        <Route path="/:nameCity/:lat/:lon/" element={<NameCity />}/>
       
      </Routes>
      <Routes>
        <Route path="/" element={<CardPref />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
