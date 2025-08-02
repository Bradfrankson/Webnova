import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 gradient-blue rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
              <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">WEBNOVA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">How It Works</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">FAQ</a>
            <a 
              href="https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary gradient-blue text-white px-6 py-2 rounded-xl font-semibold shadow-lg inline-flex items-center group"
            >
              Book Free Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;