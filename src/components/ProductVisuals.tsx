import React from 'react';

interface VisualProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Clean, lightweight, custom SVG-based visual mockups matching Meta's hardware/product cards
 * in ooo.JPG, tyhyu.JPG, and llk.JPG.
 */

export const MobileVisual: React.FC<VisualProps> = ({ className = '', size = 'md' }) => {
  const dims = size === 'sm' ? 'w-16 h-20' : size === 'lg' ? 'w-32 h-44' : 'w-24 h-32';
  return (
    <div className={`relative flex items-center justify-center ${dims} ${className}`}>
      {/* Smartphone Chassis */}
      <div className="relative w-full h-full bg-[#1c1c1e] rounded-[18px] p-1.5 shadow-lg border border-zinc-700/80 flex flex-col justify-between overflow-hidden">
        {/* Top speaker & pinhole camera */}
        <div className="flex justify-center items-center h-2 w-full shrink-0">
          <div className="w-4 h-1 bg-zinc-600 rounded-full" />
        </div>
        {/* Screen with syntax colors */}
        <div className="w-full flex-1 bg-[#0a0a0c] rounded-[12px] p-2 flex flex-col justify-between overflow-hidden font-mono text-[6px] sm:text-[7px] leading-tight select-none">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <span className="text-[#ba1724] font-bold">import</span>
              <span className="text-zinc-300">math</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#ba1724] font-bold">def</span>
              <span className="text-purple-400">solve</span>
              <span className="text-zinc-400">():</span>
            </div>
            <div className="pl-2 text-zinc-500">// offline CPU</div>
            <div className="pl-2 text-emerald-400">return 42</div>
          </div>
          {/* Bottom terminal bar */}
          <div className="h-2.5 bg-zinc-900/90 rounded px-1 flex items-center justify-between text-[5px] text-zinc-400">
            <span className="text-emerald-400 font-bold">$ py main.py</span>
            <span className="text-zinc-500">0ms</span>
          </div>
        </div>
        {/* Bottom home indicator line */}
        <div className="h-1.5 flex justify-center items-center shrink-0">
          <div className="w-8 h-0.5 bg-zinc-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const DesktopVisual: React.FC<VisualProps> = ({ className = '', size = 'md' }) => {
  const dims = size === 'sm' ? 'w-20 h-16' : size === 'lg' ? 'w-40 h-32' : 'w-28 h-22';
  return (
    <div className={`relative flex flex-col items-center justify-center ${dims} ${className}`}>
      {/* Laptop / Monitor Display */}
      <div className="relative w-full h-[78%] bg-[#1c1c1e] rounded-t-lg p-1 shadow-lg border border-zinc-700/80 flex flex-col overflow-hidden">
        {/* Screen */}
        <div className="w-full flex-1 bg-[#09090b] rounded p-1.5 flex flex-col justify-between font-mono text-[5px] sm:text-[6px] select-none leading-none">
          {/* Window Tabs */}
          <div className="flex items-center gap-1 border-b border-zinc-800 pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ba1724]" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-400 text-[5px] ml-1">main.rs</span>
          </div>
          {/* Code lines */}
          <div className="space-y-0.5 pt-1 text-zinc-400">
            <div className="text-purple-400">fn main() &#123;</div>
            <div className="pl-1.5 text-emerald-400">println!(&quot;Yemini IDE&quot;);</div>
            <div className="text-purple-400">&#125;</div>
          </div>
          {/* Sub terminal */}
          <div className="text-zinc-500 text-[5px] border-t border-zinc-800 pt-0.5 flex justify-between">
            <span className="text-emerald-400">Build: 0 warnings</span>
            <span>GPU 120fps</span>
          </div>
        </div>
      </div>
      {/* Laptop Base / Pedestal */}
      <div className="w-[110%] h-[12%] bg-zinc-700 rounded-b-md shadow-md flex justify-center items-start">
        <div className="w-6 h-0.5 bg-zinc-500 rounded-b" />
      </div>
    </div>
  );
};

export const AiVisual: React.FC<VisualProps> = ({ className = '', size = 'md' }) => {
  const dims = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className={`relative flex items-center justify-center ${dims} ${className}`}>
      {/* Silicon Chip Body */}
      <div className="relative w-[85%] h-[85%] bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-xl p-2 shadow-lg border border-zinc-700 flex flex-col items-center justify-center overflow-hidden">
        {/* Outer Contact Pins */}
        <div className="absolute top-0 inset-x-2 flex justify-between">
          <div className="w-1 h-0.5 bg-amber-400/80" />
          <div className="w-1 h-0.5 bg-amber-400/80" />
          <div className="w-1 h-0.5 bg-amber-400/80" />
        </div>
        <div className="absolute bottom-0 inset-x-2 flex justify-between">
          <div className="w-1 h-0.5 bg-amber-400/80" />
          <div className="w-1 h-0.5 bg-amber-400/80" />
          <div className="w-1 h-0.5 bg-amber-400/80" />
        </div>

        {/* Central Core */}
        <div className="w-10 h-10 rounded-lg bg-[#140808] border border-[#ba1724]/70 flex flex-col items-center justify-center shadow-inner relative">
          <svg className="w-5 h-5 text-[#ff6767]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-[5px] font-mono font-bold text-amber-300 mt-0.5">AST CORE</span>
        </div>
        {/* Circuit lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <line x1="10" y1="20" x2="40" y2="20" stroke="#ff8585" strokeWidth="1" />
            <line x1="60" y1="80" x2="90" y2="80" stroke="#ff8585" strokeWidth="1" />
            <circle cx="40" cy="20" r="2" fill="#ff8585" />
            <circle cx="60" cy="80" r="2" fill="#ff8585" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const SuiteVisual: React.FC<VisualProps> = ({ className = '', size = 'md' }) => {
  const dims = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className={`relative flex items-center justify-center ${dims} ${className}`}>
      <div className="relative w-[85%] h-[85%] bg-zinc-900 rounded-xl p-2 shadow-lg border border-zinc-700 flex flex-col items-center justify-center gap-1">
        <div className="flex gap-1">
          {/* Notepad Mini Tile */}
          <div className="w-7 h-7 rounded bg-zinc-800 border border-zinc-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
            </svg>
          </div>
          {/* Converter Mini Tile */}
          <div className="w-7 h-7 rounded bg-zinc-800 border border-zinc-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </div>
        </div>
        {/* Share Mini Tile */}
        <div className="w-7 h-7 rounded bg-zinc-800 border border-zinc-600 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </div>
      </div>
    </div>
  );
};
