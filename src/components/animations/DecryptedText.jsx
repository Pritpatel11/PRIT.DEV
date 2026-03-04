import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useDecryption } from '../../hooks/useDecryption';

const DecryptedText = ({
    text,
    className = "",
    speed = 30,
    maxIterations = 3,
    delay = 0,
    once = true
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });
    const { displayText, trigger } = useDecryption(text, speed, maxIterations);

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                trigger();
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, trigger, delay]);

    return (
        <motion.span
            ref={ref}
            className={`${className} font-mono`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText || text.split('').map(() => '#').join('')}
        </motion.span>
    );
};

export default DecryptedText;
