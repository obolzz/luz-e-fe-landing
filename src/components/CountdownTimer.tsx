
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdown);
      }
    }, 1000);
    
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  
  return (
    <div className="timer-text">
      Oferta válida por{' '}
      <span className="text-divine-red font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default CountdownTimer;
