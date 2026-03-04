import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Send, Terminal as TerminalIcon } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn.jsx';
import SlideIn from '../components/animations/SlideIn.jsx';
import Button from '../components/ui/Button.jsx';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import TechGrid from '../components/ui/TechGrid.jsx';
import Testimonials from '../components/ui/Testimonials.jsx';
import { projects } from '../data/projects.js';
import TextReveal from '../components/animations/TextReveal.jsx';
import DecryptedText from '../components/animations/DecryptedText.jsx';
import Magnetic from '../components/animations/Magnetic.jsx';
import SEO from '../components/ui/SEO.jsx';

const Home = () => {
    return (
        <div className="pb-20">
            <SEO
                title="Home"
                description="Prit Patel - Full Stack Web Developer & Creative Coder specializing in React.js, Node.js, PHP. Building futuristic digital experiences with GSAP animations and interactive UI."
                keywords="Prit Patel, Full Stack Developer, React Developer, Node.js, Creative Coder, Web Developer Portfolio, Hire Developer, Freelance Developer India"
            />
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 glass border-white/10 rounded-full mb-8">
                            <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/60">PRIT_PATEL_v2.5.0</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                            <DecryptedText text="BUILDING" /> <span className="text-cyber-blue neon-glow-blue"><DecryptedText text="DIGITAL" delay={0.3} /></span><br />
                            <span className="relative">
                                <DecryptedText text="EXPERIENCES" delay={0.6} />
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-transparent" />
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} className="max-w-2xl mx-auto mb-12">
                        <p className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed">
                            Full Stack Engineer & Creative Coder crafting immersive web applications
                            at the intersection of design and technology.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Magnetic strength={0.3}>
                            <Link to="/work" data-cursor="explore">
                                <Button variant="primary" icon={TerminalIcon}>
                                    EXPLORE_WORK
                                </Button>
                            </Link>
                        </Magnetic>
                        <Magnetic strength={0.3}>
                            <a href="https://github.com/pritpatel11" target="_blank" rel="noopener noreferrer" data-cursor="github" data-cursor-icon="github">
                                <Button variant="outline" icon={Github}>
                                    VIEW_GITHUB
                                </Button>
                            </a>
                        </Magnetic>
                    </FadeIn>
                </div>
                {/* Hero Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square opacity-20 pointer-events-none">
                    <div className="w-full h-full rounded-full bg-glow-gradient from-cyber-blue/40 to-transparent blur-3xl" />
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 text-center mb-16">
                    <SlideIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">
                            TECH <span className="text-cyber-purple">STACK</span>
                        </h2>
                        <p className="text-white/40 max-w-xl mx-auto">
                            A comprehensive toolkit of modern technologies I use to build robust applications.
                        </p>
                    </SlideIn>
                </div>

                <TechGrid />
            </section>

            {/* Project Showcase Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <SlideIn direction="left">
                            <h2 className="text-3xl md:text-5xl font-black">
                                PROJECT <span className="text-cyber-blue">SHOWCASE</span>
                            </h2>
                            <p className="text-white/40 mt-4 max-w-md">
                                Selected works demonstrating capabilities in AI, Data Visualization, and Interactive Design.
                            </p>
                        </SlideIn>
                        <SlideIn direction="right">
                            <Link to="/work" data-cursor="all">
                                <Button variant="ghost" className="text-xs">
                                    VIEW_ALL_PROJECTS
                                </Button>
                            </Link>
                        </SlideIn>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.slice(0, 2).map((project, index) => (
                            <FadeIn key={project.id} delay={index * 0.2}>
                                <ProjectCard project={project} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <Testimonials />

            {/* Let's build something Section */}
            <section className="py-16 md:py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-tight">
                            LET'S BUILD SOMETHING<br />
                            <span className="text-cyber-blue">EXTRAORDINARY.</span>
                        </h2>
                        <Link to="/contact" data-cursor="contact">
                            <Button variant="neon" className="px-12 py-4 text-xl" icon={Send}>
                                GET_IN_TOUCH
                            </Button>
                        </Link>
                    </FadeIn>
                </div>

                {/* Glow background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyber-purple/10 blur-[120px] rounded-full" />
            </section>
        </div>
    );
};

export default Home;
