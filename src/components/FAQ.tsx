import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is it really free?',
      answer: 'Yes! You only pay if you approve the finished website. If you\'re not 100% happy with the result, you owe us nothing. We take all the risk so you don\'t have to.'
    },
    {
      question: 'What if I need changes?',
      answer: 'One round of edits is included for free after launch. We want to make sure your website is exactly what you envisioned for your business.'
    },
    {
      question: 'Can I use my own domain?',
      answer: 'Absolutely! You can bring your existing domain, or we\'ll provide a new professional domain for free (1 year included).'
    },
    {
      question: 'Do I need to know anything about tech?',
      answer: 'Nope! That\'s the whole point. We handle absolutely everything - design, development, hosting, domain setup, chatbot configuration. You just tell us about your business.'
    },
    {
      question: 'What if I don\'t like the website?',
      answer: 'No payment required. We simply part ways with no strings attached. You have zero risk and zero obligation if you\'re not completely satisfied.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-100 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center mb-6 fade-in">
            <HelpCircle className="w-8 h-8 text-blue-600 mr-2 animate-bounce-subtle" />
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Common Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            You Might Be <span className="text-blue-600">Wondering...</span>
          </h2>
        </div>

        <div className="space-y-4 relative z-10">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-3d fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-all duration-200 group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;