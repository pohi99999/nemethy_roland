"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Üdvözlöm! Némethy Roland AI asszisztense vagyok. Miben segíthetek? Kérdezhet a gépjárműveink méreteiről, árainkról vagy állandó B2B partnerségeinkről is.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const messageText = inputValue;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL;
    let botResponseText = "";

    try {
      if (!webhookUrl || webhookUrl.includes("placeholder.url")) {
        throw new Error("Webhook URL is undefined or placeholder");
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      const data = await response.json();
      if (typeof data === 'string') {
        botResponseText = data;
      } else if (data && typeof data === 'object') {
        botResponseText = data.output || data.text || data.message || (Array.isArray(data) && data[0]?.output) || JSON.stringify(data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.log("n8n connection failed, using fallback simulated response:", err);
      // Wait 1 second to simulate thinking/typing
      await new Promise(resolve => setTimeout(resolve, 1000));
      botResponseText = "Köszönöm a kérdését! Az AI asszisztens válaszadási modulja jelenleg fejlesztés alatt áll. Kérjük, sürgős ajánlatkérés esetén használja a fejlécben található telefonszámot vagy küldjön üzenetet az ajánlatkérő űrlapon keresztül!";
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponseText,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMsg]);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-md rounded-2xl flex flex-col overflow-hidden text-slate-100 max-w-[calc(100vw-2rem)] animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Fejléc */}
            <div className="bg-gradient-to-r from-blue-900/80 to-slate-900/80 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Truck size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Roland AI Asszisztense</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors"
                aria-label="Bezárás"
              >
                <X size={16} />
              </button>
            </div>

            {/* Üzenetpanel */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Alsó input mező */}
            <form onSubmit={handleSend} className="p-3 border-t border-slate-800/80 bg-slate-950 flex gap-2">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Kérdezzen a fuvarozási kapacitásokról..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-xl transition-all active:scale-95 flex items-center justify-center shadow-lg"
                aria-label="Küldés"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lebegő gomb alapállapotban */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label="AI Chat Asszisztens megnyitása"
      >
        {isOpen ? (
          <X size={24} strokeWidth={1.5} />
        ) : (
          <>
            <MessageSquare size={24} strokeWidth={1.5} />
            {/* Pulzáló kék jelzőfény */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 border-2 border-slate-950 rounded-full animate-pulse" />
          </>
        )}
      </button>
    </div>
  );
}
