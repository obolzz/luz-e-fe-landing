
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
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          DE R$97 POR APENAS R$19,90!
        </h2>
        <p className="text-xl md:text-2xl mb-2">Ou em 12x de R$2,08</p>
        <p className="text-sm mb-8">*Oferta por tempo limitado. Preço normal: R$97,00</p>
        
        <div className="bg-white text-divine-red rounded-lg py-3 px-4 inline-block mb-8">
          <CountdownTimer />
        </div>
        
        <div>
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta bg-white text-divine-red hover:bg-divine-gold hover:text-divine-darkGray"
          >
            Sim, quero minha transformação agora!
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
