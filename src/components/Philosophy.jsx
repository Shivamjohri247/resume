import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Cpu, Network } from 'lucide-react';

const Philosophy = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".phil-img", {
            scale: 1.1,
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        });

        gsap.from(".phil-text", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play reverse play reverse"
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative overflow-hidden rounded-lg">
                    {/* TECH ILLUSTRATION IMAGE */}
                    <img
                        src="philosophy-optimized.jpg"
                        alt="AI Workflow Illustration"
                        className="phil-img w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="order-1 lg:order-2">
                    <span className="phil-text text-xs uppercase tracking-[0.2em] text-[#E4C441] mb-6 block">My Philosophy</span>
                    <h2 className="phil-text font-serif text-4xl lg:text-5xl text-[#111] leading-tight mb-6">
                        Not just Code. <br /><i>Architecture.</i>
                    </h2>
                    <p className="phil-text text-[#555] leading-relaxed text-lg mb-8">
                        In a world saturated with AI demos, I focus on determinism. My systems are designed to be audible, scalable, and integrated deeply into business logic—not just bolted on.
                    </p>
                    <div className="phil-text grid grid-cols-2 gap-6">
                        <div>
                            <Cpu className="mb-3 text-[#E4C441]" />
                            <h4 className="font-serif text-xl mb-1">Agentic</h4>
                            <p className="text-sm text-[#777]">Autonomous reasoning & execution loops.</p>
                        </div>
                        <div>
                            <Network className="mb-3 text-[#E4C441]" />
                            <h4 className="font-serif text-xl mb-1">Scalable</h4>
                            <p className="text-sm text-[#777]">Kubernetes-native deployment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
