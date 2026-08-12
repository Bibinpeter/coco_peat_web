import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Download, ShieldCheck, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

interface SpecsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecsDrawer: React.FC<SpecsDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'physical' | 'chemical' | 'bio'>('physical');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-2xl bg-space-900 border-l border-white/10 h-full overflow-y-auto p-6 sm:p-8 space-y-8 shadow-2xl z-10 flex flex-col justify-between">
        
        <div className="space-y-8">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
                LAB
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  Technical Specifications Matrix
                </h3>
                <span className="font-mono text-xs text-gray-400">ISO 17025 ACCREDITED TESTING</span>
              </div>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-lg bg-space-850 border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 font-mono text-xs">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('physical');
              }}
              className={`pb-3 px-4 border-b-2 font-bold transition-all ${
                activeTab === 'physical'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              1. Physical Parameters
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('chemical');
              }}
              className={`pb-3 px-4 border-b-2 font-bold transition-all ${
                activeTab === 'chemical'
                  ? 'border-coir-gold text-coir-gold'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              2. Chemical &amp; EC
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('bio');
              }}
              className={`pb-3 px-4 border-b-2 font-bold transition-all ${
                activeTab === 'bio'
                  ? 'border-blue-400 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              3. Bio &amp; Quarantine
            </button>
          </div>

          {/* Content Tables */}
          {activeTab === 'physical' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-space-950 p-4 rounded-xl border border-white/5 space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Block Dimensions (Dry):</span>
                  <span className="text-white font-bold">30 cm x 30 cm x 12 cm (± 1cm)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Unit Weight (5kg Block):</span>
                  <span className="text-white font-bold">4.8 kg to 5.2 kg Net</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Hydrated Yield Volume:</span>
                  <span className="text-emerald-400 font-bold">75 Liters / Block (1:15 Ratio)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Moisture Content:</span>
                  <span className="text-white font-bold">&lt; 15% Max (Dehydrated)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Air Filled Porosity (AFP):</span>
                  <span className="text-white font-bold">18% – 22% (Root Aeration)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mesh Size / Sieve:</span>
                  <span className="text-white font-bold">Standard 6mm (Sub 1mm Removed)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chemical' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-space-950 p-4 rounded-xl border border-white/5 space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Electrical Conductivity (EC):</span>
                  <span className="text-emerald-400 font-bold">&lt; 0.5 mS/cm (1:1.5 Extraction)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">pH Balance:</span>
                  <span className="text-coir-gold font-bold">5.5 – 6.5 (Optimal Rootzone)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Cation Exchange Capacity (CEC):</span>
                  <span className="text-white font-bold">&gt; 60 to 90 meq / 100g</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Sodium (Na) Content:</span>
                  <span className="text-white font-bold">&lt; 25 ppm (Zero Phytotoxicity)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Chloride (Cl) Content:</span>
                  <span className="text-white font-bold">&lt; 35 ppm</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bio' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-space-950 p-4 rounded-xl border border-white/5 space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Weed Seeds &amp; Foreign Matter:</span>
                  <span className="text-emerald-400 font-bold">0% (Nil Detected)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Pathogenic Fungi (Fusarium/Pythium):</span>
                  <span className="text-emerald-400 font-bold">Negative / Sterilized</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Salmonella &amp; E. coli:</span>
                  <span className="text-emerald-400 font-bold">Absent in 25g Sample</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Heavy Metal Assays (Lead, Arsenic):</span>
                  <span className="text-white font-bold">Below Detectable Limits (FDA Standard)</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 space-y-3 font-mono text-xs">
          <button
            onClick={() => {
              sound.playClick();
              alert('Downloading TERRACOCO Technical Spec Sheet (PDF)...');
            }}
            className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Spec Sheet PDF</span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-space-850 border border-white/10 text-gray-400 uppercase hover:text-white"
          >
            Close Matrix
          </button>
        </div>

      </div>
    </div>
  );
};
