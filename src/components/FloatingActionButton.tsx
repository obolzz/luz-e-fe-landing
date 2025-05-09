
import React, { useState, useEffect } from 'react';
import { CircleDollarSign } from 'lucide-react';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling past 300px
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
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      <a 
        href="https://pay.cakto.com.br/nmr3rpd_296397" 
        className="flex items-center text-base md:text-lg bg-divine-red hover:bg-divine-gold text-white hover:text-divine-darkGray py-3 px-6 rounded-full transition-all duration-300 hover:scale-110 shadow-xl font-bold"
      >
        <CircleDollarSign className="mr-2 h-5 w-5" />
        <span>QUERO AGORA!</span>
      </a>
    </div>
  );
};

export default FloatingActionButton;
