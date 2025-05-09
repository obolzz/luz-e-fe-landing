
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CircleDollarSign } from 'lucide-react';

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
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto mb-6"></div>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="bg-white p-1 rounded-lg shadow-md border-l-4 border-divine-gold overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <AccordionTrigger className="px-5 py-4 text-xl font-bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 py-4 text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="divine-cta group flex items-center justify-center mx-auto"
          >
            <CircleDollarSign className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Estou pronto para minha Revelação Divina
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
