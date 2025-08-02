import React, { useState } from 'react';
import { Calendar, Phone, Mail, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const FinalCTA = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full mix-blend-overlay opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-5 animate-rotate-3d"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16 relative z-10">
          <div className="flex items-center justify-center mb-6 fade-in">
            <div className="bg-white/20 p-3 rounded-full">
              <Calendar className="w-8 h-8 text-white animate-bounce-subtle" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
            Let's Build Your Site. <span className="text-blue-200">For Free.</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
            Ready to get your professional website in just 2 days? Let's chat about your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* GHL Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl card-3d fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-blue-600 mr-2 animate-bounce-subtle" />
              <h3 className="text-2xl font-bold text-gray-900">Get Started Today</h3>
            </div>
            <div className="w-full">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/GrGmXgigiUe6zYX5Z2kE"
                style={{
                  width: '100%',
                  height: '572px',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 0 20px rgba(0,0,0,0.05)'
                }}
                id="inline-GrGmXgigiUe6zYX5Z2kE" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Webnova"
                data-height="572"
                data-layout-iframe-id="inline-GrGmXgigiUe6zYX5Z2kE"
                data-form-id="GrGmXgigiUe6zYX5Z2kE"
                title="Webnova"
              />
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center">
              No payment required. Just a quick chat to get started.
            </p>
          </div>

          {/* Process Overview */}
          <div className="text-white fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-2 animate-bounce-subtle" />
              What happens next?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors card-3d">
                  <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">15-Minute Strategy Call</h4>
                  <p className="text-blue-100">We'll understand your business, goals, and design preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors card-3d">
                  <Calendar className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">48-Hour Build Sprint</h4>
                  <p className="text-blue-100">Our team designs, builds, and optimizes your complete website.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors card-3d">
                  <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Review & Launch</h4>
                  <p className="text-blue-100">Love it? Pay and go live. Don't love it? You owe nothing.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 card-3d">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Websites Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">48h</div>
                  <div className="text-blue-200 text-sm">Avg Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional spacing below form */}
        <div className="h-8"></div>
      </div>
    </section>
  );
};

export default FinalCTA;