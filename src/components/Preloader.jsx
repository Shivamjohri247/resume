import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SparkleEffect from './SparkleEffect';

const Preloader = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        // Reveal name
        tl.to(".preloader-text", { y: 0, opacity: 1, duration: 1, ease: "power4.out" })
            .to(".preloader", {
                yPercent: -100,
                duration: 1.2,
                ease: "expo.inOut",
                delay: 0.5
            });
    });

    return (
        <div className="preloader">
            <SparkleEffect />
            <div className="overflow-hidden-y relative z-10">
                <h1 className="preloader-text font-serif text-3xl text-white translate-y-[100%] opacity-0">
                    Shivam Johri
                </h1>
            </div>
        </div>
    );
};

export default Preloader;
