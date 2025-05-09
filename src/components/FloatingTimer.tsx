
import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import { Clock, CircleDollarSign } from 'lucide-react';

const FloatingTimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating timer after scrolling past 300px instead of 500px
      if (window.scrollY > 300) {
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
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-4 bg-white py-2 px-6 rounded-full shadow-xl border-2 border-divine-gold animate-fade-in">
        <div className="flex items-center">
          <Clock className="text-divine-red mr-2 h-5 w-5" />
          <CountdownTimer />
        </div>
        <a 
          href="https://pay.cakto.com.br/nmr3rpd_296397" 
          className="flex items-center text-sm bg-divine-red hover:bg-divine-gold text-white hover:text-divine-darkGray py-2 px-4 rounded-full hover:scale-105 transition-all duration-300"
        >
          <CircleDollarSign className="mr-1 h-4 w-4" />
          <span>Quero agora!</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingTimer;
