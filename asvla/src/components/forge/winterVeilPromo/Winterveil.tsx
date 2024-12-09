// Winterveil.tsx
import React, { useState } from "react";

import "./Winterveil.scss";
import DonationPopup from "../DonateButton/DonationPopup";
import DonateButton from "../DonateButton/DonateButton";

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
        <div className="container__header"></div>
        <div className="container__tree"></div>
        <div className="container__claimBtn">
          <p>CLAIM 3 PRIZES</p>
        </div>

        <div className="container__wager">
          <div className="container__wage-header">
            <p>WAGER</p>
            <p>My Prizes: 3</p>
          </div>

          <div className="container__wage-body">
            <div className="progress-bar-container">
              <input
                type="range"
                min="0"
                max="100000"
                value={progress}
                readOnly
                className="progress-bar"
              />
              <div className="progress-bar-label">
                <span>0</span>
                <span>100000</span>
              </div>
              <div className="progress-bar-value">
                <span>{progress}₾</span>
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
