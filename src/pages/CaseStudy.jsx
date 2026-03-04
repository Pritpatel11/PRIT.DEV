import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft,
    ExternalLink,
    Github,
    CheckCircle2,
    Cpu,
    Zap,
    Layout,
    Layers,
    Calendar,
    User,
    ArrowUpRight
} from 'lucide-react';
import { projects } from '../data/projects.js';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import FadeIn from '../components/animations/FadeIn.jsx';
import SlideIn from '../components/animations/SlideIn.jsx';
import Card from '../components/ui/Card.jsx';
import Magnetic from '../components/animations/Magnetic.jsx';

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!project) return;

        // GSAP Animations
        const ctx = gsap.context(() => {
            // Hero Title Reveal
            gsap.from(".hero-title-char", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out"
            });

            // Content Section Parallax/Reveal
            gsap.utils.toArray(".reveal-section").forEach((section) => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            // Image Zoom Parallax
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom",
                    scrub: true
                },
                scale: 1.1,
                ease: "none"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [project]);

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center font-mono">
            <h1 className="text-2xl font-black neon-glow-blue animate-pulse">404_PROJECT_NOT_FOUND</h1>
        </div>
    );

    return (
        <div ref={containerRef} className="pt-24 pb-24 selection:bg-cyber-blue selection:text-black">
            <div className="container mx-auto px-6">
                {/* Navigation */}
                <div className="flex justify-between items-center mb-16">
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-cyber-blue transition-all duration-300 group"
                    >
                        <div className="p-2 glass border-white/5 rounded-full group-hover:border-cyber-blue/30 transition-colors">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase">BACK_TO_WORK</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                        <span className="text-[10px] font-bold tracking-widest text-cyber-blue uppercase">LOG_ID: CASE_0{project.id}</span>
                    </div>
                </div>

                {/* Hero section with architectural feel */}
                <header className="mb-24">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <Badge variant="purple" className="mb-6 px-4 py-1.5 text-xs">RESEARCH_&_DEVELOPMENT</Badge>
                            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 uppercase leading-[0.9] tracking-tighter overflow-hidden">
                                {project.title.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block mr-4">
                                        {word.split("").map((char, j) => (
                                            <span key={j} className="hero-title-char inline-block">{char}</span>
                                        ))}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-base sm:text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-medium">
                                {project.description}
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 pb-2">
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                <Magnetic strength={0.3}>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" icon={ArrowUpRight} className="px-8">LIVE_APP</Button>
                                    </a>
                                </Magnetic>
                                <Magnetic strength={0.3}>
                                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" icon={Github} className="px-8">CODEBASE</Button>
                                    </a>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Full Width Featured Image */}
                <div className="w-full aspect-video sm:aspect-[21/9] overflow-hidden rounded-xl sm:rounded-[2rem] border border-white/10 mb-16 md:mb-24 glass p-1 sm:p-2 relative group">
                    <img
                        ref={imageRef}
                        src={`/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-[1.8rem] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex gap-2 sm:gap-3 flex-wrap">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 glass-card border-white/10 rounded-full text-[10px] font-bold text-white/40 tracking-widest uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid lg:grid-cols-12 gap-10 md:gap-20">
                    <div className="lg:col-span-8 space-y-16 md:space-y-32">
                        {/* Challenge Section */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-4 mb-10 group">
                                <div className="p-3 glass border-cyber-blue/30 rounded-2xl text-cyber-blue group-hover:scale-110 transition-transform">
                                    <Layout size={24} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black tracking-[0.4em] text-cyber-blue block mb-1">SECTION_01</span>
                                    <h2 className="text-3xl font-black uppercase tracking-tight">THE CHALLENGE</h2>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 border-l-2 border-white/10 pl-8">
                                {project.challenge}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {project.features.map((feature, i) => (
                                    <Card key={i} className="bg-white/[0.02] border-white/5 hover:border-cyber-blue/30 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mb-4">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                                        <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Solution Section */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-4 mb-10 group">
                                <div className="p-3 glass border-cyber-purple/30 rounded-2xl text-cyber-purple group-hover:scale-110 transition-transform">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black tracking-[0.4em] text-cyber-purple block mb-1">SECTION_02</span>
                                    <h2 className="text-3xl font-black uppercase tracking-tight">INFRASTRUCTURE</h2>
                                </div>
                            </div>
                            <div className="glass p-8 md:p-12 rounded-3xl border-white/5 relative overflow-hidden">
                                <p className="text-lg text-white/80 leading-relaxed relative z-10">
                                    {project.solution}
                                </p>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/5 blur-[80px] rounded-full -mr-32 -mt-32" />
                            </div>
                        </section>

                        {/* Tech Stack Matrix */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-4 mb-10 group">
                                <div className="p-3 glass border-cyber-pink/30 rounded-2xl text-cyber-pink group-hover:scale-110 transition-transform">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black tracking-[0.4em] text-cyber-pink block mb-1">SECTION_03</span>
                                    <h2 className="text-3xl font-black uppercase tracking-tight">TECH STACK</h2>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {project.techStack.map((tech) => (
                                    <div key={tech} className="glass border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-cyber-pink/40 transition-all group">
                                        <div className="text-xs font-black tracking-widest text-white/40 group-hover:text-cyber-pink transition-colors">{tech.toUpperCase()}</div>
                                        <div className="w-12 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-cyber-pink/40 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Architectural Meta-Sidebar */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
                        <Card className="bg-white/[0.01] border-white/5 p-6 md:p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyber-blue/20 rounded-tr-3xl" />
                            <h4 className="text-[10px] font-black tracking-[0.3em] text-white/20 mb-8 uppercase">META_DATA_REPORT</h4>

                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-cyber-blue">
                                        <User size={12} className="shrink-0" />
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase">POSITION</span>
                                    </div>
                                    <p className="text-sm font-bold text-white/90 leading-tight">Lead Systems Architect</p>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-cyber-blue">
                                        <Calendar size={12} className="shrink-0" />
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase">TIMELINE</span>
                                    </div>
                                    <p className="text-sm font-bold text-white/90 leading-tight">Q4 2023 PHASE_I</p>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-cyber-blue">
                                        <Layers size={12} className="shrink-0" />
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase">DOMAIN</span>
                                    </div>
                                    <p className="text-sm font-bold text-white/90 leading-tight">{project.category}</p>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-white/5">
                                <div className="text-[10px] font-black tracking-widest text-white/20 mb-4 uppercase">SYSTEM_VERIFICATION</div>
                                <div className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="flex-1 h-0.5 bg-cyber-blue/20 rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-cyber-blue transform -translate-x-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                    </div>)}
                                </div>
                                <div className="mt-4 text-[8px] font-mono text-cyber-blue/40 text-right uppercase tracking-tighter">ENCRYPTED_SIGNATURE: PRIT_P.EXE</div>
                            </div>
                        </Card>

                        <Link to="/contact">
                            <Button variant="neon" className="w-full py-5 group">
                                <span className="flex items-center justify-center gap-3 text-sm">
                                    INITIATE_PROJECT_INQUIRY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </Button>
                        </Link>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;

