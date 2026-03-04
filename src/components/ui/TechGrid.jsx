import { motion } from 'framer-motion';
import { techStack } from '../../data/techStack.js';
import Card from './Card.jsx';

const TechGrid = () => {
    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="flex flex-col items-center justify-center gap-4 group hover:border-cyber-blue transition-all duration-500 py-8" glow>
                            <div className="relative">
                                <tech.icon
                                    size={42}
                                    className="text-white/40 group-hover:opacity-100 transition-opacity duration-500 z-10 relative"
                                    style={{ filter: `drop-shadow(0 0 10px ${tech.color}33)` }}
                                />
                                <div
                                    className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{ backgroundColor: tech.color }}
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold tracking-[0.2em] text-white/30 group-hover:text-cyber-blue transition-colors">
                                    {tech.name.toUpperCase()}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechGrid;
