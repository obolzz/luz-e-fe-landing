
import React from 'react';
import { Bird } from 'lucide-react';
import divineLight from '../assets/divine-light.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2600&auto=format&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white animate-ping opacity-75 duration-1000 delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white animate-ping opacity-75 duration-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-white animate-ping opacity-75 duration-1500 delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-white animate-ping opacity-75 duration-1200 delay-500"></div>
      </div>
      
      <div className="absolute top-10 animate-float">
        <Bird className="h-16 w-16 text-white opacity-90" />
      </div>
      
      <div className="max-w-3xl mx-auto z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg">
          Deus não erra.<br />
          <span className="block mt-2">Se você está aqui, é porque Ele te chamou.</span>
        </h1>
        
        <div className="mb-8 w-24 h-1 bg-divine-gold mx-auto rounded"></div>
        
        <a 
          href="https://pay.cakto.com.br/nmr3rpd_296397" 
          className="divine-cta inline-block mt-8 mb-12 w-full sm:w-auto relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-divine-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          Quero receber minha Revelação Divina
        </a>
        
        <div className="arrow-down animate-bounce mt-12">
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
