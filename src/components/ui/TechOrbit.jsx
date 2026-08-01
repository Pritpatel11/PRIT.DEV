import { useState } from 'react';
import { techStack } from '../../data/techStack.js';
import { Cpu } from 'lucide-react';

const orbits = [
    {
        radius: 140, // mobile friendly sizes will be handled by CSS scale
        speed: 25,
        items: techStack.slice(0, 5) // 5 items
    },
    {
        radius: 240,
        speed: 35,
        items: techStack.slice(5, 9) // 4 items
    },
    {
        radius: 340,
        speed: 45,
        items: techStack.slice(9, 13) // 4 items
    }
];

const OrbitItem = ({ tech, x, y, speed }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="absolute top-1/2 left-1/2 orbit-item cursor-crosshair group/item z-10"
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animation: `counter-spin ${speed}s linear infinite`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                className="relative flex flex-col items-center justify-center w-14 h-14 rounded-xl glass border transition-all duration-300"
                style={{ 
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    borderColor: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
                    transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                    zIndex: isHovered ? 50 : 1
                }}
            >
                <tech.icon 
                    size={24} 
                    color={isHovered ? tech.color : 'rgba(255,255,255,0.5)'}
                    className="transition-all duration-300"
                    style={{ 
                        filter: isHovered ? `drop-shadow(0 0 10px ${tech.color})` : 'none'
                    }} 
                />

                {/* Tooltip Label */}
                <div 
                    className="absolute top-full mt-3 px-3 py-1 rounded-md glass text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 pointer-events-none shadow-xl"
                    style={{ 
                        color: tech.color, 
                        border: '1px solid rgba(255,255,255,0.1)',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(-10px)'
                    }}
                >
                    {tech.name}
                </div>
            </div>
        </div>
    );
};

const TechOrbit = () => {
    return (
        <div className="container mx-auto px-6 overflow-hidden">
            <style>
                {`
                @keyframes orbit-spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes counter-spin {
                    from { transform: translate(-50%, -50%) rotate(360deg); }
                    to { transform: translate(-50%, -50%) rotate(0deg); }
                }
                .orbit-container:hover .orbit-ring, 
                .orbit-container:hover .orbit-item {
                    animation-play-state: paused !important;
                }
                `}
            </style>

            <div className="relative w-full aspect-square md:aspect-video bg-[#050505] rounded-3xl border border-white/5 shadow-2xl flex items-center justify-center orbit-container group">
                
                {/* Background Details */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 scanline-v opacity-10 pointer-events-none" />

                {/* Scaling container for responsiveness */}
                <div className="relative w-full h-full max-w-[800px] max-h-[800px] flex items-center justify-center scale-50 sm:scale-75 md:scale-100 transition-transform duration-500">
                    
                    {/* Central Core */}
                    <div className="absolute z-50 flex flex-col items-center justify-center w-32 h-32 rounded-full border border-cyber-blue/50 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(0,242,255,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(0,242,255,0.6)]">
                        <Cpu className="text-cyber-blue mb-1 animate-pulse" size={32} />
                        <span className="text-[10px] font-black tracking-widest text-cyber-blue uppercase text-center leading-tight">
                            Full Stack<br />Core
                        </span>
                        
                        {/* Radar ping effect */}
                        <div className="absolute inset-0 rounded-full border border-cyber-blue/50 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                    </div>

                    {/* Orbital Rings */}
                    {orbits.map((orbit, orbitIndex) => {
                        const diameter = orbit.radius * 2;
                        
                        return (
                            <div 
                                key={`orbit-${orbitIndex}`}
                                className="absolute top-1/2 left-1/2 rounded-full border border-white/10 orbit-ring"
                                style={{
                                    width: `${diameter}px`,
                                    height: `${diameter}px`,
                                    animation: `orbit-spin ${orbit.speed}s linear infinite`,
                                }}
                            >
                                {/* Items on this ring */}
                                {orbit.items.map((tech, itemIndex) => {
                                    // Calculate starting angle for evenly spacing items
                                    const angle = (360 / orbit.items.length) * itemIndex;
                                    
                                    // Position item on the circle using trigonometry
                                    const x = Math.cos((angle * Math.PI) / 180) * orbit.radius;
                                    const y = Math.sin((angle * Math.PI) / 180) * orbit.radius;

                                    return (
                                        <OrbitItem 
                                            key={tech.name} 
                                            tech={tech} 
                                            x={x} 
                                            y={y} 
                                            speed={orbit.speed} 
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TechOrbit;
