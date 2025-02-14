import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Redeem.scss";

// redeem images start
import superhotTwenty from "./redeem-img/20superhot.webp";
import burninghot from "./redeem-img/burninghot.webp";
import extrastars from "./redeem-img/extra-stars2.webp";
import shiningcrown from "./redeem-img/shiningcrown.webp";
import starlight from "./redeem-img/starlight_princess.webp";
import sweetBonanza from "./redeem-img/sweet_bonanza.webp";
import thedoghouse from "./redeem-img/the_dog_house.webp";
// redeem images end

const Redeem: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleCheckboxChange = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  const handleRedeem = () => {
    if (selected !== null) {
      const selectedItem = redeemArray[selected];
      const popupContainer = document.createElement("div");
      popupContainer.className = "popup-container";

      const popup = (
        <div className="popup">
          <h3 className="popup-title">{selectedItem.title}</h3>
          <img
            className="popup-image"
            src={selectedItem.image}
            alt={selectedItem.title}
          />
          <button
            className="popup-close-button"
            onClick={() => {
              setIsVisible(false);
              document.body.removeChild(popupContainer);
            }}
          >
            Close
          </button>
        </div>
      );

      document.body.appendChild(popupContainer);
      const root = ReactDOM.createRoot(popupContainer);
      root.render(popup);
      setIsVisible(false);
    }
  };

  const redeemArray = [
    { title: "superhotTwenty", image: superhotTwenty },
    { title: "burninghot", image: burninghot },
    { title: "extrastars", image: extrastars },
    { title: "shiningcrown", image: shiningcrown },
    { title: "starlight", image: starlight },
    { title: "sweetBonanza", image: sweetBonanza },
    { title: "thedoghouse", image: thedoghouse },
  ];

  if (!isVisible) return null;

  return (
    <div className="redeem-container">
      <div className="redeem-header">
        <h2>Redeem Your Rewards</h2>
        <button className="close-btn" onClick={() => setIsVisible(false)}>
          ×
        </button>
      </div>
      <div className="EgtRedeem">Slots</div>
      <form className="redeem-form">
        {redeemArray.map((item, index) => (
          <div
            key={index}
            className="redeem-item"
            style={{
              opacity: selected === null || selected === index ? 1 : 0.5,
            }}
            onClick={() => handleCheckboxChange(index)}
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
          Selected:&nbsp;
          <span>
            {selected !== null
              ? ` ${redeemArray[selected].title}`
              : "No item selected"}
          </span>
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
