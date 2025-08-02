import React from 'react';
import { MessageCircle, Clock, Users, Sparkles, Bot } from 'lucide-react';

const ChatbotBonus = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-rotate-3d"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center mb-6 fade-in">
            <Bot className="w-8 h-8 text-blue-600 mr-2 animate-bounce-subtle" />
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">AI-Powered Assistant</span>
            <Sparkles className="w-8 h-8 text-blue-600 ml-2 animate-bounce-subtle" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get a Free AI Chatbot That Works While You Sleep
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            Every Webnova website includes a custom chatbot that's trained to handle FAQs, capture leads, and help customers — 24/7. 
            It feels like a real assistant, and it's included 100% free.
          </p>
          <p className="text-lg text-blue-600 font-semibold fade-in" style={{ animationDelay: '0.4s' }}>
            Perfect for restaurants, salons, contractors, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center card-3d hover:shadow-2xl transition-all duration-300 group fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
              <Clock className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
            <p className="text-gray-600">Never miss a potential customer, even when you're closed</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center card-3d hover:shadow-2xl transition-all duration-300 group fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Responses</h3>
            <p className="text-gray-600">Trained on your business info to answer questions accurately</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center card-3d hover:shadow-2xl transition-all duration-300 group fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
              <Users className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Capture</h3>
            <p className="text-gray-600">Automatically collects contact info and sends you alerts</p>
          </div>
        </div>

        {/* Chatbot Demo */}
        <div className="mt-16 max-w-2xl mx-auto relative z-10 fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-3d animate-float">
            <div className="gradient-blue p-4 text-white">
              <div className="flex items-center">
                <Bot className="w-5 h-5 mr-2 animate-bounce-subtle" />
              <h4 className="font-semibold">Your Business Chat Assistant</h4>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex">
                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs shadow-sm">
                  <p className="text-sm">Hi! What are your business hours?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="gradient-blue text-white rounded-2xl p-3 max-w-xs shadow-lg">
                  <p className="text-sm">We're open Monday-Saturday 9AM-6PM. Would you like to schedule an appointment?</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs shadow-sm">
                  <p className="text-sm">Yes, please!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotBonus;