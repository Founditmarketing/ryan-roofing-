import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
    onNavigate: (view: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black opacity-50" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 mb-8 animate-fade-in">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold tracking-widest uppercase">Elite Exterior Protection</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
                    Ryan <span className="text-yellow-500">Construction</span>
                </h1>

                <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light">
                    Advanced roofing solutions driven by technology and craftsmanship.
                    Experience the future of exterior renovation.
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
                        className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition-colors rounded-sm"
                    >
                        Explore Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
