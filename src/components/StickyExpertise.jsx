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
        <section ref={containerRef} id="expertise" className="relative bg-[#F9F8F4] border-t border-gray-100">
            <div className="expertise-wrapper max-w-[1600px] mx-auto min-h-[150vh] flex flex-col lg:flex-row">

                {/* Sticky Sidebar */}
                <div className="expertise-sidebar lg:w-1/3 p-8 lg:p-20 lg:h-screen flex flex-col justify-between border-r border-gray-200/50 bg-[#F9F8F4] z-10">
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#E4C441] mb-6 block">Capabilities</span>
                        <h2 className="font-serif text-5xl lg:text-6xl text-[#111] leading-tight">
                            Technical<br />Expertise.
                        </h2>
                        <p className="mt-8 text-[#666] leading-relaxed max-w-xs">
                            My expertise spans Distributed Computing, RAG pipelines, and Multi-Agent Systems, delivering solutions that are robust, resilient, and cutting-edge.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <ArrowUpRight size={48} strokeWidth={1} className="text-[#E4C441]" />
                    </div>
                </div>

                {/* Scrolling Content */}
                <div className="lg:w-2/3 bg-white">
                    {/* Item 1 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center border-b border-gray-100">
                        <span className="text-6xl font-serif text-[#E4C441]/20 mb-6 block">01</span>
                        <ScrambleText className="text-3xl font-serif mb-4">Agentic AI Systems</ScrambleText>
                        <p className="text-[#555] max-w-lg mb-8 leading-relaxed">
                            Designing multi-agent workflows using LangGraph, Semantic Kernel, CrewAI, Google ADK and Microsoft Agent Framework. I build agents that can reason, plan, and execute complex tasks autonomously.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["LangGraph", "Semantic Kernel", "RAG", "Vector DBs", "CrewAI", "Google ADK", "Microsoft Agent Framework"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#F9F8F4] border border-gray-200 text-xs uppercase tracking-wider text-[#333]">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center border-b border-gray-100">
                        <span className="text-6xl font-serif text-[#E4C441]/20 mb-6 block">02</span>
                        <ScrambleText className="text-3xl font-serif mb-4">MLOps Infrastructure</ScrambleText>
                        <p className="text-[#555] max-w-lg mb-8 leading-relaxed">
                            Automating the path to production. I implement robust CI/CD pipelines, model monitoring, and container orchestration to ensure your models don't just work in notebooks.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Kubernetes", "Docker", "Apache Airflow", "MLflow", "DVC"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#F9F8F4] border border-gray-200 text-xs uppercase tracking-wider text-[#333]">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="exp-item min-h-[50vh] p-8 lg:p-20 flex flex-col justify-center">
                        <span className="text-6xl font-serif text-[#E4C441]/20 mb-6 block">03</span>
                        <ScrambleText className="text-3xl font-serif mb-4">Big Data Engineering</ScrambleText>
                        <p className="text-[#555] max-w-lg mb-8 leading-relaxed">
                            Handling data at enterprise scale. From distributed processing with PySpark to real-time search implementation with ElasticSearch and Apache Solr.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["PySpark", "Hadoop", "ElasticSearch", "Apache Solr", "Redis"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#F9F8F4] border border-gray-200 text-xs uppercase tracking-wider text-[#333]">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyExpertise;
