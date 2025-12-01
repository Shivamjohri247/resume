import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 2.2 }); // Wait for preloader

        // Text Stagger
        tl.to(".hero-line", { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power4.out" });

        // Image Reveal
        tl.to(".hero-img-overlay", { height: "0%", duration: 1.5, ease: "expo.inOut" }, "-=1.2")
            .to(".hero-img", { scale: 1, duration: 1.5, ease: "power2.out" }, "-=1.5")
            .from(".hero-badge", { autoAlpha: 0, y: 20, duration: 1, ease: "power3.out" }, "-=0.5");

        // Parallax on Scroll
        gsap.to(".hero-img-container", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative pt-24 pb-16 px-6 min-h-[85vh] flex flex-col justify-center max-w-[1600px] mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-16 items-center">

                {/* Typography Side */}
                <div className="lg:col-span-7 z-10">
                    <div className="mb-6 overflow-hidden-y">
                        <div className="hero-line translate-y-[110%] opacity-0 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-[#E4C441]"></span>
                            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#E4C441]">Principal AI Engineer</span>
                        </div>
                    </div>

                    {/* FIX: Increased line-height (leading-tight) and added padding (pb-2) to the masks 
            to prevent 'g', 'y' and other descenders from being chipped off.
          */}
                    <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-tight tracking-tight text-[#111] mb-8">
                        <div className="overflow-hidden-y pb-2 -mb-2"><div className="hero-line translate-y-[110%] opacity-0">Engineering</div></div>
                        <div className="overflow-hidden-y pb-2 -mb-2"><div className="hero-line translate-y-[110%] opacity-0">Autonomous</div></div>
                        <div className="overflow-hidden-y pb-2 -mb-2"><div className="hero-line translate-y-[110%] opacity-0 italic text-[#555]">Agents</div></div>
                    </h1>

                    <div className="max-w-md overflow-hidden-y">
                        <p className="hero-line translate-y-[110%] opacity-0 font-sans text-lg text-[#555] leading-relaxed mb-8">
                            Engineering the backbone of modern AI. From collaborative multi-agent workflows to robust MLOps infrastructure, I build systems that are designed to scale.
                        </p>
                    </div>
                </div>

                {/* Image Side - Cinematic Reveal */}
                <div className="lg:col-span-5 relative">
                    <div className="hero-img-container relative w-[90%] mx-auto aspect-[4/5] overflow-hidden rounded-sm">
                        <div className="hero-img-overlay absolute inset-0 bg-[#F9F8F4] z-20"></div> {/* Curtain */}
                        {/* PROFILE PICTURE */}
                        <img
                            src="Gemini_Generated_Image_yu8y15yu8y15yu8y.png"
                            alt="Shivam Johri"
                            className="hero-img w-full h-full object-cover scale-125 origin-center grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Floating Badge */}
                        <div className="hero-badge absolute bottom-6 left-6 z-30 bg-white/90 backdrop-blur-md p-4 max-w-[150px] border border-white/20 shadow-lg">
                            <p className="text-[10px] uppercase tracking-wider font-semibold text-[#111]">Status</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-medium text-[#555]">Open for Consults</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
