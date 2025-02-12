import React, { useState } from "react";
import "./WinPopup.scss";

const WinPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="winPopup">
        <div className="winPopup__container">
          <div className="winPopup__container-header">
            <h1>Congratulations!</h1>
          </div>
          <div className="winPopup__container-content">
            <p>You won a prize!</p>
          </div>
          <div className="winPopup__container-btn" onClick={handleClose}>
            close
          </div>
        </div>
      </div>
    )
  );
};

export default WinPopup;
