import { motion } from 'framer-motion';
import { User, Book, Briefcase, Heart, Code, Factory, Youtube, ExternalLink } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn.jsx';
import SlideIn from '../components/animations/SlideIn.jsx';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import WorkTimeline from '../components/ui/WorkTimeline.jsx';
import SEO from '../components/ui/SEO.jsx';
import DecryptedText from '../components/animations/DecryptedText.jsx';
import DecryptButton from '../components/ui/DecryptButton.jsx';

const About = () => {
    return (
        <div className="pt-32 pb-24 relative overflow-hidden">
            <SEO
                title="About"
                description="Learn about Prit Patel - Full Stack Developer with expertise in React.js, Node.js, PHP, and creative web animations. Discover my professional journey, skills, and learning resources."
                keywords="About Prit Patel, Developer Skills, React Expert, Full Stack Experience, Web Developer India"
            />
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <header className="mb-20">
                    <SlideIn direction="left">
                        <Badge variant="blue" className="mb-4">IDENTITY_PROTOCOL_v0.1</Badge>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
                            <DecryptedText text="ABOUT" /> <span className="text-cyber-blue font-outline"><DecryptedText text="ME" delay={0.4} /></span>
                        </h1>
                    </SlideIn>
                </header>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Personal Info */}
                    <div className="space-y-12">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 glass border-cyber-blue/30 rounded-xl text-cyber-blue">
                                    <User size={24} />
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight uppercase">USER_BIO</h2>
                            </div>
                            <div className="prose prose-invert max-w-none mb-8">
                                <p className="text-xl text-white/70 leading-relaxed font-medium">
                                    I am <span className="text-white font-bold text-2xl border-b-2 border-cyber-blue font-outline">PRIT_PATEL</span>,
                                    a Creative Developer architecting high-fidelity digital manifestations.
                                </p>
                                <p className="text-white/50 leading-relaxed mt-4">
                                    I thrive in the intersection of design and technology, crafting immersive digital experiences
                                    that push the boundaries of the modern web.
                                </p>
                            </div>
                            <DecryptButton fileUrl="/prit patel_Resume.pdf" fileName="prit patel_Resume.pdf" />
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 glass border-cyber-purple/30 rounded-xl text-cyber-purple">
                                    <Book size={24} />
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight uppercase">INTELLIGENCE_EVOLUTION</h2>
                            </div>
                            <Card
                                data-cursor="education"
                                className="border-l-4 border-l-cyber-purple bg-gradient-to-r from-cyber-purple/5 to-transparent"
                            >
                                <h3 className="text-lg font-bold mb-1 uppercase">B.Tech - Information Technology</h3>
                                <p className="text-cyber-purple/80 font-bold text-sm mb-3">3RD YEAR UNDERGRADUATE</p>
                                <p className="text-white/60">
                                    U.V. Patel College of Engineering, Ganpat University
                                </p>
                            </Card>
                        </FadeIn>
                    </div>

                    {/* Right Column: Professional Status */}
                    <div className="space-y-12">
                        <FadeIn delay={0.4}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 glass border-cyber-pink/30 rounded-xl text-cyber-pink">
                                    <Briefcase size={24} />
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight uppercase">CURRENT_ENGAGEMENTS</h2>
                            </div>
                            <div className="space-y-6">
                                <Card
                                    data-cursor="freelance"
                                    className="border-l-4 border-l-cyber-pink bg-gradient-to-br from-cyber-pink/10 to-transparent"
                                    glow
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <Badge variant="pink">ACTIVE_FREELANCE</Badge>
                                        <Code size={20} className="text-cyber-pink" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 uppercase">Full Stack Freelancer</h3>
                                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                                        I am currently operating as a freelance developer, providing high-end digital solutions
                                        for businesses looking to modernize their web presence.
                                    </p>
                                </Card>

                                <Card
                                    data-cursor="neeta"
                                    className="border-l-4 border-l-cyber-blue bg-white/[0.02]"
                                >
                                    <div className="flex items-center gap-3 mb-4 text-cyber-blue">
                                        <Factory size={20} />
                                        <h4 className="font-bold uppercase tracking-widest text-sm">CURRENT_PROJECT</h4>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 uppercase">Neeta Engineering Works</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        I am currently building a <strong>showcase website</strong> for <strong>Neeta Engineering Works</strong>,
                                        a specialized manufacturing factory. This project is designed to professionally showcase
                                        their company profile, industrial expertise, and decades of manufacturing experience
                                        through a sophisticated digital interface.
                                    </p>
                                </Card>
                                <Card
                                    data-cursor="DEV Corporation"
                                    className="border-l-4 border-l-cyber-blue bg-white/[0.02] relative overflow-hidden group"
                                >
                                    {/* Scanline animation */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-blue/30 -translate-y-full group-hover:animate-scanline z-20" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3 text-cyber-blue">
                                                <Factory size={20} />
                                                <h4 className="font-bold uppercase tracking-widest text-sm">CURRENT_PROJECT</h4>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                                                <span className="text-[8px] font-bold text-cyber-blue">ACTIVE_INTEL</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">DEV Corporation</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Currently <strong>spearheading the development</strong> of a <strong>digital brand identity</strong> for
                                            <strong>DEV Corporation</strong>, a leading manufacturer of <strong>HT/LT line materials</strong>.
                                            I am transforming their extensive <strong>industrial legacy</strong> into a <strong>modern showcase website</strong>,
                                            focusing on <strong>SEO-optimized product catalogs</strong>, <strong>high-performance UI</strong>,
                                            and a professional interface that highlights their expertise in the <strong>energy and solar power sectors</strong>.
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 glass border-cyber-blue/30 rounded-xl text-cyber-blue">
                                    <Heart size={24} />
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight uppercase">DESIGN_PHILOSOPHY</h2>
                            </div>
                            <p className="text-white/50 italic leading-relaxed bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                                "I believe the web should be an extension of our imagination. My mission is to build
                                interfaces that are not just tools, but digital environments that evoke emotion and
                                provide seamless utility."
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Experience Roadmap Section */}
                <section className="mt-32">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <Badge variant="blue" className="mb-4">PROFESSIONAL_JOURNEY</Badge>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                                <DecryptedText text="WORK" /> <span className="text-cyber-blue font-outline"><DecryptedText text="ROADMAP" delay={0.3} /></span>
                            </h2>
                        </div>
                    </FadeIn>
                    <WorkTimeline />
                </section>

                {/* Neural Sources Section */}
                <section className="mt-32">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <Badge variant="blue" className="mb-4">KNOWLEDGE_SOURCES</Badge>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                                <DecryptedText text="NEURAL" /> <span className="text-cyber-blue font-outline"><DecryptedText text="SOURCES" delay={0.3} /></span>
                            </h2>
                            <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm">
                                The mentors and channels that shaped my development journey.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Hitesh Choudhary - Chai aur Code */}
                        <FadeIn>
                            <a href="https://www.youtube.com/@chaiaurcode" target="_blank" rel="noopener noreferrer" className="block group">
                                <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-red-500/5 to-transparent hover:from-red-500/10 transition-all duration-500 relative overflow-hidden" glow>
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500/20 group-hover:bg-red-500/40 transition-colors" />
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 glass border-red-500/30 rounded-xl text-red-500 group-hover:scale-110 transition-transform">
                                                <Youtube size={24} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-xl font-black uppercase tracking-tight">Hitesh Choudhary</h3>
                                                </div>
                                                <p className="text-red-400/80 text-xs font-bold tracking-widest uppercase mt-1">CHAI_AUR_CODE</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-green-500/30 bg-green-500/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[8px] font-black text-green-400 tracking-wider">VERIFIED</span>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                                        One of the most impactful mentors in the Indian dev community. His <strong>"Chai aur Code"</strong> series on JavaScript, React, and backend development gave me industry-grade fundamentals and a passion for clean code architecture.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">JavaScript</span>
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">React</span>
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">Backend</span>
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">DevOps</span>
                                        </div>
                                        <ExternalLink size={16} className="text-white/20 group-hover:text-red-400 transition-colors" />
                                    </div>
                                </Card>
                            </a>
                        </FadeIn>

                        {/* Sheryians Coding School */}
                        <FadeIn delay={0.2}>
                            <a href="https://www.youtube.com/@sheryians" target="_blank" rel="noopener noreferrer" className="block group">
                                <Card className="border-l-4 border-l-cyber-purple bg-gradient-to-br from-cyber-purple/5 to-transparent hover:from-cyber-purple/10 transition-all duration-500 relative overflow-hidden" glow>
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-purple/20 group-hover:bg-cyber-purple/40 transition-colors" />
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 glass border-cyber-purple/30 rounded-xl text-cyber-purple group-hover:scale-110 transition-transform">
                                                <Youtube size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black uppercase tracking-tight">Sheryians</h3>
                                                <p className="text-cyber-purple/80 text-xs font-bold tracking-widest uppercase mt-1">CODING_SCHOOL</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-green-500/30 bg-green-500/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[8px] font-black text-green-400 tracking-wider">VERIFIED</span>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                                        The channel that ignited my passion for <strong>creative web development</strong>. From GSAP animations to Locomotive Scroll, Sheryians taught me how to build immersive, scroll-driven experiences that push design boundaries.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">GSAP</span>
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">Creative UI</span>
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">Animations</span>
                                            <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-wider">Shery.js</span>
                                        </div>
                                        <ExternalLink size={16} className="text-white/20 group-hover:text-cyber-purple transition-colors" />
                                    </div>
                                </Card>
                            </a>
                        </FadeIn>
                    </div>
                </section>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyber-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyber-purple/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 scanline-v opacity-10 pointer-events-none" />
        </div>
    );
};

export default About;
