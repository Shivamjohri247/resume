import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import ScrambleText from './ScrambleText';

const StickyExpertise = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Pin the left side while right side scrolls
        ScrollTrigger.create({
            trigger: ".expertise-wrapper",
            start: "top top",
            end: "bottom bottom",
            pin: ".expertise-sidebar",
        });

        // Animate list items
        const items = gsap.utils.toArray('.exp-item');
        items.forEach(item => {
            gsap.from(item, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            })
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="expertise" className="relative border-t border-border-subtle overflow-hidden" style={{backgroundColor: '#ffffff'}}>
            {/* Background Video - Circuit Tech */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-25"
                style={{
                    filter: 'brightness(1.5) contrast(0.9) saturate(1.0)',
                    objectFit: 'cover',
                }}
            >
                <source src={`${import.meta.env.BASE_URL}video/circuit-tech.webm`} type="video/webm" />
                <source src={`${import.meta.env.BASE_URL}video/circuit-tech.mp4`} type="video/mp4" />
            </video>
            {/* Light Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{background: 'rgba(255, 255, 255, 0.90)'}} />
            <div className="expertise-wrapper max-w-[1600px] mx-auto min-h-[150vh] flex flex-col lg:flex-row relative z-10">

                {/* Sticky Sidebar */}
                <div className="expertise-sidebar lg:w-1/3 p-8 lg:p-20 lg:h-screen flex flex-col justify-between border-r border-border-subtle z-10 sticky top-0 relative overflow-hidden"
                    style={{
                        background: '#ffffff',
                    }}
                >
                    <div className="relative z-10">
                        <div>
                            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 block">Capabilities</span>
                            <h2 className="font-sans text-5xl lg:text-6xl text-text-primary leading-tight">
                                Technical<br />Expertise.
                            </h2>
                            <p className="mt-8 text-text-secondary leading-relaxed max-w-xs">
                                My expertise spans Distributed Computing, RAG pipelines, and Multi-Agent Systems, delivering solutions that are robust, resilient, and cutting-edge.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <ArrowUpRight size={48} strokeWidth={1} className="text-accent" />
                        </div>
                    </div>
                </div>

                {/* Scrolling Content */}
                <div className="lg:w-2/3" style={{backgroundColor: '#ffffff'}}>
                    {/* Item 1 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center border-b border-border-subtle transition-all duration-500 ease-out will-change-[background,color] group"
                        style={{background: '#ffffff'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                        }}
                    >
                        <span className="text-6xl font-sans text-accent/30 mb-6 block transition-colors duration-500 ease-out group-hover:text-[#38bdf8]/40">01</span>
                        <ScrambleText className="text-3xl font-sans mb-4 text-text-primary transition-colors duration-500 ease-out group-hover:text-[#38bdf8]">Agentic AI Systems</ScrambleText>
                        <p className="text-text-secondary max-w-lg mb-8 leading-relaxed transition-colors duration-500 ease-out group-hover:text-[#38bdf8]/70">
                            Designing multi-agent workflows using LangGraph, Semantic Kernel, CrewAI, Google ADK and Microsoft Agent Framework. I build agents that can reason, plan, and execute complex tasks autonomously.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["LangGraph", "Semantic Kernel", "RAG", "Vector DBs", "CrewAI", "Google ADK", "Microsoft Agent Framework"].map(tag => (
                                <span key={tag} className="px-3 py-1 border border-border-subtle text-xs uppercase tracking-wider text-text-primary rounded-lg transition-all duration-300 ease-out hover:scale-105 will-change-[background,color,border-color]"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)',
                                        backdropFilter: 'blur(8px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.06) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    }}
                                >{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center border-b border-border-subtle transition-all duration-500 ease-out will-change-[background,color] group"
                        style={{background: '#ffffff'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                        }}
                    >
                        <span className="text-6xl font-sans text-accent/30 mb-6 block transition-colors duration-500 ease-out group-hover:text-[#38bdf8]/40">02</span>
                        <ScrambleText className="text-3xl font-sans mb-4 text-text-primary transition-colors duration-500 ease-out group-hover:text-[#38bdf8]">MLOps Infrastructure</ScrambleText>
                        <p className="text-text-secondary max-w-lg mb-8 leading-relaxed transition-colors duration-500 ease-out group-hover:text-[#38bdf8]/70">
                            Automating the path to production. I implement robust CI/CD pipelines, model monitoring, and container orchestration to ensure your models don't just work in notebooks.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Kubernetes", "Docker", "Apache Airflow", "MLflow", "DVC"].map(tag => (
                                <span key={tag} className="px-3 py-1 border border-border-subtle text-xs uppercase tracking-wider text-text-primary rounded-lg transition-all duration-300 ease-out hover:scale-105 will-change-[background,color,border-color]"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)',
                                        backdropFilter: 'blur(8px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.06) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    }}
                                >{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center transition-all duration-500 ease-out will-change-[background,color] group"
                        style={{background: '#ffffff'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                        }}
                    >
                        <span className="text-6xl font-sans text-accent/30 mb-6 block transition-colors duration-500 ease-out group-hover:text-[#38bdf8]/40">03</span>
                        <ScrambleText className="text-3xl font-sans mb-4 text-text-primary transition-colors duration-500 ease-out group-hover:text-[#38bdf8]">Big Data Engineering</ScrambleText>
                        <p className="text-text-secondary max-w-lg mb-8 leading-relaxed transition-colors duration-500 ease-out group-hover:text-[#38bdf8]/70">
                            Handling data at enterprise scale. From distributed processing with PySpark to real-time search implementation with ElasticSearch and Apache Solr.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["PySpark", "Hadoop", "ElasticSearch", "Apache Solr", "Redis"].map(tag => (
                                <span key={tag} className="px-3 py-1 border border-border-subtle text-xs uppercase tracking-wider text-text-primary rounded-lg transition-all duration-300 ease-out hover:scale-105 will-change-[background,color,border-color]"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)',
                                        backdropFilter: 'blur(8px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.06) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                    }}
                                >{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyExpertise;
