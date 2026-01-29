import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Zap, Shield, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const containerRef = useRef(null);
    const quoteRef = useRef(null);
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);

    useGSAP(() => {
        // Enhanced image animation with parallax effect - only if image loaded
        const imgElement = document.querySelector('.phil-img');
        if (imgElement && imageLoaded) {
            gsap.fromTo(".phil-img",
                {
                    scale: 1.1,
                    y: 30
                },
                {
                    scale: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                        scrub: 1
                    }
                }
            );
        }

        // Staggered text fade-in animations
        gsap.fromTo(".phil-text",
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Quote emphasis animation
        gsap.fromTo(quoteRef.current,
            {
                scale: 0.95,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: quoteRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Feature cards cascade animation
        gsap.fromTo(".phil-card",
            {
                y: 60,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".phil-cards",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef, dependencies: [imageLoaded] });

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="py-16 lg:py-20 px-6 max-w-[1600px] mx-auto relative overflow-hidden"
            style={{backgroundColor: '#ffffff'}}
        >
            {/* Background Video - Network Visualization */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                style={{
                    filter: 'brightness(1.4) contrast(0.95) saturate(1.1)',
                    objectFit: 'cover',
                    transform: 'scale(1.15)',
                }}
            >
                <source src={`${import.meta.env.BASE_URL}video/network-visualization.webm`} type="video/webm" />
                <source src={`${import.meta.env.BASE_URL}video/network-visualization.mp4`} type="video/mp4" />
            </video>
            {/* Light Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.85) 100%)'}} />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Image Section */}
                <div className="order-1 lg:order-1 relative overflow-hidden rounded-lg border border-border-subtle hover:border-border-default transition-all duration-500 group min-h-[300px] lg:min-h-[400px]">
                    {imageError ? (
                        <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                            <div className="text-center p-6">
                                <Brain className="mx-auto mb-4 text-text-muted" size={48} />
                                <p className="text-text-muted text-sm">Image unavailable</p>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={`${import.meta.env.BASE_URL}images/philosophy.jpg`}
                            alt="Neural Network Architecture - Abstract data visualization showing interconnected nodes and pathways representing the intersection of deterministic systems and stochastic intelligence"
                            className={`phil-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${
                                imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => {
                                setImageError(true);
                                console.error('Philosophy image failed to load');
                            }}
                        />
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="order-2 lg:order-2">
                    <span className="phil-text text-xs uppercase tracking-[0.3em] text-accent mb-6 block font-semibold">
                        My Philosophy
                    </span>

                    <h2 className="phil-text font-sans text-4xl lg:text-5xl text-text-primary leading-tight mb-8">
                        Truth Emerges at the <span className="text-accent italic">Intersection</span>
                    </h2>

                    {/* AI-Themed Quote with Emphasis */}
                    <div
                        ref={quoteRef}
                        className="phil-text relative p-6 lg:p-8 mb-8 bg-[#f8f9fa] border-l-4 border-accent rounded-r-lg"
                    >
                        <blockquote className="text-text-secondary leading-relaxed text-lg font-light">
                            <span className="text-text-primary font-semibold">Hallucination is the enemy.</span>{" "}
                            Truth emerges at the intersection of <span className="text-accent font-medium">data</span>,{" "}
                            <span className="text-accent font-medium">architecture</span>, and{" "}
                            <span className="text-accent font-medium">intent</span>—where deterministic systems
                            embrace <span className="italic text-text-primary">stochastic intelligence</span>.
                        </blockquote>
                    </div>

                    {/* Feature Cards - Glassmorphic Design */}
                    <div className="phil-cards grid grid-cols-2 gap-4 lg:gap-6">
                        {/* Card 1 - Deterministic */}
                        <div className="phil-card group relative h-[160px]">
                            <div className="relative h-full p-6 rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
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
                                <Brain className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <h4 className="font-sans text-lg lg:text-xl mb-1" style={{color: '#0a0a0a'}}>Deterministic</h4>
                                <p className="text-xs lg:text-sm" style={{color: '#718096'}}>Reliable, reproducible outcomes</p>
                            </div>
                        </div>

                        {/* Card 2 - Stochastic */}
                        <div className="phil-card group relative h-[160px]">
                            <div className="relative h-full p-6 rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
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
                                <Zap className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <h4 className="font-sans text-lg lg:text-xl mb-1" style={{color: '#0a0a0a'}}>Stochastic</h4>
                                <p className="text-xs lg:text-sm" style={{color: '#718096'}}>Embracing AI's probabilistic nature</p>
                            </div>
                        </div>

                        {/* Card 3 - Guardrailed */}
                        <div className="phil-card group relative h-[160px]">
                            <div className="relative h-full p-6 rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
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
                                <Shield className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <h4 className="font-sans text-lg lg:text-xl mb-1" style={{color: '#0a0a0a'}}>Guardrailed</h4>
                                <p className="text-xs lg:text-sm" style={{color: '#718096'}}>Safety through architecture</p>
                            </div>
                        </div>

                        {/* Card 4 - Intent-Driven */}
                        <div className="phil-card group relative h-[160px]">
                            <div className="relative h-full p-6 rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
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
                                <Target className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{color: '#374151'}} size={24} />
                                <h4 className="font-sans text-lg lg:text-xl mb-1" style={{color: '#0a0a0a'}}>Intent-Driven</h4>
                                <p className="text-xs lg:text-sm" style={{color: '#718096'}}>Purposeful system design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
