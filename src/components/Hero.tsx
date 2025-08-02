import React from 'react';
import { CheckCircle, Shield, Clock, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {



  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <div className="fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 animate-bounce-subtle">
              <Sparkles className="w-4 h-4 mr-2" />
              Free Website Build - Limited Spots Available
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight fade-in" style={{ animationDelay: '0.2s' }}>
            Your Website.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse-glow">Built for Free</span> in 2 Days.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto fade-in" style={{ animationDelay: '0.4s' }}>
            We design, build, and launch your site in lightning speed — and you only pay if you're 100% happy.
          </p>
          
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary gradient-blue text-white px-10 py-4 rounded-xl text-xl font-semibold shadow-2xl mb-6 inline-flex items-center group"
            >
              Book Your Free Build Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-gray-500 mb-12 fade-in" style={{ animationDelay: '0.8s' }}>
            No Upfront Cost. No Risk. No Templates.
          </p>
          
          {/* Intro Video */}
          <div className="relative max-w-4xl mx-auto mb-16 fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 card-3d">
              <video
                src="/Intro.mp4"
                className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                controls
                preload="metadata"
                playsInline
              />
            </div>
          </div>
          
          {/* Website Mockup */}
          <div className="relative max-w-4xl mx-auto mb-16 fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500 card-3d">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="gradient-blue h-32 rounded-lg mb-4 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-semibold text-lg">Your Business Website</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 rounded w-3/4 animate-pulse"></div>
                  <div className="bg-gray-200 h-4 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-xl shadow-xl p-4 transform -rotate-2 hidden md:block animate-float card-3d" style={{ animationDelay: '1s' }}>
              <div className="w-20 h-32 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <div className="gradient-blue w-16 h-8 rounded mb-2"></div>
                <div className="space-y-1">
                  <div className="bg-gray-200 h-2 w-12 rounded"></div>
                  <div className="bg-gray-200 h-2 w-8 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-3d hover:shadow-2xl transition-all duration-300 fade-in" style={{ animationDelay: '1.2s' }}>
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3 hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Free Domain 1 Year</h3>
              <p className="text-gray-600 text-sm">Professional domain registration included</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-3d hover:shadow-2xl transition-all duration-300 fade-in" style={{ animationDelay: '1.4s' }}>
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3 hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Free Hosting 3 Months</h3>
              <p className="text-gray-600 text-sm">Lightning-fast hosting to get you started</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-3d hover:shadow-2xl transition-all duration-300 fade-in" style={{ animationDelay: '1.6s' }}>
              <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-3 hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Free Custom Chatbot</h3>
              <p className="text-gray-600 text-sm">AI assistant trained for your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;