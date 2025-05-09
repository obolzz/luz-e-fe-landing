
import React, { useState, useEffect, createContext, useContext } from 'react';

// Create context to share timer state
const TimerContext = createContext<{
  minutes: number;
  seconds: number;
}>({
  minutes: 4,
  seconds: 59
});

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
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
    <TimerContext.Provider value={{ minutes, seconds }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);

const CountdownTimer = () => {
  const { minutes, seconds } = useTimer();
  
  return (
    <div className="timer-text flex items-center">
      Oferta válida por{' '}
      <div className="flex items-center ml-1">
        <div className="flex items-center justify-center bg-divine-red text-white font-mono font-bold rounded px-2 mx-0.5 min-w-[28px] shadow-inner">
          {String(minutes).padStart(2, '0')}
        </div>
        <span className="mx-0.5 animate-pulse font-bold">:</span>
        <div className="flex items-center justify-center bg-divine-red text-white font-mono font-bold rounded px-2 mx-0.5 min-w-[28px] shadow-inner">
          {String(seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
