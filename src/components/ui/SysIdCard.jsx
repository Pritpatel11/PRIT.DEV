import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SysIdCard = ({ tech }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position trackers
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for rotation
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

    // Smooth spring for glare position
    const glareX = useSpring(useTransform(x, [-0.5, 0.5], [100, -100]), { stiffness: 200, damping: 20 });
    const glareY = useSpring(useTransform(y, [-0.5, 0.5], [100, -100]), { stiffness: 200, damping: 20 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        // Calculate mouse position relative to card center (-0.5 to 0.5 range)
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
            className="w-full relative cursor-crosshair group z-10"
        >
            {/* The Badge Itself */}
            <div className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-300 h-[140px] flex flex-col items-center justify-center gap-4 ${isHovered ? 'bg-[#111] border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : 'bg-[#0a0a0a] border-white/5 shadow-lg'
                }`}>

                {/* Holographic Glare Effect */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50 z-20"
                        style={{
                            background: `radial-gradient(circle at calc(50% + ${glareX.get()}%) calc(50% + ${glareY.get()}%), rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
                        }}
                    />
                )}

                {/* Cyberpunk Scanline */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                {/* Top Label */}
                <div className="absolute top-2 left-3 right-3 flex justify-between items-center opacity-30">
                    <span className="text-[8px] font-mono tracking-widest text-white/50">SYS.ID</span>
                    <span className="text-[8px] font-mono tracking-widest text-white/50">auth_v2</span>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3">
                    <tech.icon
                        size={36}
                        className="transition-all duration-300"
                        style={{
                            color: isHovered ? tech.color : 'rgba(255, 255, 255, 0.4)',
                            filter: isHovered ? `drop-shadow(0 0 12px ${tech.color}66)` : 'none'
                        }}
                    />
                    <p className={`text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${isHovered ? 'text-cyber-blue shadow-cyber-blue' : 'text-white/40'}`}>
                        {tech.name.toUpperCase()}
                    </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:via-cyber-blue group-hover:opacity-100 transition-all duration-500" />
            </div>
        </motion.div>
    );
};

export default SysIdCard;
