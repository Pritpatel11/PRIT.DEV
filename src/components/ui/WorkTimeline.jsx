import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import Card from './Card.jsx';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        year: '2024 - PRESENT',
        title: 'Full Stack Freelancer',
        company: 'Self-Employed',
        desc: 'Specializing in React, Node.js, and modern CSS frameworks to deliver high-performance digital solutions.',
        icon: Briefcase,
        color: 'blue'
    },
    {
        year: '2022 - PRESENT',
        title: 'B.Tech - Information Technology',
        company: 'Ganpat University',
        desc: 'Focusing on core CS fundamentals, algorithms, and advanced web technologies.',
        icon: GraduationCap,
        color: 'purple'
    },
    {
        year: '2023 - 2024',
        title: 'Industrial Project Lead',
        company: 'DEV Corporation',
        desc: 'Led the digital transformation of an industrial legacy brand with custom SEO-optimized catalogs.',
        icon: Briefcase,
        color: 'blue'
    }
];

const WorkTimeline = () => {
    const timelineRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const line = lineRef.current;
        const items = timelineRef.current.querySelectorAll('.timeline-item');

        gsap.fromTo(line,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: true
                }
            }
        );

        items.forEach((item, index) => {
            const node = item.querySelector('.timeline-node');
            const content = item.querySelector('.timeline-content');

            gsap.fromTo(node,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(content,
                { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <div ref={timelineRef} className="relative py-20 overflow-hidden">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
            <div
                ref={lineRef}
                className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-bottom from-cyber-blue via-cyber-purple to-cyber-pink -translate-x-1/2 origin-top hidden md:block neon-glow-blue"
            />

            <div className="space-y-24">
                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Content */}
                        <div className="timeline-content w-full md:w-1/2">
                            <Card className={`relative p-8 border-l-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${exp.color === 'blue' ? 'border-l-cyber-blue bg-cyber-blue/5' : 'border-l-cyber-purple bg-cyber-purple/5'}`}>
                                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                    <div className={`p-2 glass rounded-lg ${exp.color === 'blue' ? 'text-cyber-blue' : 'text-cyber-purple'}`}>
                                        <exp.icon size={20} />
                                    </div>
                                    <span className="text-xs font-black tracking-widest text-white/40">{exp.year}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 uppercase">{exp.title}</h3>
                                <p className="text-sm font-bold text-white/60 mb-4 tracking-tight uppercase">{exp.company}</p>
                                <p className="text-white/40 text-sm leading-relaxed">{exp.desc}</p>
                            </Card>
                        </div>

                        {/* Node */}
                        <div className="timeline-node relative z-10 w-12 h-12 glass rounded-full flex items-center justify-center border-cyber-blue/30 text-cyber-blue md:scale-125 neon-border-blue shrink-0">
                            <div className="w-4 h-4 rounded-full bg-cyber-blue animate-pulse" />
                        </div>

                        {/* Spacer for MD */}
                        <div className="hidden md:block w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkTimeline;
