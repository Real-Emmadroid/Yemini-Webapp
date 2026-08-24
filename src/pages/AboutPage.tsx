import React from 'react';
import { PageRoute } from '../types';
import { 
  ShieldCheck, Cpu, Terminal, 
  ArrowRight, Users, CheckCircle2 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* About Hero */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-[#ff6767]" />
          <span>STF Ecosystem • Sphere Tech Foundation</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Empowering builders <br />
          <span className="text-yemini-gradient">across every screen.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Yemini is an independent developer technology product engineered and governed by STF Ecosystem (Sphere Tech Foundation). We believe high-performance developer tooling should be portable, modular, and unencumbered by artificial cloud lock-ins.
        </p>
      </div>

      {/* Origin & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#09090d] border border-zinc-800 rounded-3xl p-8 sm:p-14">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why we started Yemini.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Modern development has become increasingly fragmented. Desktop IDEs have grown bloated, consuming gigabytes of memory for basic tasks, while mobile devices with massive computational capacity have been relegated to passive media consumption rather than active software creation.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            STF Ecosystem created Yemini to unify mobile, desktop, and AI-assisted workflows into a single, cohesive developer operating experience. By building native on-device toolchains, we give developers total autonomy over their workflows.
          </p>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center space-y-5 max-w-sm w-full">
            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#ff6767] mx-auto w-fit">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">STF Ecosystem Standard</h4>
              <p className="text-xs text-zinc-400">
                Sphere Tech Foundation stewards core protocols, security audits, and first-party toolchains for Yemini.
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Independent &amp; Sovereign Tooling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Founding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How we engineer software.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Native Performance First</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We reject sluggish web wrappers where native code belongs. Yemini leverages native GPU rendering, C++ and Rust engines for blazing responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">First-Party Trust &amp; Security</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our architecture is verified first-party. STF Ecosystem cryptographically audits and signs every toolchain to protect your machine from supply-chain risks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">True Offline Autonomy</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              You should be able to compile, run tests, and debug in an airplane or isolated subnet without being tethered to remote server clusters.
            </p>
          </div>
        </div>
      </div>

      {/* Community CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d0d14] to-[#09090d] border border-zinc-800 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Join our global engineering community
        </h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Participate in technical RFCs, suggest runtime integrations, and shape the future of mobile and desktop coding.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white font-semibold text-xs hover:brightness-110 transition-all shadow-md"
          >
            Contact Foundation Team
          </button>
        </div>
      </div>
    </div>
  );
};
