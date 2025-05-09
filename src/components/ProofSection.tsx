
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Nunca imaginei que uma revelação poderia mudar tanto a minha vida. Encontrei paz, direção e propósito depois de anos de angústia. Agradeço a Deus por ter me guiado até aqui.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "João Oliveira",
    location: "Rio de Janeiro, RJ",
    text: "Estava perdido, sem esperança. Esta revelação chegou como uma luz no fim do túnel. Minha família notou a diferença em apenas 3 dias. Sinto que renasci espiritualmente.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Ana Beatriz",
    location: "Salvador, BA",
    text: "Estava cheia de dúvidas e medos sobre meu futuro. Após receber a Revelação Divina, tudo ficou mais claro. Hoje tenho certeza do meu propósito e caminho espiritual.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    location: "Belo Horizonte, MG",
    text: "Minha vida financeira estava em ruínas. Após aplicar os ensinamentos, as portas começaram a se abrir. É incrível como Deus age quando nos abrimos para Sua sabedoria!",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 5,
    name: "Fernanda Costa",
    location: "Fortaleza, CE",
    text: "Sofria de ansiedade crônica por anos. Com as orientações recebidas, encontrei paz interior. Os médicos ficaram surpresos com minha transformação.",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 6,
    name: "Pedro Henrique",
    location: "Recife, PE",
    text: "Meu casamento estava por um fio. A revelação me mostrou onde eu estava errando e como mudar. Hoje, minha família está unida novamente, graças a Deus.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
];

const ProofSection = () => {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(800);
  const targetCount = 847;
  
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  // Change testimonials carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [totalPages]);

  // Counter animation
  useEffect(() => {
    // Reset counter when component mounts or when user revisits
    setCount(800);
    
    const duration = 3000; // 3 seconds for the animation
    const framesPerSecond = 30;
    const incrementsPerFrame = (targetCount - 800) / (duration / 1000 * framesPerSecond);
    let currentCount = 800;
    
    const timer = setInterval(() => {
      currentCount += incrementsPerFrame;
      
      if (currentCount >= targetCount) {
        clearInterval(timer);
        setCount(targetCount);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 1000 / framesPerSecond);
    
    return () => clearInterval(timer);
  }, []);

  const currentTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 px-4 bg-gradient-gold relative overflow-hidden">
      {/* Floating particles effect */}
      <div className="particles absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute animate-float opacity-20" 
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            <Star className="text-divine-gold w-6 h-6" />
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mais de <span className="text-divine-red text-5xl font-bold animate-pulse">{count}</span> vidas transformadas.
          </h2>
          <p className="text-xl md:text-2xl">Veja o que elas têm a dizer:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-divine-gold transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-divine-gold" 
                />
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic mb-4">"{testimonial.text}"</p>
              <div className="flex justify-end">
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
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="inline-flex items-center justify-center gap-2 bg-divine-red text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 text-xl"
          >
            Quero transformar minha vida agora
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
