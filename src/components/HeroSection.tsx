
import React from 'react';
import { Bird } from 'lucide-react';
import BackgroundImage from '../assets/divine-light.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-10 animate-float">
        <Bird className="h-16 w-16 text-white opacity-90" />
      </div>
      
      <div className="max-w-3xl mx-auto z-10">
        <h1 className="text-divine-blue text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg">
          Deus não erra.<br />
          <span className="block mt-2">Se você está aqui, é porque Ele te chamou.</span>
        </h1>
        
        <a 
          href="https://pay.cakto.com.br/nmr3rpd_296397" 
          className="divine-cta inline-block mt-8 mb-12 w-full sm:w-auto"
        >
          Quero receber minha Revelação Divina
        </a>
        
        <div className="arrow-down animate-pulse mt-12">
          <svg 
            className="w-8 h-8 mx-auto text-white"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
