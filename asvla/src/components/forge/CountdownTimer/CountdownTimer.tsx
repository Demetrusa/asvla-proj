import React, { useState, useEffect } from "react";
import "./CountdownTimer.scss";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    return {
      days: Math.floor(difference / (1000 * 3600 * 24)),
      hours: Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600)),
      minutes: Math.floor((difference % (1000 * 3600)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isFinished: difference <= 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft.isFinished) {
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      {timeLeft.isFinished ? (
        <div className="countdown-complete">Time's up!</div>
      ) : (
        <div className="time">
          <div className="time-unit">
            <span className="value">{timeLeft.days} :</span>
            {/* <span className="label">Days</span> */}
          </div>
          <div className="time-unit">
            <span className="value">{timeLeft.hours} :</span>
            {/* <span className="label">Hours</span> */}
          </div>
          <div className="time-unit">
            <span className="value">{timeLeft.minutes} :</span>
            {/* <span className="label">Minutes</span> */}
          </div>
          <div className="time-unit">
            <span className="value">{timeLeft.seconds}</span>
            {/* <span className="label">Seconds</span> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
