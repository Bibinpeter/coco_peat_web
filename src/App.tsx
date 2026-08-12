import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HydrationSimulator } from './components/HydrationSimulator';
import { ProductGrid } from './components/ProductGrid';
import { SubstrateCalculator } from './components/SubstrateCalculator';
import { QualityCertifications } from './components/QualityCertifications';
import { QuoteModal } from './components/QuoteModal';
import { SpecsDrawer } from './components/SpecsDrawer';
import { Footer } from './components/Footer';

export function App() {
  const [cursorText, setCursorText] = useState<string>('');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#090a0d] text-gray-100 selection:bg-emerald-500 selection:text-black relative">
      {/* Custom Cursor Spotlight */}
      <CustomCursor cursorText={cursorText} />

      {/* Navigation Header */}
      <Navbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onCursorChange={setCursorText}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Page Content */}
      <main>
        <Hero
          onOpenQuote={() => setIsQuoteOpen(true)}
          onOpenSpecs={() => setIsSpecsOpen(true)}
          onCursorChange={setCursorText}
        />

        <HydrationSimulator onCursorChange={setCursorText} />

        <ProductGrid
          onOpenSpecs={() => setIsSpecsOpen(true)}
          onOpenQuote={() => setIsQuoteOpen(true)}
          onCursorChange={setCursorText}
        />

        <SubstrateCalculator
          onOpenQuote={() => setIsQuoteOpen(true)}
          onCursorChange={setCursorText}
        />

        <QualityCertifications
          onOpenSpecs={() => setIsSpecsOpen(true)}
          onCursorChange={setCursorText}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onCursorChange={setCursorText}
      />

      {/* Modals & Drawers */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <SpecsDrawer
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
      />
    </div>
  );
}

export default App;
