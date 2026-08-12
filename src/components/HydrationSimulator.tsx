import React, { useState, useEffect, useRef } from 'react';
import { Droplets, RefreshCw, Sparkles, Volume2, Info } from 'lucide-react';
import { sound } from '../utils/audio';

interface HydrationSimulatorProps {
  onCursorChange: (text: string) => void;
}

export const HydrationSimulator: React.FC<HydrationSimulatorProps> = ({ onCursorChange }) => {
  const [waterLevel, setWaterLevel] = useState<number>(35); // 0 to 100
  const [isAutoHydrating, setIsAutoHydrating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto hydration loop when user clicks auto-hydrate
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoHydrating) {
      interval = setInterval(() => {
        setWaterLevel((prev) => {
          if (prev >= 100) {
            setIsAutoHydrating(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isAutoHydrating]);

  // Canvas render animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; speed: number; radius: number; opacity: number }[] = [];

    // Create water particles when hydration > 10
    const createParticles = () => {
      if (waterLevel > 5) {
        for (let i = 0; i < Math.floor(waterLevel / 15); i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: 0,
            speed: 2 + Math.random() * 4,
            radius: 1.5 + Math.random() * 2,
            opacity: 0.6 + Math.random() * 0.4,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const progress = waterLevel / 100;

      // Base brick dimensions
      const minW = width * 0.35;
      const maxW = width * 0.75;
      const minH = height * 0.25;
      const maxH = height * 0.65;

      const currentW = minW + (maxW - minW) * progress;
      const currentH = minH + (maxH - minH) * progress;

      const cx = width / 2;
      const cy = height / 2 + 10;

      // Draw shadow under block
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy + currentH / 2 + 15, currentW * 0.55, 15 + progress * 15, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, ${0.4 + progress * 0.3})`;
      ctx.fill();
      ctx.restore();

      // Render expanding coir block
      ctx.save();

      // Color shifts from dry light amber-brown (#a16207) to hydrated rich dark brown (#3f2305)
      const r = Math.round(161 - (161 - 50) * progress);
      const g = Math.round(98 - (98 - 30) * progress);
      const b = Math.round(7 - (7 - 10) * progress);

      const blockGradient = ctx.createLinearGradient(cx - currentW / 2, cy - currentH / 2, cx + currentW / 2, cy + currentH / 2);
      blockGradient.addColorStop(0, `rgb(${r + 30}, ${g + 20}, ${b + 10})`);
      blockGradient.addColorStop(0.5, `rgb(${r}, ${g}, ${b})`);
      blockGradient.addColorStop(1, `rgb(${Math.max(10, r - 20)}, ${Math.max(10, g - 15)}, ${Math.max(5, b - 5)})`);

      ctx.fillStyle = blockGradient;
      ctx.strokeStyle = `rgba(245, 158, 11, ${0.3 + progress * 0.4})`;
      ctx.lineWidth = 2;

      // Rounded rect block
      const x = cx - currentW / 2;
      const y = cy - currentH / 2;
      const radius = 12 + progress * 12;

      ctx.beginPath();
      ctx.roundRect(x, y, currentW, currentH, radius);
      ctx.fill();
      ctx.stroke();

      // Texture fibers inside block
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + progress * 0.15})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 40; i++) {
        const fx = x + Math.random() * currentW;
        const fy = y + Math.random() * currentH;
        const length = 5 + progress * 15;
        const angle = Math.random() * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(fx + Math.cos(angle) * length, fy + Math.sin(angle) * length);
        ctx.stroke();
      }

      // Rootlet sprouts when fully hydrated (> 80%)
      if (waterLevel > 80) {
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2.5;
        for (let i = 0; i < 6; i++) {
          const rx = x + (i + 1) * (currentW / 7);
          const ry = y + currentH * 0.3;
          ctx.beginPath();
          ctx.moveTo(rx, ry);
          ctx.quadraticCurveTo(rx + 10, ry - 30, rx + (i % 2 === 0 ? 15 : -15), ry - 50);
          ctx.stroke();
        }
      }

      ctx.restore();

      // Render Falling Water Droplets
      createParticles();
      ctx.fillStyle = '#38bdf8';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.speed;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Remove particles when hit block or bottom
        if (p.y > cy + currentH / 2) {
          particles.splice(i, 1);
        }
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [waterLevel]);

  // Derived telemetry metrics
  const currentVolume = ((waterLevel / 100) * 75).toFixed(1);
  const waterAbsorbedL = ((waterLevel / 100) * 23.5).toFixed(1);
  const totalWeightKg = (5.0 + (waterLevel / 100) * 23.5).toFixed(1);
  const expansionRatio = `1:${(1 + (waterLevel / 100) * 14).toFixed(1)}`;
  const afpPorosity = (12 + (waterLevel / 100) * 10).toFixed(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setWaterLevel(val);
    if (val % 10 === 0) {
      sound.playWaterSplash();
    }
  };

  const handleReset = () => {
    sound.playClick();
    setWaterLevel(0);
    setIsAutoHydrating(false);
  };

  const handleAutoHydrate = () => {
    sound.playWaterSplash();
    setWaterLevel(0);
    setIsAutoHydrating(true);
  };

  return (
    <section id="hydration" className="py-24 bg-[#060709] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-coir-gold mb-2 uppercase tracking-widest">
              <Droplets className="w-4 h-4 text-blue-400" />
              <span>Interactive Physics Engine</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              1:15 Hydration <span className="text-emerald-400">Simulator</span>
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Drag the slider or click <span className="text-emerald-400 font-bold">Auto-Hydrate</span> to witness how KEXCO-BLOCK™ expands from a compact 5kg brick into 75 Liters of premium fluffy substrate.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Canvas Box */}
          <div
            className="lg:col-span-8 spotlight-card border border-white/10 p-6 relative bg-space-900 rounded-2xl"
            onMouseEnter={() => onCursorChange('DRAG WATER SLIDER 💧')}
            onMouseLeave={() => onCursorChange('')}
          >
            {/* Canvas Header overlay */}
            <div className="flex justify-between items-center mb-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>CANVAS 2D SIMULATOR [750 x 360]</span>
              </div>
              <div className="text-coir-light font-bold">
                EXPANSION: {expansionRatio}
              </div>
            </div>

            {/* Main Interactive Canvas */}
            <div className="relative rounded-xl overflow-hidden bg-space-950 border border-white/5 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={750}
                height={360}
                className="w-full h-[360px] object-contain cursor-pointer"
              />
            </div>

            {/* Slider & Action Bar */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  WATER SATURATION: <strong className="text-white font-bold">{waterLevel}%</strong>
                </span>
                <span>YIELD: <strong className="text-emerald-400">{currentVolume} Liters</strong></span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={waterLevel}
                onChange={handleSliderChange}
                className="w-full h-3 bg-space-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 hover:accent-emerald-300 transition-all"
              />

              <div className="flex flex-wrap gap-4 pt-2 justify-between items-center">
                <div className="flex gap-3">
                  <button
                    onClick={handleAutoHydrate}
                    disabled={isAutoHydrating}
                    className="px-5 py-2.5 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold uppercase hover:bg-blue-500 hover:text-black transition-all flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isAutoHydrating ? 'Hydrating...' : 'Auto-Hydrate 💧'}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-lg bg-space-850 border border-white/10 text-gray-400 font-mono text-xs hover:text-white hover:border-white/30 transition-all flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset Dry</span>
                  </button>
                </div>
                <span className="font-mono text-[11px] text-gray-500 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  Tap canvas or slider to trigger Web Audio water tones
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Tele-Panel */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs text-gray-400">
                <span>TELEMETRY READOUT</span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>

              {/* Metric 1 */}
              <div className="space-y-1">
                <span className="font-mono text-xs text-gray-400 uppercase">Expanded Volume</span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-3xl font-extrabold text-emerald-400">{currentVolume}</span>
                  <span className="font-mono text-sm text-gray-400">Liters</span>
                </div>
                <div className="w-full h-1.5 bg-space-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 transition-all duration-150" style={{ width: `${waterLevel}%` }} />
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1">
                <span className="font-mono text-xs text-gray-400 uppercase">Water Absorbed</span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-bold text-blue-400">{waterAbsorbedL}</span>
                  <span className="font-mono text-sm text-gray-400">Liters</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1">
                <span className="font-mono text-xs text-gray-400 uppercase">Total Wet Weight</span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-bold text-coir-gold">{totalWeightKg}</span>
                  <span className="font-mono text-sm text-gray-400">kg</span>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="space-y-1">
                <span className="font-mono text-xs text-gray-400 uppercase">Air Filled Porosity (AFP)</span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-bold text-white">{afpPorosity}%</span>
                  <span className="font-mono text-xs text-emerald-400">Optimal Canopy Oxygen</span>
                </div>
              </div>

            </div>

            {/* Quote callout box */}
            <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 space-y-2">
              <span className="font-bold block uppercase">Commercial Greenhouse Note:</span>
              <p className="text-gray-300 font-sans">
                Each 40ft HC container packs 4,400 units of TERRA-BLOCK™, yielding over <strong className="text-white">330,000 Liters</strong> of ready-to-use organic substrate upon arrival.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
