import React, { useState } from 'react';
import { X } from 'lucide-react';
import ChatbotModal from './ChatbotModal';
import LottiePlayer, { preloadLottie } from '../common/LottiePlayer';

// Preload robot animation for instantaneous display
try {
  preloadLottie('/assets/animations/robo.json');
} catch (e) {}

export default function FloatingSupportWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Bottom-Right Chatbot Action Trigger */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center justify-end pointer-events-auto select-none">
        
        {/* Floating Chatbot Circle Button with Lottie Animation */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-[0_6px_20px_rgba(4,38,86,0.28)] hover:shadow-[0_10px_30px_rgba(24,86,243,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 border-2 cursor-pointer overflow-hidden ${
            isChatOpen
              ? 'bg-[#042656] border-white/80 text-white'
              : 'bg-gradient-to-br from-[#042656] via-[#093979] to-[#1856F3] border-white/60'
          }`}
          title={isChatOpen ? 'Close AI Chat' : 'Chat with Smart2Pay AI Assistant'}
          aria-label="Toggle Smart2Pay AI Chatbot"
        >
          {isChatOpen ? (
            <X size={22} className="text-white animate-fadeIn sm:w-6 sm:h-6" />
          ) : (
            /* Lottie Animated Robot */
            <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center pointer-events-none">
              <LottiePlayer
                src="/assets/animations/robo.json"
                loop={true}
                autoplay={true}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </button>

      </div>

      {/* Chatbot Interactive Modal Window */}
      <ChatbotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
