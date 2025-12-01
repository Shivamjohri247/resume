import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ExperienceList = () => {
    const containerRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const experiences = [
        { company: "SUZEGA", role: "Senior AI Engineer", year: "2025 - Present" },
        { company: "EPAM SYSTEMS", role: "Senior Data Scientist", year: "2024 - 2025" },
        { company: "ACCENTURE", role: "ML Engineering Senior Analyst", year: "2021 - 2024" },
        { company: "TATA CONSULTANCY SERVICES", role: "IT Analyst", year: "2016 - 2021" }
    ];

    const handleMouseEnter = (index, text, target) => {
        setHoveredIndex(index);

        // Scramble Effect
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let iterations = 0;

        // Kill previous tween if any
        gsap.killTweensOf(target);

        const interval = setInterval(() => {
            target.innerText = text
                .split("")
                .map((letter, i) => {
                    if (i < iterations) {
                        return text[i];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iterations >= text.length) {
                clearInterval(interval);
            }
            iterations += 1 / 2; // Speed of scramble
        }, 30);

        target.dataset.interval = interval;
    };

    const handleMouseLeave = (text, target) => {
        setHoveredIndex(null);
        clearInterval(target.dataset.interval);
        target.innerText = text; // Reset immediately
    };

    return (
        <section ref={containerRef} className="py-32 px-6 bg-[#111] text-white min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto w-full">
                <span className="text-xs uppercase tracking-[0.2em] text-[#E4C441] mb-12 block opacity-80">Experience Log</span>

                <div className="flex flex-col">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`group relative border-t border-white/10 py-10 transition-all duration-500 ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-30' : 'opacity-100'}`}
                            onMouseEnter={(e) => handleMouseEnter(i, exp.company, e.currentTarget.querySelector('.company-name'))}
                            onMouseLeave={(e) => handleMouseLeave(exp.company, e.currentTarget.querySelector('.company-name'))}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <h2 className="company-name font-serif text-4xl md:text-6xl lg:text-7xl cursor-pointer transition-colors duration-300 group-hover:text-[#E4C441]">
                                    {exp.company}
                                </h2>

                                <div className={`flex items-center gap-8 text-sm md:text-base font-sans tracking-wide transition-all duration-500 transform ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    <span className="text-white/80">{exp.role}</span>
                                    <span className="text-[#E4C441]">{exp.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceList;
