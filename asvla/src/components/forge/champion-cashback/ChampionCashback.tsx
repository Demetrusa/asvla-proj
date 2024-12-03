// import react from "react";
import "./ChampionCashback.scss";
import HowtoComponent from "../terms/HowtoComponent";

const ChampionCashback: React.FC = () => {
  return (
    <div className="championCashback">
      <div className="container">
        <div className="rulesC">
          <div className="rulesC__title">ELIGIBLE TICKETS</div>
          <div className="rulesC__container">
            <div className="rulesC__section">
              <div className="rulesC__section-text">Minimum bet - 1000 AMD</div>
            </div>
            <div className="rulesC__section">
              <div className="rulesC__section-text">Minimum odds - 1 .5 </div>
            </div>
            <div className="rulesC__section">
              <div className="rulesC__section-text">
                100% Cashback from lost tickets
              </div>
            </div>
          </div>
        </div>
        <button>Deposit</button>
        <HowtoComponent championBG="true" />
      </div>
    </div>
  );
};

export default ChampionCashback;
