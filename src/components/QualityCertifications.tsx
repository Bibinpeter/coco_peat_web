import React from 'react';
import { Award, Check, Download, FileText, Globe, Shield, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface QualityCertificationsProps {
  onOpenSpecs: () => void;
  onCursorChange: (text: string) => void;
}

export const QualityCertifications: React.FC<QualityCertificationsProps> = ({ onOpenSpecs, onCursorChange }) => {
  return (
    <section className="py-24 bg-[#090a0d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
              <Award className="w-4 h-4 text-coir-gold" />
              <span>International Compliance &amp; Traceability</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Quality <span className="reveal-text italic font-serif">Verification®</span>
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Every batch of TERRACOCO® coir undergoes rigorous laboratory testing for electrical conductivity (EC), pH stability, sodium levels, and heavy metal screening.
          </p>
        </div>

        {/* Certificate Seals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          
          <div
            className="spotlight-card border border-white/10 p-6 space-y-4 hover:border-emerald-500/40 transition-all cursor-pointer"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('OMRI CERTIFICATE');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg">
              OMRI
            </div>
            <h3 className="text-lg font-bold text-white">OMRI Organic Listed</h3>
            <p className="text-xs text-gray-400">Approved for organic crop production without synthetic inputs or chemical treatment.</p>
            <span className="font-mono text-[10px] text-emerald-400 block uppercase">STATUS: VERIFIED ACTIVE</span>
          </div>

          <div
            className="spotlight-card border border-white/10 p-6 space-y-4 hover:border-coir-gold/40 transition-all cursor-pointer"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('ISO 9001');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            <div className="w-12 h-12 rounded-xl bg-coir-amber/10 border border-coir-amber/30 flex items-center justify-center text-coir-gold font-mono font-bold text-lg">
              ISO
            </div>
            <h3 className="text-lg font-bold text-white">ISO 9001:2015</h3>
            <p className="text-xs text-gray-400">Standardized manufacturing, triple washing protocols, and automated moisture monitoring.</p>
            <span className="font-mono text-[10px] text-coir-gold block uppercase">STATUS: VERIFIED ACTIVE</span>
          </div>

          <div
            className="spotlight-card border border-white/10 p-6 space-y-4 hover:border-blue-500/40 transition-all cursor-pointer"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('SA8000 CERT');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-lg">
              SA
            </div>
            <h3 className="text-lg font-bold text-white">SA8000 Social Ethic</h3>
            <p className="text-xs text-gray-400">Ensuring fair wages, safe working conditions, and ethical harvesting across coconut farms.</p>
            <span className="font-mono text-[10px] text-blue-400 block uppercase">STATUS: VERIFIED ACTIVE</span>
          </div>

          <div
            className="spotlight-card border border-white/10 p-6 space-y-4 hover:border-purple-500/40 transition-all cursor-pointer"
            onMouseEnter={() => {
              sound.playHover();
              onCursorChange('PHYTO STAMP');
            }}
            onMouseLeave={() => onCursorChange('')}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold text-lg">
              PHYTO
            </div>
            <h3 className="text-lg font-bold text-white">Phytosanitary Clean</h3>
            <p className="text-xs text-gray-400">Guaranteed pathogen-free, weed-free, and nematode-free with official quarantine stamps.</p>
            <span className="font-mono text-[10px] text-purple-400 block uppercase">STATUS: VERIFIED ACTIVE</span>
          </div>

        </div>

        {/* Produx Interactive Lab Methodology Box */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <FileText className="w-4 h-4" />
              <span>BATCH NO: #TR-2026-0812-EC</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Download Official Batch Analysis Certificate
            </h3>
            <p className="text-sm text-gray-400">
              Access complete inductively coupled plasma (ICP) spectrometry results, heavy metal assays, and EC electrical conductivity curves for recent container shipments.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-xs pt-2">
              <div className="flex items-center gap-1.5 text-gray-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Sodium (Na): &lt; 25 ppm</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Chloride (Cl): &lt; 35 ppm</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Weed Seeds: 0% Detected</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onOpenSpecs();
              }}
              className="w-full py-4 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Complete Lab Matrix</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                alert('Downloading TERRACOCO Batch Lab Certificate PDF (Simulated)...');
              }}
              className="w-full py-3 rounded-xl bg-space-850 border border-white/15 text-gray-300 font-mono text-xs font-bold uppercase hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-coir-gold" />
              <span>Download PDF Report</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
