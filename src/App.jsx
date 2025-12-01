import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

// Components
import GlobalStyles from './components/GlobalStyles';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceList from './components/ExperienceList';
import Philosophy from './components/Philosophy';
import StickyExpertise from './components/StickyExpertise';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return (
        <div className="antialiased min-h-screen">
            <GlobalStyles />
            <Preloader />
            <Navbar />

            <main>
                <Hero />
                <ExperienceList />
                <Philosophy />
                <StickyExpertise />
            </main>

            <Footer />
        </div>
    );
};

export default App;