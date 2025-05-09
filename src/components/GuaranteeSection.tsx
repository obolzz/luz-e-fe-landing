
import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-gold">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 text-5xl">🛡️</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Garantia Incondicional: 7 dias para se arrepender<br />
          <span className="text-divine-red">(mas você não vai querer)</span>
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Se não ficar satisfeito, devolvemos seu investimento. Sem perguntas. 
          Apenas a paz que você busca. Ele já te chamou... agora é a sua vez 
          de responder com fé.
        </p>
        
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-divine-gold rounded"></div>
        </div>
        
        <p className="verse text-2xl text-divine-darkGray italic">
          "Fé é a certeza daquilo que esperamos e a prova das coisas que não vemos."
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
