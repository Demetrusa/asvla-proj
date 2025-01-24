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
  const redeemArray = [
    { title: "Reward 1", image: "https://via.placeholder.com/32?text=1" },
    { title: "Reward 2", image: "https://via.placeholder.com/32?text=2" },
    { title: "Reward 3", image: "https://via.placeholder.com/32?text=3" },
    { title: "Reward 4", image: "https://via.placeholder.com/32?text=4" },
    { title: "Reward 5", image: "https://via.placeholder.com/32?text=5" },
    { title: "Reward 6", image: "https://via.placeholder.com/32?text=6" },
    { title: "Reward 7", image: "https://via.placeholder.com/32?text=7" },
  ];

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
      <div className="EgtRedeem">EGT -&gt; Slots</div>
      <form className="redeem-form">
        {redeemArray.map((item, index) => (
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
            <span className="redeem-title">{item.title}</span>
            <img src={item.image} alt={item.title} className="redeem-image" />
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
