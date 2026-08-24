import React from 'react';
import { PageRoute } from '../types';
import { 
  ArrowRight, Download, Sparkles, Smartphone, Monitor, 
  Terminal, ShieldCheck, Zap, HardDrive, WifiOff, CheckCircle2, 
  Play, Code2, Cpu 
} from 'lucide-react';
import { CodeWindow } from '../components/CodeWindow';
import { PhoneMockup } from '../components/PhoneMockup';
import { DesktopIdeMockup } from '../components/DesktopIdeMockup';
import { AiAgentInteractive } from '../components/AiAgentInteractive';
import { OfflineSimulator } from '../components/OfflineSimulator';
import { HeroInteractiveBackground } from '../components/HeroInteractiveBackground';
import { YeminiSymbol } from '../components/YeminiSymbol';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-32 pb-24 overflow-hidden">
      {/* HERO SECTION WITH INTERACTIVE BACKGROUND */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center">
        {/* Interactive Magnetic Wine Particles and Scanline Grid Canvas */}
        <HeroInteractiveBackground />

        {/* Ambient Gradient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[900px] h-[250px] sm:h-[450px] bg-gradient-to-br from-[#5b0000]/30 via-[#ff6767]/10 to-transparent blur-[100px] sm:blur-[130px] pointer-events-none -z-10 rounded-full" />

        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-8 relative z-10 mt-4 sm:mt-0">
          {/* Massive Headline */}
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.05]">
            Build without <span className="text-yemini-gradient">limits.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed px-2">
            Yemini is a modern development ecosystem built for developers who want to code, build and ship from anywhere.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => onNavigate('download')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:from-[#7a0000] hover:to-[#ff6767] shadow-xl shadow-[#5b0000]/40 transition-all hover:scale-[1.02] active:scale-98"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Yemini</span>
            </button>

            <button
              onClick={() => onNavigate('mobile')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all hover:text-white backdrop-blur-md"
            >
              <span>Explore Yemini</span>
              <ArrowRight className="w-4 h-4 text-[#ff6767]" />
            </button>
          </div>

          {/* Platforms Tagline */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs font-mono text-zinc-500">
            <span>Android • Windows • macOS • Linux</span>
            <span>•</span>
            <span className="text-zinc-400 font-semibold">100% Offline-First</span>
          </div>
        </div>

        {/* Hero Interactive Code Window (Yemini Workspace) */}
        <div className="mt-10 sm:mt-16 max-w-5xl mx-auto w-full relative z-10">
          <CodeWindow />
        </div>
      </section>

      {/* PRODUCT ECOSYSTEM SECTION */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Product Ecosystem
          </span>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
            One ecosystem. Every way you build.
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400">
            Engineered from scratch for seamless continuity across mobile glass and multi-monitor desktop setups.
          </p>
        </div>

        {/* Product 1: YEMINI MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#09090d] border border-zinc-800/80 rounded-3xl p-4 sm:p-8 lg:p-14 relative overflow-hidden yemini-glow-hover">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <YeminiSymbol size="xs" />
              <span>Yemini Mobile for Android</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your IDE. In your pocket.
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              A powerful mobile coding environment designed for writing, running and managing real projects directly from Android. Features on-device compiler toolchains, touch keyboard accessories, and scoped project storage.
            </p>

            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-device Python, C/C++, Rust, and Node.js execution</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom touch keyboard accessory row with quick brackets</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Integrated local Linux terminal with full xterm-256color</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('mobile')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <span>Explore Mobile</span>
                <ArrowRight className="w-4 h-4 text-[#ff6767]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center w-full">
            <PhoneMockup />
          </div>
        </div>

        {/* Product 2: YEMINI DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#09090d] border border-zinc-800/80 rounded-3xl p-3.5 sm:p-8 lg:p-14 relative overflow-hidden yemini-glow-hover">
          <div className="lg:col-span-12 space-y-4 sm:space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <YeminiSymbol size="xs" />
                  <span>Yemini Desktop for Windows, macOS &amp; Linux</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  A serious IDE for serious work.
                </h3>
              </div>

              <button
                onClick={() => onNavigate('desktop')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm border border-zinc-800 hover:border-zinc-700 transition-colors self-start md:self-auto"
              >
                <span>Explore Desktop</span>
                <ArrowRight className="w-4 h-4 text-[#ff6767]" />
              </button>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              A professional desktop development environment built for modern software engineering. Engineered with GPU-accelerated text rendering, sub-180MB RAM footprint, multi-pane workspaces, and native language servers.
            </p>

            <div className="pt-2 sm:pt-4 w-full overflow-hidden">
              <DesktopIdeMockup />
            </div>
          </div>
        </div>

        {/* Product 3: YEMINI AI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#09090d] border border-zinc-800/80 rounded-3xl p-3.5 sm:p-8 lg:p-14 relative overflow-hidden yemini-glow-hover">
          <div className="lg:col-span-12 space-y-4 sm:space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <YeminiSymbol size="xs" />
                  <span>Yemini AI Coding Agent</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#5b0000] text-[#ff8585] ml-1">Coming Soon</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Your AI coding partner.
                </h3>
              </div>

              <button
                onClick={() => onNavigate('ai')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm border border-zinc-800 hover:border-zinc-700 transition-colors self-start md:self-auto"
              >
                <span>Explore Yemini AI</span>
                <ArrowRight className="w-4 h-4 text-[#ff6767]" />
              </button>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              An intelligent coding agent designed to understand your codebase, formulate structured diffs, debug compile failures, and accelerate your engineering without ever compromising data sovereignty.
            </p>

            <div className="pt-2 sm:pt-4 w-full overflow-hidden">
              <AiAgentInteractive />
            </div>
          </div>
        </div>
      </section>

      {/* THE BIG IDEA SECTION (Editorial) */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-[#0e0e14] to-[#08080b] border border-zinc-800 rounded-3xl p-6 sm:p-14 lg:p-20 text-center space-y-6 sm:space-y-8 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
              The Yemini Vision
            </span>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Code shouldn&apos;t be tied to one machine.
            </h2>
            <p className="text-lg sm:text-2xl text-zinc-300 font-medium">
              Your ideas move. Your tools should too.
            </p>
          </div>

          {/* Visual Progression Transition */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 sm:pt-6 items-center text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-xs font-mono text-zinc-500">01. INITIATE</div>
              <h4 className="font-bold text-white text-sm sm:text-base">Start on mobile</h4>
              <p className="text-xs text-zinc-400">Sketch ideas, edit code, and compile tests during your commute.</p>
            </div>

            <div className="hidden md:flex justify-center text-zinc-600">
              <ArrowRight className="w-6 h-6 text-[#ff6767]" />
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-xs font-mono text-zinc-500">02. EXPAND</div>
              <h4 className="font-bold text-white text-sm sm:text-base">Continue on desktop</h4>
              <p className="text-xs text-zinc-400">Open the same repository seamlessly on multi-screen workstations.</p>
            </div>

            <div className="hidden md:flex justify-center text-zinc-600">
              <ArrowRight className="w-6 h-6 text-[#ff6767]" />
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-xs font-mono text-zinc-500">03. ACCELERATE</div>
              <h4 className="font-bold text-white text-sm sm:text-base">Leverage AI &amp; Build</h4>
              <p className="text-xs text-zinc-400">Invoke intelligent refactoring and ship without limitations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFLINE-FIRST SECTION */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Zero Server Dependency
          </span>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build even when you&apos;re offline.
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400">
            Yemini is designed around an offline-first development experience. Install the tools you need and keep coding without depending on a constant internet connection.
          </p>
        </div>

        <OfflineSimulator />
      </section>

      {/* DOWNLOAD PLATFORMS GRID */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
            Cross-Platform Availability
          </span>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
            Yemini is ready when you are.
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400">
            Download the signed release for your operating system and start building immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Android */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#09090d] border border-zinc-800 flex flex-col justify-between space-y-5 sm:space-y-6 yemini-glow-hover">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base sm:text-lg">Android</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">v1.2.0</span>
              </div>
              <p className="text-xs text-zinc-400">Yemini Mobile (APK Release)</p>
              <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 pt-1 sm:pt-2">Requirements: Android 10.0+ (ARM64/x86)</p>
            </div>

            <button
              onClick={() => onNavigate('download')}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 flex items-center justify-center gap-1.5 shadow-md shadow-[#5b0000]/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </button>
          </div>

          {/* Windows */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#09090d] border border-zinc-800 flex flex-col justify-between space-y-5 sm:space-y-6 yemini-glow-hover">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base sm:text-lg">Windows</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">v1.2.0</span>
              </div>
              <p className="text-xs text-zinc-400">Yemini Desktop for Windows 10 &amp; 11</p>
              <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 pt-1 sm:pt-2">x64 / ARM64 Installer (84.2 MB)</p>
            </div>

            <button
              onClick={() => onNavigate('download')}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 flex items-center justify-center gap-1.5 shadow-md shadow-[#5b0000]/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download for Windows</span>
            </button>
          </div>

          {/* macOS */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#09090d] border border-zinc-800 flex flex-col justify-between space-y-5 sm:space-y-6 yemini-glow-hover">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base sm:text-lg">macOS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">v1.2.0</span>
              </div>
              <p className="text-xs text-zinc-400">Apple Silicon &amp; Intel Universal</p>
              <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 pt-1 sm:pt-2">Universal DMG / Homebrew (88.7 MB)</p>
            </div>

            <button
              onClick={() => onNavigate('download')}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 flex items-center justify-center gap-1.5 shadow-md shadow-[#5b0000]/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download for macOS</span>
            </button>
          </div>

          {/* Linux */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#09090d] border border-zinc-800 flex flex-col justify-between space-y-5 sm:space-y-6 yemini-glow-hover">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base sm:text-lg">Linux</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">v1.2.0</span>
              </div>
              <p className="text-xs text-zinc-400">Debian, Ubuntu, Fedora, Arch</p>
              <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 pt-1 sm:pt-2">.deb, .rpm, .AppImage, tar.gz (79.1 MB)</p>
            </div>

            <button
              onClick={() => onNavigate('download')}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 flex items-center justify-center gap-1.5 shadow-md shadow-[#5b0000]/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download for Linux</span>
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#5b0000]/80 via-[#2a0000] to-[#0e0e14] border border-[#ff6767]/30 p-6 sm:p-14 text-center space-y-5 sm:space-y-6 shadow-2xl overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to code without limits?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-lg">
              Join thousands of developers building the next generation of software with Yemini.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onNavigate('download')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-black font-bold text-sm sm:text-base shadow-xl transition-all hover:scale-[1.02] active:scale-98"
            >
              Download Yemini Free
            </button>

            <button
              onClick={() => onNavigate('docs')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold text-sm sm:text-base border border-zinc-700 transition-colors"
            >
              Read the Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
