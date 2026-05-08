import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Work', path: '/work', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
];

const FloatingNav = () => {
    let mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-max z-[100] flex h-16 items-end gap-2 rounded-2xl border border-white/10 dark:border-white/10 bg-black/80 backdrop-blur-xl px-4 pb-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}>
            {navItems.map((item, i) => (
                <DockIcon mouseX={mouseX} item={item} key={i} />
            ))}
        </div>
    );
};

function DockIcon({ mouseX, item }) {
    let ref = useRef(null);
    const location = useLocation();
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    // Distance string calculation for MacOS dock scale effect
    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link to={item.path}>
            <motion.div
                ref={ref}
                style={{ width }}
                className={`relative aspect-square flex flex-col items-center justify-center rounded-2xl ${isActive ? 'bg-cyber-blue shadow-[0_0_15px_rgba(0,242,255,0.5)]' : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'} transition-colors duration-200 group`}
            >
                <Icon size={24} className={`${isActive ? 'text-black' : 'text-white/70 group-hover:text-white'} transition-colors`} />

                {/* Tooltip on Hover */}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-black/80 glass border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap">
                        {item.name}
                    </div>
                </div>

                {isActive && (
                    <motion.div layoutId="dock-indicator" className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-[0_0_5px_rgba(0,242,255,1)]" />
                )}
            </motion.div>
        </Link>
    );
}

export default FloatingNav;
