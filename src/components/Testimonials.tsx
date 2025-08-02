import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Star, Quote, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      business: 'Sweet Dreams Bakery',
      quote: 'Got 15 new customers in the first week! My website looks so professional, and the chatbot handles orders while I sleep.',
      rating: 5,
      videoFile: '/Sarah.mp4',
      results: {
        customers: '+15',
        orders: '+40%',
        time: '2 days'
      },
      initials: 'SM'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      business: 'Rodriguez Construction',
      quote: 'Exactly what I needed. Professional and fast. My phone hasn\'t stopped ringing since we launched.',
      rating: 5,
      videoFile: '/Mike.mp4',
      results: {
        leads: '+25',
        projects: '+60%',
        time: '2 days'
      },
      initials: 'MR'
    },
    {
      id: 3,
      name: 'Lisa Thompson',
      business: 'Thompson Hair Studio',
      quote: 'The chatbot books appointments while I sleep! My clients love the online booking system.',
      rating: 5,
      videoFile: '/Lisa.mp4',
      results: {
        bookings: '+35',
        clients: '+50%',
        time: '2 days'
      },
      initials: 'LT'
    }
  ];

  const handleVideoToggle = (testimonialId: number) => {
    setActiveVideo(activeVideo === testimonialId ? null : testimonialId);
  };

  const handleVideoEnd = () => {
    setActiveVideo(null);
  };

  const toggleMute = (testimonialId: number) => {
    setIsMuted(prev => ({
      ...prev,
      [testimonialId]: !prev[testimonialId]
    }));
  };

  const handleFullscreen = (testimonialId: number) => {
    const video = videoRefs.current[testimonialId];
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 animate-bounce-subtle">
            <Quote className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Businesses. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Real Results.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how small businesses transformed their online presence and grew their customer base in just 2 days
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-12 card-3d">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Websites Delivered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">48h</div>
              <div className="text-sm text-gray-600">Average Delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-yellow-600 fill-current" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-3d group overflow-hidden fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
                             {/* Video Section */}
               <div className="relative h-64 overflow-hidden">
                 {activeVideo === testimonial.id && testimonial.videoFile ? (
                   <div className="relative w-full h-full bg-black">
                     <video
                       ref={el => videoRefs.current[testimonial.id] = el}
                       src={testimonial.videoFile}
                       className="w-full h-full object-contain"
                       onEnded={handleVideoEnd}
                       muted={isMuted[testimonial.id]}
                       controls
                                          />
                   </div>
                                 ) : (
                   <div className="w-full h-full relative">
                     {testimonial.videoFile ? (
                       <>
                         <video
                           src={testimonial.videoFile}
                           className="w-full h-full object-cover"
                           muted
                           preload="metadata"
                         />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                           <button
                             onClick={() => handleVideoToggle(testimonial.id)}
                             className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform shadow-lg hover:bg-white"
                           >
                             <Play className="w-8 h-8 text-blue-600 ml-1" />
                           </button>
                         </div>
                         <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                           📹 Video Testimonial
                         </div>
                       </>
                     ) : (
                       <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                         <div className="text-center">
                           <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg mb-4">
                             <Quote className="w-8 h-8 text-blue-600" />
                           </div>
                           <div className="text-blue-600 font-semibold">Client Testimonial</div>
                         </div>
                       </div>
                     )}
                   </div>
                 )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Client Info */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">{testimonial.initials}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.business}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                    Results in {testimonial.results.time}
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(testimonial.results).map(([key, value]) => (
                      key !== 'time' && (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Get your professional website in just 2 days - completely free until you're happy
            </p>
            <a 
              href="https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group"
            >
              Start Your Free Build
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;