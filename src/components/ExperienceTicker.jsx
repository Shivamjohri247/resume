import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Plus } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

const ExperienceTicker = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        // Infinite Marquee
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(trackRef.current, {
            xPercent: -50,
            ease: "none",
            duration: 20,
        });
    }, { scope: containerRef });

    const companies = ["SUZEGA", "EPAM SYSTEMS", "ACCENTURE", "TATA CONSULTANCY SERVICES", "SUZEGA", "EPAM SYSTEMS", "ACCENTURE", "TATA CONSULTANCY SERVICES"];

    return (
        <div ref={containerRef} className="relative py-24 overflow-hidden border-y border-gray-800">
            {/* Interactive WebGL Background */}
            <InteractiveBackground />

            {/* Content Overlay */}
            <div className="relative z-10 pointer-events-none">
                <div ref={trackRef} className="ticker-track flex gap-16 items-center w-fit whitespace-nowrap">
                    {companies.map((company, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-4xl md:text-6xl font-serif text-[#E4C441] font-bold tracking-tighter">
                                {company}
                            </span>
                            <Plus size={24} className="text-[#E4C441] opacity-50" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceTicker;
