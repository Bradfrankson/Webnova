import React from 'react';
import { Zap, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

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
          {/* Logo and Contact Info */}
          <div className="md:col-span-2 fade-in">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="flex items-center justify-center w-10 h-10 gradient-blue rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 card-3d">
                <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors">WEBNOVA</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">Lightning-Fast Websites. Built for You.</p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Atlanta, Georgia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:4705255650" className="hover:text-blue-400 transition-colors">
                  (470) 525-5650
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info.webbnova.org" className="hover:text-blue-400 transition-colors">
                  info.webbnova.org
                </a>
              </div>
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
              <li><a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Terms of Service</a></li>
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1">Privacy Policy</a></li>
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