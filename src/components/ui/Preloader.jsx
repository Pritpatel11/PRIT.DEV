import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    { text: "|| श्री राम ||", status: "[OK]", delay: 0.5 },
    { text: "System Alignment: DHARMA v1.0...", status: "[PASS]", delay: 1.2 },
    { text: "Booting Engine...", status: "[READY]", delay: 2.2 },
];

const Preloader = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(-1);

    useEffect(() => {
        const timeouts = steps.map((step, index) =>
            setTimeout(() => setCurrentStep(index), step.delay * 1000)
        );

        const endTimeout = setTimeout(() => onComplete(), 3800);

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(endTimeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                filter: "blur(20px) brightness(2)",
                transition: { duration: 0.8, ease: "circIn" }
            }}
            className="fixed inset-0 z-[1000] bg-cyber-black flex flex-col items-center justify-center font-mono"
        >
            <div className="w-full max-w-md px-10">
                <div className="space-y-4">
                    {steps.map((step, i) => (
                        <div key={i} className="flex justify-between items-center h-6">
                            <AnimatePresence>
                                {currentStep >= i && (
                                    <>
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-white/60 uppercase tracking-widest text-xs"
                                        >
                                            {step.text}
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-cyber-blue font-black text-xs neon-glow-blue"
                                        >
                                            {step.status}
                                        </motion.span>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Progress Bar Container */}
                <div className="mt-12 h-[2px] w-full bg-white/5 relative overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-full bg-cyber-blue shadow-[0_0_15px_rgba(0,242,255,0.8)]"
                    />
                </div>

                <div className="mt-4 flex justify-between items-center text-[8px] text-white/20 uppercase tracking-[0.3em]">
                    <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        System_Status: Optimal
                    </motion.span>
                    <span>Prit_OS_v2.4.0</span>
                </div>
            </div>

            {/* Background Glitch Shards */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-px bg-cyber-blue animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-cyber-purple animate-pulse [animation-delay:0.5s]" />
            </div>
        </motion.div>
    );
};

export default Preloader;
