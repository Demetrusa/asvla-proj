import React, { useState } from "react";
import "./ThreePlusOne.scss";
import infoICon from "./threeplusone-imgs/info.svg";

import priseICon from "./threeplusone-imgs/prize-icon.svg";
import TermsComponent from "../../terms/TermsComponent";

const ThreePlusOne: React.FC = () => {
  const [progress, setProgress] = useState(0); // Progress state
  const [inputValue, setInputValue] = useState(""); // Input value state

  const [isActive, setIsActive] = useState(false);

  const handleProgressChange = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
      setProgress(numericValue); // Set progress width directly
    } else {
      alert("Please enter a valid percentage between 0 and 100.");
    }
  };

  const toggleContent = () => {
    setIsActive((prev) => !prev);
  };

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

        {/* Input box to control progress */}
        <div className="progressControl">
          <input
            type="text"
            placeholder="Enter progress (%)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleProgressChange}>Set Progress</button>
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
              <div className="progress__box">
                <div className="progress__bar">
                  <div
                    className="progress__indicator"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="progress__checkpoints">
                  <div
                    className={`progress__checkpoint ${
                      progress >= 33 ? "completed" : ""
                    }`}
                  >
                    <span className="progress__checkpoint-label">1</span>
                  </div>
                  <div
                    className={`progress__checkpoint ${
                      progress >= 66 ? "completed" : ""
                    }`}
                  >
                    <span className="progress__checkpoint-label">2</span>
                  </div>
                  <div
                    className={`progress__checkpoint ${
                      progress >= 100 ? "completed" : ""
                    }`}
                  >
                    <span className="progress__checkpoint-label">3</span>
                  </div>
                </div>
              </div>
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
          <div className="prizes">
            <div className="prizes__header">
              <img src={priseICon} alt="" />
              <span>Prize</span>
            </div>
            <div className="prizes__title">
              <span>Freebets</span>
              <span>Date</span>
              <span>Expiration Date</span>
            </div>
            <div className="prizes__box">
              <div className="prizes__container">
                <div className="prizes__space active">
                  <div className="prizes__empty"></div>
                  <span>Minimum number of selections in each bet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* howto */}
        <div className="how-to">
          <div className="how-to__header" onClick={toggleContent}>
            <div className="how-to__left">
              <div className="how-to__item"></div>
              <div className="how-to__description">
                <span>HOW TO WIN IN 3+1 ? </span>
              </div>
            </div>
            <div className="how-to__right">
              <div
                className={`how-to__icon ${isActive ? "rotated" : ""}`}
              ></div>
            </div>
          </div>
          <div className={`how-to__content ${isActive ? "active" : ""}`}>
            <div className="how-to__list">
              <ul>
                <li>
                  To participate in the promotion, the participant should place
                  <span className="highlight"> 3 </span>
                  Express bets on
                  <span className="highlight"> 3 </span>
                  different selections for any sports type.
                </li>
              </ul>
            </div>
            <div className="how-to__list">
              <ul>
                <li>
                  The minimum bet amount (for each bet) is
                  <span className="highlight"> 500 AMD</span>
                </li>
              </ul>
            </div>
            <div className="how-to__list">
              <ul>
                <li>
                  Minimum odds per selection in bet –
                  <span className="highlight"> 1.5</span>
                </li>
              </ul>
            </div>
            <div className="how-to__list">
              <ul>
                <li>
                  Minimum number of selections in each bet
                  <span className="highlight"> 3</span>
                </li>
              </ul>
            </div>
            <div className="how-to__list">
              <ul>
                <li>
                  Freebet daily max cap for each participant is
                  <span className="highlight"> 30 000 AMD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TermsComponent TermsBg={true} headerText="Terms and Conditions" />
      </div>
    </div>
  );
};

export default ThreePlusOne;
