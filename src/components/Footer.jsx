import React from 'react';

const Footer = () => (
    <footer className="text-text-primary relative mt-auto overflow-hidden" style={{backgroundColor: '#ffffff'}}>
        {/* Background glassmorphic glow */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
                filter: 'blur(60px)',
            }}
        />
        <div className="max-w-[1600px] mx-auto px-6 py-12 relative z-10">
            {/* Copyright */}
            <div className="flex justify-center items-center">
                <div className="px-6 py-3 rounded-lg inline-block"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(0, 0, 0, 0.02)',
                    }}
                >
                    <p className="text-text-muted text-sm font-medium">
                        © 2026 Shivam Johri. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
