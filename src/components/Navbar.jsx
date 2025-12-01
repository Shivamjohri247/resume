import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, { y: -100, duration: 1, ease: "power4.out", delay: 2 });
    });

    return (
        <nav ref={navRef} className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="font-serif text-lg font-bold tracking-tight">SJ.</div>
            <a href="mailto:shivamjohri247@gmail.com" className="text-xs font-sans font-medium uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                Get in touch
            </a>
        </nav>
    );
};

export default Navbar;
