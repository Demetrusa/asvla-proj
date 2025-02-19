import "./MultipleProgress.scss";
import React from "react";

interface MinorProgressProps {
  icon: string;
  winIcon: string;
  activeCount: number;
  setActiveCount: (count: number) => void;
}

const MinorProgress: React.FC<MinorProgressProps> = ({
  icon,
  winIcon,
  activeCount,
  setActiveCount,
}) => {
  const progressIcons = Array.from({ length: 10 }, (_, index) =>
    index < activeCount ? "active" : "deactive"
  );

  return (
    <div className="cash">
      <div className="cash__title">
        <img src={icon} alt="" />
      </div>
      <div className="cash__icon">
        <img src={winIcon} alt="" />
      </div>
      <div className="cash__iconAmount">
        <span>{activeCount}</span>
        <span>/</span>
        <span>10</span>
      </div>
      <div className="cash__collectIcons">
        {progressIcons.map((status, index) => (
          <span
            key={index}
            className={status}
            onClick={() => setActiveCount(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MinorProgress;
