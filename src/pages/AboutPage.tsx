import React from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  ShieldCheck, Cpu, CheckCircle2, Globe, Compass, ExternalLink
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 transition-colors ${
      isLight ? 'text-zinc-800' : 'text-zinc-200'
    }`}>
      {/* About Hero */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <a
          href="https://stfweb3ecosystem.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all hover:scale-105 ${
            isLight
              ? 'bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-zinc-800 shadow-xs'
              : 'bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#ba1724] dark:text-[#ff6767]" />
          <span>STF Ecosystem • Sphere Tech Foundation</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight ${
          isLight ? 'text-zinc-900' : 'text-white'
        }`}>
          Software that makes creation <br />
          <span className="text-yemini-gradient">accessible to anyone.</span>
        </h1>

        <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
          isLight ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          Yemini is a technology initiative building software that makes creation and technology accessible to anyone. We are starting with high-performance developer tools across mobile and desktop.
        </p>
      </div>

      {/* Origin & Mission */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl p-8 sm:p-14 border transition-colors ${
        isLight
          ? 'bg-white border-zinc-200 shadow-sm'
          : 'bg-[#09090d] border-zinc-800 shadow-2xl'
      }`}>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ba1724] dark:text-[#ff8585] font-semibold">
            Mission &amp; Scope
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            Starting with developer tools.
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            Our mission is broad: to make creation and technology accessible to anyone, everywhere. The fastest way to empower the next generation of builders is by equipping them with tools that run directly on the hardware they already own.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            Billions of people have powerful mobile silicon in their pockets, yet software engineering remains tethered to heavy laptops and persistent cloud connections. Under the stewardship of the{' '}
            <a
              href="https://stfweb3ecosystem.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ba1724] dark:text-[#ff8585] font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              Sphere Tech Foundation (STF Ecosystem)
              <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
            </a>
            , Yemini removes these artificial barriers with native, offline-capable developer software.
          </p>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className={`p-8 rounded-3xl border text-center space-y-5 max-w-sm w-full transition-colors ${
            isLight
              ? 'bg-zinc-50 border-zinc-200'
              : 'bg-zinc-900/60 border-zinc-800'
          }`}>
            <div className={`p-4 rounded-2xl border mx-auto w-fit text-[#ba1724] dark:text-[#ff6767] ${
              isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900 border-zinc-800'
            }`}>
              <Compass className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className={`text-lg font-bold ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                Mission-First, Product-Honest
              </h4>
              <p className={`text-xs ${
                isLight ? 'text-zinc-600' : 'text-zinc-400'
              }`}>
                Governed by{' '}
                <a
                  href="https://stfweb3ecosystem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#ba1724] dark:text-[#ff8585] hover:underline"
                >
                  Sphere Tech Foundation
                </a>{' '}
                to guarantee openness, cryptographic integrity, and sustained longevity.
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Independent &amp; Sovereign Software</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ba1724] dark:text-[#ff8585] font-semibold">
            Founding Principles
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            How we engineer software.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-2xl border space-y-3 transition-colors ${
            isLight ? 'bg-white border-zinc-200 shadow-xs' : 'bg-[#09090d] border-zinc-800'
          }`}>
            <div className={`p-3 rounded-xl border text-[#ba1724] dark:text-[#ff8585] w-fit ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900 border-zinc-800'
            }`}>
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              Native Performance
            </h3>
            <p className={`text-xs leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              We reject sluggish web wrappers where native code belongs. Yemini leverages native GPU rendering, C++ and Rust engines for instant responsiveness.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border space-y-3 transition-colors ${
            isLight ? 'bg-white border-zinc-200 shadow-xs' : 'bg-[#09090d] border-zinc-800'
          }`}>
            <div className={`p-3 rounded-xl border text-[#ba1724] dark:text-[#ff8585] w-fit ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900 border-zinc-800'
            }`}>
              <Globe className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              Universal Accessibility
            </h3>
            <p className={`text-xs leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Creation tools shouldn&apos;t require high-end workstations or constant gigabit Wi-Fi. We optimize for memory frugality and offline-first workflows.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border space-y-3 transition-colors ${
            isLight ? 'bg-white border-zinc-200 shadow-xs' : 'bg-[#09090d] border-zinc-800'
          }`}>
            <div className={`p-3 rounded-xl border text-[#ba1724] dark:text-[#ff8585] w-fit ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900 border-zinc-800'
            }`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              Verified Trust &amp; Privacy
            </h3>
            <p className={`text-xs leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Zero telemetry tracking of user source code. All extension packages and toolchain binaries are cryptographically signed and audited.
            </p>
          </div>
        </div>
      </div>

      {/* Official Social Channels & Community Connect */}
      <div className={`p-8 sm:p-12 rounded-3xl border transition-colors space-y-6 ${
        isLight
          ? 'bg-gradient-to-br from-white to-zinc-50 border-zinc-200 shadow-sm'
          : 'bg-gradient-to-r from-[#0d0d14] to-[#09090d] border-zinc-800'
      }`}>
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ba1724] dark:text-[#ff8585] font-semibold">
            Connect With Yemini
          </span>
          <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            Follow <span className="text-yemini-gradient">@yeminiofficial</span>
          </h3>
          <p className={`text-sm max-w-xl mx-auto ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            Stay up to date with new compiler releases, mobile runtime updates, and developer community highlights on your preferred social network.
          </p>
        </div>

        {/* Social Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          {/* Facebook */}
          <a
            href="https://facebook.com/yeminiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-800 shadow-xs'
                : 'bg-zinc-900 hover:bg-zinc-850 border-zinc-800 text-zinc-200'
            }`}
          >
            <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-xs font-semibold">Facebook</span>
            <span className="text-[11px] font-mono text-zinc-500">@yeminiofficial</span>
          </a>

          {/* X */}
          <a
            href="https://x.com/yeminiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-800 shadow-xs'
                : 'bg-zinc-900 hover:bg-zinc-850 border-zinc-800 text-zinc-200'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-xs font-semibold">X</span>
            <span className="text-[11px] font-mono text-zinc-500">@yeminiofficial</span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@yeminiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-800 shadow-xs'
                : 'bg-zinc-900 hover:bg-zinc-850 border-zinc-800 text-zinc-200'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            <span className="text-xs font-semibold">TikTok</span>
            <span className="text-[11px] font-mono text-zinc-500">@yeminiofficial</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yeminiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-800 shadow-xs'
                : 'bg-zinc-900 hover:bg-zinc-850 border-zinc-800 text-zinc-200'
            }`}
          >
            <svg className="w-5 h-5 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-xs font-semibold">Instagram</span>
            <span className="text-[11px] font-mono text-zinc-500">@yeminiofficial</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://stfweb3ecosystem.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white font-semibold text-xs hover:opacity-90 transition-all shadow-xs inline-flex items-center gap-1.5"
          >
            <span>Visit Sphere Tech Foundation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white font-semibold text-xs hover:brightness-110 transition-all shadow-md cursor-pointer"
          >
            Contact Foundation Team
          </button>
        </div>
      </div>
    </div>
  );
};
