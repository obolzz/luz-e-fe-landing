
import React from 'react';
import { Gift, Book, FileText } from 'lucide-react';

const bonuses = [
  {
    id: 1,
    title: "E-book \"Sinais Divinos\"",
    description: "Aprenda a reconhecer os sinais que Deus envia para sua vida diariamente.",
    icon: <Book className="w-12 h-12 text-divine-gold" strokeWidth={1.5} />,
    animation: "fade-right"
  },
  {
    id: 2,
    title: "Manual \"Segredos de Salomão\"",
    description: "Sabedoria ancestral para prosperidade e sucesso em todas as áreas da vida.",
    icon: <FileText className="w-12 h-12 text-divine-gold" strokeWidth={1.5} />,
    animation: "fade-up"
  },
  {
    id: 3,
    title: "Bônus Surpresa",
    description: "Um presente especial que só será revelado após sua compra.",
    icon: <Gift className="w-12 h-12 text-divine-gold" strokeWidth={1.5} />,
    animation: "fade-left"
  }
];

const BonusSection = () => {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background rays of light effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #FFD700 0%, transparent 70%)',
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-3xl md:text-4xl mb-2 animate-bounce">🎁</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="animated-text text-5xl md:text-6xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-divine-red via-divine-gold to-divine-red">BÔNUS</span>
            <span className="ml-2">Exclusivos para quem agir agora!</span>
          </h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id} 
              className="group"
            >
              <div className="bg-gradient-gold p-[2px] rounded-lg shadow-lg transform transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-divine-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-white p-8 rounded-lg h-full flex flex-col items-center text-center">
                  <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {bonus.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-divine-red transition-colors">{bonus.title}</h3>
                  <p className="text-lg">{bonus.description}</p>
                  <div className="mt-4 flex justify-center">
                    <span className="inline-block w-12 h-1 bg-divine-gold rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta group flex items-center justify-center mx-auto"
          >
            <Gift className="mr-2 w-5 h-5" />
            <span>Quero receber tudo agora mesmo</span>
            <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
