import React, { useState } from "react";

import "./Winterveil.scss";
import DonationPopup from "../DonateButton/DonationPopup";
import DonateButton from "../DonateButton/DonateButton";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

import WalletImg from "./winter-img/wallet.png";

const Winterveil: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [visibleBoxes, setVisibleBoxes] = useState<number>(0); // State to track visible boxes

  // Handle donation amount input
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDonationAmount(value);
  };

  // Handle static donation amounts
  const handleStaticAmountClick = (amount: number) => {
    setDonationAmount(amount);
  };

  // Confirm donation and update progress
  const handleConfirmClick = () => {
    const newProgress = Math.min(progress + donationAmount, 100000);
    setProgress(newProgress);
    setIsPopupVisible(false);
  };

  // Close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const calculateWagerPrize = (progress: number): number => {
    let prize = 0;
    let currentRange = 10000;

    while (progress >= currentRange) {
      prize++;
      currentRange += 10000;
    }

    return prize;
  };

  const handleClaimClick = () => {
    const prizeCount = calculateWagerPrize(progress);
    setVisibleBoxes(prizeCount);
  };

  return (
    <div className="winterVeil">
      <div className="container">
        <div className="container__header">
          <CountdownTimer targetDate="2024-12-31T23:59:59Z" />
        </div>
        <div className="container__tree">
          <div className="tree__carpet"></div>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`tree__box ${
                index < visibleBoxes ? "visible" : "hidden"
              }`}
            ></div>
          ))}
        </div>
        <div
          className={`container__claimBtn ${
            calculateWagerPrize(progress) <= 0 ? "deactive" : ""
          }`}
          onClick={handleClaimClick}
        >
          <p>CLAIM 3 PRIZES</p>
        </div>

        <div className="container__wager">
          <div className="container__wage-header">
            <span>WAGER</span>
            <div className="myPrizeBox">
              <span>My Prizes</span>
              <div className="wagerPrizeIcon"></div>
              <div className="wagerPrize-amount">
                {calculateWagerPrize(progress)}
              </div>
            </div>
          </div>
          <div className="progress-bar-value">
            <div className="valueBox">
              <img src={WalletImg} alt="" className="valueLogo" />
              <span>{progress} Դ</span>
            </div>
          </div>
          <div className="valueTitle">Mission / challenge description</div>
          <div className="container__wage-body">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${(progress / 100000) * 100}%` }}
              >
                <span>{progress} Դ</span>
                <div
                  className="progress-bar-amount"
                  style={{ left: `${(progress / 100000) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="progress-bar-label">
              <span>0</span>
              <span>100000 Դ</span>
            </div>
          </div>
        </div>

        <DonateButton onClick={() => setIsPopupVisible(true)} />

        <DonationPopup
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
          donationAmount={donationAmount}
          onAmountChange={handleAmountChange}
          onConfirm={handleConfirmClick}
          onPresetAmountClick={handleStaticAmountClick}
        />
      </div>
    </div>
  );
};

export default Winterveil;
