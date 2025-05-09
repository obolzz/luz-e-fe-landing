
import React from 'react';
import { CircleCheck, Star } from 'lucide-react';

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
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-8xl text-divine-gold">✝</div>
        <div className="absolute bottom-10 right-10 text-8xl text-divine-gold rotate-12">✝</div>
        <div className="absolute top-1/2 left-1/3 text-6xl text-divine-gold -rotate-12">✝</div>
        
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute animate-float opacity-10" 
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            <Star className="text-divine-gold w-8 h-8" fill="gold" />
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua jornada espiritual inclui:</h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group shine-border bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 text-divine-gold gold-shimmer">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-divine-red transition-colors">{item.title}</h3>
              <p>{item.description}</p>
              <div className="absolute -bottom-2 -right-2 opacity-5 text-6xl text-divine-gold group-hover:opacity-10 transition-opacity">✝</div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-divine-gold">
                <CircleCheck className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta group"
          >
            Quero iniciar minha jornada espiritual agora
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
