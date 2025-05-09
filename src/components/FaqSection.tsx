
import React from 'react';

const faqs = [
  {
    id: 1,
    question: "Quanto tempo leva para receber a Revelação Divina?",
    answer: "Você receberá acesso imediato após a confirmação do pagamento, diretamente no seu email."
  },
  {
    id: 2,
    question: "Como sei que a revelação é realmente para mim?",
    answer: "Cada revelação é criada considerando aspectos únicos da sua vida e jornada espiritual, garantindo uma conexão verdadeira com sua alma."
  },
  {
    id: 3,
    question: "Preciso ter conhecimento religioso prévio?",
    answer: "Não. A Revelação Divina foi desenvolvida para ser acessível a todos, independentemente do seu nível de conhecimento espiritual."
  },
  {
    id: 4,
    question: "Posso pedir reembolso se não gostar?",
    answer: "Sim. Oferecemos garantia de satisfação de 7 dias. Se não estiver completamente satisfeito, devolveremos 100% do seu investimento."
  },
  {
    id: 5,
    question: "Os bônus são realmente gratuitos?",
    answer: "Sim! Todos os bônus listados estão incluídos sem custo adicional quando você adquire a Revelação Divina hoje."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-divine-gold"
            >
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta"
          >
            Estou pronto para minha Revelação Divina
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
