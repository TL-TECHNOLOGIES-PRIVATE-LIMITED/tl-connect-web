import { useState, useEffect, useRef } from 'react';
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { faqData } from '../constants/datas';
// Utility functions
const calculateSimilarity = (str1, str2) => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  const intersection = new Set([...s1].filter(char => s2.includes(char)));
  const union = new Set([...s1, ...s2]);
  return intersection.size / union.size;
};

const extractKeywords = (input) => {
  const stopWords = new Set(['a', 'an', 'the', 'is', 'are', 'do', 'does', 'i', 'you']);
  return [...new Set(input.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => !stopWords.has(word) && word.length > 2))];
};

const parseMessageText = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) =>
    urlRegex.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        {part}
      </a>
    ) : (
      part
    )
  );
};

const Message = ({ message }) => (
  <div className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
    <div 
      className={`max-w-3/4 p-3 text-sm ${
        message.isBot 
          ? 'bg-gray-800/80 text-white backdrop-blur-sm border border-white/10 rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl'
          : 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-2xl'
      }`}
    >
      {parseMessageText(message.text)}
    </div>
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center space-x-2 p-3 bg-gray-800/80 rounded-2xl w-20 backdrop-blur-sm">
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

const FAQSuggestions = ({ onQuestionClick }) => {
  const suggestedQuestions = [
    "What services does TL TECHNOLOGIES provide?",
    "What products does TL TECHNOLOGIES provide?",
    "How does 'Being Digital' improve my online presence?",
    "How does 'Being Digital' drive engagement and growth for my brand?",
    "How can I contact TL TECHNOLOGIES?"
  ];





  return (
    <div className="space-y-2 mb-4">
      <p className="text-white/80 font-medium mb-2">Frequently Asked Questions:</p>
      <div className="space-y-2">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="w-full text-left p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 text-white/90 text-sm border border-white/10 backdrop-blur-sm hover:scale-[1.02] transform"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ 
    id: 1, 
    text: "Hello! I'm your Being Digital assistant. How can I help you to know more about services? Feel free to ask me anything or choose from the suggestions below.", 
    isBot: true 
  }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);


  const findBestMatch = (input) => {
    const inputKeywords = extractKeywords(input);
    let bestMatch = { faq: null, score: 0 };

    faqData.forEach(faq => {
      let score = 0;
      if (faq.question.toLowerCase().includes(input.toLowerCase())) score += 2;

      inputKeywords.forEach(keyword => {
        if (faq.keywords.includes(keyword)) score += 1;
        faq.keywords.forEach(faqKeyword => {
          const similarity = calculateSimilarity(keyword, faqKeyword);
          if (similarity > 0.7) score += similarity;
        });
      });

      const questionSimilarity = calculateSimilarity(input, faq.question);
      score += questionSimilarity * 2;

      if (score > bestMatch.score) bestMatch = { faq, score };
    });

    return bestMatch;
  };

  const generateResponse = (input) => {
    const greetings = ['hello', 'hi', 'hey'];
    const goodbyes = ['bye', 'goodbye', 'see you'];
    const thanks = ['thank', 'thanks'];

    const inputLower = input.toLowerCase();
    
    if (greetings.some(greeting => inputLower.includes(greeting))) 
      return "Hello! How can I help you?";
    if (goodbyes.some(goodbye => inputLower.includes(goodbye))) 
      return "Goodbye! Feel free to return anytime.";
    if (thanks.some(thank => inputLower.includes(thank))) 
      return "You're welcome! Need anything else?";

    const match = findBestMatch(input);
    if (match.score > 1.5) return match.faq.answer;
    if (match.score > 0.8) return `${match.faq.answer} Feel free to ask for more details!`;
    return "I'm not sure about that. Could you rephrase?";
  };

  const simulateTyping = (response) => {
    setIsTyping(true);
    return new Promise(resolve => {
      const delay = Math.min(Math.max(response.length * 20, 1000), 3000);
      setTimeout(() => {
        setIsTyping(false);
        resolve(response);
      }, delay);
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFAQClick = async (question) => {
    setHasInteracted(true);
    setMessages(prev => [...prev, { id: Date.now(), text: question, isBot: false }]);
    
    const response = generateResponse(question);
    await simulateTyping(response);
    
    setMessages(prev => [...prev, { id: Date.now() + 1, text: response, isBot: true }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setHasInteracted(true);
    setMessages(prev => [...prev, { id: Date.now(), text: inputText, isBot: false }]);
    setInputText('');

    const response = generateResponse(inputText);
    await simulateTyping(response);

    setMessages(prev => [...prev, { id: Date.now() + 1, text: response, isBot: true }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-[999] bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-105 transform"
        aria-label="Open chat"
      >
        <IoChatbubbleEllipses className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 z-[1000] md:bottom-24 md:right-8  w-full sm:w-[400px] h-[100dvh] md:h-[500px] transform transition-all duration-300 ease-out ">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl rounded-t-2xl md:rounded-2xl flex flex-col overflow-hidden border border-white/10 backdrop-blur">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white z-10 transition-colors"
              aria-label="Close chat"
            >
              <IoClose size={24} />
            </button>

            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-4 flex items-center">
              <div className="relative">
                <FaRobot className="text-2xl animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
              </div>
              <h1 className="text-xl font-bold ml-3 tracking-wide">Being Digital Assistant</h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              {!hasInteracted && <FAQSuggestions onQuestionClick={handleFAQClick} />}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/10 bg-gray-900/90 p-4">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-800 text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={isTyping}
                  className="px-4 md:px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg group"
                >
                  <span className="hidden md:inline">Send</span>
                  <IoSend className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatBotModal;