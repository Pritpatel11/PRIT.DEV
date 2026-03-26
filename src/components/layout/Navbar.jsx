import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Magnetic from '../animations/Magnetic.jsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 dark:border-white/10 border-black/5 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Magnetic strength={0.2}>
                    <Link to="/" className="flex items-center gap-2 group relative z-[60]">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-9 h-9 md:w-10 md:h-10 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(var(--cyber-accent-rgb),0.4)]"
                        />
                        <span className="text-lg md:text-xl font-bold tracking-tighter neon-glow-blue hidden sm:block uppercase">PRIT_MODERN.DEV</span>
                    </Link>
                </Magnetic>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name} strength={0.5}>
                            <Link
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-cyber-blue ${location.pathname === link.path ? 'text-cyber-blue' : 'opacity-70'}`}
                            >
                                {link.name.toUpperCase()}
                            </Link>
                        </Magnetic>
                    ))}
                    <Magnetic strength={0.3}>
                        <Link to="/contact">
                            <Button variant="secondary" className="text-sm py-1.5 px-4" icon={Terminal}>
                                CONTACT_ME
                            </Button>
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Toggle */}
                <button aria-label="Toggle Menu" className="md:hidden relative z-[60] p-2" onClick={() => setIsOpen(!isOpen)}>
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <X size={26} className="text-cyber-blue" />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Menu size={26} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-4xl font-black uppercase tracking-tighter transition-colors ${location.pathname === link.path ? 'text-cyber-blue' : 'text-white/60 hover:text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="mt-4"
                            >
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="neon" className="px-10 py-3 text-sm" icon={Terminal}>
                                        CONTACT_ME
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Bottom decoration */}
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                            <span className="text-[9px] font-mono text-white/15 tracking-widest">PRIT_PATEL © 2025</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
