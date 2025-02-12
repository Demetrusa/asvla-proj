import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainComponent from "./components/forge/MainComponent";
import Promo from "./components/forge/promo/Promo";
import TopGames from "./components/forge/TopGamesSection/TopGames";
import Weekgames from "./components/forge/weekGame/WeekGame";
import PrimarySearchAppBar from "./components/forge/nav/PrimarySearchAppBar";
import Footer from "./components/forge/footer/Footer";
import ThreePlusOne from "./components/forge/sportPromos/three-plus-one/ThreePlusOne.js";
import ChampionCashback from "./components/forge/champion-cashback/ChampionCashback.js";
import Winterveil from "./components/forge/winterVeilPromo/Winterveil.js";
import AxiosRegister from "./components/forge/axiosRegister/AxiosRegister";
import AxiosLogin from "./components/forge/axiosRegister/AxiosLogin.js";
import { NewLogin, NewLogout, NewRegister } from "./components/forge/NewReg/NewRegister.js";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/top-games" element={<TopGames />} />
          <Route path="/week-games" element={<Weekgames />} />
          <Route path="/threeplusone" element={<ThreePlusOne />} />
          <Route path="/championCashback" element={<ChampionCashback />} />
          <Route path="/winterveil" element={<Winterveil />} />
          <Route path="/register" element={<AxiosRegister />} />
          <Route path="/login" element={<AxiosLogin />} />\
        </Routes>
        <NewRegister />
        <NewLogin />
        <NewLogout />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
