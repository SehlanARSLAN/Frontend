import React, { useEffect, useState, useCallback } from "react";
import './styles/countdown.css'
function Countdown() {
    const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
      };
  const calculateTimeRemaining = useCallback(() => {
    const now = new Date().getTime();
    const targetDate = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

    const difference = targetDate - now;

    if (difference > 0) {
      const days = addLeadingZero(Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = addLeadingZero(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = addLeadingZero(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = addLeadingZero( Math.floor((difference % (1000 * 60)) / 1000));

      return { days, hours, minutes, seconds };
    } else {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  }, []);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeRemaining]);

  return (
    <div className="sayacContain">
      <div className="sayacLeft">Yeni Yıl Kampanyası Bitimine <b>SON</b></div>
      <div className="sayacRight">
        <span>{timeRemaining.days}<p>Gün</p></span> 
        <span>{timeRemaining.hours}<p>Saat</p></span> 
        <span>{timeRemaining.minutes}<p>Dk</p></span> 
        <span>{timeRemaining.seconds}<p>Sn</p></span>
      </div>
    </div>
  );
}

export default Countdown;
