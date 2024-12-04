import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./components/forge/MainComponent";
import Promo from "./components/forge/promo/Promo";
import TopGames from "./components/forge/TopGamesSection/TopGames";
import Weekgames from "./components/forge/weekGame/WeekGame";
import RegistrationForm from "./components/forge/registrationForm/RegistrationForm";
import LoginForm from "./components/forge/loginForm/LoginForm";
import PrimarySearchAppBar from "./components/forge/nav/PrimarySearchAppBar";
import Footer from "./components/forge/footer/Footer";
// import TermsComponent from "./components/forge/terms/TermsComponent";
// import WheelinatorComponent from "./components/forge/wheel/WheelinatorComponent";
// import Wheel from "./components/forge/wheel/Wheel.jsx";
import ThreePlusOne from "./components/forge/sportPromos/three-plus-one/ThreePlusOne.js";
import ChampionCashback from "./components/forge/champion-cashback/ChampionCashback.js";
import Slotmasters from "./components/forge/slotmasters/Slotmasters.js";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("authToken");
      setToken(updatedToken);
    };

    // Add the event listener
    window.addEventListener("storage", handleStorageChange);

    // Remove the event listener on unmount
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Also, sync the token whenever App re-renders
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken !== token) {
      setToken(savedToken);
    }
  }, [token]);

  console.log(token, "w");
  return (
    <Router>
      <div className="appContainer">
        <PrimarySearchAppBar token={token} setToken={setToken} />
        {!!token ? (
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/top-games" element={<TopGames />} />
            <Route path="/week-games" element={<Weekgames />} />
            <Route path="/threeplusone" element={<ThreePlusOne />} />
            <Route path="/championCashback" element={<ChampionCashback />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/top-games" element={<TopGames />} />
            <Route path="/week-games" element={<Weekgames />} />
            <Route path="/threeplusone" element={<ThreePlusOne />} />
            <Route path="/championCashback" element={<ChampionCashback />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm setToken={setToken} />} />
          </Routes>
        )}
        <Slotmasters />

        {/* <TermsComponent /> */}
        <div className="wheel-container">
          {/* <WheelinatorComponent layers={1} /> */}
          {/* <Wheel /> */}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
