import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] // Custom refined ease for a cinematic feel
            }}
            className="w-full h-full"
        >
            {/* Cinematic Sweep Overlay */}
            <motion.div
                className="fixed inset-0 z-[200] bg-black pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1
                }}
                style={{ transformOrigin: 'top' }}
            />
            <motion.div
                className="fixed inset-0 z-[199] bg-cyber-blue pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
                style={{ transformOrigin: 'top' }}
            />
            {children}
        </motion.div>
    );
};

export default PageTransition;
