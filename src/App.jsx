import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

// Components
import GlobalStyles from './components/GlobalStyles';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import WallList from './components/WallList';
import Philosophy from './components/Philosophy';
import StickyExpertise from './components/StickyExpertise';
import About from './components/About';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Mark app as mounted
        setIsMounted(true);

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
        <div className="antialiased min-h-screen" style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 0.4s ease-in' }}>
            <GlobalStyles />
            <CustomCursor />

            <main id="main-content" role="main" aria-label="Main content">
                <Hero />
                <About />
                <StickyExpertise />
                <WallList />
                <Philosophy />
            </main>

            <Footer />
        </div>
    );
};

export default App;