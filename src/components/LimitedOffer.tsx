import React, { useState, useEffect } from 'react';
import { AlertCircle, Clock, Zap } from 'lucide-react';

const LimitedOffer = () => {
  const [spotsRemaining, setSpotsRemaining] = useState(2);
  const [progress, setProgress] = useState(60);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 border-y-4 border-red-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6 fade-in">
          <AlertCircle className="w-8 h-8 text-red-600 mr-3 animate-bounce-subtle" />
          <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg animate-pulse-glow">
            Limited Time
          </span>
          <Clock className="w-8 h-8 text-red-600 ml-3 animate-bounce-subtle" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          Only <span className="text-red-600">5 Free Builds</span> Accepted Each Week
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 fade-in" style={{ animationDelay: '0.4s' }}>
          To maintain fast turnaround, <strong>Webnova</strong> only accepts a few new builds weekly.
        </p>

        {/* Progress Bar */}
        <div className="mb-8 fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 card-3d">
          <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-red-600" />
                Spots Remaining This Week:
              </span>
              <span className="text-lg font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">{spotsRemaining}</span>
          </div>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div 
                className="bg-gradient-to-r from-red-500 to-red-600 h-6 rounded-full transition-all duration-1000 animate-pulse-glow relative" 
              style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-5 rounded-xl text-xl font-semibold shadow-2xl mb-4 inline-flex items-center group"
          >
            <AlertCircle className="w-6 h-6 mr-3 group-hover:animate-spin" />
            Book Now Before Slots Fill Up
            <Zap className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm fade-in" style={{ animationDelay: '1s' }}>
          Next available slots open Monday
        </p>
      </div>
    </section>
  );
};

export default LimitedOffer;