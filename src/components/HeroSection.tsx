
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)`,
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
        <div className="relative">
          <div className="cross-container animate-spin-slow">
            <div className="text-white text-6xl">✝</div>
            <div className="absolute inset-0 text-divine-gold text-6xl animate-pulse-soft">✝</div>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg">
          Deus não erra.<br />
          <span className="block mt-2">Se você está aqui, é porque Ele <span className="text-divine-red animate-pulse">te chamou</span>.</span>
        </h1>
        
        <div className="mb-8 w-24 h-1 bg-divine-gold mx-auto rounded"></div>
        
        <a 
          href="https://pay.cakto.com.br/nmr3rpd_296397" 
          className="divine-cta inline-block mt-8 mb-12 w-full sm:w-auto relative overflow-hidden group transform transition-transform duration-300 hover:scale-105 text-center"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-divine-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          Quero receber minha Revelação Divina
        </a>
        
        <div className="arrow-down animate-bounce mt-12">
          <ArrowDown className="w-8 h-8 mx-auto text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
