
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KeyFeatures from '@/components/KeyFeatures';
import RegistrationCTA from '@/components/RegistrationCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <KeyFeatures />
        <RegistrationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
