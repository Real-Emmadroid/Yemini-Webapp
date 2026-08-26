import React from 'react';
import { PageRoute } from '../types';
import { 
  ShieldCheck, Cpu, Terminal, 
  ArrowRight, Users, CheckCircle2, Globe, HeartHandshake, Compass
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
          Software that makes creation <br />
          <span className="text-yemini-gradient">accessible to anyone.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Yemini is a technology company building software that makes creation and technology accessible to anyone. We are starting with high-performance developer tools across mobile and desktop.
        </p>
      </div>

      {/* Origin & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#09090d] border border-zinc-800 rounded-3xl p-8 sm:p-14">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Mission &amp; Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Starting with developer tools.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our mission is broad: to make creation and technology accessible to anyone, everywhere. The fastest way to empower the next generation of builders is by equipping them with tools that run directly on the hardware they already own.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Billions of people have powerful mobile silicon in their pockets, yet software engineering remains tethered to heavy laptops and persistent cloud connections. Under the stewardship of the STF Ecosystem (Sphere Tech Foundation), Yemini removes these artificial barriers with native, offline-capable developer software.
          </p>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center space-y-5 max-w-sm w-full">
            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#ff6767] mx-auto w-fit">
              <Compass className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Mission-First, Product-Honest</h4>
              <p className="text-xs text-zinc-400">
                Governed by Sphere Tech Foundation to guarantee openness, cryptographic integrity, and sustained longevity.
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Independent &amp; Sovereign Software</span>
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
            <h3 className="text-lg font-bold text-white">Native Performance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We reject sluggish web wrappers where native code belongs. Yemini leverages native GPU rendering, C++ and Rust engines for instant responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Universal Accessibility</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Creation tools shouldn&apos;t require high-end workstations or constant gigabit Wi-Fi. We optimize for memory frugality and offline-first workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090d] border border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ff8585] w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Verified Trust &amp; Privacy</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Zero telemetry tracking of user source code. All extension packages and toolchain binaries are cryptographically signed and audited.
            </p>
          </div>
        </div>
      </div>

      {/* Community CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d0d14] to-[#09090d] border border-zinc-800 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Join our global community of builders
        </h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Participate in technical RFCs, suggest runtime integrations, and help build software that makes creation accessible to everyone.
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
