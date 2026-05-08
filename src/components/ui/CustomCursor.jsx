import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useMotionValue, useVelocity, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Play, ArrowRight, ExternalLink, Hash } from 'lucide-react';

const CustomCursor = () => {
    const [cursorType, setCursorType] = useState('default');
    const [cursorText, setCursorText] = useState('');
    const [particles, setParticles] = useState([]);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const particleIdRef = useRef(0);

    // Mouse coordinates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Tracking velocity for stretching/rotation
    const xVelocity = useVelocity(mouseX);
    const yVelocity = useVelocity(mouseY);

    // Smoothed spring values for the trailing rings
    const ring1Config = { stiffness: 350, damping: 40, mass: 0.2 };
    const ring2Config = { stiffness: 150, damping: 25, mass: 0.8 };

    const r1X = useSpring(mouseX, ring1Config);
    const r1Y = useSpring(mouseY, ring1Config);

    const r2X = useSpring(mouseX, ring2Config);
    const r2Y = useSpring(mouseY, ring2Config);

    // Dynamic rotation based on movement direction
    const angle = useTransform([xVelocity, yVelocity], ([lx, ly]) => {
        return Math.atan2(ly, lx) * (180 / Math.PI);
    });

    // Dynamic scale based on speed (stretching)
    const speed = useTransform([xVelocity, yVelocity], ([lx, ly]) => {
        const s = Math.sqrt(lx * lx + ly * ly);
        return 1 + Math.min(s / 2000, 0.4);
    });

    // Detect touch device
    useEffect(() => {
        const check = () => setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Manage global cursor style
    useEffect(() => {
        if (!isTouchDevice) {
            document.body.style.cursor = 'none';
        } else {
            document.body.style.cursor = 'auto';
        }
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, [isTouchDevice]);

    useEffect(() => {
        if (isTouchDevice) return;
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Emit particle if moving fast
            const vx = Math.abs(xVelocity.get());
            const vy = Math.abs(yVelocity.get());
            if (vx + vy > 400 && Math.random() > 0.7) {
                const id = particleIdRef.current++;
                setParticles(prev => [...prev.slice(-15), {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 3 + 1
                }]);

                setTimeout(() => {
                    setParticles(prev => prev.filter(p => p.id !== id));
                }, 800);
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest('a, button, [data-cursor], [data-cursor-icon]');
            if (target) {
                const icon = target.getAttribute('data-cursor-icon');
                const text = target.getAttribute('data-cursor');
                setCursorType(icon || (target.tagName.toLowerCase() === 'a' && target.href.includes('github.com') ? 'github' : 'hover'));
                setCursorText(text || '');
            } else {
                setCursorType('default');
                setCursorText('');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, xVelocity, yVelocity]);

    const isSpecial = ['github', 'play', 'arrow', 'link'].includes(cursorType);
    const isHovered = cursorType !== 'default';

    // Hide cursor on touch devices
    if (isTouchDevice) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Particle Trail */}
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 0, y: p.y + (Math.random() - 0.5) * 20 }}
                        exit={{ opacity: 0 }}
                        className="absolute bg-cyber-blue/40 rounded-sm"
                        style={{
                            left: p.x,
                            top: p.y,
                            width: p.size,
                            height: p.size,
                            boxShadow: '0 0 8px rgba(0, 242, 255, 0.4)'
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Inner Ring (Lagging) */}
            <motion.div
                className="absolute flex items-center justify-center border border-white/10 rounded-full"
                animate={{
                    width: isHovered ? 40 : 20,
                    height: isHovered ? 40 : 20,
                    opacity: isHovered ? 1 : 0.3,
                }}
                style={{ x: r1X, y: r1Y, translateX: '-50%', translateY: '-50%' }}
            />

            {/* Main Outer Ring (Velocity Responsive) */}
            <motion.div
                className="absolute flex items-center justify-center z-10"
                animate={{
                    width: isHovered ? 100 : 40,
                    height: isHovered ? 100 : 40,
                    borderColor: isHovered ? 'rgba(var(--cyber-accent-rgb), 1)' : 'rgba(var(--cyber-accent-rgb), 0.3)',
                    borderWidth: isSpecial ? 0 : 1,
                    backgroundColor: isHovered ? 'rgba(var(--cyber-accent-rgb), 0.05)' : 'transparent',
                }}
                style={{
                    x: r2X,
                    y: r2Y,
                    translateX: '-50%',
                    translateY: '-50%',
                    rotate: angle,
                    scaleX: speed,
                    borderRadius: isHovered ? '40%' : '50%',
                    borderStyle: 'solid'
                }}
            >
                {/* Special Content */}
                <AnimatePresence mode="wait">
                    {isSpecial && (
                        <motion.div
                            key={cursorType}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="bg-cyber-dark/90 p-3 rounded-full border border-cyber-blue shadow-neon-blue"
                        >
                            {cursorType === 'github' && <Github size={20} className="text-cyber-blue" />}
                            {cursorType === 'arrow' && <ArrowRight size={20} className="text-cyber-blue" />}
                            {cursorType === 'link' && <ExternalLink size={20} className="text-cyber-blue" />}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hover Text */}
                {!isSpecial && isHovered && cursorText && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full mt-4 bg-cyber-blue/10 backdrop-blur-md px-3 py-1 border border-cyber-blue/30 rounded-md"
                    >
                        <span className="text-[10px] font-black tracking-widest text-cyber-blue uppercase">
                            {cursorText}
                        </span>
                    </motion.div>
                )}
            </motion.div>

            {/* Core Dot (Instant) */}
            <motion.div
                className="absolute w-1.5 h-1.5 bg-cyber-blue rounded-full z-20 mix-blend-difference"
                style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
            />
        </div>
    );
};

export default CustomCursor;

