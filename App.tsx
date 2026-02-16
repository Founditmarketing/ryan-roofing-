import React, { useState } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Linkedin, Shield } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteEstimator from './components/QuoteEstimator';
import AIDamageAnalyzer from './components/AIDamageAnalyzer';
import AIChat from './components/AIChat';
import { PageView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case PageView.HOME:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <Services />
            
            {/* Tech/Tools Section - Now Dark Mode for consistency */}
            <div className="bg-neutral-900 py-16 md:py-24 border-t border-neutral-800 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/40 via-neutral-900 to-black pointer-events-none" />
               
              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                  <span className="text-yellow-500 font-mono font-bold uppercase tracking-widest text-xs md:text-sm">Technology Meets Craftsmanship</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
                    Smart Tools
                  </h2>
                </div>
                
                {/* Switch to single column on tablets (xl:grid-cols-2) to give complex tools room */}
                <div className="grid xl:grid-cols-2 gap-8 md:gap-12">
                   <div className="flex flex-col h-full">
                      <div className="mb-4 md:mb-6 pl-2 border-l-4 border-yellow-500">
                        <h3 className="text-xl md:text-2xl font-bold text-white font-mono uppercase">AI_Assessment</h3>
                        <p className="text-neutral-400 text-sm md:text-base mt-1">Upload visual data for instant structural analysis.</p>
                      </div>
                      <AIDamageAnalyzer />
                   </div>
                   <div className="flex flex-col h-full">
                      <div className="mb-4 md:mb-6 pl-2 border-l-4 border-yellow-500">
                        <h3 className="text-xl md:text-2xl font-bold text-white font-mono uppercase">Cost_Estimator_V1</h3>
                        <p className="text-neutral-400 text-sm md:text-base mt-1">Calculate project parameters and material costs.</p>
                      </div>
                      <QuoteEstimator />
                   </div>
                </div>
              </div>
            </div>
            
            {/* Branded Capability Strip */}
            <div className="bg-black py-16 border-t border-neutral-900">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Licensed', sub: 'Verified' },
                    { label: '30+ Years', sub: 'Experience' },
                    { label: '50-Year', sub: 'Warranty' },
                    { label: 'A+ Rated', sub: 'Service' }
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-900/50 p-6 md:p-8 rounded-sm border border-neutral-800 flex flex-col items-center justify-center text-center group hover:border-yellow-500/50 transition-colors duration-300">
                      <span className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors font-mono">{item.label}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition-colors">{item.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case PageView.SERVICES:
        return (
          <div className="pt-20">
            <Services />
          </div>
        );
      case PageView.CONTACT:
        return (
          <div className="pt-32 pb-20 container mx-auto px-6 bg-neutral-900 min-h-screen">
             <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 text-center uppercase tracking-tighter">Contact Protocol</h2>
                <QuoteEstimator />
             </div>
          </div>
        );
      case PageView.AI_TOOL:
        return (
          <div className="pt-32 pb-20 container mx-auto px-6 bg-neutral-900 min-h-screen">
             <div className="max-w-3xl mx-auto">
              <AIDamageAnalyzer />
            </div>
          </div>
        );
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black font-sans text-neutral-200">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-white/10 text-white shadow-lg">
        <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentView(PageView.HOME)}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-sm flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 md:w-7 md:h-7 text-black" />
            </div>
            <div className="leading-none">
              <span className="block font-black text-xl md:text-2xl tracking-tight text-white group-hover:text-yellow-400 transition-colors">RYAN</span>
              <span className="block text-[8px] md:text-[10px] text-yellow-400 font-bold tracking-[0.25em] uppercase">Construction</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentView(PageView.HOME)} className={`text-sm font-bold font-mono uppercase tracking-wider hover:text-yellow-400 transition-colors ${currentView === PageView.HOME ? 'text-yellow-400' : 'text-neutral-400'}`}>Home</button>
            <button onClick={() => setCurrentView(PageView.SERVICES)} className={`text-sm font-bold font-mono uppercase tracking-wider hover:text-yellow-400 transition-colors ${currentView === PageView.SERVICES ? 'text-yellow-400' : 'text-neutral-400'}`}>Services</button>
            <button onClick={() => setCurrentView(PageView.AI_TOOL)} className={`text-sm font-bold font-mono uppercase tracking-wider hover:text-yellow-400 transition-colors ${currentView === PageView.AI_TOOL ? 'text-yellow-400' : 'text-neutral-400'}`}>AI Analysis</button>
            <button 
              onClick={() => setCurrentView(PageView.CONTACT)}
              className="px-6 py-3 bg-white text-black hover:bg-yellow-400 hover:text-black rounded-sm text-sm font-extrabold transition-all border border-transparent hover:border-yellow-400 uppercase tracking-widest font-mono"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800 p-6 space-y-4 shadow-2xl absolute w-full left-0 top-20">
            <button onClick={() => { setCurrentView(PageView.HOME); setMobileMenuOpen(false); }} className="block w-full text-left py-3 text-neutral-300 hover:text-yellow-400 border-b border-neutral-800 font-bold font-mono uppercase">Home</button>
            <button onClick={() => { setCurrentView(PageView.SERVICES); setMobileMenuOpen(false); }} className="block w-full text-left py-3 text-neutral-300 hover:text-yellow-400 border-b border-neutral-800 font-bold font-mono uppercase">Services</button>
            <button onClick={() => { setCurrentView(PageView.AI_TOOL); setMobileMenuOpen(false); }} className="block w-full text-left py-3 text-neutral-300 hover:text-yellow-400 border-b border-neutral-800 font-bold font-mono uppercase">AI Analysis Tool</button>
            <button onClick={() => { setCurrentView(PageView.CONTACT); setMobileMenuOpen(false); }} className="block w-full py-4 mt-4 bg-yellow-400 text-black text-center rounded-sm font-bold shadow-lg font-mono uppercase tracking-wider">Get Quote</button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-neutral-400 pt-16 md:pt-20 pb-10 border-t border-neutral-900">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold text-white text-lg tracking-tight font-mono">RYAN CONSTRUCTION</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-60 font-mono text-xs">
                {'>'} EST. 1993<br/>
                {'>'} DEPLOYING ADVANCED EXTERIOR SOLUTIONS.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-yellow-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-mono uppercase text-sm tracking-wider text-yellow-500">Services</h4>
            <ul className="space-y-3 text-sm opacity-80 font-mono text-xs">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Siding Installation</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Gutter Systems</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Storm Restoration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-mono uppercase text-sm tracking-wider text-yellow-500">Company</h4>
            <ul className="space-y-3 text-sm opacity-80 font-mono text-xs">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Projects</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-mono uppercase text-sm tracking-wider text-yellow-500">Contact</h4>
            <ul className="space-y-4 text-sm opacity-80 font-mono text-xs">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>(555) 123-4567</span>
              </li>
              <li>123 Construction Blvd<br/>Kansas City, MO 64108</li>
              <li>
                <button 
                  onClick={() => setCurrentView(PageView.CONTACT)}
                  className="mt-4 px-6 py-2 border border-neutral-700 rounded-sm hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all text-xs uppercase font-bold tracking-wider"
                >
                  Schedule Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 border-t border-neutral-900 text-center text-[10px] md:text-xs opacity-50 font-mono">
          &copy; {new Date().getFullYear()} Ryan Construction Systems. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <AIChat />
    </div>
  );
}

export default App;