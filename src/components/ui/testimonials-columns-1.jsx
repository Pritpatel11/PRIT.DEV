"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  const { className, testimonials, duration } = props;
  
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-lg shadow-cyber-blue/5 max-w-xs w-full group hover:border-cyber-blue/30 transition-colors" 
                  key={i}
                >
                  <div className="text-white/70 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex flex-col">
                      <div className="font-bold text-white tracking-tight leading-5 text-sm uppercase">{name}</div>
                      <div className="text-[10px] font-black tracking-widest text-cyber-blue/60 uppercase">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
