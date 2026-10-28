import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  SendHorizontal, 
  RotateCcw, 
  ExternalLink,
  ShieldCheck,
  CheckCheck
} from 'lucide-react';
import { sendChatMessage } from '../../services/groqService';
import { LEADERSHIP_INFO } from '../../data/chatbotFaqData';
import { getAssetUrl } from '../../utils/assetHelper';
import LottiePlayer from '../common/LottiePlayer';

const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    role: 'assistant',
    content: `Hello! 👋 Welcome to **Smart2Pay** (Powered by Buddica Global Solutions).\n\nI am your AI Assistant for intelligent payment gateway infrastructure, multi-bank routing, instant T+0 settlements, and merchant services. How can I assist you today?`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export default function ChatbotModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(text, messages);

      const botMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: response.content,
        isOffline: response.isOfflineMatch,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: 'assistant',
          content: 'Sorry, I encountered an issue. Please connect with our team on WhatsApp at +91 8838607449.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 flex flex-col items-center justify-end sm:justify-start pointer-events-auto">
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden z-0" 
        onClick={onClose} 
      />

      {/* Main Chat Window */}
      <div 
        data-lenis-prevent
        className="relative z-10 w-full sm:w-[390px] h-[82vh] sm:h-[580px] max-h-[660px] bg-[#F8FAFC] rounded-t-3xl sm:rounded-3xl border border-white/80 shadow-[0_16px_50px_rgba(4,38,86,0.28)] flex flex-col overflow-hidden animate-fadeIn"
      >
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#042656] via-[#083575] to-[#1856F3] px-4 py-3 text-white flex items-center justify-between border-b border-white/10 shadow-sm shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Chatbot Lottie Avatar */}
            <div className="w-9 h-9 rounded-xl bg-white/15 p-0.5 border border-white/30 backdrop-blur-md shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
              <LottiePlayer
                src="/assets/animations/robo.json"
                loop={true}
                autoplay={true}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-[13.5px] sm:text-sm tracking-tight text-white leading-tight">
                  Smart2Pay B2B AI
                </h3>
                <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-[#10B981]/25 text-[#34D399] border border-emerald-400/30">
                  Online
                </span>
              </div>
              <p className="text-[10px] text-white/70 font-medium">
                Multi-Bank Rails • T+0 Settlement
              </p>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            {/* Direct WhatsApp Action */}
            <a
              href={LEADERSHIP_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              title="Chat on WhatsApp"
              className="w-7 h-7 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-400/40 flex items-center justify-center text-emerald-300 transition-colors"
            >
              <img
                src={getAssetUrl('assets/icons/whatsapp_logo.png')}
                alt="WhatsApp"
                className="w-3.5 h-3.5 object-contain"
              />
            </a>

            {/* Reset Chat */}
            <button
              onClick={handleResetChat}
              title="Restart Conversation"
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              title="Close Chat"
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div 
          data-lenis-prevent
          className="flex-1 overflow-y-auto p-3.5 space-y-3 overscroll-contain touch-pan-y"
          style={{ overscrollBehavior: 'contain' }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Bot Avatar */}
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#042656] to-[#1856F3] p-0.5 flex items-center justify-center shrink-0 shadow-xs border border-white/60 overflow-hidden mb-1">
                  <LottiePlayer
                    src="/assets/animations/robo.json"
                    loop={true}
                    autoplay={true}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`text-xs sm:text-[13px] leading-relaxed transition-all duration-150 ${
                  msg.role === 'user'
                    ? 'max-w-[78%] bg-gradient-to-r from-[#1856F3] to-[#1142CB] text-white rounded-2xl rounded-br-xs px-3.5 py-2 shadow-[0_2px_8px_rgba(24,86,243,0.22)]'
                    : 'max-w-[85%] bg-white text-[#0F172A] border border-slate-200/90 rounded-2xl rounded-bl-xs px-3.5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                }`}
              >
                {/* Text Content */}
                <div
                  className={`whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'text-white font-medium [&_*]:text-white'
                      : 'text-[#0F172A] [&_*]:text-[#0F172A] space-y-1'
                  }`}
                >
                  {renderFormattedText(msg.content, msg.role === 'user')}
                </div>

                {/* Inline Subtle Timestamp */}
                <div
                  className={`flex items-center justify-end gap-1 mt-1 text-[9.5px] ${
                    msg.role === 'user' ? 'text-blue-100/75' : 'text-slate-400'
                  }`}
                >
                  <span>{msg.timestamp}</span>
                  {msg.role === 'user' && <CheckCheck size={11} className="text-blue-200" />}
                </div>

                {/* Show WhatsApp Direct Escalation Button if mentioned */}
                {(msg.content.includes('+91 8838607449') || msg.content.includes('WhatsApp')) && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <a
                      href={LEADERSHIP_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] shadow-xs transition-all"
                    >
                      <img
                        src={getAssetUrl('assets/icons/whatsapp_logo.png')}
                        alt="WhatsApp"
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>Chat on WhatsApp (+91 8838607449)</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#042656] to-[#1856F3] p-0.5 flex items-center justify-center shrink-0 shadow-xs border border-white/60 overflow-hidden mb-1">
                <LottiePlayer
                  src="/assets/animations/robo.json"
                  loop={true}
                  autoplay={true}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-white border border-slate-200/90 rounded-2xl rounded-bl-xs px-3.5 py-2.5 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1856F3] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1856F3] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1856F3] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] font-medium text-slate-400 ml-1">Typing...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Dock */}
        <div className="p-2.5 bg-white border-t border-slate-200/80 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-1.5 bg-[#F1F5F9] rounded-full pl-3 pr-1 py-1 border border-slate-200 focus-within:border-[#1856F3] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1856F3]/15 transition-all"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Smart2Pay B2B, APIs, Payouts..."
              disabled={isLoading}
              className="flex-1 px-1.5 py-1 text-xs bg-transparent border-0 focus:outline-hidden text-[#0F172A] placeholder:text-slate-400 font-medium"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1856F3] to-[#0D44D8] text-white flex items-center justify-center hover:opacity-95 active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <SendHorizontal size={14} />
            </button>
          </form>

          <div className="mt-1.5 flex items-center justify-between text-[9px] text-slate-400 font-medium px-2">
            <span>Powered by Smart2Pay B2B</span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <ShieldCheck size={11} />
              256-Bit SSL
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * Helper to render clean markdown formatting (bold and bullet points)
 */
function renderFormattedText(text, isUser = false) {
  if (!text) return null;

  const lines = text.split('\n');
  return lines.map((line, idx) => {
    // Check for bullet line
    const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
    const cleanLine = isBullet ? line.trim().replace(/^[•\-]\s*/, '') : line;

    // Parse bold text **bold**
    const parts = cleanLine.split(/(\*\*.*?\*\*)/g);

    const formattedContent = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={pIdx}
            className={isUser ? 'font-black text-white' : 'font-extrabold text-[#042656]'}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    if (isBullet) {
      return (
        <div key={idx} className="flex items-start gap-1.5 pl-0.5 py-0.5">
          <span className={isUser ? 'text-white' : 'text-[#1856F3] font-black'}>•</span>
          <span className={isUser ? 'text-white' : ''}>{formattedContent}</span>
        </div>
      );
    }

    return (
      <p
        key={idx}
        className={`${line.trim() === '' ? 'h-1.5' : ''} ${
          isUser ? '!text-white' : '!text-[#0F172A]'
        }`}
      >
        {formattedContent}
      </p>
    );
  });
}
