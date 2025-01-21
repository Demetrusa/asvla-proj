import React from 'react';
import './Snowfall.scss';

const Snowfall: React.FC = () => {
  return (
    <div className="initial-snow">
      {Array.from({ length: 50 }).map((_, index) => (
        <div className="snow" key={index}>&#10052;</div>
      ))}
    </div>
  );
};

export default Snowfall;