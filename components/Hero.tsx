import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
    onNavigate: (view: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img
                    src="/ryanconstructionnewhero.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Added extra padding for mobile to account for fixed header and bottom spacing */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24 pb-12 md:py-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 mb-6 md:mb-8 animate-fade-in">
                    <span className="text-xs font-bold tracking-widest uppercase">Elite Exterior Protection</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter animate-slide-up">
                    RYAN <span className="text-yellow-500 block md:inline">CONSTRUCTION</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-slide-up-delay-1">
                    Advanced roofing solutions driven by technology and craftsmanship. Experience the future of exterior renovation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        onClick={() => onNavigate(PageView.CONTACT)}
                        className="px-8 py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors rounded-sm flex items-center gap-2 group"
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
            </div>
        </section>
    );
};

export default Hero;
