
import React from 'react';
import CountdownTimer from './CountdownTimer';
import { CircleDollarSign } from 'lucide-react';

const OfferSection = () => {
  return (
    <section className="py-16 px-4 bg-divine-red text-white relative overflow-hidden">
      {/* Golden light effect in the background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, #FFD700 0%, transparent 70%)',
        }}
      ></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="price-container mb-12 relative">
          <div className="bg-white rounded-xl p-8 shadow-2xl mx-auto max-w-xl transform transition-all duration-500 hover:scale-105">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <div className="relative mb-4 md:mb-0 transform -rotate-6">
                <span className="text-gray-400 text-5xl md:text-6xl line-through font-black">R$97</span>
                <div className="absolute -top-5 -right-5 rotate-12 bg-divine-gold text-divine-darkGray text-sm font-bold py-1 px-3 rounded-full animate-pulse">
                  -80%
                </div>
                <div className="absolute h-1.5 w-full bg-divine-red transform rotate-0 top-1/2"></div>
              </div>
              
              <div className="text-center relative">
                <span className="text-sm font-bold text-gray-500 uppercase block">Por apenas</span>
                <div className="text-divine-red text-6xl md:text-8xl font-black relative">
                  R$19,90
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-divine-red via-divine-gold to-divine-red animate-shine"></div>
                </div>
                <span className="text-gray-600 text-xl md:text-2xl block mt-2">Ou em 12x de R$2,08</span>
              </div>
            </div>
            
            <p className="text-base text-gray-500 mt-6 italic">*Oferta por tempo limitado. Preço normal: R$97,00</p>
            
            <div className="mt-8 bg-gray-100 rounded-lg py-4 px-6 inline-block shadow-inner">
              <CountdownTimer />
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="inline-flex items-center justify-center gap-2 bg-white text-divine-red hover:bg-divine-gold hover:text-divine-darkGray font-bold py-5 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-2xl"
          >
            <CircleDollarSign className="mr-1 h-7 w-7" />
            <span>Sim, quero minha transformação agora!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
