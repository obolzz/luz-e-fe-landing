
import React from 'react';
import { Shield } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-gold relative overflow-hidden">
      {/* Background rays effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.3)_0%,transparent_70%)] opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
          <Shield className="h-16 w-16 mx-auto text-divine-red" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-divine-red to-divine-gold">
            Garantia Incondicional: 7 dias para se arrepender
          </span><br />
          <span className="text-divine-red italic block mt-2 animate-pulse-soft">mas você não vai querer</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-8 bg-white/40 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-divine-gold/30 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-lg md:text-xl">
            Se não ficar satisfeito, devolvemos seu investimento. Sem perguntas. 
            Apenas a paz que você busca. Ele já te chamou... agora é a sua vez 
            de responder com fé.
          </p>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-divine-gold rounded"></div>
        </div>
        
        <p className="verse text-3xl text-divine-darkGray italic font-bold tracking-wide">
          "Fé é a certeza daquilo que esperamos e a prova das coisas que não vemos."
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
