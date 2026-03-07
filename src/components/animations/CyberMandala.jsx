import { motion } from 'framer-motion';

const CyberMandala = () => {
    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Outer Spinning Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border border-cyber-blue/30 border-t-cyber-blue border-r-cyber-blue"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Counter-Spinning Ring */}
            <motion.div
                className="absolute inset-2 rounded-full border border-dashed border-cyber-purple/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* The U-shape (Base of Tilak) */}
            <motion.svg
                viewBox="0 0 50 50"
                className="w-10 h-10 text-white relative z-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: "drop-shadow(0 0 8px rgba(0, 242, 255, 0.8))" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* U Shape (Urdhva Pundra base) */}
                <path d="M 15,10 C 15,35 35,35 35,10" />
                {/* Center Line (Shri) */}
                <motion.path
                    d="M 25,15 L 25,40"
                    stroke="var(--tw-colors-cyber-blue)"
                    strokeWidth="3"
                    animate={{
                        stroke: ['#00f2ff', '#b535ff', '#00f2ff'],
                        filter: ['drop-shadow(0 0 5px #00f2ff)', 'drop-shadow(0 0 10px #b535ff)', 'drop-shadow(0 0 5px #00f2ff)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Base Bindu */}
                <circle cx="25" cy="45" r="2" fill="var(--tw-colors-cyber-purple)" stroke="none" />
            </motion.svg>

            {/* Core Glow */}
            <div className="absolute inset-0 bg-cyber-blue blur-[20px] opacity-20" />
        </div>
    );
};

export default CyberMandala;
