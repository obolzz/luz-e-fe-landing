
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-divine-darkGray text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="verse text-2xl mb-4">
            "Deus transforma vidas, e talvez a próxima seja a sua."
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-divine-gold"></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Revelação Divina. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-divine-gold">Termos de uso</a>
            <a href="#" className="text-white hover:text-divine-gold">Política de privacidade</a>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-white hover:text-divine-gold">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-divine-gold">
                f
              </div>
            </a>
            <a href="#" className="text-white hover:text-divine-gold">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-divine-gold">
                i
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
