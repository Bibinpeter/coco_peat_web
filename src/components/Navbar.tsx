import React, { useState } from 'react';
import { Volume2, VolumeX, Leaf, ArrowUpRight, Menu, X } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenSpecs: () => void;
  onCursorChange: (text: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenSpecs,
  onCursorChange,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.setEnabled(nextState);
    if (nextState) sound.playClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#090a0d]/90 backdrop-blur-xl border-b border-white/10">
      {/* Top Produx-Style Marquee Ticker */}
      <div className="bg-[#0e1117] border-b border-white/5 py-1.5 overflow-hidden text-[10px] sm:text-[11px] font-mono text-gray-400">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            EC LEVEL &lt; 0.5 mS/cm (TRIPLE WASHED)
          </span>
          <span className="mx-2 sm:mx-6 text-gray-600">•</span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2 text-coir-gold">
            1:15 HYDRATION EXPANSION RATIO (75L YIELD PER 5KG)
          </span>
          <span className="mx-2 sm:mx-6 text-gray-600">•</span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2 text-emerald-400">
            OMRI LISTED 100% ORGANIC SUBSTRATE
          </span>
          <span className="mx-2 sm:mx-6 text-gray-600">•</span>
          <span className="mx-4 sm:mx-6 text-gray-400">
            pH BALANCED 5.5 - 6.5 OPTIMAL CANOPY ROOTING
          </span>
          <span className="mx-2 sm:mx-6 text-gray-600">•</span>
          <span className="mx-4 sm:mx-6 text-emerald-400">
            SA8000 &amp; ISO 9001 CERTIFIED EXPORT FACILITIES
          </span>
          <span className="mx-2 sm:mx-6 text-gray-600">•</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            EC LEVEL &lt; 0.5 mS/cm (TRIPLE WASHED)
          </span>
          <span className="mx-2 sm:mx-6 text-gray-600">•</span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2 text-coir-gold">
            1:15 HYDRATION EXPANSION RATIO (75L YIELD PER 5KG)
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onMouseEnter={() => {
            sound.playHover();
            onCursorChange('HOME');
          }}
          onMouseLeave={() => onCursorChange('')}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1">
              TERRACOCO<span className="text-emerald-400 font-mono text-[10px] sm:text-xs">®</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 tracking-widest uppercase">
              BIO-SUBSTRATES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-gray-400">
          <a
            href="#products"
            className="hover:text-emerald-400 transition-colors"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('EXPLORE');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            Substrates
          </a>
          <a
            href="#hydration"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-coir-light"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('HYDRATE 💧');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            Hydration 3D
          </a>
          <a
            href="#calculator"
            className="hover:text-emerald-400 transition-colors"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('CALCULATE 🧮');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            Yield Calculator
          </a>
          <button
            onClick={() => {
              sound.playClick();
              onOpenSpecs();
            }}
            className="hover:text-emerald-400 transition-colors"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('LAB SPECS 🧪');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            Lab Data
          </button>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-space-850 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            title={soundEnabled ? 'Disable Audio Effects' : 'Enable Audio Effects'}
            onMouseEnter={() => onCursorChange(soundEnabled ? 'MUTE 🔇' : 'UNMUTE 🔊')}
            onMouseLeave={() => onCursorChange('')}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenQuote();
            }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300 shadow-md shadow-emerald-500/20"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('REQUEST QUOTE 📦');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            <span>Request Container</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Nav Actions */}
        <div className="md:hidden flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-space-850 border border-white/10 text-gray-400"
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenQuote();
            }}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black text-[11px] font-mono font-bold uppercase"
          >
            Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-space-850 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphism Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-900/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 font-mono text-xs animate-fadeIn">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-emerald-400 border-b border-white/5 uppercase"
          >
            🌿 Substrates Catalog
          </a>
          <a
            href="#hydration"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-coir-light hover:text-emerald-400 border-b border-white/5 uppercase font-bold"
          >
            💧 3D Hydration Simulator
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-emerald-400 border-b border-white/5 uppercase"
          >
            🧮 Commercial Substrate Calculator
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSpecs();
            }}
            className="block w-full text-left py-2 text-gray-300 hover:text-emerald-400 border-b border-white/5 uppercase"
          >
            🧪 Technical Lab Data &amp; ISO Matrix
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20 text-center block mt-4"
          >
            📦 Request Container / Sample Box
          </button>
        </div>
      )}
    </header>
  );
};
