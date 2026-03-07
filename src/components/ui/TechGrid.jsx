import { motion } from 'framer-motion';
import { techStack } from '../../data/techStack.js';
import SysIdCard from './SysIdCard.jsx';

const TechGrid = () => {
    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                        className="group"
                    >
                        <SysIdCard tech={tech} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechGrid;
