import React from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { YeminiSymbol } from '../components/YeminiSymbol';
import { StatusBadge } from '../components/StatusBadge';
import { 
  Download, Terminal, Cpu, HardDrive, Keyboard, 
  ShieldCheck, ArrowRight, Zap, CheckCircle2, FileCode2, Layers 
} from 'lucide-react';
import { productsData } from '../data/productsData';

interface MobilePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const MobilePage: React.FC<MobilePageProps> = ({ onNavigate }) => {
  const mobileData = productsData.find(p => p.id === 'mobile')!;

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Mobile Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
            <YeminiSymbol size="xs" />
            <span>Android Native IDE</span>
            <StatusBadge status="available" size="sm" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Your IDE. <br />
            <span className="text-yemini-gradient">In your pocket.</span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {mobileData.fullDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('download')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 shadow-lg shadow-[#5b0000]/40 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download APK (v1.2.0)</span>
            </button>

            <button
              onClick={() => onNavigate('docs')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Read Mobile Docs
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
            <span>Package Size: ~48 MB</span>
            <span>•</span>
            <span>Android 10.0+ (ARM64 / x86)</span>
            <span>•</span>
            <span className="text-emerald-400">Available Now</span>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <PhoneMockup />
        </div>
      </div>

      {/* Feature Deep Dive */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ba1724] dark:text-[#ff8585]">
            Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Engineered for glass touch &amp; native silicon.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Not a scaled-down browser frame. Yemini Mobile is a true native development suite built for Android.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <Keyboard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Touch Ergonomics</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Custom context-aware accessory toolbar brings symbols like braces, parentheses, colons, arrows, and operators directly above your keyboard for effortless touch coding.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">On-Device Toolchains</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Compile C/C++ via native Clang, execute Python 3.12, run Rust Cargo builds, and serve Node.js apps without cellular connection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Embedded Shell</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Full VT100 / xterm-256color terminal emulator with POSIX utilities, git command line, and background process execution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Scoped Storage</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Conforms strictly to Android Scoped Storage security standards, keeping user files private, isolated, and safe from malware.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Technical Specifications</h3>
          <StatusBadge status="available" size="md" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          {mobileData.specs.map((spec, i) => (
            <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-500 block">{spec.label}</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 mt-1 block">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-6 pt-4">
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Take your development environment everywhere.</h3>
        <button
          onClick={() => onNavigate('download')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 shadow-xl shadow-[#5b0000]/40 transition-all active:scale-95"
        >
          <Download className="w-5 h-5" />
          <span>Download Yemini Mobile APK (v1.2.0)</span>
        </button>
      </div>
    </div>
  );
};
