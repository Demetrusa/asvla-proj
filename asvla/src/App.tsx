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

function App() {
  return (
    <Router>
      <div className="appContainer">
        <PrimarySearchAppBar />
        <Routes>
          {/* Main Component as Home */}
          <Route path="/" element={<MainComponent />} />

          {/* Other components as different pages */}
          <Route path="/promo" element={<Promo />} />
          <Route path="/top-games" element={<TopGames />} />
          <Route path="/week-games" element={<Weekgames />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
