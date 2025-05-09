
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProofSection from '@/components/ProofSection';
import JourneySection from '@/components/JourneySection';
import GuaranteeSection from '@/components/GuaranteeSection';
import OfferSection from '@/components/OfferSection';
import BonusSection from '@/components/BonusSection';
import FaqSection from '@/components/FaqSection';
import FloatingTimer from '@/components/FloatingTimer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-divine-white">
      <HeroSection />
      <ProofSection />
      <JourneySection />
      <GuaranteeSection />
      <OfferSection />
      <BonusSection />
      <FaqSection />
      <FloatingTimer />
      <Footer />
    </div>
  );
};

export default Index;
