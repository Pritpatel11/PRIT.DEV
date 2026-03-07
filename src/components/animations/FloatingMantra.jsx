import { motion } from 'framer-motion';

const FloatingMantra = () => {
    // Ramo Rajamanih Sada Vijayate in Gujarati script
    const mantra = "રામો રાજમણિઃ સદા વિજયતે";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-0 hidden sm:flex items-center justify-center pointer-events-none"
        >
            <div className="relative">
                {/* Glowing Background Blur */}
                <div className="absolute inset-0 bg-cyber-blue opacity-20 blur-[30px] w-full h-full" />

                {/* The Mantra */}
                <motion.h3
                    className="text-white/20 font-black text-2xl tracking-[0.5em] [writing-mode:vertical-rl] rotate-180 uppercase"
                    animate={{
                        textShadow: [
                            "0 0 10px rgba(0, 242, 255, 0.1)",
                            "0 0 20px rgba(0, 242, 255, 0.4)",
                            "0 0 10px rgba(0, 242, 255, 0.1)"
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {mantra}
                </motion.h3>

                {/* Cyberpunk Decorative Line */}
                <motion.div
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-30"
                    animate={{ height: ["50%", "80%", "50%"], opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default FloatingMantra;
