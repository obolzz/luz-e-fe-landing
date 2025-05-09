
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProofSection from '@/components/ProofSection';
import JourneySection from '@/components/JourneySection';
import GuaranteeSection from '@/components/GuaranteeSection';
import OfferSection from '@/components/OfferSection';
import BonusSection from '@/components/BonusSection';
import FaqSection from '@/components/FaqSection';
import FloatingTimer from '@/components/FloatingTimer';
import FloatingActionButton from '@/components/FloatingActionButton';
import FlyingDoveAnimation from '@/components/FlyingDoveAnimation';
import Footer from '@/components/Footer';
import { TimerProvider } from '@/components/CountdownTimer';

const Index = () => {
  return (
    <TimerProvider>
      <div className="min-h-screen bg-divine-white">
        <HeroSection />
        <ProofSection />
        <JourneySection />
        <GuaranteeSection />
        <OfferSection />
        <BonusSection />
        <FaqSection />
        <FlyingDoveAnimation />
        <FloatingTimer />
        <FloatingActionButton />
        <Footer />
      </div>
    </TimerProvider>
  );
};

export default Index;
