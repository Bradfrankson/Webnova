import React from 'react';
import { Zap, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-600 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {/* Logo and Tagline */}
          <div className="md:col-span-2 fade-in">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="flex items-center justify-center w-10 h-10 gradient-blue rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
                <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors">WEBNOVA</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">Lightning-Fast Websites. Built for You.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">How It Works</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">FAQ</a></li>
              <li><a href="https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Book Call</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center relative z-10">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 fade-in">© 2025 Webnova. All rights reserved.</p>
            <button 
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-3d group fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;