import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ScrambleText = ({ children, className, as: Component = 'h3' }) => {
    const elRef = useRef(null);

    useGSAP(() => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        const text = children;

        gsap.to(elRef.current, {
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            onUpdate: function () {
                const progress = this.progress();
                const reveal = Math.floor(text.length * progress);
                let output = "";
                for (let i = 0; i < text.length; i++) {
                    if (i < reveal) output += text[i];
                    else if (text[i] === ' ') output += ' ';
                    else output += chars[Math.floor(Math.random() * chars.length)];
                }
                elRef.current.innerText = output;
            },
            onComplete: () => { elRef.current.innerText = text; }
        });
    }, []);

    return <Component ref={elRef} className={className}>{children}</Component>;
};

export default ScrambleText;
