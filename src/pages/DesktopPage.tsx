import React from 'react';
import { PageRoute } from '../types';
import { DesktopIdeMockup } from '../components/DesktopIdeMockup';
import { YeminiSymbol } from '../components/YeminiSymbol';
import { 
  Download, Zap, Terminal, Layers, ShieldCheck, 
  ArrowRight, Cpu, CheckCircle2, SplitSquareHorizontal, Eye 
} from 'lucide-react';
import { productsData } from '../data/productsData';

interface DesktopPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DesktopPage: React.FC<DesktopPageProps> = ({ onNavigate }) => {
  const desktopData = productsData.find(p => p.id === 'desktop')!;

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Desktop Hero */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <YeminiSymbol size="xs" />
          <span>macOS • Windows • Linux</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          A serious IDE <br />
          <span className="text-yemini-gradient">for serious work.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {desktopData.fullDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('download')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 shadow-lg shadow-[#5b0000]/40 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download for Desktop (v1.2.0)</span>
          </button>

          <button
            onClick={() => onNavigate('docs')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white transition-colors"
          >
            Read Desktop Docs
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500 pt-2">
          <span>Sub-second startup</span>
          <span>•</span>
          <span>&lt;180MB RAM Idle</span>
          <span>•</span>
          <span>GPU Text Engine</span>
        </div>
      </div>

      {/* Interactive Desktop IDE Window */}
      <div className="max-w-6xl mx-auto">
        <DesktopIdeMockup />
      </div>

      {/* Deep-Dive Grid */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Architectural Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered for high throughput.
          </h2>
          <p className="text-zinc-400 text-sm">
            Everything you need for enterprise software development without the typical IDE bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">GPU-Accelerated Rendering</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Metal on macOS, DirectX 12 on Windows, and Vulkan on Linux ensure locked 120 FPS scrolling even in 100,000+ line files.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Multi-Pane Workspaces</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Drag tabs anywhere to split editors horizontally or vertically, dock multiple terminal instances, and inspect live memory state.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Verified First-Party Toolchains</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Language Server Protocol (LSP) servers and Debug Adapter Protocol (DAP) run in isolated workers with zero untrusted dependencies.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#09090d] border border-zinc-800 space-y-8">
        <h3 className="text-2xl font-bold text-white">Desktop System Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {desktopData.specs.map((spec, i) => (
            <div key={i} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-500 block">{spec.label}</span>
              <span className="font-semibold text-zinc-200 mt-1 block">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
