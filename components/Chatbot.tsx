'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { trackEvent } from '@/lib/analytics';

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Bonjour ! Je suis l'assistant virtuel d'AIAgent. Comment puis-je vous aider aujourd'hui ? (Nos services, l'audit gratuit...)"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const initChat = () => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) return false;

    try {
      const ai = new GoogleGenAI({ apiKey });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Tu es l'assistant de AIAgent, une agence qui aide les PME à gagner du temps avec l'IA. 
          Ton ton doit être EXTRÊMEMENT HUMAIN, naturel, empathique et chaleureux. Parle comme une vraie personne qui discute avec un client de manière détendue mais professionnelle.
          Évite absolument les réponses robotiques, les formules toutes faites ou le jargon technique.
          
          Tes objectifs :
          1. Expliquer nos services simplement (Service Client 24/7, Aide au Recrutement, Saisie Automatique, Prospection, Assistant Interne).
          2. Parler de notre mission : faire gagner du temps et réduire les coûts des PME.
          3. Proposer l'Audit IA gratuit (un appel de 30 min) de manière naturelle.
          
          RÈGLES DE FORMAT :
          - Fais des réponses COURTES et PRÉCISES (1 à 2 phrases maximum), mais garde un ton conversationnel et vivant.
          - Ne fais jamais de longues listes. Va droit au but tout en restant sympathique.
          - Si l'utilisateur veut un audit, invite-le chaleureusement à cliquer sur "Audit IA Gratuit" dans le menu.`
        }
      });
      return true;
    } catch (error) {
      console.error("Failed to initialize Gemini chat:", error);
      return false;
    }
  };

  useEffect(() => {
    initChat();
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);
    setIsLoading(true);

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now().toString(), 
          role: 'model', 
          text: "Désolé, la clé API Gemini n'est pas configurée. Je ne peux pas vous répondre pour le moment." 
        }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      if (!chatRef.current) {
        const success = initChat();
        if (!success) throw new Error("Initialization failed");
      }
      
      const response = await chatRef.current.sendMessage({ message: userText });
      
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: response.text || "Je n'ai pas bien compris." 
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "Une erreur est survenue lors de la communication avec le serveur. Veuillez réessayer." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(true);
          trackEvent('open_chatbot');
        }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] text-white ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Ouvrir le chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#0a0a0f]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Assistant AIAgent</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                    En ligne
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer le chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#0a0a0f]/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-white/10 text-gray-200 rounded-bl-sm border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 border border-white/5">
                    <Loader2 size={16} className="animate-spin text-blue-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white disabled:opacity-50 transition-opacity shrink-0"
                  aria-label="Envoyer"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
