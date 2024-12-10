import React, { useState } from "react";

import "./Winterveil.scss";
import DonationPopup from "../DonateButton/DonationPopup";
import DonateButton from "../DonateButton/DonateButton";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Winterveil: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

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

  return (
    <div className="winterVeil">
      <div className="container">
        <div className="container__header">
          <CountdownTimer targetDate="2024-12-31T23:59:59Z" />
        </div>
        <div className="container__tree"></div>
        <div className="container__claimBtn">
          <p>CLAIM 3 PRIZES</p>
        </div>

        <div className="container__wager">
          <div className="container__wage-header">
            <p>WAGER</p>
            <p>My Prizes: 3</p>
          </div>
          <div className="progress-bar-value">
            <span>{progress}₾</span>
          </div>
          <div className="container__wage-body">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${(progress / 100000) * 100}%` }}
              >
                <span>{progress}₾</span>
                <div
                  className="progress-bar-amount"
                  style={{ left: `${(progress / 100000) * 100}%` }}
                ></div>
              </div>
              <div className="progress-bar-label">
                <span>0</span>
                <span>100000</span>
              </div>
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
