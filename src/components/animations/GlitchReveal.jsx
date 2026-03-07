import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>:{}[]';

export default function GlitchReveal({ text, className = "", delay = 0, duration = 1000 }) {
    const [displayText, setDisplayText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        // Add optional initial delay
        const timeout = setTimeout(() => {
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;

                if (progress < duration) {
                    // Scramble text
                    let scrambled = '';
                    for (let i = 0; i < text.length; i++) {
                        // Reveal actual characters progressively based on total duration
                        if (progress / duration > i / text.length) {
                            scrambled += text[i];
                        } else {
                            // Only scramble non-space characters
                            scrambled += text[i] === ' ' ? ' ' : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                        }
                    }
                    setDisplayText(scrambled);
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    // Animation complete, ensure exact text
                    setDisplayText(text);
                }
            };

            animationFrame = requestAnimationFrame(animate);
        }, delay * 1000);

        return () => {
            clearTimeout(timeout);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [text, isInView, duration, delay]);

    return (
        <motion.span
            ref={ref}
            className={`inline-block font-mono ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay }}
        >
            {displayText || text.replace(/./g, ' ')}
        </motion.span>
    );
}
