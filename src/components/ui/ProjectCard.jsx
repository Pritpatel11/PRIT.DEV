import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import Badge from './Badge.jsx';
import Magnetic from '../animations/Magnetic.jsx';
import Tilt from '../animations/Tilt.jsx';

const ProjectCard = ({ project }) => {
    return (
        <Tilt rotationRange={10}>
            <Card className="group relative overflow-hidden flex flex-col h-full border-white/5 hover:border-cyber-blue transition-all duration-500" glow>
                {/* Project Image Preview */}
                <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-6 border border-white/5">
                    <img
                        src={`/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent" />
                </div>

                {/* Category/Tag */}
                <div className="flex justify-between items-start mb-4">
                    <Badge variant={project.category.includes('AI') ? 'purple' : 'blue'}>
                        {project.category.toUpperCase()}
                    </Badge>
                    <div className="flex gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] text-white/30 font-mono">{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-blue transition-colors font-mono uppercase tracking-tighter">
                    {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-6 line-clamp-2">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center justify-between mt-auto">
                    <Magnetic strength={0.3}>
                        <Link
                            to={`/project/${project.slug}`}
                            data-cursor="details"
                            data-cursor-icon="arrow"
                            className="text-xs font-bold flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                        >
                            VIEW CASE STUDY <ArrowRight size={14} />
                        </Link>
                    </Magnetic>
                </div>

                {/* Background Decorations */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
        </Tilt>
    );
};

export default ProjectCard;
