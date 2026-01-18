import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    // Handle component mount
    useEffect(() => {
        setIsMounted(true);
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

    // Scroll down handler
    const scrollDown = () => {
        const nextSection = document.querySelector('#experience');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
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
            className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-background"
            style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
        >

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }} />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-7xl mx-auto">
                {/* Massive Name */}
                <h1
                    ref={nameRef}
                    className="font-sans font-black text-massive leading-[0.9] tracking-tighter text-text-primary mb-8 overflow-hidden"
                    style={{
                        fontFamily: 'Inter, sans-serif',
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
                        fontFamily: 'JetBrains Mono, monospace',
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
                        className="group inline-flex items-center justify-center gap-3 font-sans text-sm font-semibold uppercase tracking-widest text-text-primary border border-text-primary/30 px-10 py-4 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background min-w-[160px] min-h-[56px]"
                        style={{
                            borderRadius: '0',
                            fontFamily: 'Inter, sans-serif'
                        }}
                        aria-label="Scroll to contact section"
                    >
                        Let's Talk
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
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
                    <span className="font-mono text-xs uppercase tracking-widest text-text-muted group-hover:text-text-primary transition-colors duration-300">
                        Scroll
                    </span>
                    <div className="scroll-icon">
                        <ArrowDown
                            className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors duration-300"
                            strokeWidth={2}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
