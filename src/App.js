import logo from "./logo.svg";
import "./App.css";
import NavBarWea from "./components/NavBarWea";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherShow from "./components/WeatherShow";
import NameCity from "./components/NameCity";
import CardPref from "./components/CardPref";
import Preference from "./components/Preference";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <NavBarWea />
      <Container className="content">
        <Routes>
          <Route path="/" element={<WeatherShow />} />
          <Route path="/:nameCity/:lat/:lon/:key" element={<NameCity />} />
        </Routes>
        <Routes>
          <Route path="/" element={<CardPref />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
