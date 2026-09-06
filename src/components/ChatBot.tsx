import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  showCalendlyButton?: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage: Message = {
        id: 'greeting',
        content: "👋 Hi! I'm here to help you learn about our AI automation services:\n\n• IG DM Bot\n• LinkedIn Outreach\n• CRM Auto-Sync\n• Cold Email Dashboard\n• Web Development\n• Content Creation\n\nWhat would you like to know more about?",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen, messages.length]);

  // Defer initialization for better performance
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setShouldRender(true));
      } else {
        setShouldRender(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender && !isOpen) return null;

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'OpenAI-Organization': import.meta.env.VITE_OPENAI_ORG_KEY,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are a professional AI assistant for SamysAI, a business automation company. 
Answer visitor questions about our services:
- IG DM Bot: Automate Instagram direct messages with AI-powered conversations
- LinkedIn Outreach: Smart AI-driven prospecting and connection automation
- CRM Auto-Sync: Real-time data synchronization and intelligent lead scoring
- Cold Email Dashboard: Campaign tracking with analytics and automated follow-ups
- Web Development: Custom websites that convert visitors into customers
- Content Creation: AI-powered blogs, ads, and creatives

Always be concise, friendly, and professional. 
If the visitor shows interest, satisfaction, or asks about getting started, suggest scheduling a call 
with this Calendly link: https://calendly.com/mianshamaz666/clients. 
Show a "📅 Book an Appointment" button inside the chat when relevant.`
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: userMessage.content
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantContent = data.choices[0]?.message?.content || 
        "Sorry, I'm having trouble right now. Please try again later.";
      
      // Check if the response suggests booking a call
      const shouldShowCalendlyButton = assistantContent.toLowerCase().includes('book') || 
                                     assistantContent.toLowerCase().includes('schedule') ||
                                     assistantContent.toLowerCase().includes('call') ||
                                     assistantContent.toLowerCase().includes('calendly') ||
                                     assistantContent.toLowerCase().includes('appointment') ||
                                     assistantContent.toLowerCase().includes('get started') ||
                                     assistantContent.toLowerCase().includes('interested');

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: assistantContent,
        role: 'assistant',
        timestamp: new Date(),
        showCalendlyButton: shouldShowCalendlyButton,
      };

      setIsTyping(false);
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble right now. Please try again later or book directly with us!",
        role: 'assistant',
        timestamp: new Date(),
        showCalendlyButton: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-3">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-xs text-gray-500 ml-2">AI is typing...</span>
    </div>
  );

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        <div className={`absolute bottom-16 right-0 w-80 sm:w-96 transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-b border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">SamysAI Assistant</h3>
                    <p className="text-xs text-gray-300">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-300 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900/50 to-black/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-100'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                    {message.showCalendlyButton && (
                      <div className="mt-3">
                        <a
                          href="https://calendly.com/mianshamaz666/clients"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>📅 Book an Appointment</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our AI services..."
                  disabled={isLoading}
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-full transition-all duration-200 hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-blue-500/25"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
          
          {/* Notification dot when closed */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default ChatBot;