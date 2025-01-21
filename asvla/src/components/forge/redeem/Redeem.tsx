import React, { useState } from "react";
import "./Redeem.scss";

const Redeem: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleCheckboxChange = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  const handleRedeem = () => {
    if (selected !== null) {
      alert(`Redeemed item ${selected + 1}`);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  const items = Array(7).fill(null); // Array for the 7 divs

  return (
    <div className="redeem-container">
      <div className="redeem-header">
        <h2>Redeem Your Rewards</h2>
        <button className="close-btn" onClick={() => setIsVisible(false)}>
          ×
        </button>
      </div>
      <form className="redeem-form">
        {items.map((_, index) => (
          <div
            key={index}
            className="redeem-item"
            style={{
              opacity: selected === null || selected === index ? 1 : 0.5,
            }}
          >
            <input
              type="checkbox"
              checked={selected === index}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="redeem-title">Item {index + 1}</span>
            <img
              src={`https://via.placeholder.com/32`}
              alt={`Item ${index + 1}`}
              className="redeem-image"
            />
          </div>
        ))}
      </form>
      <div className="redeem-footer">
        <p>
          {selected !== null
            ? `Selected: Item ${selected + 1}`
            : "No item selected"}
        </p>
        <button
          className="redeem-button"
          disabled={selected === null}
          onClick={handleRedeem}
        >
          Redeem
        </button>
      </div>
    </div>
  );
};

export default Redeem;
