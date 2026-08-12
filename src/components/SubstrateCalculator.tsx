import React, { useState } from 'react';
import { Calculator, ArrowRight, Droplets, CheckCircle, Package, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface SubstrateCalculatorProps {
  onOpenQuote: () => void;
  onCursorChange: (text: string) => void;
}

export const SubstrateCalculator: React.FC<SubstrateCalculatorProps> = ({ onOpenQuote, onCursorChange }) => {
  const [areaSqMeters, setAreaSqMeters] = useState<number>(500); // 100 to 10,000
  const [potSizeLiters, setPotSizeLiters] = useState<number>(10);
  const [cropType, setCropType] = useState<'tomatoes' | 'strawberries' | 'cannabis' | 'microgreens'>('tomatoes');

  // Calculations
  // Plant density depending on crop
  const densityMap = {
    tomatoes: 2.5, // plants per sq meter
    strawberries: 10,
    cannabis: 4,
    microgreens: 1, // 1 sq meter trays
  };

  const plantDensity = densityMap[cropType];
  const totalContainers = Math.round(areaSqMeters * plantDensity);
  const totalVolumeLiters = totalContainers * potSizeLiters;
  const blocksRequired = Math.ceil(totalVolumeLiters / 75); // 75L per 5kg block
  const containers40ftNeeded = (totalVolumeLiters / 330000).toFixed(2); // 330,000L per 40ft HC
  const waterSavedLitersYear = Math.round(totalVolumeLiters * 14.5);

  return (
    <section id="calculator" className="py-24 bg-[#060709] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-coir-gold uppercase tracking-widest mb-3">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Commercial Yield Configurator</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Substrate &amp; Container <span className="text-emerald-400">Calculator</span>
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Estimate exact 5kg TERRA-BLOCK™ requirements, hydration water savings, and container shipping loads for your commercial greenhouse operation.
          </p>
        </div>

        {/* Main Interactive Tool Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Side */}
          <div className="lg:col-span-6 spotlight-card border border-white/10 p-6 sm:p-8 space-y-8 bg-space-900 rounded-2xl">
            
            {/* Control 1: Crop Preset */}
            <div className="space-y-3">
              <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider">
                1. Select Target Crop / Cultivation Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { id: 'tomatoes', label: '🍅 Tomatoes' },
                  { id: 'strawberries', label: '🍓 Berries' },
                  { id: 'cannabis', label: '🌿 Medical' },
                  { id: 'microgreens', label: '🌱 Microgreens' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playClick();
                      setCropType(item.id as typeof cropType);
                    }}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${
                      cropType === item.id
                        ? 'bg-emerald-500 text-black font-bold border-emerald-400 shadow-md shadow-emerald-500/20'
                        : 'bg-space-850 text-gray-400 border-white/10 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Area Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono text-xs">
                <label className="text-gray-300 uppercase">2. Greenhouse Cultivation Area</label>
                <span className="text-emerald-400 font-bold text-base">{areaSqMeters.toLocaleString()} m²</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={areaSqMeters}
                onChange={(e) => {
                  setAreaSqMeters(Number(e.target.value));
                  if (Number(e.target.value) % 500 === 0) sound.playHover();
                }}
                className="w-full h-3 bg-space-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-gray-500">
                <span>50 m² (Small Plot)</span>
                <span>2,500 m²</span>
                <span>5,000 m² (Commercial)</span>
              </div>
            </div>

            {/* Control 3: Pot Volume */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono text-xs">
                <label className="text-gray-300 uppercase">3. Pot / Grow Bag Unit Volume</label>
                <span className="text-coir-gold font-bold text-base">{potSizeLiters} Liters</span>
              </div>
              <div className="grid grid-cols-4 gap-2 font-mono text-xs">
                {[5, 10, 15, 25].map((vol) => (
                  <button
                    key={vol}
                    onClick={() => {
                      sound.playClick();
                      setPotSizeLiters(vol);
                    }}
                    className={`py-2.5 rounded-lg border transition-all ${
                      potSizeLiters === vol
                        ? 'bg-coir-amber text-black font-bold border-coir-gold'
                        : 'bg-space-850 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {vol} L
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Live Output Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs">
              <span className="text-gray-400 uppercase">CALCULATION READOUT SUMMARY</span>
              <span className="text-emerald-400 font-bold">ESTIMATE READY</span>
            </div>

            {/* Big Output 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-space-950 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-mono text-xs text-gray-500 uppercase block">5kg Blocks Needed</span>
                <span className="font-mono text-3xl font-extrabold text-white">{blocksRequired.toLocaleString()}</span>
                <span className="font-mono text-[10px] text-emerald-400 block">@ 75L Yield per Block</span>
              </div>
              <div className="bg-space-950 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-mono text-xs text-gray-500 uppercase block">Total Substrate</span>
                <span className="font-mono text-3xl font-extrabold text-emerald-400">
                  {(totalVolumeLiters / 1000).toFixed(1)} <span className="text-lg">m³</span>
                </span>
                <span className="font-mono text-[10px] text-gray-400 block">{totalVolumeLiters.toLocaleString()} Liters</span>
              </div>
            </div>

            {/* Output List */}
            <div className="space-y-3 font-mono text-xs pt-2">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-coir-gold" />
                  Estimated FCL Container Load:
                </span>
                <span className="text-white font-bold">{containers40ftNeeded} x 40' HC Container</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  Annual Hydration Water Savings:
                </span>
                <span className="text-blue-400 font-bold">{waterSavedLitersYear.toLocaleString()} L / yr</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Recommended EC Specification:
                </span>
                <span className="text-emerald-400 font-bold">&lt; 0.5 mS/cm (Triple Washed)</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenQuote();
              }}
              className="w-full py-4 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
              onMouseEnter={() => {
                sound.playHover();
                onCursorChange('ATTACH TO QUOTE 📋');
              }}
              onMouseLeave={() => onCursorChange('')}
            >
              <span>Attach Calculation to Bulk Order Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
