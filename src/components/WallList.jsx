import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WallList = () => {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const imageRefs = useRef([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const baseUrl = import.meta.env.BASE_URL || '/';

    // Experience/Project data with image references
    const experiences = [
        {
            company: "SUZEGA",
            role: "Senior AI Engineer",
            year: "2025 - Present",
            image: `${baseUrl}images/logos/suzega.jpg`,
            logo: `${baseUrl}images/logos/suzega.jpg`,
            description: "Leading AI initiatives and machine learning infrastructure"
        },
        {
            company: "EPAM SYSTEMS",
            role: "Senior Data Scientist",
            year: "2024 - 2025",
            image: `${baseUrl}images/logos/epam.jpg`,
            logo: `${baseUrl}images/logos/epam.jpg`,
            description: "Advanced analytics and predictive modeling solutions"
        },
        {
            company: "ACCENTURE",
            role: "ML Engineering Senior Analyst",
            year: "2021 - 2024",
            image: `${baseUrl}images/logos/accenture.jpg`,
            logo: `${baseUrl}images/logos/accenture.jpg`,
            description: "Enterprise ML pipelines and MLOps architecture"
        },
        {
            company: "TATA CONSULTANCY SERVICES",
            role: "IT Analyst",
            year: "2016 - 2021",
            image: `${baseUrl}images/logos/tcs.jpg`,
            logo: `${baseUrl}images/logos/tcs.jpg`,
            description: "Data engineering and business intelligence platforms"
        }
    ];

    // Scroll animations for items entering viewport - fixed stuttering
    useGSAP(() => {
        if (!containerRef.current) return;

        const items = itemRefs.current.filter(Boolean);

        // Animate all items together for smooth appearance
        gsap.fromTo(items,
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [containerRef]);

    // Image reveal animation on hover - optimized for speed
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);

        const imageContainer = imageRefs.current[index];
        if (!imageContainer) return;

        // GSAP clip-path animation for image reveal - faster duration
        gsap.fromTo(imageContainer,
            {
                clipPath: 'inset(0 100% 0 0)',
                opacity: 0
            },
            {
                clipPath: 'inset(0 0% 0 0)',
                opacity: 1,
                duration: 0.35,
                ease: 'power2.out'
            }
        );
    };

    const handleMouseLeave = (index) => {
        setHoveredIndex(null);

        const imageContainer = imageRefs.current[index];
        if (!imageContainer) return;

        // Animate image out - faster duration
        gsap.to(imageContainer, {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0,
            duration: 0.25,
            ease: 'power2.in'
        });
    };

    return (
        <section
            id="experience"
            ref={containerRef}
            className="py-32 px-6 text-text-primary min-h-[80vh] flex flex-col justify-center relative overflow-hidden"
            style={{backgroundColor: '#0a0a0a'}}
        >
            <div className="max-w-[1600px] mx-auto w-full">
                {/* Section Header */}
                <div className="mb-16 overflow-hidden">
                    <span className="text-xs uppercase tracking-[0.2em] text-text-secondary inline-block">
                        Companies I've Worked With
                    </span>
                </div>

                {/* Wall List */}
                <div className="flex flex-col relative">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`group relative border-t border-border-subtle py-12 md:py-16 transition-all duration-300 ${
                                hoveredIndex !== null && hoveredIndex !== index
                                    ? 'opacity-40 scale-[0.98]'
                                    : 'opacity-100 scale-100'
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            {/* Desktop Image Container - Right Side */}
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[300px] z-10 pointer-events-none">
                                <div
                                    ref={(el) => (imageRefs.current[index] = el)}
                                    className="relative w-full h-full opacity-0"
                                    style={{ clipPath: 'inset(0 100% 0 0)' }}
                                >
                                    {/* Logo Display Card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/8 backdrop-blur-md border border-border-default rounded-2xl overflow-hidden shadow-2xl">
                                        {/* Logo Container */}
                                        <div className="absolute inset-0 flex items-center justify-center p-12">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                            />
                                        </div>

                                        {/* Company Info Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
                                            <div className="text-text-primary/90 text-sm font-mono mb-1">
                                                {exp.company}
                                            </div>
                                            <div className="text-text-primary/80 text-xs">
                                                {exp.description}
                                            </div>
                                        </div>

                                        {/* Animated pattern overlay */}
                                        <div className="absolute inset-0 opacity-8 pointer-events-none">
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Image - Inline/Stacked */}
                            <div className="md:hidden mt-6 overflow-hidden">
                                <div
                                    ref={(el) => (imageRefs.current[index] = el)}
                                    className="relative w-full h-48 opacity-0"
                                    style={{ clipPath: 'inset(100% 0 0 0)' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/8 backdrop-blur-sm border border-border-default rounded-xl overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 to-transparent">
                                            <div className="text-text-primary/80 text-xs font-mono">
                                                {exp.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* List Item Content */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-20">
                                {/* Left: Company Logo + Name */}
                                <div className="flex items-center gap-4 md:gap-6">
                                    {/* Company Logo */}
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="w-full h-full object-contain rounded-lg bg-accent/8 backdrop-blur-sm border border-border-subtle p-2 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/12"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl cursor-pointer transition-all duration-300 group-hover:text-accent group-hover:translate-x-2">
                                        {exp.company}
                                    </h2>
                                </div>

                                {/* Right: Role & Year */}
                                <div className={`
                                    flex flex-col md:flex-row md:items-center gap-3 md:gap-8
                                    text-sm md:text-base font-mono tracking-wide
                                    transition-all duration-300
                                    ${hoveredIndex === index
                                        ? 'translate-y-0 opacity-100'
                                        : 'md:translate-y-4 md:opacity-0'
                                    }
                                `}>
                                    <span className="text-text-primary/80 font-sans">{exp.role}</span>
                                    <span className="text-accent">{exp.year}</span>
                                </div>
                            </div>

                            {/* Hover Line Animation */}
                            <div className="absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ease-out"
                                style={{
                                    width: hoveredIndex === index ? '100%' : '0%'
                                }}
                            />
                        </div>
                    ))}

                    {/* Bottom Border */}
                    <div className="border-t border-border-subtle"></div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-border-default pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-border-default pointer-events-none" />
            </div>
        </section>
    );
};

export default WallList;
