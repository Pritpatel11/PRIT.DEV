import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, ChevronRight, Minimize2, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'SYSTEM_READY // PRIT_PORTFOLIO_OS v2.4.0' },
        { type: 'system', content: 'Type "help" to see available commands.' }
    ]);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

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
                newHistory.push({ type: 'output', content: '1. Duo Studio (Interactive Design)' });
                newHistory.push({ type: 'output', content: '2. Cyberspace Engine (Real-time Simulation)' });
                newHistory.push({ type: 'output', content: '3. Neural Analytics (AI Dashboard)' });
                break;
            case 'contact':
                newHistory.push({ type: 'output', content: 'GITHUB: github.com/pritpatel11' });
                newHistory.push({ type: 'output', content: 'EMAIL: contact@pritpatel.dev' });
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'goto':
                const path = args[0];
                if (['work', 'about', 'contact', 'home'].includes(path)) {
                    newHistory.push({ type: 'system', content: `NAVIGATING_TO: /${path}` });
                    navigate(path === 'home' ? '/' : `/${path}`);
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
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="w-[90vw] md:w-[500px] h-[400px] glass-card overflow-hidden flex flex-col shadow-2xl border-cyber-blue/20"
                    >
                        {/* Terminal Header */}
                        <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <TerminalIcon size={14} className="text-cyber-blue" />
                                <span className="text-[10px] font-bold tracking-widest text-white/40">PORTFOLIO_TERMINAL_v2.4.0</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => setIsMinimized(true)} className="text-white/40 hover:text-white transition-colors">
                                    <Minimize2 size={14} />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-red-500 transition-colors">
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div
                            ref={scrollRef}
                            className="flex-grow p-4 font-mono text-xs overflow-y-auto space-y-2 custom-scrollbar bg-black/80"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((line, i) => (
                                <div key={i} className={`flex gap-2 ${line.type === 'input' ? 'text-white' :
                                    line.type === 'system' ? 'text-cyber-blue' :
                                        line.type === 'error' ? 'text-red-400' : 'text-white/60'
                                    }`}>
                                    {line.type === 'input' && <span className="text-cyber-blue font-bold">$</span>}
                                    <span className="break-all">{line.content}</span>
                                </div>
                            ))}
                            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                                <span className="text-cyber-blue font-bold">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white w-full caret-cyber-blue"
                                    autoFocus
                                />
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Minimized Indicator / Toggle Button */}
            <div className="flex gap-4">
                {isMinimized && isOpen && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setIsMinimized(false)}
                        className="glass px-4 py-2 rounded-full border-cyber-blue/30 text-[10px] font-bold tracking-widest text-cyber-blue flex items-center gap-2 shadow-lg neon-border-blue"
                    >
                        <Maximize2 size={12} /> RESTORE_TERMINAL
                    </motion.button>
                )}

                <button
                    onClick={() => {
                        if (!isOpen) setIsOpen(true);
                        else setIsMinimized(!isMinimized);
                    }}
                    data-cursor="terminal"
                    className={`w-12 h-12 glass rounded-full flex items-center justify-center transition-all shadow-lg ${isOpen ? 'border-cyber-blue text-cyber-blue neon-border-blue' : 'border-white/10 text-white/50 hover:text-white'
                        }`}
                >
                    <TerminalIcon size={20} />
                </button>
            </div>
        </div>
    );
};

export default Terminal;
