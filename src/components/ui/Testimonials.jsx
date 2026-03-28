import { motion } from "motion/react";
import { TestimonialsColumn } from "./testimonials-columns-1.jsx";
import { testimonials as rawTestimonials } from "../../data/testimonials.js";

// Mapping the data from testimonials.js to the structure expected by TestimonialsColumn
const testimonials = [
    {
        text: rawTestimonials[0].review,
        name: rawTestimonials[0].name,
        role: `${rawTestimonials[0].role} @ ${rawTestimonials[0].company}`,
    },
    {
        text: rawTestimonials[1].review,
        name: rawTestimonials[1].name,
        role: `${rawTestimonials[1].role} @ ${rawTestimonials[1].company}`,
    },
    {
        text: rawTestimonials[2].review,
        name: rawTestimonials[2].name,
        role: `${rawTestimonials[2].role} @ ${rawTestimonials[2].company}`,
    },
    {
        text: rawTestimonials[3].review,
        name: rawTestimonials[3].name,
        role: `${rawTestimonials[3].role} @ ${rawTestimonials[3].company}`,
    },
    {
        text: "Prit's ability to blend high-end design with technical performance is what sets him apart. Highly professional and visionary approach.",
        name: "Hassan Ali",
        role: "Creative Director",
    },
    {
        text: "The delivery was ahead of schedule and the results were beyond what we imagined. A true expert in interactive web technologies.",
        name: "Sana Sheikh",
        role: "Operation Lead",
    }
];

// Distribute them across 3 columns
const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

const Testimonials = () => {
    return (
        <section className="py-24 border-t border-white/5 relative overflow-hidden bg-cyber-black">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-[1px] bg-cyber-blue/30" />
                        <span className="text-[10px] font-black tracking-[0.5em] text-cyber-blue uppercase">CLIENT_FEEDBACK_LOG</span>
                        <div className="w-12 h-[1px] bg-cyber-blue/30" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                        TRUST <span className="text-cyber-blue font-outline">SIGNALS</span>
                    </h2>
                    <p className="text-center text-white/50 leading-relaxed font-medium">
                        Real stories from clients who partnered with me to build high-performance, futuristic web experiences.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={14} className="flex flex-col gap-6" />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex flex-col gap-6" duration={18} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex flex-col gap-6" duration={16} />
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-blue/2 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Testimonials;
