import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WhatsAppWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate typing effect when window opens
  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleStartChat = () => {
    const phoneNumber = '919876543210';
    const message = 'Hello! I have a question.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      
      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        
        {/* Header */}
        <div className="bg-[#075e54] p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                   <WhatsAppIcon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25d366] border-2 border-[#075e54] rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Support Team</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Chat Body with WhatsApp Doodle Background */}
        <div className="h-48 p-4 overflow-y-auto bg-[#e5ddd5] relative" style={{ backgroundImage: "url('https://i.pinimg.com/originals/ab/ab/60/abab600fbc21fa410972626090747df3.jpg')", backgroundSize: 'contain' }}>
          {isTyping ? (
            <div className="bg-white px-4 py-3 rounded-lg rounded-tl-none shadow-sm w-16 flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          ) : (
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] animate-in fade-in slide-in-from-left-2 duration-300">
              <p className="text-[13px] text-gray-800 leading-relaxed">
                Hi! Thanks for reaching out. How can we help you today?
              </p>
              <span className="text-[10px] text-gray-400 block text-right mt-1">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-gray-100">
          <button
            onClick={handleStartChat}
            className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Start Chat
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 ${isOpen ? 'bg-white text-gray-500' : 'bg-[#25d366] text-white'}`}
      >
        {isOpen ? (
          <X size={32} />
        ) : (
          <>
            <WhatsAppIcon className="w-9 h-9" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-green-600 border-2 border-white"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;