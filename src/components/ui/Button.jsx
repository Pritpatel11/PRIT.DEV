import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    disabled,
    ...props
}) => {
    const variants = {
        primary: 'bg-cyber-blue text-black font-bold hover:shadow-[0_0_20px_rgba(var(--cyber-accent-rgb),0.6)]',
        secondary: 'bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 hover:shadow-[0_0_15px_rgba(var(--cyber-accent-rgb),0.3)]',
        outline: 'bg-transparent border border-[var(--glass-border)] text-[var(--text-main)] hover:border-cyber-blue hover:bg-white/5 dark:hover:bg-white/5',
        ghost: 'bg-transparent text-[var(--text-main)] opacity-70 hover:opacity-100 hover:bg-white/5 dark:hover:bg-white/5',
        neon: 'bg-transparent border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 hover:shadow-[0_0_15px_rgba(188,19,254,0.3)]',
    };

    return (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.05 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
            disabled={disabled}
            className={`px-6 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            {...props}
        >
            {children}
            {Icon && <Icon size={18} className={`${!disabled ? 'group-hover:translate-x-1' : ''} transition-transform`} />}
        </motion.button>
    );
};

export default Button;
