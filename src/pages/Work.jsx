import FadeIn from '../components/animations/FadeIn.jsx';
import SlideIn from '../components/animations/SlideIn.jsx';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import SEO from '../components/ui/SEO.jsx';

const Work = () => {
    return (
        <div className="pt-32 pb-24">
            <SEO
                title="Projects"
                description="Explore Prit Patel's portfolio of web development projects including AI tools, data dashboards, and interactive web applications built with React, Node.js, and PHP."
                keywords="Web Development Projects, React Projects, Full Stack Projects, AI Web Apps, Portfolio Projects, Case Studies"
            />
            <div className="container mx-auto px-6">
                <header className="mb-20">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(p => p.id !== 1).map((project, index) => (
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
