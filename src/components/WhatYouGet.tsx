import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const WhatYouGet = () => {
  const features = [
    'Full custom website, mobile-optimized',
    'Free domain for 1 year',
    'Free hosting for 3 months',
    'Free chatbot with local knowledge base',
    'Google Maps, WhatsApp, and Call Button integration',
    'Custom contact form with lead alerts',
    'SSL secured & professionally optimized',
    'One round of post-launch edits',
    'Launch graphic to announce your site on socials'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need. <span className="text-blue-600">Done For You.</span>
          </h2>
          <div className="flex items-center justify-center mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-6 h-6 text-blue-600 mr-2 animate-bounce-subtle" />
            <span className="text-lg text-blue-600 font-semibold">Complete Website Package</span>
            <Sparkles className="w-6 h-6 text-blue-600 ml-2 animate-bounce-subtle" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 card-3d group fade-in border border-gray-100"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-green-100 rounded-full p-1 group-hover:bg-green-200 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-gray-900 font-medium group-hover:text-gray-700 transition-colors">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto card-3d fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-xl text-gray-600 font-semibold">
            All delivered within 24 hours. <span className="text-blue-600">No upfront cost.</span>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;