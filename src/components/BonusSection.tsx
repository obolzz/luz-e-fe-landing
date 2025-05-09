
import React from 'react';

const bonuses = [
  {
    id: 1,
    title: "E-book \"Sinais Divinos\"",
    description: "Aprenda a reconhecer os sinais que Deus envia para sua vida diariamente.",
    icon: "📘"
  },
  {
    id: 2,
    title: "Manual \"Segredos de Salomão\"",
    description: "Sabedoria ancestral para prosperidade e sucesso em todas as áreas da vida.",
    icon: "📜"
  },
  {
    id: 3,
    title: "Bônus Surpresa",
    description: "Um presente especial que só será revelado após sua compra.",
    icon: "🎁"
  }
];

const BonusSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-divine-red">BÔNUS</span> Exclusivos para quem agir agora!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id} 
              className="bg-gradient-gold p-1 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="bg-white p-6 rounded-lg h-full">
                <div className="text-5xl mb-4">{bonus.icon}</div>
                <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                <p>{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta"
          >
            Quero receber tudo agora mesmo
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
