
import React from 'react';

const journeyItems = [
  {
    id: 1,
    title: "Revelação Personalizada",
    description: "Uma mensagem divinamente inspirada, criada especialmente para você e suas circunstâncias atuais.",
    icon: "✨"
  },
  {
    id: 2,
    title: "Guia Espiritual Completo",
    description: "Orientações práticas para implementar as revelações em sua vida diária e experimentar a transformação.",
    icon: "📘"
  },
  {
    id: 3,
    title: "Meditações Guiadas",
    description: "Reflexões poderosas para aprofundar sua conexão com o divino e alinhar seu espírito.",
    icon: "🧘"
  },
  {
    id: 4,
    title: "Orações Sagradas",
    description: "Textos sagrados que amplificam sua comunicação com Deus e abrem canais de bênçãos.",
    icon: "🙏"
  },
  {
    id: 5,
    title: "Rituais de Purificação",
    description: "Práticas seguras para limpar energias negativas e abrir espaço para o novo em sua vida.",
    icon: "💧"
  },
  {
    id: 6,
    title: "Proteções Espirituais",
    description: "Escudos energéticos para proteger você e sua família contra inveja e energias negativas.",
    icon: "🛡️"
  },
  {
    id: 7,
    title: "Orientações de Prosperidade",
    description: "Segredos divinos para desbloquear sua abundância financeira e atrair bênçãos materiais.",
    icon: "💰"
  },
  {
    id: 8,
    title: "Conexão com Anjos Guardiões",
    description: "Métodos para fortalecer sua ligação com seus guias espirituais e receber proteção celestial.",
    icon: "👼"
  }
];

const JourneySection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua jornada espiritual inclui:</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyItems.map((item) => (
            <div 
              key={item.id} 
              className="shine-border bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-divine-gold gold-shimmer">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 text-divine-gold">✝</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta"
          >
            Quero iniciar minha jornada espiritual agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
