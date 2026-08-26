import React, { useState } from 'react';
import { PageRoute } from '../types';
import { DesktopIdeMockup } from '../components/DesktopIdeMockup';
import { YeminiSymbol } from '../components/YeminiSymbol';
import { StatusBadge } from '../components/StatusBadge';
import { 
  Zap, Terminal, Layers, ShieldCheck, 
  ArrowRight, Cpu, CheckCircle2, SplitSquareHorizontal, Check, BellRing, Mail
} from 'lucide-react';
import { productsData } from '../data/productsData';

interface DesktopPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DesktopPage: React.FC<DesktopPageProps> = ({ onNavigate }) => {
  const desktopData = productsData.find(p => p.id === 'desktop')!;
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistOS, setWaitlistOS] = useState<'macos' | 'windows' | 'linux'>('macos');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Desktop Hero */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <YeminiSymbol size="xs" />
          <span>macOS • Windows • Linux</span>
          <StatusBadge status="in-development" size="sm" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          A serious IDE <br />
          <span className="text-yemini-gradient">for serious work.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {desktopData.fullDescription}
        </p>

        {/* Waitlist Box */}
        <div className="max-w-md mx-auto pt-4">
          {submitted ? (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-sm flex items-center justify-center gap-2 animate-fadeIn">
              <Check className="w-5 h-5" />
              <span>You&apos;re on the early developer waitlist for {waitlistOS.toUpperCase()}!</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-2.5">
              <div className="flex items-center gap-2 bg-[#0e0e13] border border-zinc-800 p-2 rounded-2xl shadow-xl">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter email for private preview..."
                  required
                  className="flex-1 bg-transparent px-3 text-sm text-white placeholder-zinc-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 text-white font-semibold text-xs transition-all active:scale-95 shrink-0 flex items-center gap-1.5"
                >
                  <BellRing className="w-3.5 h-3.5" />
                  <span>Notify Me</span>
                </button>
              </div>

              {/* OS Selection Pills */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono">
                <span className="text-zinc-500">Target OS:</span>
                {(['macos', 'windows', 'linux'] as const).map((os) => (
                  <button
                    type="button"
                    key={os}
                    onClick={() => setWaitlistOS(os)}
                    className={`px-2.5 py-0.5 rounded-full capitalize transition-colors ${
                      waitlistOS === os
                        ? 'bg-zinc-800 text-white border border-zinc-700'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {os}
                  </button>
                ))}
              </div>
            </form>
          )}

          <p className="text-[11px] font-mono text-zinc-500 mt-3">
            In active development • Private preview rollout targeted for Q4 2026
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500 pt-2">
          <span>Sub-300ms startup</span>
          <span>•</span>
          <span>&lt;100MB RAM Target</span>
          <span>•</span>
          <span>GPU Metal / DirectX / Vulkan</span>
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-white">Desktop System Specifications</h3>
          <StatusBadge status="in-development" size="md" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {desktopData.specs.map((spec, i) => (
            <div key={i} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-500 block">{spec.label}</span>
              <span className="font-semibold text-zinc-200 mt-1 block">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cross-Platform CTA */}
      <div className="text-center space-y-6 pt-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Need an environment today?</h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Yemini Mobile is available now with full local toolchains, terminal, and touch-optimized ergonomics.
        </p>
        <button
          onClick={() => onNavigate('mobile')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 shadow-xl shadow-[#5b0000]/40 transition-all active:scale-95"
        >
          <span>Explore Yemini Mobile (Available Now)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
