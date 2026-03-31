'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Bot } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Demo() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { role: 'agent', text: t.demo.messages[0] }
  ]);

  useEffect(() => {
    // Reset messages when language changes
    let isMounted = true;
    
    // We use a small timeout to avoid synchronous setState in useEffect
    const resetTimeout = setTimeout(() => {
      if (isMounted) {
        setMessages([{ role: 'agent', text: t.demo.messages[0] }]);
      }
    }, 0);

    const sequence = [
      { role: 'user', text: t.demo.messages[1], delay: 2000 },
      { role: 'agent', text: t.demo.messages[2], delay: 4000 },
      { role: 'user', text: t.demo.messages[3], delay: 7000 },
      { role: 'agent', text: t.demo.messages[4], delay: 9000 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [resetTimeout];

    sequence.forEach(({ role, text, delay }) => {
      const timeout = setTimeout(() => {
        if (isMounted) {
          setMessages(prev => [...prev, { role, text }]);
        }
      }, delay);
      timeouts.push(timeout);
    });

    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, [t.demo.messages]);

  return (
    <section id="demo" className="py-24 px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {t.demo.title1}<span className="text-neon-blue">{t.demo.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t.demo.subtitle}
            </p>
            <ul className="space-y-4">
              {t.demo.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-neon-blue shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur opacity-20" />
            
            <div className="glass-card rounded-2xl p-4 relative h-[400px] flex flex-col">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <div className="font-medium text-white">{t.demo.agentName}</div>
                  <div className="text-xs text-neon-blue flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" /> {t.demo.online}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-neon-blue text-black rounded-tr-sm' 
                        : 'bg-white/10 text-gray-200 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
