import { useState, useEffect, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%@#$!^&*()_+-=[]{}|;:,.<>?/~';

export const useDecryption = (text, speed = 40, maxIterations = 3) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const decrypt = useCallback(() => {
        let iteration = 0;
        let interval = null;

        clearInterval(interval);

        interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsComplete(true);
            }

            iteration += 1 / maxIterations;
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, maxIterations]);

    return { displayText, isComplete, trigger: decrypt };
};
