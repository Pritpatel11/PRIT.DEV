import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Lock, Unlock } from 'lucide-react';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#_';

const DecryptButton = ({ fileUrl, fileName, className = '' }) => {
    const [state, setState] = useState('idle'); // idle, decrypting, granted
    const [text, setText] = useState('DOWNLOAD CV');
    
    useEffect(() => {
        let interval;
        if (state === 'decrypting') {
            let iterations = 0;
            const targetText = 'ACCESS GRANTED';
            
            interval = setInterval(() => {
                setText(targetText.split('').map((letter, index) => {
                    if (index < iterations) {
                        return targetText[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join(''));
                
                if (iterations >= targetText.length) {
                    clearInterval(interval);
                    setState('granted');
                    // Trigger download
                    const link = document.createElement('a');
                    link.href = fileUrl;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        setState('idle');
                        setText('DOWNLOAD CV');
                    }, 3000);
                }
                
                iterations += 1/3; // Speed of decryption
            }, 30);
        }
        
        return () => clearInterval(interval);
    }, [state, fileUrl, fileName]);

    const handleClick = () => {
        if (state === 'idle') {
            setState('decrypting');
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            className={`relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-4 font-mono font-bold tracking-widest text-sm transition-all duration-300 border ${
                state === 'idle' ? 'bg-cyber-blue/10 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]' :
                state === 'decrypting' ? 'bg-black border-white/20 text-white' :
                'bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
            } ${className}`}
            whileTap={{ scale: 0.95 }}
        >
            {/* Scanline effect on idle */}
            {state === 'idle' && (
                <div className="absolute inset-0 w-full h-full bg-cyber-blue/20 -translate-x-full group-hover:animate-scanline" />
            )}
            
            <div className="relative z-10 flex items-center gap-3 w-[180px] justify-center">
                {state === 'idle' && <Download size={18} />}
                {state === 'decrypting' && <Lock size={18} className="animate-pulse text-white/50" />}
                {state === 'granted' && <Unlock size={18} className="animate-bounce text-green-400" />}
                <span className="min-w-[120px] text-center">{text}</span>
            </div>
        </motion.button>
    );
};

export default DecryptButton;
