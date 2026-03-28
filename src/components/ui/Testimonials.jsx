import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Card from './Card.jsx';

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setActive((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next]);

    const current = testimonials[active];

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
    };

    return (
        <section className="py-28 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-[1px] bg-cyber-blue/30" />
                        <span className="text-[10px] font-black tracking-[0.5em] text-cyber-blue uppercase">CLIENT_FEEDBACK_LOG</span>
                        <div className="w-12 h-[1px] bg-cyber-blue/30" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        TRUST <span className="text-cyber-blue font-outline">SIGNALS</span>
                    </h2>
                </div>

                {/* Carousel */}
                <div className="max-w-3xl mx-auto relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current.id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <Card className="bg-white/[0.02] border-white/5 p-8 md:p-12 relative overflow-hidden">
                                {/* Quote Icon */}
                                <Quote size={48} className="text-cyber-blue/10 absolute top-6 right-6" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={16}
                                            className={star <= current.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/10'}
                                        />
                                    ))}
                                    <span className="text-[10px] font-bold text-white/30 ml-2 tracking-widest uppercase">{current.rating}.0 / 5.0</span>
                                </div>

                                {/* Review Text */}
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 italic relative z-10">
                                    "{current.review}"
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center justify-between border-t border-white/5 pt-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                                            <User size={20} className="text-cyber-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white uppercase tracking-tight">{current.name}</h4>
                                            <p className="text-xs text-white/40 font-bold tracking-widest uppercase">
                                                {current.role} — <span className="text-cyber-blue/60">{current.company}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block text-right">
                                        <div className="text-[9px] font-bold text-white/20 tracking-widest uppercase">PROJECT</div>
                                        <div className="text-xs font-bold text-white/50 mt-1 uppercase">{current.project}</div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <button
                            aria-label="Previous testimonial"
                            onClick={prev}
                            className="p-3 border border-white/10 rounded-full hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all group"
                        >
                            <ChevronLeft size={18} className="text-white/40 group-hover:text-cyber-blue transition-colors" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-cyber-blue' : 'w-1.5 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            aria-label="Next testimonial"
                            onClick={next}
                            className="p-3 border border-white/10 rounded-full hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all group"
                        >
                            <ChevronRight size={18} className="text-white/40 group-hover:text-cyber-blue transition-colors" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-blue/3 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Testimonials;
