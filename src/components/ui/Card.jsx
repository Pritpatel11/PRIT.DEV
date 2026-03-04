import { motion } from 'framer-motion';

const Card = ({ children, className = '', glow = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card p-6 ${glow ? 'hover:shadow-[0_0_30px_rgba(var(--cyber-accent-rgb),0.15)]' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
