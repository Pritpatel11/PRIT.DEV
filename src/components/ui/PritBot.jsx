import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';

const KNOWLEDGE_BASE = {
    skills: "Prit Dev is proficient in React, Node.js, GSAP, and Tailwind CSS. He specializes in building premium, animated digital experiences.",
    projects: "Prit Dev has built everything from AI dashboards to high-end industrial websites. Explore his portfolio at 'Work' page!",
    contact: "You can reach Prit Dev via email at contact@pritpatel.dev or follow him on GitHub @pritpatel11.",
    favorite: "Prit Dev's favorite tech stack is the 'Cyber Stack': React + GSAP + Tailwind CSS.",
    about: "Prit Dev is a passionate Full Stack Developer who thrives on creating immersive web environments.",
    greeting: "Hello! I'm the Prit Dev Bot. Ask me anything about Prit's skills, projects, or background!",
    unknown: "I'm still learning about Prit Dev! Try asking about his skills, projects, or how to contact him."
};

const PritBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: KNOWLEDGE_BASE.greeting }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const findResponse = (query) => {
        const q = query.toLowerCase();
        if (q.includes('skill') || q.includes('tech') || q.includes('stack')) return KNOWLEDGE_BASE.skills;
        if (q.includes('project') || q.includes('work')) return KNOWLEDGE_BASE.projects;
        if (q.includes('contact') || q.includes('email') || q.includes('reach')) return KNOWLEDGE_BASE.contact;
        if (q.includes('favorite') || q.includes('like')) return KNOWLEDGE_BASE.favorite;
        if (q.includes('who') || q.includes('about') || q.includes('prit')) return KNOWLEDGE_BASE.about;
        return KNOWLEDGE_BASE.unknown;
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const botResponse = { role: 'bot', text: findResponse(input) };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 left-24 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
                        className="absolute bottom-16 left-0 w-80 h-96 bg-cyber-dark/95 backdrop-blur-xl border border-white/10 flex flex-col shadow-2xl overflow-hidden rounded-2xl"
                    >
                        {/* Header */}
                        <div className="bg-cyber-purple/10 border-b border-white/10 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-white">THE_PRIT_BOT</h4>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[8px] opacity-40 uppercase font-black">AI_SIMULATION_ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                            <button aria-label="Close chat" onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar bg-black/40">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-[11px] leading-relaxed ${msg.role === 'user'
                                        ? 'bg-cyber-purple/20 border border-cyber-purple/30 text-white rounded-tr-none'
                                        : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <div className="w-1 h-1 bg-cyber-purple rounded-full animate-bounce" />
                                        <div className="w-1 h-1 bg-cyber-purple rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1 h-1 bg-cyber-purple rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-white/10 bg-white/[0.02]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me something..."
                                    className="flex-grow bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[11px] text-white outline-none focus:border-cyber-purple/50 transition-colors"
                                />
                                <button
                                    aria-label="Send message"
                                    onClick={handleSend}
                                    className="w-10 h-10 bg-cyber-purple/20 text-cyber-purple rounded-xl flex items-center justify-center hover:bg-cyber-purple hover:text-white transition-all"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                aria-label={isOpen ? "Close chat" : "Open chat"}
                onClick={() => setIsOpen(!isOpen)}
                data-cursor="ai bot"
                className={`w-12 h-12 glass rounded-full flex items-center justify-center transition-all shadow-lg ${isOpen ? 'border-cyber-purple text-cyber-purple shadow-[0_0_15px_rgba(var(--cyber-accent-rgb),0.3)]' : 'opacity-50 hover:opacity-100'
                    }`}
                style={{
                    borderColor: isOpen ? 'var(--cyber-accent)' : '',
                    color: isOpen ? 'var(--cyber-accent)' : ''
                }}
            >
                <div className="relative">
                    <MessageSquare size={20} />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-purple rounded-full animate-pulse" />
                </div>
            </button>
        </div>
    );
};

export default PritBot;
