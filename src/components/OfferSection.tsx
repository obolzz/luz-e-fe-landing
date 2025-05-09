
import React from 'react';
import CountdownTimer from './CountdownTimer';

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
        <div className="price-container mb-10 relative">
          <div className="bg-white rounded-xl p-6 shadow-2xl mx-auto max-w-md transform transition-all duration-500 hover:scale-105">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="relative mb-2 md:mb-0">
                <span className="text-gray-400 text-2xl line-through font-bold">R$97</span>
                <div className="absolute -top-3 -right-3 rotate-12 bg-divine-gold text-divine-darkGray text-xs font-bold py-1 px-2 rounded-full">
                  -80%
                </div>
                <div className="absolute h-0.5 w-full bg-divine-red transform rotate-6 top-1/2"></div>
              </div>
              
              <div className="text-center relative">
                <span className="text-xs font-bold text-gray-500 uppercase block">Por apenas</span>
                <div className="text-divine-red text-5xl font-black relative">
                  R$19,90
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-divine-red via-divine-gold to-divine-red"></div>
                </div>
                <span className="text-gray-600 text-sm block mt-1">Ou em 12x de R$2,08</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 italic">*Oferta por tempo limitado. Preço normal: R$97,00</p>
            
            <div className="mt-4 bg-gray-100 rounded-lg py-3 px-4 inline-block">
              <CountdownTimer />
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta inline-block bg-white text-divine-red hover:bg-divine-gold hover:text-divine-darkGray group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-divine-gold/20 transition-all duration-700 ease-out group-hover:w-full"></span>
            <span className="relative">Sim, quero minha transformação agora!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
