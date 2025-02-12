import React, { useState } from "react";
import "./FallingSlot.scss";

const FallingSlot: React.FC = () => {
  const colors = [
    "red",
    "blue",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "pink",
    "lime",
    "brown",
  ];

  const [isSpinning, setIsSpinning] = useState(false);
  const [boxColors, setBoxColors] = useState<string[]>(colors);

  const shuffleColors = () => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    setBoxColors(shuffled);
  };

  const handleSpin = () => {
    shuffleColors();
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div className="fallingSlotGame">
      <div className="fallingSlotGame__container">
        {boxColors.map((color, index) => (
          <div
            key={index}
            className={`box ${isSpinning ? "fall" : ""}`}
            style={{
              backgroundColor: color,
              animationDelay: `${index * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="spinBtn" onClick={handleSpin}>
        Spin
      </div>
    </div>
  );
};

export default FallingSlot;
