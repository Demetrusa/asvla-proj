import React from "react";
import "./MultipleProgress.scss";

interface MultipleProgressesProps {
  prize: {
    id: number;
    title: string;
    iconActive: string;
    iconInactive: string;
    bigIcon: string;
    titleIcon: string;
  };
  activeCount: number;
  setActiveCount: React.Dispatch<React.SetStateAction<number>>;
}

const MultipleProgresses: React.FC<MultipleProgressesProps> = ({
  prize,
  activeCount,
  setActiveCount,
}) => {
  const progressIcons = Array.from({ length: 10 }, (_, index) =>
    index < activeCount ? prize.iconActive : prize.iconInactive
  );

  return (
    <div className="CarBox">
      <div className="carBox__title">
        <img src={prize.titleIcon} alt={prize.title} />
        <span>{prize.title}</span>
      </div>

      {/* Car Progress Icons */}
      <div className="carBox__icons">
        {progressIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="Car Progress"
            className={icon === prize.iconActive ? "carActive" : "carInactive"}
            onClick={() => setActiveCount(index + 1)}
          />
        ))}
      </div>

      <div className="carBox__carIcon">
        <img src={prize.bigIcon} alt={prize.title} />
      </div>
    </div>
  );
};

export default MultipleProgresses;
