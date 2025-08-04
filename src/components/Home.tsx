import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Header from './Header';
import Hero from './Hero';
import WhyWebnova from './WhyWebnova';
import WhatYouGet from './WhatYouGet';
import HowItWorks from './HowItWorks';
import ChatbotBonus from './ChatbotBonus';
import Testimonials from './Testimonials';
import LimitedOffer from './LimitedOffer';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import MobileStickyCTA from './MobileStickyCTA';
import ChatBot from './ChatBot';

const Home = () => {
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
};

export default Home;
