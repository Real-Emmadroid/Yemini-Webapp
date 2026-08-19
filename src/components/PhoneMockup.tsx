import React, { useState } from 'react';
import { Play, Terminal, FolderTree, Package, Settings, ChevronRight, Check, Sparkles, RefreshCw } from 'lucide-react';
import { YeminiSymbol } from './YeminiSymbol';

export const PhoneMockup: React.FC = () => {
  const [activeFile, setActiveFile] = useState('main.py');
  const [showTerminal, setShowTerminal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [typedExtra, setTypedExtra] = useState('');

  const sampleFiles = [
    { name: 'main.py', lang: 'Python' },
    { name: 'solver.rs', lang: 'Rust' },
    { name: 'api.ts', lang: 'TypeScript' }
  ];

  const accessoryKeys = ['TAB', '{', '}', '(', ')', ':', ';', '=', '->', '"', '#', 'def', 'print'];

  const handleKeyClick = (keyVal: string) => {
    setTypedExtra(prev => prev + (keyVal === 'TAB' ? '    ' : keyVal + ' '));
  };

  const handleRunMobile = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowTerminal(true);
    }, 400);
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] aspect-[9/18.5] bg-[#0c0c10] rounded-[48px] p-3.5 border-[6px] border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col select-none yemini-glow-hover">
      {/* Outer Phone Bezel Highlights */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-[42px]" />

      {/* Screen Frame */}
      <div className="relative flex-1 bg-[#070709] rounded-[36px] overflow-hidden flex flex-col border border-zinc-800/60">
        
        {/* Android Status Bar */}
        <div className="h-7 px-5 flex items-center justify-between text-[11px] text-zinc-400 bg-[#0a0a0e] shrink-0">
          <span className="font-mono font-semibold text-zinc-200">10:42</span>
          {/* Camera Punch Hole */}
          <div className="w-3.5 h-3.5 rounded-full bg-black border border-zinc-800 shadow-inner" />
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="text-zinc-500">5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Yemini Mobile Header with official Yemini Symbol */}
        <div className="px-3 py-2 bg-[#0e0e13] border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <YeminiSymbol size="sm" />
            <span className="text-xs font-semibold text-white tracking-tight">yemini-mobile</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleRunMobile}
              disabled={isRunning}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white text-[11px] font-medium shadow-sm active:scale-95 transition-all"
            >
              {isRunning ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
              <span>Run</span>
            </button>
            <button
              onClick={() => setShowTerminal(!showTerminal)}
              className={`p-1.5 rounded-md border text-xs transition-colors ${
                showTerminal ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
              }`}
              title="Toggle Mobile Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* File Tabs Bar */}
        <div className="flex items-center gap-1 px-2 py-1.5 bg-[#09090c] border-b border-zinc-800/80 overflow-x-auto shrink-0">
          {sampleFiles.map((file) => {
            const isActive = activeFile === file.name;
            return (
              <button
                key={file.name}
                onClick={() => {
                  setActiveFile(file.name);
                  setTypedExtra('');
                }}
                className={`px-2.5 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#181820] text-white border border-zinc-700/60 font-medium'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {file.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Code Editor Viewport */}
        <div className="flex-1 p-3 overflow-y-auto font-mono text-[11px] leading-relaxed bg-[#070709] text-zinc-300">
          {activeFile === 'main.py' && (
            <div className="space-y-1">
              <p className="text-zinc-500 italic"># Running natively on ARM64</p>
              <p><span className="text-purple-400">import</span> <span className="text-zinc-200">sys, math</span></p>
              <p><span className="text-[#ff8585] font-semibold">def</span> <span className="text-amber-300">compute_orbit</span>(radius: float):</p>
              <p className="pl-3 text-zinc-400">&quot;&quot;&quot;Local orbital calculations&quot;&quot;&quot;</p>
              <p className="pl-3"><span className="text-sky-400">speed</span> = math.sqrt(398600 / radius)</p>
              <p className="pl-3"><span className="text-amber-300">print</span>(f<span className="text-emerald-300">&quot;Velocity: &#123;speed:.2f&#125; km/s&quot;</span>)</p>
              <p className="pl-3"><span className="text-purple-400">return</span> speed</p>
              <p className="text-amber-300">compute_orbit(<span className="text-sky-300">6771.0</span>)</p>
              {typedExtra && (
                <p className="text-emerald-400 animate-pulse mt-1 font-semibold">{typedExtra}</p>
              )}
            </div>
          )}

          {activeFile === 'solver.rs' && (
            <div className="space-y-1">
              <p className="text-zinc-500 italic">// Rust on Android via Cargo</p>
              <p><span className="text-purple-400">fn</span> <span className="text-[#ff8585] font-semibold">main</span>() &#123;</p>
              <p className="pl-3"><span className="text-sky-400">let</span> count = 100_000;</p>
              <p className="pl-3"><span className="text-amber-300">println!</span>(<span className="text-emerald-300">&quot;Testing local heap allocations...&quot;</span>);</p>
              <p className="pl-3"><span className="text-amber-300">println!</span>(<span className="text-emerald-300">&quot;Allocated: &#123;&#125; records&quot;</span>, count);</p>
              <p>&#125;</p>
              {typedExtra && (
                <p className="text-emerald-400 animate-pulse mt-1 font-semibold">{typedExtra}</p>
              )}
            </div>
          )}

          {activeFile === 'api.ts' && (
            <div className="space-y-1">
              <p className="text-zinc-500 italic">// TypeScript V8 on Mobile</p>
              <p><span className="text-sky-400">const</span> <span className="text-amber-300">ping</span> = () =&gt; &#123;</p>
              <p className="pl-3"><span className="text-purple-400">return</span> &#123; status: <span className="text-emerald-300">&quot;ok&quot;</span>, mobile: <span className="text-purple-400">true</span> &#125;;</p>
              <p>&#125;;</p>
              <p><span className="text-amber-300">console.log</span>(ping());</p>
              {typedExtra && (
                <p className="text-emerald-400 animate-pulse mt-1 font-semibold">{typedExtra}</p>
              )}
            </div>
          )}
        </div>

        {/* Slide-up Local Terminal Drawer */}
        {showTerminal && (
          <div className="bg-[#0b0b0f] border-t border-zinc-800 p-2.5 text-[10px] font-mono shrink-0 max-h-28 overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between text-zinc-400 mb-1 pb-1 border-b border-zinc-800/80">
              <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                <span>●</span> yemini@android:~
              </span>
              <button
                onClick={() => setShowTerminal(false)}
                className="text-zinc-500 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-zinc-400">$ python main.py</p>
            <p className="text-zinc-200">Velocity: 7.67 km/s</p>
            <p className="text-emerald-400">[Process completed in 0.03s]</p>
          </div>
        )}

        {/* Context Keyboard Accessory Row (Touch Ergonomics) */}
        <div className="bg-[#0f0f15] border-t border-zinc-800/90 px-2 py-1.5 flex items-center gap-1 overflow-x-auto shrink-0">
          {accessoryKeys.map((k) => (
            <button
              key={k}
              onClick={() => handleKeyClick(k)}
              className="px-2 py-1 rounded bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-[10px] font-mono font-medium shrink-0 active:scale-90 active:bg-[#ff6767]/30 transition-all border border-zinc-700/50"
            >
              {k}
            </button>
          ))}
        </div>

        {/* Android Gesture Navigation Bar */}
        <div className="h-4 bg-[#0a0a0e] flex items-center justify-center shrink-0">
          <div className="w-20 h-1 bg-zinc-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};
