import React from 'react';
import { Leaf, ArrowUpRight, Globe, Mail, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenSpecs: () => void;
  onCursorChange: (text: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenSpecs, onCursorChange }) => {
  return (
    <footer className="bg-[#060709] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Produx Oversized Branding Section */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <span className="font-mono text-xs text-coir-gold block uppercase tracking-widest mb-4">
            • TERRACOCO GLOBAL BIO-SUBSTRATES
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none mb-8">
            TERRACOCO<span className="text-emerald-400 font-mono text-4xl sm:text-6xl">®</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-gray-400 font-mono text-xs max-w-xl">
              Strategy-led organic coconut coir processing. We supply commercial hydroponic greenhouses, vertical farms, and soil distributors across 45+ countries.
            </p>
            <button
              onClick={() => {
                sound.playClick();
                onOpenQuote();
              }}
              className="px-8 py-4 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
              onMouseEnter={() => {
                sound.playHover();
                onCursorChange('REQUEST FCL 📦');
              }}
              onMouseLeave={() => onCursorChange('')}
            >
              <span>Request FCL Container Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global Locations & Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-16 mb-12 font-mono text-xs">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <span className="text-white font-bold block uppercase tracking-wider">Rotterdam Hub (EU)</span>
            <p className="text-gray-400">
              Havenstraat 142, Harbor Zone 4<br />
              3011 AB Rotterdam, Netherlands
            </p>
            <span className="text-emerald-400 block">+31 (0) 10 892 4410</span>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <span className="text-white font-bold block uppercase tracking-wider">Processing Mills (Asia)</span>
            <p className="text-gray-400">
              Coconut Triangle Industrial Zone<br />
              Negombo-Kurunegala Highway, Sri Lanka
            </p>
            <span className="text-coir-gold block">ISO 9001:2015 Plant #04</span>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <span className="text-white font-bold block uppercase tracking-wider">Americas HQ</span>
            <p className="text-gray-400">
              500 Montgomery Street, Suite 400<br />
              San Francisco, CA 94111, USA
            </p>
            <span className="text-blue-400 block">+1 (800) 550-COCO</span>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <span className="text-white font-bold block uppercase tracking-wider">Export Directives</span>
            <a href="#products" className="text-gray-400 hover:text-emerald-400 block">5kg TERRA-BLOCK™ Specs</a>
            <a href="#hydration" className="text-gray-400 hover:text-emerald-400 block">3D Hydration Simulator</a>
            <button onClick={onOpenSpecs} className="text-gray-400 hover:text-emerald-400 block text-left">
              ISO/OMRI Test Certificates
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>TERRACOCO® BIO-SUBSTRATES © 2026. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Protocol</a>
            <a href="#" className="hover:text-gray-300">Terms of Freight</a>
            <a href="#" className="hover:text-gray-300">Phytosanitary Log</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
