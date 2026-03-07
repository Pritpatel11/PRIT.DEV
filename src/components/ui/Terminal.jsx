import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects.js';

const COMMANDS = {
    help: 'List all available commands',
    about: 'Display personal profile information',
    projects: 'Show recent project showcase',
    contact: 'Display contact and social details',
    clear: 'Clear terminal history',
    goto: 'Navigate to a page (e.g., goto work)',
    theme: 'Change accent color (e.g., theme blue/purple/green/pink)',
};

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'INITIALIZING COMMAND CENTER...' },
        { type: 'system', content: 'SYS.ID: PRIT_PATEL_v2.5.0' },
        { type: 'system', content: 'Type "help" to see available protocols.' }
    ]);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    // Auto-focus input when terminal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    const handleCommand = (cmd) => {
        const fullCmd = cmd.trim().toLowerCase();
        const [action, ...args] = fullCmd.split(' ');

        const newHistory = [...history, { type: 'input', content: cmd }];

        switch (action) {
            case 'help':
                newHistory.push({ type: 'system', content: 'AVAILABLE_COMMANDS:' });
                Object.entries(COMMANDS).forEach(([name, desc]) => {
                    newHistory.push({ type: 'output', content: `${name.padEnd(10)} - ${desc}` });
                });
                break;
            case 'about':
                newHistory.push({ type: 'output', content: 'IDENTITY: Prit Patel' });
                newHistory.push({ type: 'output', content: 'ROLE: Full Stack Engineer' });
                newHistory.push({ type: 'output', content: 'FOCUS: Creative Coding & Modern Architecture' });
                break;
            case 'projects':
                newHistory.push({ type: 'output', content: 'FETCHING_PROJECTS...' });
                projects.forEach((project, index) => {
                    newHistory.push({ type: 'output', content: `${index + 1}. ${project.title} (${project.category})` });
                });
                break;
            case 'contact':
                newHistory.push({ type: 'output', content: 'GITHUB: github.com/pritpatel11' });
                newHistory.push({ type: 'output', content: 'EMAIL: pritpatel1179@gmail.com' });
                break;
            case 'clear':
                setHistory([{ type: 'system', content: 'SYSTEM_CLEARED' }]);
                return;
            case 'goto':
                const path = args[0];
                if (['work', 'about', 'contact', 'home'].includes(path)) {
                    newHistory.push({ type: 'system', content: `NAVIGATING_TO: /${path}` });
                    setTimeout(() => {
                        navigate(path === 'home' ? '/' : `/${path}`);
                        setIsOpen(false);
                    }, 500);
                } else {
                    newHistory.push({ type: 'error', content: `ERROR: Path "/${path || ''}" not found.` });
                }
                break;
            case 'theme':
                const color = args[0];
                const themes = {
                    blue: { color: '#00f2ff', rgb: '0, 242, 255' },
                    purple: { color: '#bc13fe', rgb: '188, 19, 254' },
                    green: { color: '#39ff14', rgb: '57, 255, 20' },
                    pink: { color: '#ff007f', rgb: '255, 0, 127' }
                };
                if (themes[color]) {
                    document.documentElement.style.setProperty('--cyber-accent', themes[color].color);
                    document.documentElement.style.setProperty('--cyber-accent-rgb', themes[color].rgb);
                    newHistory.push({ type: 'system', content: `THEME_UPDATED: ${color.toUpperCase()}` });
                } else {
                    newHistory.push({ type: 'error', content: 'ERROR: Theme not available. Try: blue, purple, green, pink.' });
                }
                break;
            case '':
                break;
            default:
                newHistory.push({ type: 'error', content: `COMMAND_NOT_FOUND: "${action}". Type "help" for options.` });
        }
        setHistory(newHistory);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-[150] bg-black/80 flex flex-col justify-end p-4 md:p-12 overflow-hidden"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {/* Massive Background Typography */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 flex flex-col items-center justify-center w-full">
                            <h1 className="text-[15vw] font-black leading-none tracking-tighter text-transparent w-full text-center" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)' }}>COMMAND</h1>
                            <h1 className="text-[15vw] font-black leading-none tracking-tighter text-transparent w-full text-center" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)' }}>CENTER</h1>
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <div className="w-full h-8 bg-cyber-blue shadow-[0_0_50px_rgba(0,242,255,0.5)] animate-scanline mix-blend-overlay" />
                        </div>

                        {/* Top Header */}
                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                            <div>
                                <h2 className="text-cyber-blue font-bold tracking-[0.5em] text-sm md:text-xl">SYS.TERMINAL</h2>
                                <p className="text-white/40 text-xs mt-1 md:text-sm uppercase tracking-widest">Awaiting Input Protocol</p>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="text-white/60 hover:text-white hover:rotate-90 transition-all p-2 bg-white/5 rounded-full glass border border-white/10">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Terminal Window (Bottom aligned) */}
                        <div className="w-full max-w-5xl mx-auto h-[60vh] flex flex-col relative z-10 bg-black/40 glass border border-white/10 rounded-2xl md:p-8 p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                            <div
                                ref={scrollRef}
                                className="flex-grow font-mono text-sm md:text-base overflow-y-auto space-y-3 custom-scrollbar pr-4 text-white/80"
                            >
                                {history.map((line, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        key={i}
                                        className={`flex gap-3 leading-relaxed ${line.type === 'input' ? 'text-white' :
                                            line.type === 'system' ? 'text-cyber-blue drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]' :
                                                line.type === 'error' ? 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]' :
                                                    'text-white/70'
                                            }`}>
                                        {line.type === 'input' ? (
                                            <span className="text-cyber-purple font-black opacity-80 select-none">❯</span>
                                        ) : (
                                            <span className="opacity-0 select-none">❯</span>
                                        )}
                                        <span className="break-all">{line.content}</span>
                                    </motion.div>
                                ))}

                                <form onSubmit={handleSubmit} className="flex gap-3 items-center mt-4">
                                    <span className="text-cyber-blue font-black animate-pulse select-none">❯</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="bg-transparent border-none outline-none text-white w-full caret-cyber-blue font-bold tracking-wide"
                                        spellCheck="false"
                                        autoComplete="off"
                                    />
                                </form>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launch Button (Visible when closed) */}
            <div className={`fixed ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} bottom-8 right-8 z-[100] transition-opacity duration-300`}>
                <button
                    onClick={() => setIsOpen(true)}
                    data-cursor="terminal"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center transition-all shadow-lg border-white/10 text-white hover:text-cyber-blue hover:border-cyber-blue/50 group"
                >
                    <TerminalIcon size={24} className="group-hover:scale-110 transition-transform" />

                    {/* Ping Animation Indicator */}
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-cyber-blue border border-black"></span>
                    </span>
                </button>
            </div>
        </>
    );
};

export default Terminal;
