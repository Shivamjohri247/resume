import React from 'react';
import { ArrowUpRight, Linkedin, Mail, Brain } from 'lucide-react';

const Footer = () => (
    <footer className="bg-[#111] text-white pt-32 pb-12 px-6">
        <div className="max-w-[1600px] mx-auto">
            <div className="grid md:grid-cols-2 gap-20 mb-32">
                <div>
                    <h2 className="font-serif text-[4rem] md:text-[6rem] leading-[0.9]">
                        Let's build <br /> the <span className="text-[#E4C441] italic">Future.</span>
                    </h2>
                </div>
                <div className="flex flex-col justify-end items-start md:items-end">
                    <a
                        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ10ZHJaZlUjCGjvtJDFoRM5jhYh9ZqLgKCiDleMvre85tCLfkMU6J7Umxig0PZlQ0rhJ8FCiqZ4?gv=true"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 text-xl border border-white/20 px-8 py-4 rounded-full hover:bg-[#E4C441] hover:text-black hover:border-[#E4C441] transition-all duration-300"
                    >
                        Book an appointment <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-sm text-white/40">
                <p>© 2025 Shivam Johri. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="https://linkedin.com/in/shivam-johri" className="flex items-center gap-2 text-sm font-medium border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <Linkedin size={18} /> LinkedIn
                    </a>
                    <a href="https://www.kaggle.com/shivamjohri" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <Brain size={18} /> Kaggle
                    </a>
                    <a href="mailto:shivamjohri247@gmail.com" className="flex items-center gap-2 text-sm font-medium border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <Mail size={18} /> Email
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
