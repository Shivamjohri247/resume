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
            className="py-24 lg:py-32 px-6 max-w-[1600px] mx-auto bg-background relative"
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
                        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-border-default hover:border-border-subtle transition-all duration-500">
                            {/* Profile Image */}
                            <img
                                src={`${import.meta.env.BASE_URL}images/profile-photo.png`}
                                alt="Shivam Johri - Fullstack Technical Lead specializing in AI Systems"
                                className="w-full h-full object-cover aspect-square"
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

                        <p className="text-text-secondary leading-relaxed">
                            My work focuses on creating deterministic systems that embrace stochastic intelligence—building guardrails, RAG pipelines, and multi-agent workflows that are reliable, scalable, and deeply integrated into business logic.
                        </p>

                        <p className="text-text-secondary leading-relaxed">
                            From Kubernetes-native deployments to real-time data processing at scale, I architect solutions that don't just work in notebooks—they thrive in production.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="about-stats grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="about-stat p-4 lg:p-6 bg-surface border border-border-default rounded-lg hover:border-border-subtle transition-all duration-300 text-center">
                            <Calendar className="mx-auto mb-2 text-accent" size={20} />
                            <div className="text-2xl lg:text-3xl font-sans text-text-primary">10+</div>
                            <div className="text-xs text-text-muted mt-1">Years Experience</div>
                        </div>

                        <div className="about-stat p-4 lg:p-6 bg-surface border border-border-default rounded-lg hover:border-border-subtle transition-all duration-300 text-center">
                            <Briefcase className="mx-auto mb-2 text-accent" size={20} />
                            <div className="text-2xl lg:text-3xl font-sans text-text-primary">17</div>
                            <div className="text-xs text-text-muted mt-1">Projects Delivered</div>
                        </div>

                        <div className="about-stat p-4 lg:p-6 bg-surface border border-border-default rounded-lg hover:border-border-subtle transition-all duration-300 text-center">
                            <Github className="mx-auto mb-2 text-accent" size={20} />
                            <div className="text-xs text-text-muted mt-1">Open Source</div>
                        </div>

                        <div className="about-stat p-4 lg:p-6 bg-surface border border-border-default rounded-lg hover:border-border-subtle transition-all duration-300 text-center">
                            <MapPin className="mx-auto mb-2 text-accent" size={20} />
                            <div className="text-xl lg:text-2xl font-sans text-text-primary">Global</div>
                            <div className="text-xs text-text-muted mt-1">Remote Ready</div>
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
                                    className="px-4 py-2 bg-surface border border-border-default text-sm text-text-primary rounded-lg hover:border-border-subtle hover:text-accent transition-all duration-300 cursor-default"
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
