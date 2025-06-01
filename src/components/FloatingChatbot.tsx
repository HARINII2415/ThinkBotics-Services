
import React, { useState } from 'react';
import { MessageSquare, X, ChevronUp } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Harini AI. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "I'd love to discuss your project! I specialize in data science and full-stack development. What kind of project are you thinking about?";
    }
    if (lowerMessage.includes('data') || lowerMessage.includes('analytics')) {
      return "Great! I can help with data analytics, machine learning, and predictive modeling. What specific data challenges are you facing?";
    }
    if (lowerMessage.includes('web') || lowerMessage.includes('website') || lowerMessage.includes('frontend')) {
      return "I build modern, responsive web applications using React and other cutting-edge technologies. What kind of web solution do you need?";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "Perfect! You can reach me at harini@thinkbotics.com or use the contact form below. I typically respond within 24 hours!";
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Project costs vary based on scope and complexity. I offer competitive rates and free consultations. Would you like to discuss your specific requirements?";
    }
    
    return "Thanks for your message! I can help with data science projects, web development, and Python automation. Feel free to ask about any of my services or use the contact form to get in touch directly!";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
        }`}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6 mx-auto" />
        ) : (
          <MessageSquare className="text-white w-6 h-6 mx-auto" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border dark:border-gray-700 z-50 flex flex-col overflow-hidden transition-colors duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Chat with Harini AI</h3>
                <p className="text-sm text-purple-100">Usually replies instantly</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">H</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                <ChevronUp className="w-4 h-4 transform rotate-90" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
