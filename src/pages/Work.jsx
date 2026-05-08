import { useState } from 'react';
import FadeIn from '../components/animations/FadeIn.jsx';
import SlideIn from '../components/animations/SlideIn.jsx';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import SEO from '../components/ui/SEO.jsx';

const Work = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-24">
            <SEO
                title="Projects"
                description="Explore Prit Patel's portfolio of web development projects including AI tools, data dashboards, and interactive web applications built with React, Node.js, and PHP."
                keywords="Web Development Projects, React Projects, Full Stack Projects, AI Web Apps, Portfolio Projects, Case Studies"
            />
            <div className="container mx-auto px-6">
                <header className="mb-12">
                    <SlideIn direction="down">
                        <h1 className="text-4xl md:text-7xl font-black mb-6">
                            PROJECT <span className="text-cyber-blue">SHOWCASE</span>
                        </h1>
                        <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
                            A collection of digital experiences, machine learning tools, and
                            interactive platforms built with a focus on performance and impact.
                        </p>
                    </SlideIn>
                </header>

                <SlideIn direction="up" delay={0.2}>
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${
                                    filter === cat 
                                        ? 'bg-cyber-blue text-black border-cyber-blue shadow-[0_0_15px_rgba(0,242,255,0.4)]' 
                                        : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-cyber-blue/50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </SlideIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <FadeIn key={project.id} delay={index * 0.1}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
