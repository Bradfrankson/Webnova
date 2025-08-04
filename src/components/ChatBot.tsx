import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Calendar, ExternalLink, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user' | 'options' | 'cta';
  content: string;
  options?: string[];
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState<string>('welcome');
  const [userPath, setUserPath] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [conversationCount, setConversationCount] = useState(0);
  const [userInfo, setUserInfo] = useState<{
    businessType?: string;
    needsDomain?: string;
    hasContent?: string;
  }>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasInteracted = useRef(false);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show floating bubble after 5-7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted.current && !isOpen) {
        setShowBubble(true);
      }
    }, 6000); // Show after 6 seconds

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Initialize welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("👋 Hi! I'm here to help you build a powerful website — for free. What can I help you with?", 'options', [
        "Build me a new website",
        "Tell me about the AI assistant",
        "I want both"
      ]);
    }
  }, [isOpen]);



  const addBotMessage = (content: string, type: 'bot' | 'options' | 'cta' = 'bot', options?: string[]) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      options,
      timestamp: new Date()
    };

    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000); // Simulate typing delay
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    hasInteracted.current = true;
    setShowBubble(false);
    addUserMessage(option);

    // Route based on user selection
    if (option === "Build me a new website") {
      setUserPath('website');
      setCurrentStep('business-type');
      setTimeout(() => {
        addBotMessage("Awesome! What type of business is it for?", 'options', [
          "Restaurant/Food",
          "Professional Services",
          "E-commerce/Retail",
          "Health/Fitness",
          "Other"
        ]);
      }, 1500);
    } else if (option === "Tell me about the AI assistant") {
      setUserPath('ai');
      setCurrentStep('ai-info');
      setTimeout(() => {
        addBotMessage("Great choice! Our AI assistant can handle customer inquiries 24/7, book appointments, and qualify leads automatically. It's like having a smart receptionist that never sleeps! 🤖", 'options', [
          "How much does it cost?",
          "Can it integrate with my website?",
          "I want to see a demo"
        ]);
      }, 1500);
    } else if (option === "I want both") {
      setUserPath('both');
      setCurrentStep('both-info');
      setTimeout(() => {
        addBotMessage("Perfect! A website + AI assistant combo is our most popular package. You'll get a professional site that converts visitors into customers, plus an AI that works 24/7. 🚀", 'options', [
          "What's included?",
          "How long does it take?",
          "Let's get started!"
        ]);
      }, 1500);
    }

    handleStepLogic(option);
  };

  const handleStepLogic = (response: string) => {
    // Handle different conversation flows based on current step
    switch (currentStep) {
      case 'business-type':
        setUserInfo(prev => ({ ...prev, businessType: response }));
        setCurrentStep('domain-question');
        setTimeout(() => {
          addBotMessage("Perfect! Do you already have a domain or need help with that?", 'options', [
            "I have a domain",
            "I need a domain",
            "Not sure what that means"
          ]);
        }, 1500);
        break;

      case 'domain-question':
        setUserInfo(prev => ({ ...prev, needsDomain: response }));
        setCurrentStep('final-cta');
        setTimeout(() => {
          addBotMessage("You're all set! Just book a quick free call to get started 🚀", 'cta');
        }, 1500);
        break;

      case 'ai-info':
        if (response === "I want to see a demo") {
          setCurrentStep('final-cta');
          setTimeout(() => {
            addBotMessage("Perfect! Let's schedule a quick demo call where I'll show you exactly how it works 📞", 'cta');
          }, 1500);
        } else {
          setTimeout(() => {
            addBotMessage("Great question! Let's hop on a quick call to discuss all the details 📞", 'cta');
          }, 1500);
        }
        break;

      case 'both-info':
        setCurrentStep('final-cta');
        setTimeout(() => {
          addBotMessage("Awesome! Let's book a free strategy call to map out your perfect setup 🎯", 'cta');
        }, 1500);
        break;

      // Handle responses from custom text input conversations
      case 'custom-conversation':
        handleCustomConversationFlow(response);
        break;

      case 'website-interest':
        setUserInfo(prev => ({ ...prev, businessType: response }));
        setCurrentStep('final-cta');
        setTimeout(() => {
          addBotMessage(`Perfect! A ${response.toLowerCase()} website is exactly what we specialize in. Let's hop on a quick call to discuss your vision and get you online! 🚀`, 'cta');
        }, 1500);
        break;

      case 'ai-interest':
        setCurrentStep('final-cta');
        setTimeout(() => {
          if (response === "Show me how it works") {
            addBotMessage("Absolutely! I'd love to give you a live demo. Let's schedule a quick call where I'll show you the AI in action! 🤖", 'cta');
          } else {
            addBotMessage("Great questions! Let's jump on a call so I can answer everything and show you exactly how our AI assistant will help your business grow! 📞", 'cta');
          }
        }, 1500);
        break;

      case 'combo-interest':
        setCurrentStep('final-cta');
        setTimeout(() => {
          if (response === "Yes, let's do this!") {
            addBotMessage("I love the enthusiasm! Let's book your free strategy call right now and get this project started! 🎯", 'cta');
          } else {
            addBotMessage("Perfect! Let's hop on a quick call where I can answer all your questions and show you exactly what's possible! 🚀", 'cta');
          }
        }, 1500);
        break;

      case 'process-interest':
        setCurrentStep('final-cta');
        setTimeout(() => {
          addBotMessage("Excellent! You'll love how smooth our process is. Let's book a quick call to get started - I promise it'll be the best 15 minutes you spend on your business this week! ⭐", 'cta');
        }, 1500);
        break;
    }
  };

  const handleCustomConversationFlow = (response: string) => {
    const lowerResponse = response.toLowerCase();

    // Handle follow-up responses from custom conversations
    if (response === "Tell me about websites" || response === "Website questions") {
      setCurrentStep('website-interest');
      setTimeout(() => {
        addBotMessage("Great choice! We build custom websites that actually convert visitors into customers. What type of business do you have?", 'options', [
          "Restaurant/Food",
          "Professional Services",
          "E-commerce/Retail",
          "Health/Fitness",
          "Other"
        ]);
      }, 1500);
    } else if (response === "What about AI assistants?" || response === "AI assistant info") {
      setCurrentStep('ai-interest');
      setTimeout(() => {
        addBotMessage("Smart choice! Our AI assistant works 24/7 to handle customer questions, book appointments, and qualify leads. It's like having a super-smart employee that never sleeps! 🤖", 'options', [
          "How much does it cost?",
          "Can it work with any website?",
          "Show me how it works",
          "I'm interested!"
        ]);
      }, 1500);
    } else if (response === "I want both!" || response === "Let's talk specifics") {
      setCurrentStep('combo-interest');
      setTimeout(() => {
        addBotMessage("Perfect combination! A website + AI assistant is our most popular package. You get maximum impact - a site that converts plus an AI that works around the clock. Ready to see how this could transform your business?", 'options', [
          "Yes, let's do this!",
          "What's the investment?",
          "How long does it take?",
          "Tell me more"
        ]);
      }, 1500);
    } else if (lowerResponse.includes('asap') || lowerResponse.includes('fast')) {
      setCurrentStep('urgent-timeline');
      setTimeout(() => {
        addBotMessage("I love the urgency! We can definitely get you online fast. Our record is 24 hours for a full website. Let's jump on a quick call to make this happen ASAP! ⚡", 'cta');
      }, 1500);
    } else if (lowerResponse.includes('flexible') || lowerResponse.includes('process')) {
      setCurrentStep('process-interest');
      setTimeout(() => {
        addBotMessage("Perfect! Here's how it works: We hop on a quick call to understand your vision, then our team builds your custom site while you focus on your business. Sound good?", 'options', [
          "Sounds perfect!",
          "What if I need changes?",
          "How much involvement do I need?",
          "Let's get started"
        ]);
      }, 1500);
    } else {
      // For any other response, guide toward booking
      setCurrentStep('final-cta');
      setTimeout(() => {
        addBotMessage("I can tell you're serious about growing your business! Let's hop on a quick call so I can understand your specific needs and show you exactly how we can help. Ready?", 'cta');
      }, 1500);
    }
  };

  const handleChatOpen = () => {
    setIsOpen(true);
    hasInteracted.current = true;
    setShowBubble(false);
  };

  const handleChatClose = () => {
    setIsOpen(false);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const message = textInput.trim();
    setTextInput('');
    addUserMessage(message);

    // Simulate natural conversation with typing delay
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      handleNaturalResponse(message);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleNaturalResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    setConversationCount(prev => prev + 1);

    // Check if we should naturally suggest a call after several exchanges
    const shouldSuggestCall = conversationCount >= 4 && Math.random() > 0.6;

    // Natural conversational responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      addBotMessage("Hey there! Great to meet you! I'm excited to help you build something amazing. What's on your mind?");
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || lowerMessage.includes('expensive')) {
      addBotMessage("Ah, the money question! Here's the cool part - we build your website completely free. No upfront costs, no hidden fees. We only succeed when you do. What kind of business are we talking about?");
    } else if (lowerMessage.includes('time') || lowerMessage.includes('how long') || lowerMessage.includes('when') || lowerMessage.includes('fast')) {
      addBotMessage("Good question! Most websites are done in 24hrs. We move pretty fast because I know you're excited to get online! Are you in a rush or do we have some time to make it perfect?");
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('assistant') || lowerMessage.includes('chatbot') || lowerMessage.includes('automation')) {
      addBotMessage("Oh, you're interested in the AI stuff! Smart choice. Our AI assistant is like having a super-smart employee who never sleeps, never gets sick, and always knows what to say. Want to know more about how it works?");
    } else if (lowerMessage.includes('example') || lowerMessage.includes('portfolio') || lowerMessage.includes('see') || lowerMessage.includes('show')) {
      addBotMessage("I'd love to show you what we've built! We've done some really cool projects - restaurants that doubled their orders, service businesses that automated their booking, e-commerce stores that tripled sales. What industry are you in?");
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('confused') || lowerMessage.includes('don\'t know')) {
      addBotMessage("No worries at all! I'm here to help figure this out together. Whether it's websites, AI assistants, or just understanding what's possible - I've got you covered. What's the biggest challenge you're facing right now?");
    } else if (lowerMessage.includes('website') || lowerMessage.includes('site') || lowerMessage.includes('online')) {
      addBotMessage("Websites are my favorite topic! There's nothing like seeing a business transform when they get online properly. Are you starting from scratch or do you have something that needs a makeover?");
    } else if (lowerMessage.includes('business') || lowerMessage.includes('company') || lowerMessage.includes('startup')) {
      addBotMessage("Tell me about your business! I love hearing about what people are building. What industry are you in and what's your biggest goal right now?");
    } else if (lowerMessage.includes('yes') || lowerMessage.includes('yeah') || lowerMessage.includes('sure') || lowerMessage.includes('ok')) {
      addBotMessage("Awesome! I love the enthusiasm. What would you like to dive into first - websites, AI assistants, or something else entirely?");
    } else if (lowerMessage.includes('no') || lowerMessage.includes('not sure') || lowerMessage.includes('maybe')) {
      addBotMessage("No pressure at all! I'm here to answer questions and help you figure out what makes sense. What's holding you back or what would you like to know more about?");
    } else if (lowerMessage.includes('interested') || lowerMessage.includes('sounds good') || lowerMessage.includes('let\'s do it') || lowerMessage.includes('ready')) {
      addBotMessage("I love that energy! You know what, I think we're at the point where a quick call would be way more helpful than typing back and forth. Want to grab 15 minutes so I can really understand your vision?", 'cta');
      return;
    } else {
      // Generic natural response with occasional call suggestion
      if (shouldSuggestCall) {
        const callSuggestions = [
          "You know what, I'm really enjoying our conversation! I think a quick 15-minute call might be more helpful than typing back and forth. What do you think?",
          "I can tell you're serious about this! Want to hop on a quick call so I can really understand your vision and show you some examples?",
          "This is great! I think we're at the point where a quick conversation would be way more productive. Free for a 15-minute chat?"
        ];
        const randomSuggestion = callSuggestions[Math.floor(Math.random() * callSuggestions.length)];
        addBotMessage(randomSuggestion, 'cta');
      } else {
        const responses = [
          "That's interesting! Tell me more about that.",
          "I hear you! What's the main thing you're trying to accomplish?",
          "Got it! How can I help you with that?",
          "Makes sense! What's your biggest priority right now?",
          "I understand! What would success look like for you?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addBotMessage(randomResponse);
      }
    }
  };



  const handleBookingClick = () => {
    window.open('https://api.leadconnectorhq.com/widget/bookings/webnova', '_blank', 'noopener,noreferrer');
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to process message content and make links clickable
  const processMessageContent = (content: string) => {
    // Regular expression to find URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <button
            key={index}
            onClick={() => handleLinkClick(part)}
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
          >
            {part}
          </button>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Bubble with Glow */}
      {showBubble && !isOpen && (
        <div
          className="fixed bottom-24 right-6 z-40"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap animate-fade-in">
              Need help with your website?
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}

          {/* Floating Bubble */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse opacity-75"></div>
            <div className="relative w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-bounce-gentle">
              <div className="absolute inset-1 bg-white rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleChatOpen}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          {showBubble && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Webnova Assistant</h3>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <button
              onClick={handleChatClose}
              className="text-white hover:text-blue-200 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="animate-fade-in">
                {message.type === 'user' ? (
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[80%] shadow-lg">
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="bg-gray-50 text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm">
                      <p className="text-sm leading-relaxed">{processMessageContent(message.content)}</p>

                      {/* Option Buttons */}
                      {message.type === 'options' && message.options && (
                        <div className="mt-4 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="w-full text-left p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-700 shadow-sm"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      {message.type === 'cta' && (
                        <div className="mt-4">
                          <button
                            onClick={handleBookingClick}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-sm flex items-center justify-center space-x-2 group"
                          >
                            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Book Your Free Build Call</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-50 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">Typing...</span>
                  </div>
                </div>
              </div>
            )}



            <div ref={messagesEndRef} />
          </div>

          {/* Always Available Text Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <form onSubmit={handleTextSubmit} className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!textInput.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
