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
                    toggleActions: "play none none reverse"
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
            className="py-24 lg:py-32 px-6 max-w-[1600px] mx-auto relative"
            style={{backgroundColor: '#0a0a0a'}}
        >
            {/* Section Label */}
            <div className="mb-16 text-center">
                <span className="about-content text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                    About Me
                </span>
                <h2 className="about-content font-sans text-4xl lg:text-6xl text-text-primary mt-4 leading-tight">
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
                                style={{transform: 'scale(1.1)', objectPosition: 'center center'}}
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
                        <div className="about-stat group" style={{perspective: '1000px'}}>
                            <div style={{
                                position: 'relative',
                                minHeight: '140px',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s'
                            }} className="group-hover:rotate-y-180">
                                {/* Front Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Calendar className="mb-2" style={{color: '#ffffff'}} size={20} />
                                    <div className="text-2xl lg:text-3xl font-sans" style={{color: '#f5f5f5'}}>10+</div>
                                    <div className="text-xs mt-1" style={{color: '#525252'}}>Years Experience</div>
                                </div>
                                {/* Back Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: 'linear-gradient(135deg, #2a1a1a 0%, #1a0f0f 100%)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Calendar className="mb-2" style={{color: '#d4b8b8'}} size={20} />
                                    <div className="text-2xl lg:text-3xl font-sans" style={{color: '#e8d0d0'}}>10+</div>
                                    <div className="text-xs" style={{color: 'rgba(192, 160, 160, 0.7)'}}>Expertise Built</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Projects Delivered */}
                        <div className="about-stat group" style={{perspective: '1000px'}}>
                            <div style={{
                                position: 'relative',
                                minHeight: '140px',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s'
                            }} className="group-hover:rotate-y-180">
                                {/* Front Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Briefcase className="mb-2" style={{color: '#ffffff'}} size={20} />
                                    <div className="text-2xl lg:text-3xl font-sans" style={{color: '#f5f5f5'}}>17</div>
                                    <div className="text-xs mt-1" style={{color: '#525252'}}>Projects Delivered</div>
                                </div>
                                {/* Back Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: 'linear-gradient(135deg, #2a1a1a 0%, #1a0f0f 100%)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Briefcase className="mb-2" style={{color: '#d4b8b8'}} size={20} />
                                    <div className="text-2xl lg:text-3xl font-sans" style={{color: '#e8d0d0'}}>17</div>
                                    <div className="text-xs" style={{color: 'rgba(192, 160, 160, 0.7)'}}>Success Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Open Source */}
                        <div className="about-stat group" style={{perspective: '1000px'}}>
                            <div style={{
                                position: 'relative',
                                minHeight: '140px',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s'
                            }} className="group-hover:rotate-y-180">
                                {/* Front Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Github className="mb-2" style={{color: '#ffffff'}} size={20} />
                                    <div className="text-xs" style={{color: '#525252'}}>Open Source</div>
                                </div>
                                {/* Back Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: 'linear-gradient(135deg, #2a1a1a 0%, #1a0f0f 100%)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Github className="mb-2" style={{color: '#d4b8b8'}} size={20} />
                                    <div className="text-xs" style={{color: 'rgba(192, 160, 160, 0.7)'}}>Contributions</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Remote Ready */}
                        <div className="about-stat group" style={{perspective: '1000px'}}>
                            <div style={{
                                position: 'relative',
                                minHeight: '140px',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s'
                            }} className="group-hover:rotate-y-180">
                                {/* Front Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <MapPin className="mb-2" style={{color: '#ffffff'}} size={20} />
                                    <div className="text-xl lg:text-2xl font-sans" style={{color: '#f5f5f5'}}>Global</div>
                                    <div className="text-xs mt-1" style={{color: '#525252'}}>Remote Ready</div>
                                </div>
                                {/* Back Face */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1rem 1.5rem',
                                    background: 'linear-gradient(135deg, #2a1a1a 0%, #1a0f0f 100%)',
                                    borderRadius: '0.5rem',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <MapPin className="mb-2" style={{color: '#d4b8b8'}} size={20} />
                                    <div className="text-xl lg:text-2xl font-sans" style={{color: '#e8d0d0'}}>Worldwide</div>
                                    <div className="text-xs" style={{color: 'rgba(192, 160, 160, 0.7)'}}>Available</div>
                                </div>
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
                                    className="px-4 py-2 bg-[#0a0a0a] border border-border-default text-sm text-text-primary rounded-lg hover:border-accent/60 hover:text-accent hover:bg-[#0a0a0a]/80 transition-all duration-300 cursor-default"
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
