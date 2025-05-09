
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Nunca imaginei que uma revelação poderia mudar tanto a minha vida. Encontrei paz, direção e propósito depois de anos de angústia. Agradeço a Deus por ter me guiado até aqui."
  },
  {
    id: 2,
    name: "João Oliveira",
    location: "Rio de Janeiro, RJ",
    text: "Estava perdido, sem esperança. Esta revelação chegou como uma luz no fim do túnel. Minha família notou a diferença em apenas 3 dias. Sinto que renasci espiritualmente."
  },
  {
    id: 3,
    name: "Ana Beatriz",
    location: "Salvador, BA",
    text: "Estava cheia de dúvidas e medos sobre meu futuro. Após receber a Revelação Divina, tudo ficou mais claro. Hoje tenho certeza do meu propósito e caminho espiritual."
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    location: "Belo Horizonte, MG",
    text: "Minha vida financeira estava em ruínas. Após aplicar os ensinamentos, as portas começaram a se abrir. É incrível como Deus age quando nos abrimos para Sua sabedoria!"
  },
  {
    id: 5,
    name: "Fernanda Costa",
    location: "Fortaleza, CE",
    text: "Sofria de ansiedade crônica por anos. Com as orientações recebidas, encontrei paz interior. Os médicos ficaram surpresos com minha transformação."
  },
  {
    id: 6,
    name: "Pedro Henrique",
    location: "Recife, PE",
    text: "Meu casamento estava por um fio. A revelação me mostrou onde eu estava errando e como mudar. Hoje, minha família está unida novamente, graças a Deus."
  },
];

const ProofSection = () => {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(800);
  
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [totalPages]);

  useEffect(() => {
    // Animate count from 800 to 847
    let start = 800;
    const end = 847;
    const duration = 3000;
    const increment = Math.floor((end - start) / (duration / 50));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const currentTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 px-4 bg-gradient-gold">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mais de <span className="text-divine-red">{count}</span> vidas transformadas.
          </h2>
          <p className="text-xl md:text-2xl">Veja o que elas têm a dizer:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-divine-gold"
            >
              <p className="italic mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="text-divine-gold text-2xl">✝</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={cn(
                "w-3 h-3 mx-1 rounded-full transition-all duration-300",
                page === index ? "bg-divine-gold scale-125" : "bg-gray-300"
              )}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
