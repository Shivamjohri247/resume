import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown, Linkedin, Github, Mail, Brain } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Handle component mount
    useEffect(() => {
        setIsMounted(true);

        // Delay video load
        const videoTimer = setTimeout(() => {
            setVideoLoaded(true);
        }, 500);

        return () => clearTimeout(videoTimer);
    }, []);

    // Handle scroll indicator visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to contact section
    const scrollToContact = (e) => {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll down handler - scroll to next section in order
    const scrollDown = () => {
        // Scroll to About section (next section after Hero)
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useGSAP(() => {
        if (!isMounted) return;

        const tl = gsap.timeline();

        // Animate name character by character reveal
        const nameChars = nameRef.current?.querySelectorAll('.char');
        if (nameChars) {
            tl.fromTo(
                nameChars,
                {
                    y: '100%',
                    opacity: 0
                },
                {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: 'power2.out'
                }
            );
        }

        // Animate subtitle
        tl.fromTo(
            subtitleRef.current,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            },
            '-=0.4'
        );

        // Animate CTA button
        tl.fromTo(
            ctaRef.current,
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            },
            '-=0.3'
        );

        // Animate scroll indicator
        tl.fromTo(
            scrollIndicatorRef.current,
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            },
            '-=0.2'
        );

        // Scroll indicator bounce animation
        gsap.to(scrollIndicatorRef.current?.querySelector('.scroll-icon'), {
            y: 8,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 0.5
        });

    }, { scope: containerRef, dependencies: [isMounted] });

    // Split text into characters for animation
    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
            style={{
                backgroundColor: '#0a0a0a',
                opacity: isMounted ? 1 : 0,
                transition: 'opacity 0.3s ease-in'
            }}
        >

            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    opacity: videoLoaded ? 1 : 0,
                    filter: 'brightness(0.6) contrast(1.05) saturate(1.3) sepia(0.15) hue-rotate(-10deg)',
                    transition: 'opacity 1.5s ease-in-out',
                    transform: 'scale(1.15)',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                }}
            >
                <source src={`${import.meta.env.BASE_URL}video/Dark_Red_Text_on_Dark_Background.mp4`} type="video/mp4" />
            </video>

            {/* Dark Grained Filter Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                    radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.15) 100%),
                    linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.25) 50%, rgba(10,10,10,0.35) 100%)
                `,
            }}>
                {/* Grain Effect */}
                <div className="absolute inset-0 opacity-15" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                }} />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-7xl mx-auto">
                {/* Massive Name */}
                <h1
                    ref={nameRef}
                    className="font-sans font-black text-massive leading-[0.9] tracking-tighter text-text-primary mb-8 overflow-hidden"
                    style={{
                        textTransform: 'uppercase',
                        letterSpacing: '-0.04em'
                    }}
                >
                    {splitText('Shivam Johri')}
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="font-mono text-lg md:text-xl lg:text-2xl text-text-secondary tracking-widest uppercase"
                    style={{
                        letterSpacing: '0.2em'
                    }}
                >
                    AI Engineer • MLOps • Distributed Systems
                </p>

                {/* CTA Button */}
                <div ref={ctaRef} className="mt-12">
                    <a
                        href="#contact"
                        onClick={scrollToContact}
                        className="group inline-flex items-center justify-center gap-3 font-sans text-sm font-semibold uppercase tracking-widest text-text-primary border border-text-primary/40 px-10 py-4 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background min-w-[160px] min-h-[56px]"
                        style={{
                            borderRadius: '0'
                        }}
                        aria-label="Scroll to contact section"
                    >
                        Let's Talk
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <a
                            href="https://linkedin.com/in/shivam-johri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={16} strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://github.com/shivamjohri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors duration-300"
                            aria-label="GitHub Profile"
                        >
                            <Github size={16} strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://www.kaggle.com/shivamjohri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors duration-300"
                            aria-label="Kaggle Profile"
                        >
                            <Brain size={16} strokeWidth={1.5} />
                        </a>
                        <a
                            href="mailto:shivamjohri247@gmail.com"
                            className="text-text-muted hover:text-accent transition-colors duration-300"
                            aria-label="Send Email"
                        >
                            <Mail size={16} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <div
                    ref={scrollIndicatorRef}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
                    onClick={scrollDown}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll down to see more content"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            scrollDown();
                        }
                    }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                        Scroll
                    </span>
                    <div className="scroll-icon">
                        <ArrowDown
                            className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors duration-300"
                            strokeWidth={2}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
