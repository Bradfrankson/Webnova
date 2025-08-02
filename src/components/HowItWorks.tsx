import React from 'react';
import { Phone, Hammer, ThumbsUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Book Your Free Call',
      description: 'We understand your business and goals.',
      number: '1'
    },
    {
      icon: Hammer,
      title: 'We Build Everything',
      description: 'Design, hosting, chatbot, domain — done in 2 days.',
      number: '2'
    },
    {
      icon: ThumbsUp,
      title: 'You Review and Approve',
      description: 'Love it? Pay and launch. Not happy? You owe nothing.',
      number: '3'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-10 animate-rotate-3d"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-indigo-100 rounded-full opacity-15 animate-rotate-3d" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            3 Simple Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative group fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="gradient-blue text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-2xl transition-all duration-300 card-3d animate-pulse-glow">
                  {step.number}
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
                  <Icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full z-10">
                    <div className="flex items-center justify-center w-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-400 animate-bounce-subtle" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center relative z-10 fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-gray-600">
            No risk. No contracts. Just a stunning website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;