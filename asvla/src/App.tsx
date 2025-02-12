import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import MainComponent from "./components/forge/MainComponent";
import Promo from "./components/forge/promo/Promo";
import TopGames from "./components/forge/TopGamesSection/TopGames";
import Weekgames from "./components/forge/weekGame/WeekGame";
import PrimarySearchAppBar from "./components/forge/nav/PrimarySearchAppBar";
import Footer from "./components/forge/footer/Footer";
import ThreePlusOne from "./components/forge/sportPromos/three-plus-one/ThreePlusOne";
import ChampionCashback from "./components/forge/champion-cashback/ChampionCashback";
import Winterveil from "./components/forge/winterVeilPromo/Winterveil";
import AxiosRegister from "./components/forge/axiosRegister/AxiosRegister";
import AxiosLogin from "./components/forge/axiosRegister/AxiosLogin";
import NewRegister from "./components/forge/NewReg/NewRegister";
import NewLogin from "./components/forge/NewReg/NewLogin";
import NewLogout from "./components/forge/NewReg/NewLogout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("authToken"));
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="appContainer">
        <PrimarySearchAppBar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<MainComponent />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/top-games" element={<TopGames />} />
          <Route path="/week-games" element={<Weekgames />} />
          <Route path="/threeplusone" element={<ThreePlusOne />} />
          <Route path="/championCashback" element={<ChampionCashback />} />
          <Route path="/winterveil" element={<Winterveil />} />
          <Route path="/register" element={<AxiosRegister />} />
          <Route path="/login" element={<AxiosLogin />} />

          {/* New Register/Login Routes */}
          <Route path="/new-register" element={<NewRegister onRegister={handleLogin} />} />
          <Route path="/new-login" element={<NewLogin onLogin={handleLogin} />} />
          <Route
            path="/logout"
            element={isAuthenticated ? <NewLogout onLogout={handleLogout} /> : <Navigate to="/new-login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
