import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Moon, Sun } from 'lucide-react';

const themes = [
    { name: 'Cyber Blue', color: '#00f2ff', rgb: '0, 242, 255' },
    { name: 'Neon Purple', color: '#bc13fe', rgb: '188, 19, 254' },
    { name: 'Toxic Green', color: '#39ff14', rgb: '57, 255, 20' },
    { name: 'Hot Pink', color: '#ff007f', rgb: '255, 0, 127' },
];

const AccentSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState(themes[0]);
    useEffect(() => {
        document.documentElement.style.setProperty('--cyber-accent', activeTheme.color);
        document.documentElement.style.setProperty('--cyber-accent-rgb', activeTheme.rgb);
    }, [activeTheme]);

    return (
        <div className="fixed bottom-8 left-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 left-0 glass p-3 rounded-2xl flex flex-col gap-2 shadow-2xl min-w-[180px]"
                    >
                        {themes.map((theme) => (
                            <button
                                key={theme.name}
                                onClick={() => setActiveTheme(theme)}
                                className="flex items-center gap-3 px-3 py-2 rounded-xl border border-transparent hover:bg-white/5 transition-all group"
                            >
                                <div
                                    className="w-4 h-4 rounded-full border border-white/20"
                                    style={{ backgroundColor: theme.color }}
                                />
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                                    {theme.name}
                                </span>
                                {activeTheme.name === theme.name && (
                                    <Check size={12} className="ml-auto" style={{ color: activeTheme.color }} />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                aria-label="Toggle theme"
                onClick={() => setIsOpen(!isOpen)}
                data-cursor="theme"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyber-blue hover:scale-110 transition-all shadow-lg neon-border-blue"
            >
                <Palette size={20} className={isOpen ? 'rotate-45 transition-transform' : 'transition-transform'} />
            </button>
        </div>
    );
};

export default AccentSwitcher;
