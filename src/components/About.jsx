import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, MapPin, Calendar, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Hero image animation with parallax
        gsap.fromTo(imageRef.current,
            {
                scale: 1.1,
                opacity: 0,
                rotation: 2
            },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Content elements stagger animation
        gsap.fromTo(".about-content",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Stats cards animation
        gsap.fromTo(".about-stat",
            {
                scale: 0.9,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".about-stats",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-24 lg:py-32 px-6 max-w-[1600px] mx-auto relative overflow-hidden"
            style={{backgroundColor: '#ffffff'}}
        >
            {/* Background Video - Abstract Geometry */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                style={{
                    filter: 'brightness(1.3) contrast(0.9) saturate(1.2)',
                    objectFit: 'cover',
                    transform: 'scale(1.1)',
                }}
            >
                <source src={`${import.meta.env.BASE_URL}video/abstract-geometry.webm`} type="video/webm" />
                <source src={`${import.meta.env.BASE_URL}video/abstract-geometry.mp4`} type="video/mp4" />
            </video>
            {/* Light Overlay for white theme */}
            <div className="absolute inset-0 pointer-events-none" style={{background: 'rgba(255, 255, 255, 0.75)'}} />
            {/* Section Label */}
            <div className="mb-16 text-center relative z-10">
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                    About Me
                </span>
                <h2 className="font-sans text-4xl lg:text-6xl text-text-primary mt-4 leading-tight">
                    Building the Future of <span className="text-accent">AI</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column - Profile Image */}
                <div className="lg:col-span-5 relative">
                    <div
                        ref={imageRef}
                        className="relative group"
                    >
                        {/* Image Container with Decorative Border */}
                        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-border-default hover:border-accent/50 transition-all duration-500">
                            {/* Profile Image */}
                            <img
                                src={`${import.meta.env.BASE_URL}images/profile-photo.png`}
                                alt="Shivam Johri - Fullstack Technical Lead specializing in AI Systems"
                                className="w-full h-full object-cover aspect-square"
                                style={{transform: 'scale(1.3)', objectPosition: '20% 40%'}}
                                loading="eager"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-border-subtle rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-border-subtle rounded-2xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </div>
                </div>

                {/* Right Column - Content */}
                <div ref={contentRef} className="lg:col-span-7 space-y-8">
                    {/* Bio Content */}
                    <div className="about-content space-y-6">
                        <p className="text-text-secondary leading-relaxed text-lg">
                            I'm a <span className="text-text-primary font-semibold">Fullstack Technical Lead</span> specializing in{" "}
                            <span className="text-accent">Agentic AI Systems</span> and{" "}
                            <span className="text-accent">Distributed Computing</span>. With deep expertise in building production-grade AI infrastructure, I bridge the gap between cutting-edge research and real-world deployment.
                        </p>

                        <p className="text-text-secondary leading-relaxed text-lg">
                            My work focuses on creating deterministic systems that embrace stochastic intelligence—building guardrails, RAG pipelines, and multi-agent workflows that are reliable, scalable, and deeply integrated into business logic.
                        </p>

                        <p className="text-text-secondary leading-relaxed text-lg">
                            From Kubernetes-native deployments to real-time data processing at scale, I architect solutions that don't just work in notebooks—they thrive in production.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="about-stats grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 - Years Experience */}
                        <div className="about-stat group relative h-[160px]">
                            <div className="relative h-full rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center text-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)',
                                    border: '1px solid rgba(0, 0, 0, 0.08)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <Calendar className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <div className="text-3xl lg:text-4xl font-black transition-all duration-300 group-hover:scale-110" style={{color: '#0a0a0a', letterSpacing: '-0.02em', lineHeight: 1}}>10+</div>
                                <div className="text-xs mt-1 transition-all duration-300" style={{color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Years Experience</div>
                            </div>
                        </div>

                        {/* Card 2 - Projects Delivered */}
                        <div className="about-stat group relative h-[160px]">
                            <div className="relative h-full rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center text-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)',
                                    border: '1px solid rgba(0, 0, 0, 0.08)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <Briefcase className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <div className="text-3xl lg:text-4xl font-black transition-all duration-300 group-hover:scale-110" style={{color: '#0a0a0a', letterSpacing: '-0.02em', lineHeight: 1}}>17</div>
                                <div className="text-xs mt-1 transition-all duration-300" style={{color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Projects Delivered</div>
                            </div>
                        </div>

                        {/* Card 3 - Open Source */}
                        <div className="about-stat group relative h-[160px]">
                            <div className="relative h-full rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center text-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)',
                                    border: '1px solid rgba(0, 0, 0, 0.08)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <Github className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <div className="text-sm font-semibold transition-all duration-300" style={{color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.2}}>Open Source</div>
                                <div className="text-xs mt-1 transition-all duration-300" style={{color: '#718096'}}>Contributions</div>
                            </div>
                        </div>

                        {/* Card 4 - Remote Ready */}
                        <div className="about-stat group relative h-[160px]">
                            <div className="relative h-full rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center text-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)',
                                    border: '1px solid rgba(0, 0, 0, 0.08)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <MapPin className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <div className="text-3xl lg:text-4xl font-black transition-all duration-300 group-hover:scale-110" style={{color: '#0a0a0a', letterSpacing: '-0.02em', lineHeight: 1}}>Global</div>
                                <div className="text-xs mt-1 transition-all duration-300" style={{color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Remote Ready</div>
                            </div>
                        </div>
                    </div>

                    {/* Expertise Highlights */}
                    <div className="about-content space-y-4">
                        <h3 className="text-xl font-sans text-text-primary">Core Expertise</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Agentic AI Systems",
                                "RAG Pipelines",
                                "Multi-Agent Workflows",
                                "MLOps & Infrastructure",
                                "Distributed Computing",
                                "Kubernetes & Docker",
                                "PySpark & Big Data",
                                "Vector Databases"
                            ].map(skill => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 text-sm text-text-primary rounded-lg transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(0, 0, 0, 0.08)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
