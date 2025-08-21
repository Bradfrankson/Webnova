import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Pricing = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need to pay upfront?",
      answer: "No. We build your site first. You only pay if you're 100% satisfied."
    },
    {
      question: "What if I need ongoing support?",
      answer: "You get 1–2 free edit requests for 3 months (depending on tier). After that, edits are available at $50 per request."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, you can always move from Basic to Pro, or Pro to Custom."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Pricing That Fits Your Needs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the option that works best for your business. Every site comes with fast delivery, 
            no upfront costs, and unlimited edits until you're 100% happy.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Basic Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$299</div>
                <p className="text-gray-600">Best for local businesses or service providers who need a clean, professional site with 3–5 pages.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom design (no templates)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Mobile-friendly responsive build</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free domain (1 year)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free hosting (3 months)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited edits until launch</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">1 free edit per month for 3 months after launch</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open('https://buy.stripe.com/3cIbJ13Rn4xS4Tw961bQY00', '_blank')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started – $299
              </button>
            </div>

            {/* Pro Package - Most Popular */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$499</div>
                <p className="text-gray-600">Best for growing businesses that need more than a simple starter site but don't require full custom builds.</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-600 mb-2">Everything in Basic, plus:</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Up to 10 pages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Branded visuals & graphics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Professional content optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Priority delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">2 free edits per month for 3 months after launch</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open('https://buy.stripe.com/3cI8wPew17K4clYdmhbQY01', '_blank')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Upgrade to Pro – $499
              </button>
            </div>

            {/* Custom Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Package</h3>
                <div className="text-4xl font-bold text-gray-700 mb-2">Contact for Quote</div>
                <p className="text-gray-600">Best for businesses with more complex or tedious requirements.</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-600 mb-2">Everything in Pro, plus:</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">More than 10 pages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Product catalogs, resource libraries, or large content setups</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Advanced integrations (forms, booking, automation, CRM, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Long-term scalability for larger projects</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open('https://api.leadconnectorhq.com/widget/bookings/webnova', '_blank')}
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-400">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Remember, we build your site first. You only pay if you're 100% satisfied.
          </p>
          <button 
            onClick={() => window.open('https://api.leadconnectorhq.com/widget/bookings/webnova', '_blank')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Your Free Build Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;