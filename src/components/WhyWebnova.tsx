import React from 'react';
import { Zap, DollarSign, Palette, Sparkles } from 'lucide-react';

const WhyWebnova = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Websites Built for Busy Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Most business owners don't have time, energy, or tech skills to build a website — and hiring a designer is expensive and slow. 
            Webnova handles <strong>everything</strong> with zero effort from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="text-center group fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
              <Zap className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Delivered in 24hrs</h3>
            <p className="text-gray-600 text-lg">No delays. No DIY. Just results.</p>
          </div>

          <div className="text-center group fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
              <DollarSign className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">100% Free Until You're Happy</h3>
            <p className="text-gray-600 text-lg">You only pay after review.</p>
          </div>

          <div className="text-center group fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
              <Palette className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Fully Custom</h3>
            <p className="text-gray-600 text-lg">No templates. Your brand, your vision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebnova;