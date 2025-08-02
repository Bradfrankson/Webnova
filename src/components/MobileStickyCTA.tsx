import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const MobileStickyCTA = () => {
  return (
    <div className="sticky-cta md:hidden">
      <a 
        href="https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full btn-primary gradient-blue text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg inline-flex items-center justify-center group"
      >
        <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Book Free Call Now
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default MobileStickyCTA;