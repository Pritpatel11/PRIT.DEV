import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = "", delay = 0, duration = 0.8, stagger = 0.02 }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        // Extract text content carefully
        const text = element.textContent || "";

        // Clear and rebuild with spans
        element.textContent = "";
        const chars = text.split('').map(char => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(100%)';
            span.style.opacity = '0';
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            element.appendChild(span);
            return span;
        });

        const anim = gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: "expo.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });

        return () => {
            if (anim.scrollTrigger) anim.scrollTrigger.kill();
            anim.kill();
        };
    }, [children, delay, duration, stagger]);

    return (
        <span ref={textRef} className={`inline-block overflow-hidden ${className}`}>
            {children}
        </span>
    );
};

export default TextReveal;
