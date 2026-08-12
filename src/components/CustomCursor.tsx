import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorText: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorText }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    setIsHovered(cursorText !== '');
  }, [cursorText]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient spotlight glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 ease-out max-md:hidden"
        style={{
          transform: `translate3d(${position.x - 200}px, ${position.y - 200}px, 0)`,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(217, 119, 6, 0.03) 45%, transparent 70%)',
        }}
      />

      {/* Main cursor dot and text container */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 flex items-center gap-2 rounded-full transition-all duration-150 ease-out max-md:hidden ${
          isHovered
            ? 'bg-emerald-400/90 text-black px-4 py-2 text-xs font-mono font-bold shadow-lg shadow-emerald-500/20 backdrop-blur-md border border-white/20'
            : 'w-4 h-4 bg-emerald-400 border border-black/40 shadow-sm shadow-emerald-400/50'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 40 : 8)}px, ${position.y - (isHovered ? 16 : 8)}px, 0)`,
        }}
      >
        {isHovered && (
          <span className="whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
