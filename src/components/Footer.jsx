import React from 'react';
import { ArrowUpRight, Linkedin, Mail, Brain, Github } from 'lucide-react';

const Footer = () => (
    <footer className="bg-surface text-text-primary relative mt-auto">
        <div className="max-w-[1600px] mx-auto px-6 py-16 md:py-24">
            {/* Main CTA Section */}
            <div className="text-center mb-16">
                <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                    LET'S <span className="text-accent italic font-bold">TALK</span>
                </h2>
                <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Have a project in mind? Let's create something extraordinary together.
                </p>

                {/* Primary CTA Button - Mailto Link */}
                <a
                    href="mailto:shivamjohri247@gmail.com"
                    className="group inline-flex items-center gap-3 text-xl md:text-2xl font-bold border-2 border-accent text-accent px-10 py-5 rounded-full hover:bg-accent hover:bg-background transition-all duration-300"
                >
                    Get In Touch
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
                </a>
            </div>

            {/* Social Links & Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-text-muted/30 pt-8">
                {/* Copyright */}
                <p className="text-text-muted text-sm font-medium">
                    © 2025 Shivam Johri. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://linkedin.com/in/shivam-johri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-semibold border border-text-muted/50 px-6 py-3 rounded-full hover:bg-accent hover:bg-background hover:border-accent transition-all duration-300"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/shivamjohri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-semibold border border-text-muted/50 px-6 py-3 rounded-full hover:bg-accent hover:bg-background hover:border-accent transition-all duration-300"
                        aria-label="GitHub Profile"
                    >
                        <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        GitHub
                    </a>

                    <a
                        href="https://www.kaggle.com/shivamjohri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-semibold border border-text-muted/50 px-6 py-3 rounded-full hover:bg-accent hover:bg-background hover:border-accent transition-all duration-300"
                        aria-label="Kaggle Profile"
                    >
                        <Brain size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        Kaggle
                    </a>

                    <a
                        href="mailto:shivamjohri247@gmail.com"
                        className="group flex items-center gap-2 text-sm font-semibold border border-text-muted/50 px-6 py-3 rounded-full hover:bg-accent hover:bg-background hover:border-accent transition-all duration-300"
                        aria-label="Send Email"
                    >
                        <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        Email
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
