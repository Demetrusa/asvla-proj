import React from "react";

import "./PromoSlideOne.scss";

type PromoSlideOneProps = {
  image: string; // Accept image as a prop
};

const PromoSlideOne: React.FC<PromoSlideOneProps> = ({ image }) => {
  return (
    <div className="promoSlideOne ">
      <img src={image} alt="Promo Slide" className="promo-slide-image" />
    </div>
  );
};

export default PromoSlideOne;
