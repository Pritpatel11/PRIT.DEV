const Badge = ({ children, variant = 'blue', className = '' }) => {
    const variants = {
        blue: 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30',
        purple: 'bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30',
        pink: 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink/30',
        gray: 'bg-[var(--glass-bg)] text-[var(--text-dim)] border-[var(--glass-border)]',
    };

    return (
        <span className={`px-2.5 py-0.5 text-xs font-medium border rounded-full ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
