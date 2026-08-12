import React from 'react';
import { ArrowDown, Droplets, ShieldCheck, Zap, Sparkles, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenSpecs: () => void;
  onCursorChange: (text: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenSpecs, onCursorChange }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-noise">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[250px] sm:h-[400px] bg-emerald-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[450px] h-[200px] sm:h-[300px] bg-coir-amber/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges Line */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-[11px] sm:text-xs font-mono">
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>TERRA-TECH v4.2 RELEASED</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-space-850 border border-white/10 text-gray-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-coir-gold" />
            <span>OMRI LISTED</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-space-850 border border-white/10 text-gray-400 flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
            <span>EC &lt; 0.5 mS/cm</span>
          </div>
        </div>

        {/* Produx-Style Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-white">
              You feel the <br />
              <span className="reveal-text italic font-normal font-serif">growth</span> before it <br />
              <span className="text-emerald-400 underline decoration-coir-gold/50 underline-offset-4 sm:underline-offset-8">blooms®</span>
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <p className="text-sm sm:text-lg text-gray-400 font-sans leading-relaxed">
              TERRACOCO® engineers high-expansion, low-EC organic coconut coir substrates tailored for precision hydroponics, greenhouses, and commercial vertical farms worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenQuote();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                onMouseEnter={() => {
                  sound.playHover();
                  onCursorChange('ORDER 📦');
                }}
                onMouseLeave={() => onCursorChange('')}
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Container Quote</span>
              </button>
              <a
                href="#hydration"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-space-850 border border-white/15 text-gray-300 font-mono text-xs font-bold uppercase tracking-wider hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300 flex items-center justify-center gap-2"
                onMouseEnter={() => {
                  sound.playHover();
                  onCursorChange('HYDRATE 💧');
                }}
                onMouseLeave={() => onCursorChange('')}
              >
                <Droplets className="w-4 h-4 text-coir-gold" />
                <span>Hydrate 3D Block</span>
              </a>
            </div>
          </div>
        </div>

        {/* Produx Interactive Product Hero Feature Box */}
        <div
          className="spotlight-card border border-white/10 p-3 sm:p-6 mb-12 sm:mb-16 group transition-transform duration-500 hover:border-emerald-500/30"
          onMouseEnter={() => onCursorChange('VIEW HERO PRODUCT 🔍')}
          onMouseLeave={() => onCursorChange('')}
        >
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[21/8] bg-space-950">
            {/* Hero Image */}
            <img
              src="/images/hero_block.jpg"
              alt="TERRACOCO 5kg Compressed Cocopeat Block"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/50 to-transparent" />

            {/* Overlaid Live Badges */}
            <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-start">
              <div className="bg-space-900/90 backdrop-blur-md border border-white/10 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-mono text-[10px] sm:text-xs text-gray-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-coir-amber" />
                <span>TERRA-BLOCK 5KG</span>
              </div>
              <div className="bg-emerald-500/90 text-black backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-mono text-[10px] sm:text-xs font-bold">
                1:15 EXPANSION
              </div>
            </div>

            {/* Bottom Specs Callout */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-space-900/90 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-lg">
                <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase">Yield Volume</span>
                <span className="font-mono text-sm sm:text-lg font-bold text-emerald-400">75 Liters</span>
              </div>
              <div className="bg-space-900/90 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-lg">
                <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase">EC Level</span>
                <span className="font-mono text-sm sm:text-lg font-bold text-coir-gold">&lt; 0.5 mS/cm</span>
              </div>
              <div className="bg-space-900/90 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-lg">
                <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase">pH Range</span>
                <span className="font-mono text-sm sm:text-lg font-bold text-white">5.5 – 6.5</span>
              </div>
              <div className="bg-space-900/90 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-lg">
                <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase">Air Porosity</span>
                <span className="font-mono text-sm sm:text-lg font-bold text-emerald-400">18 – 22%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Produx-Style 4 Key Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-8 sm:pt-10">
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white">75L</span>
            <span className="block font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Yield / 5kg Block</span>
            <p className="text-[11px] sm:text-xs text-gray-500">Expands 15x dry volume upon watering.</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-emerald-400">0.4 mS</span>
            <span className="block font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Ultra-Low EC</span>
            <p className="text-[11px] sm:text-xs text-gray-500">Triple desalted for rootzone safety.</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-coir-gold">70%</span>
            <span className="block font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Water Savings</span>
            <p className="text-[11px] sm:text-xs text-gray-500">High CEC matrix retains moisture.</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white">100%</span>
            <span className="block font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Biodegradable</span>
            <p className="text-[11px] sm:text-xs text-gray-500">Organic peat moss replacement.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
