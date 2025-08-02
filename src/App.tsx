import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyWebnova from './components/WhyWebnova';
import WhatYouGet from './components/WhatYouGet';
import HowItWorks from './components/HowItWorks';
import ChatbotBonus from './components/ChatbotBonus';
import Testimonials from './components/Testimonials';
import LimitedOffer from './components/LimitedOffer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import ChatBot from './components/ChatBot';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyWebnova />
      <WhatYouGet />
      <HowItWorks />
      <ChatbotBonus />
      <Testimonials />
      <LimitedOffer />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
      <ChatBot />
    </div>
  );
}

export default App;