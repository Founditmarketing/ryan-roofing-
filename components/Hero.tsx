import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';
import { Reveal } from './Reveal';

interface HeroProps {
    onNavigate: (view: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0 bg-black">
                {/* Image removed */}
            </div>

            {/* Added extra padding for mobile to account for fixed header and bottom spacing */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24 pb-12 md:py-0 flex flex-col items-center">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 mb-6 md:mb-8">
                        <span className="text-xs font-bold tracking-widest uppercase">Elite Exterior Protection</span>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter">
                        RYAN <span className="text-yellow-500 block md:inline">CONSTRUCTION</span>
                    </h1>
                </Reveal>

                <Reveal delay={400}>
                    <p className="text-lg md:text-xl text-neutral-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Advanced roofing solutions driven by technology and craftsmanship. Experience the future of exterior renovation.
                    </p>
                </Reveal>

                <Reveal delay={600}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <button
                            onClick={() => onNavigate(PageView.CONTACT)}
                            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-bold rounded-sm hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-mono group"
                        >
                            Start Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => onNavigate(PageView.SERVICES)}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold rounded-sm hover:bg-white hover:text-black transition-all hover:scale-105 uppercase tracking-widest text-xs sm:text-sm font-mono"
                        >
                            Explore Services
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
