import React from "react";
import "./ThreePlusOne.scss";
import infoICon from "./threeplusone-imgs/info.svg";

const ThreePlusOne: React.FC = () => {
  const contentItems = [
    { label: "Minimum odds for each selection in bet", value: "1.5" },
    { label: "Minimum number of selections in each bet", value: "3" },
    { label: "Minimum bet amount (for each bet)", value: "500֏" },
    { label: "Bet type", value: "Express" },
  ];

  return (
    <div className="threePlusOneBody">
      <div className="container">
        <div className="container__header">
          <div className="header-title">
            <p>
              PLACE 3 ELIGIBLE EXPRESS BETS IN SPORTS AND GET FREEBET IN THE
              AVERAGE AMOUNT OF 3 ELIGIBLE BETS! FREEBET DAILY MAX CAP: 30 000
              AMD PER PARTICIPANT.
            </p>
          </div>
          <div className="header-content">
            {contentItems.map((item, index) => (
              <div className="content-item" key={index}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="iconRules">
          <div className="iconRules__icon">
            <div className="iconRules__firstIcon--img firstIcon"></div>
          </div>
          <div className="iconRules__line"></div>
          <div className="iconRules__icon">
            <div className="iconRules__firstIcon--img secondIcon"></div>
          </div>
          <div className="iconRules__line"></div>
          <div className="iconRules__icon">
            <div className="iconRules__firstIcon--img thirdIcon"></div>
          </div>
        </div>
        <div className="iconRulestxt">
          <span>Place 3 bets</span>
          <span>Wait for the results</span>
          <span>Get Freebets</span>
        </div>

        <div className="user-details">
          <div className="progress">
            <div className="progress__header">
              <span>MY PROGRESS</span>
              <img src={infoICon} alt="" />
              <div className="progress__info">
                <ul>
                  <li>
                    To participate in the promotion, the participant should
                    place 3 Express bets on 3 different events for any sports
                    type. The minimum amount of a bet is 500 AMD.
                  </li>
                  <li>
                    The participant will receive Cashback in form of Freebets
                    for every 3 eligible bets placed on different events (within
                    24 hours after the ticket status becomes clear).
                  </li>
                  <li>Minimum odds per position – 1.5.</li>
                </ul>
              </div>
            </div>
            <div className="progress__content">
              <div className="progress__description">
                <span>Place live bets and get freebets!</span>
                <span>* Progress bar updates every 5 minutes</span>
              </div>
              <div className="progress__box"></div>
              <div className="progress__prize">
                <div className="progress__tkt active">
                  <div className="progress__tkt--img">
                    <span>XX ֏</span>
                    <span>Freebet</span>
                  </div>
                </div>
                <div className="progress__prize--about">
                  <span>
                    * YOU CAN USE YOUR FREEBET AFTER COLLECTING 3 TICKETS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePlusOne;
