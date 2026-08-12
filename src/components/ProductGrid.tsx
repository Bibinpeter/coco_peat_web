import React, { useState } from 'react';
import { ArrowUpRight, Check, Droplets, Filter, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProductGridProps {
  onOpenSpecs: () => void;
  onOpenQuote: () => void;
  onCursorChange: (text: string) => void;
}

interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'blocks' | 'growbags' | 'discs' | 'chips';
  image: string;
  expansion: string;
  ec: string;
  ph: string;
  tags: string[];
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'terra-block-5kg',
    name: 'TERRA-BLOCK™ 5KG',
    subtitle: 'Triple-Washed Compressed 5kg Block',
    category: 'blocks',
    image: '/images/hero_block.jpg',
    expansion: '1:15 Ratio (75L)',
    ec: '< 0.5 mS/cm',
    ph: '5.5 – 6.5',
    tags: ['COMMERCIAL', 'OMRI LISTED', 'TRIPLE WASHED', '75L YIELD'],
    description: 'High-density compressed coconut coir peat brick desalted with fresh mountain water. Formulated for zero sodium toxicity and maximum cation exchange capacity.'
  },
  {
    id: 'hydro-bag-open',
    name: 'HYDRO-BAG™ PRO',
    subtitle: 'Dual-Layer Open Top Grow Bag',
    category: 'growbags',
    image: '/images/grow_bag.jpg',
    expansion: 'Ready to Hydrate',
    ec: '< 0.4 mS/cm',
    ph: '5.8 – 6.2',
    tags: ['HYDROPONICS', 'BERRIES & TOMATOES', 'UV PROTECTED', 'AUTOMATED DRIP'],
    description: 'Pre-treated UV-stabilized polyethylene grow bag with bottom drainage slits. Coarse coir chip bottom layer for drainage + fine peat top layer for root anchorage.'
  },
  {
    id: 'coco-disc-pellets',
    name: 'COCO-DISC™ STARTER',
    subtitle: 'Compressed Seedling & Microgreen Discs',
    category: 'discs',
    image: '/images/coco_discs.jpg',
    expansion: '1:8 Expansion',
    ec: '< 0.3 mS/cm',
    ph: '5.6 – 6.0',
    tags: ['MICROGREENS', 'CAL-MAG BUFFERED', 'ZERO MOLD', 'RAPID ROOT'],
    description: 'Precision-measured compressed coir discs buffered with Calcium Nitrate. Ideal for automated seeding trays, propagation, and urban microgreen farms.'
  },
  {
    id: 'hydrated-coir-loose',
    name: 'NUTRILOCK™ BIO-MIX',
    subtitle: 'Pre-Buffered Biochar Infused Substrate',
    category: 'blocks',
    image: '/images/hydrated_coir.jpg',
    expansion: 'Pre-Hydrated Loose',
    ec: '< 0.6 mS/cm',
    ph: '6.0 – 6.5',
    tags: ['MYCORRHIZAE', 'BIOCHAR ENRICHED', 'PRE-BUFFERED', 'HIGH YIELD'],
    description: 'Activated biochar blended with coconut coir pith and endo-mycorrhizae fungi to lock in beneficial microbes and retain NPK nutrients up to 3x longer.'
  }
];

export const ProductGrid: React.FC<ProductGridProps> = ({ onOpenSpecs, onOpenQuote, onCursorChange }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blocks' | 'growbags' | 'discs'>('all');

  const filteredProducts = PRODUCTS.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Produx-style Section Title & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Bio-Engineered Catalog [v4.2]</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight">
              Precision Coir <span className="reveal-text italic font-serif">Substrates®</span>
            </h2>
          </div>

          {/* Filter Pills Horizontal Scroll for Mobile */}
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 mt-6 md:mt-0 font-mono text-xs pb-2 md:pb-0">
            <button
              onClick={() => {
                sound.playClick();
                setActiveFilter('all');
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border transition-all ${
                activeFilter === 'all'
                  ? 'bg-emerald-500 text-black font-bold border-emerald-400'
                  : 'bg-space-850 text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveFilter('blocks');
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border transition-all ${
                activeFilter === 'blocks'
                  ? 'bg-emerald-500 text-black font-bold border-emerald-400'
                  : 'bg-space-850 text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              5kg Blocks
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveFilter('growbags');
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border transition-all ${
                activeFilter === 'growbags'
                  ? 'bg-emerald-500 text-black font-bold border-emerald-400'
                  : 'bg-space-850 text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              Grow Bags
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveFilter('discs');
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border transition-all ${
                activeFilter === 'discs'
                  ? 'bg-emerald-500 text-black font-bold border-emerald-400'
                  : 'bg-space-850 text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              Discs &amp; Seedlings
            </button>
          </div>
        </div>

        {/* Produx Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="spotlight-card border border-white/10 p-4 sm:p-6 group cursor-pointer hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              onMouseEnter={() => {
                sound.playHover();
                onCursorChange(`VIEW ${product.name}`);
              }}
              onMouseLeave={() => onCursorChange('')}
            >
              <div>
                {/* Product Image Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-space-950 mb-4 sm:mb-6 border border-white/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />

                  {/* Floating Tags */}
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end max-w-[80%]">
                    {product.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-space-900/90 border border-white/10 font-mono text-[9px] sm:text-[10px] text-gray-300 backdrop-blur-md uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expansion Badge */}
                  <div className="absolute bottom-3 left-3 bg-emerald-500/90 text-black backdrop-blur-md px-2.5 py-1 rounded-md font-mono text-[11px] sm:text-xs font-bold uppercase">
                    {product.expansion}
                  </div>
                </div>

                {/* Header info */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-mono text-xs text-gray-400 block">{product.subtitle}</span>
                  </div>
                  <button
                    onClick={() => {
                      sound.playClick();
                      onOpenSpecs();
                    }}
                    className="p-2 rounded-lg bg-space-850 border border-white/10 text-gray-400 hover:text-white hover:border-emerald-500/40 transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Specs Readout Bar & CTA */}
              <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between font-mono text-xs">
                <div className="flex gap-3 sm:gap-4 text-gray-400 text-[11px] sm:text-xs">
                  <span>EC: <strong className="text-emerald-400">{product.ec}</strong></span>
                  <span>pH: <strong className="text-coir-gold">{product.ph}</strong></span>
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenQuote();
                  }}
                  className="px-3.5 py-2 rounded-lg bg-space-800 border border-white/15 text-white font-bold hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all flex items-center gap-1.5"
                >
                  <span>Sample Box</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Produx Bottom Notice */}
        <div className="mt-12 sm:mt-16 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-coir-amber/20 border border-coir-amber/40 flex items-center justify-center text-coir-gold shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Need Custom EC, Mesh Size or Buffer Ratio?</h4>
              <p className="text-xs text-gray-400 font-mono">Our R&amp;D lab custom-blends coir ratios for specific greenhouse crops.</p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onOpenSpecs();
            }}
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-space-850 border border-white/15 text-emerald-400 font-mono text-xs font-bold uppercase hover:bg-emerald-500/10 transition-all"
          >
            View Lab Test Methodology
          </button>
        </div>

      </div>
    </section>
  );
};
