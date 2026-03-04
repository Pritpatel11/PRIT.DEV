import { motion } from 'framer-motion';

const SlideIn = ({ children, direction = 'left', delay = 0, className = '' }) => {
    const directions = {
        left: { x: -50, opacity: 0 },
        right: { x: 50, opacity: 0 },
        up: { y: 50, opacity: 0 },
        down: { y: -50, opacity: 0 },
    };

    return (
        <motion.div
            initial={directions[direction]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SlideIn;
