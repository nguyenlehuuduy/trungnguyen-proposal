
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  CoverSlide,
  EcosystemIntroSlide,
  SolutionOverviewSlide,
  DataFlowSlide,
  CDPSlide,
  HichatSlide,
  RAGSlide,
  AutomationSlide,
  ScenarioSlide,
  HiAGISlide,
  ContactSlide
} from './components/Slides';

// Custom Hilab Logo Component matched to screenshot
export const HilabLogo = ({ className = "h-10", color = "#A6192E", textColor="#333" }: { className?: string, color?: string, textColor?: string }) => (
  <div className="flex items-center gap-3 select-none">
    <div 
      className="aspect-square bg-[#A6192E] rounded-md flex items-center justify-center text-white font-serif font-bold text-2xl shadow-sm"
      style={{ height: className.replace('h-', '') === 'full' ? '100%' : '40px', width: className.replace('h-', '') === 'full' ? '100%' : '40px' }}
    >
      H
    </div>
    <span className="font-sans font-medium tracking-widest text-2xl" style={{ color: textColor }}>HILAB</span>
  </div>
);

const SLIDES = [
  CoverSlide,
  EcosystemIntroSlide,
  SolutionOverviewSlide,
  DataFlowSlide,
  CDPSlide,
  HichatSlide,
  RAGSlide,
  AutomationSlide,
  ScenarioSlide,
  HiAGISlide,
  ContactSlide
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden flex flex-col font-sans">
      
      {/* Header / Brand Bar */}
      <div className="absolute top-0 left-0 right-0 h-20 px-12 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
           <HilabLogo className="h-10" />
        </div>
        <div className="text-right">
           <span className="text-brand-red text-xs font-bold tracking-widest uppercase border border-brand-red/20 px-3 py-1 rounded bg-brand-red/5">
             Client: Trung Nguyen Legend
           </span>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="h-16 bg-white border-t border-gray-100 px-12 flex justify-between items-center z-50">
        <div className="flex items-center gap-2 text-sm text-stone-400 font-mono">
           <span className="font-bold text-brand-red">{currentSlide + 1}</span>
           <span className="text-stone-300">/</span>
           <span>{SLIDES.length}</span>
           <span className="ml-6 uppercase text-xs font-sans font-bold tracking-widest text-stone-300 hidden md:inline-block">
             Commercial Proposal
           </span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-stone-600 hover:text-brand-red"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden hidden md:block">
            <motion.div 
              className="h-full bg-brand-red"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-stone-800 hover:text-brand-red"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
