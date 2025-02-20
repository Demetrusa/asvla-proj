import React, { useState, useRef } from "react";
import "./Winterveil.scss";
import DonationPopup from "../DonateButton/DonationPopup";
import DonateButton from "../DonateButton/DonateButton";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import WalletImg from "./winter-img/wallet.png";
import myPrizeIcon from "./winter-img/prizesimg.png";
import Snowfall from "../snowing/Snowfall";
import TermsComponent from "../terms/TermsComponent";
import Redeem from "../redeem/Redeem";
import RedeemBtn from "../redeem/RedeemBtn";
import FallingSlot from "../fallinSlotGame/FallingSlot";
import WinPopup from "../popups/WinPopup";

const Winterveil: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [visibleBoxes, setVisibleBoxes] = useState<number>(0);
  const [isRedeemVisible, setIsRedeemVisible] = useState<boolean>(false);
  const redeemRef = useRef<HTMLDivElement | null>(null);

  const handleRedeemBtnClick = () => {
    setIsRedeemVisible(true);
    setTimeout(() => {
      redeemRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDonationAmount(value);
  };

  const handleStaticAmountClick = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleConfirmClick = () => {
    const newProgress = Math.min(progress + donationAmount, 100000);
    setProgress(newProgress);
    setIsPopupVisible(false);
  };

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
        <Snowfall />
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

        <RedeemBtn onClick={handleRedeemBtnClick} />

     
        <div
          className="myPryzesIcon"
          style={{ opacity: progress > 1 ? 1 : 0.5 }}
        >
          <img src={myPrizeIcon} alt="myPrizeIcon" />
        </div>
        {/* <button
          className={`container__claimBtn ${
            calculateWagerPrize(progress) <= 0 ? "deactive" : ""
          }`}
          onClick={handleClaimClick}
        >
          CLAIM MY PRIZES
        </button> */}

        {isRedeemVisible && (
          <div ref={redeemRef}>
            <Redeem />
          </div>
        )}

        <TermsComponent TermsBg={true} />

        {/* <FallingSlot /> */}
        {/* <WinPopup /> */}
      </div>
    </div>
  );
};

export default Winterveil;
