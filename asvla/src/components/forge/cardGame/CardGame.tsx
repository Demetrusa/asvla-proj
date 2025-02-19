import React from "react";
import "./CardGame.scss";

interface CardGameProps {
  cardPrizes: {
    id: number;
    icon: string;
  }[];
  handleCardClick: (index: number) => void;
  isFlipped: boolean[];
}

const CardGame: React.FC<CardGameProps> = ({
  cardPrizes,
  handleCardClick,
  isFlipped,
}) => {
  return (
    <div className="cardGame">
      <div className="cardGame__Container">
        <h1>Open cards and cash out accumulated prizes at any time</h1>
        <div className="cardGame__rule">
          If behind the chosen card you'll find <i className="cross"></i>, You
          will lose prizes collected before
        </div>
        <div className="card__container">
          {isFlipped.map((flipped, index) => (
            <div
              key={index}
              className="cardGame__card"
              onClick={() => handleCardClick(index)}
            >
              <div className={`backCard ${flipped ? "" : "active"}`}>?</div>
              <div className={`frontCard ${flipped ? "active" : ""}`}>
                <img
                  src={cardPrizes[index % cardPrizes.length].icon}
                  alt="prize"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGame;
