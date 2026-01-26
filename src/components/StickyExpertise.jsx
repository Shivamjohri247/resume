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
        <section ref={containerRef} id="expertise" className="relative border-t border-border-subtle" style={{backgroundColor: '#0a0a0a'}}>
            <div className="expertise-wrapper max-w-[1600px] mx-auto min-h-[150vh] flex flex-col lg:flex-row">

                {/* Sticky Sidebar */}
                <div className="expertise-sidebar lg:w-1/3 p-8 lg:p-20 lg:h-screen flex flex-col justify-between border-r border-border-subtle z-10 sticky top-0" style={{backgroundColor: '#0a0a0a'}}>
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

                {/* Scrolling Content */}
                <div className="lg:w-2/3" style={{backgroundColor: '#0a0a0a'}}>
                    {/* Item 1 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center border-b border-border-subtle hover:bg-[#2a1a1a] hover:text-[#e8d0d0] transition-all duration-500 ease-out will-change-[background,color] group">
                        <span className="text-6xl font-sans text-accent/30 mb-6 block transition-colors duration-500 ease-out group-hover:text-[#c0a0a0]/40">01</span>
                        <ScrambleText className="text-3xl font-sans mb-4 text-text-primary transition-colors duration-500 ease-out group-hover:text-[#d4b8b8]">Agentic AI Systems</ScrambleText>
                        <p className="text-text-secondary max-w-lg mb-8 leading-relaxed transition-colors duration-500 ease-out group-hover:text-[#c0a0a0]/70">
                            Designing multi-agent workflows using LangGraph, Semantic Kernel, CrewAI, Google ADK and Microsoft Agent Framework. I build agents that can reason, plan, and execute complex tasks autonomously.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["LangGraph", "Semantic Kernel", "RAG", "Vector DBs", "CrewAI", "Google ADK", "Microsoft Agent Framework"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#0a0a0a] border border-border-subtle text-xs uppercase tracking-wider text-text-primary group-hover:bg-[#1a0f0f] group-hover:text-[#d4b8b8] group-hover:border-[#3a2020]/50 transition-all duration-500 ease-out will-change-[background,color,border-color]">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center border-b border-border-subtle hover:bg-[#2a1a1a] hover:text-[#e8d0d0] transition-all duration-500 ease-out will-change-[background,color] group">
                        <span className="text-6xl font-sans text-accent/30 mb-6 block transition-colors duration-500 ease-out group-hover:text-[#c0a0a0]/40">02</span>
                        <ScrambleText className="text-3xl font-sans mb-4 text-text-primary transition-colors duration-500 ease-out group-hover:text-[#d4b8b8]">MLOps Infrastructure</ScrambleText>
                        <p className="text-text-secondary max-w-lg mb-8 leading-relaxed transition-colors duration-500 ease-out group-hover:text-[#c0a0a0]/70">
                            Automating the path to production. I implement robust CI/CD pipelines, model monitoring, and container orchestration to ensure your models don't just work in notebooks.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Kubernetes", "Docker", "Apache Airflow", "MLflow", "DVC"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#0a0a0a] border border-border-subtle text-xs uppercase tracking-wider text-text-primary group-hover:bg-[#1a0f0f] group-hover:text-[#d4b8b8] group-hover:border-[#3a2020]/50 transition-all duration-500 ease-out will-change-[background,color,border-color]">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center hover:bg-[#2a1a1a] hover:text-[#e8d0d0] transition-all duration-500 ease-out will-change-[background,color] group">
                        <span className="text-6xl font-sans text-accent/30 mb-6 block transition-colors duration-500 ease-out group-hover:text-[#c0a0a0]/40">03</span>
                        <ScrambleText className="text-3xl font-sans mb-4 text-text-primary transition-colors duration-500 ease-out group-hover:text-[#d4b8b8]">Big Data Engineering</ScrambleText>
                        <p className="text-text-secondary max-w-lg mb-8 leading-relaxed transition-colors duration-500 ease-out group-hover:text-[#c0a0a0]/70">
                            Handling data at enterprise scale. From distributed processing with PySpark to real-time search implementation with ElasticSearch and Apache Solr.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["PySpark", "Hadoop", "ElasticSearch", "Apache Solr", "Redis"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#0a0a0a] border border-border-subtle text-xs uppercase tracking-wider text-text-primary group-hover:bg-[#1a0f0f] group-hover:text-[#d4b8b8] group-hover:border-[#3a2020]/50 transition-all duration-500 ease-out will-change-[background,color,border-color]">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyExpertise;
