
import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const FloatingTimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating timer after scrolling past 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-4 bg-white py-2 px-4 rounded-full shadow-lg border border-divine-gold">
        <CountdownTimer />
        <a 
          href="https://pay.cakto.com.br/nmr3rpd_296397" 
          className="text-sm bg-divine-red text-white py-2 px-4 rounded-full hover:scale-105 transition-transform"
        >
          Quero agora!
        </a>
      </div>
    </div>
  );
};

export default FloatingTimer;
