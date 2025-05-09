
import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import { Clock, CircleDollarSign } from 'lucide-react';

const FloatingTimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating timer after scrolling past 200px
      if (window.scrollY > 200) {
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
          <Clock className="text-divine-red mr-2 h-5 w-5 animate-pulse" />
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default FloatingTimer;
