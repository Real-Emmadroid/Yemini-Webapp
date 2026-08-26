import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { HeroInteractiveBackground } from '../components/HeroInteractiveBackground';
import { StatusBadge } from '../components/StatusBadge';
import { 
  ChevronRight, CheckCircle2, Play, Copy, Check, ArrowRight,
  Smartphone, Monitor, Sparkles, Download, BellRing, Terminal
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const [networkMode, setNetworkMode] = useState<'online' | 'offline'>('offline');
  const [isCopied, setIsCopied] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [runOutput, setRunOutput] = useState<string | null>(null);

  const isLight = theme === 'light';

  const handleCopyCode = () => {
    const code = `// Yemini Native Core - Multi-Platform Compiler\nuse std::time::Instant;\n\nfn compile_pipeline(target: String) -> String {\n    let timer = Instant::now();\n    println!("[{}] Compiling for {} architecture...", "yemini-core", target);\n    format!("Compiled in {:.2?} with 0 memory leaks", timer.elapsed())\n}\n\nfn main() {\n    let targets = vec!["android-arm64", "macos-metal", "win-x64"];\n    for target in targets {\n        let result = compile_pipeline(target);\n        println!("✔ Target: {} -> {}", target, result);\n    }\n}`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setRunOutput('Compiling rustc on-device target...');
    setTimeout(() => {
      setRunOutput('✔ Target: android-arm64 -> Compiled in 1.42ms (0 leaks)\n✔ Target: macos-metal -> In development preview\n✔ Target: win-x64 -> In development preview\n>>> [Yemini Runtime] Finished with exit code 0');
      setIsRunningCode(false);
    }, 600);
  };

  return (
    <div className={`relative min-h-screen selection:text-white transition-colors duration-300 overflow-x-hidden ${
      isLight ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0066cc]' : 'bg-black text-[#fadcd9] selection:bg-[#ba1724]'
    }`}>
      {/* Interactive Cursor Particle / Grid Background Animation */}
      <HeroInteractiveBackground />

      <main className="relative pt-28 sm:pt-32 pb-24 flex flex-col gap-24 sm:gap-32 z-10">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
          {/* Hero Glow Accent */}
          <div className="hero-glow" />

          {/* Identity Eyebrow / Mission Line */}
          <div className="inline-flex items-center gap-2 mb-4 animate-fadeIn">
            <span className={`text-xs sm:text-sm font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
              isLight 
                ? 'bg-white/80 border-gray-300 text-gray-700 shadow-xs' 
                : 'bg-[#271716]/80 border-[#43302f] text-[#ffb3ae]'
            }`}>
              STF Ecosystem • Sphere Tech Foundation
            </span>
          </div>

          {/* Main Headline - Mission-first & Product-honest */}
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-6 max-w-5xl font-semibold leading-[1.08] ${
            isLight ? 'text-black' : 'text-[#fadcd9]'
          }`}>
            Software that makes creation<br />
            <span className="text-gradient">accessible to anyone.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-xl md:text-2xl font-normal tracking-tight max-w-3xl mx-auto mb-8 sm:mb-10 leading-snug px-2 ${
            isLight ? 'text-gray-600' : 'text-[#ab8986]'
          }`}>
            Yemini is building accessible technology for builders everywhere — starting with a high-performance native developer platform across mobile, desktop, and AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 mb-16 sm:mb-24 w-full sm:w-auto px-4">
            <button
              onClick={() => onNavigate('mobile')}
              className={`w-full sm:w-auto px-7 py-3 rounded-full text-sm sm:text-base font-medium transition-all active:scale-95 flex items-center justify-center gap-2 ${
                isLight 
                  ? 'bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg' 
                  : 'bg-[#ba1724] text-white hover:bg-[#930015] hover:text-[#ffdad7] shadow-lg shadow-[#ba1724]/30'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download Yemini Mobile</span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('ecosystem');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center justify-center gap-1 active:scale-95 ${
                isLight 
                  ? 'text-black hover:bg-gray-200' 
                  : 'text-[#fadcd9] hover:bg-[#2c1b1a]'
              }`}
            >
              <span>Explore Ecosystem</span>
              <ChevronRight className={`w-4 h-4 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`} />
            </button>
          </div>

          {/* Hero Mac Window Mockup */}
          <div className={`w-full max-w-5xl mx-auto mac-window relative z-10 transform translate-y-2 hover:translate-y-0 transition-all duration-700 ease-out ${
            isLight 
              ? 'bg-white border border-black/10 shadow-2xl' 
              : 'bg-black border border-[#43302f]/80 shadow-2xl'
          }`}>
            {/* Window Header */}
            <div className={`mac-header flex items-center justify-between px-4 ${
              isLight ? 'bg-[#f6f6f6] border-b border-[#e5e5e5]' : 'bg-[#271716] border-b border-[#43302f]'
            }`}>
              <div className="mac-dots flex items-center gap-2">
                <div className="mac-dot close" />
                <div className="mac-dot min" />
                <div className="mac-dot max" />
              </div>
              <div className={`text-xs font-medium font-sans flex items-center gap-2 ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                <span>workspace.yem — Yemini Core</span>
                <StatusBadge status="available" size="sm" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className={`p-1 rounded transition-colors ${
                    isLight ? 'text-gray-400 hover:text-black' : 'text-[#ab8986] hover:text-[#fadcd9]'
                  }`}
                  title="Copy code"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={isRunningCode}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    isLight ? 'bg-black text-white hover:bg-gray-800' : 'bg-[#ba1724] text-white hover:bg-[#930015]'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isRunningCode ? 'Running...' : 'Run'}</span>
                </button>
              </div>
            </div>

            {/* Window Body */}
            <div className={`p-4 sm:p-8 text-left code-font min-h-[380px] sm:h-[450px] overflow-hidden flex flex-col md:flex-row ${
              isLight ? 'bg-[#f9f9f9] text-[#1d1d1f]' : 'bg-black text-[#fadcd9]'
            }`}>
              {/* Left Explorer Sidebar */}
              <div className={`w-48 border-r pr-4 mr-6 hidden md:block select-none ${
                isLight ? 'border-gray-200' : 'border-[#43302f]'
              }`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                  isLight ? 'text-gray-400' : 'text-[#ab8986]'
                }`}>
                  Explorer
                </div>
                <div className={`flex items-center gap-2 mb-2 text-xs ${
                  isLight ? 'text-gray-600' : 'text-[#fadcd9]'
                }`}>
                  <span className="material-symbols-outlined text-sm text-gray-400">folder</span> src
                </div>
                <div className={`flex items-center gap-2 px-2 py-1 rounded ml-2 mb-1 text-xs font-semibold ${
                  isLight 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-[#ffb3ae] bg-[#2c1b1a]'
                }`}>
                  <span className={`material-symbols-outlined text-sm ${isLight ? 'text-blue-600' : 'text-[#ba1724]'}`}>
                    description
                  </span> 
                  main.rs
                </div>
                <div className={`flex items-center gap-2 ml-2 mb-1 text-xs cursor-pointer ${
                  isLight ? 'text-gray-500 hover:text-black' : 'text-[#ab8986] hover:text-[#fadcd9]'
                }`}>
                  <span className="material-symbols-outlined text-sm">description</span> lib.rs
                </div>
                <div className={`flex items-center gap-2 ml-2 text-xs cursor-pointer ${
                  isLight ? 'text-gray-500 hover:text-black' : 'text-[#ab8986] hover:text-[#fadcd9]'
                }`}>
                  <span className="material-symbols-outlined text-sm">description</span> config.toml
                </div>
              </div>

              {/* Code Area */}
              <div className="flex-1 overflow-x-auto">
                <pre className="text-xs sm:text-sm leading-relaxed">
                  <code>
                    <span className={isLight ? 'text-gray-400 italic' : 'text-[#ab8986] italic'}>
                      // Yemini Native Core - Multi-Platform Compiler
                    </span>{'\n'}
                    <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>use</span> std::time::Instant;{'\n\n'}
                    <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>fn</span> <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>compile_pipeline</span>(target: <span className={isLight ? 'text-green-600' : 'text-emerald-400'}>String</span>) -&gt; <span className={isLight ? 'text-green-600' : 'text-emerald-400'}>String</span> {'{\n'}
                    {'    '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>let</span> timer = Instant::now();{'\n'}
                    {'    '}<span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>println!</span>(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>{'"[{}] Compiling for {} architecture...", "yemini-core", target'}</span>);{'\n'}
                    {'    '}<span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>format!</span>(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>{'"Compiled in {:.2?} with 0 memory leaks", timer.elapsed()'}</span>);{'\n'}
                    {'}'}{'\n\n'}
                    <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>fn</span> <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>main</span>() {'{\n'}
                    {'    '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>let</span> targets = <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>vec!</span>[<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>{'"android-arm64", "macos-metal", "win-x64"'}</span>];{'\n'}
                    {'    '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>for</span> target <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>in</span> targets {'{\n'}
                    {'        '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>let</span> result = <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>compile_pipeline</span>(target);{'\n'}
                    {'        '}<span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>println!</span>(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>{'"✔ Target: {} -> {}", target, result'}</span>);{'\n'}
                    {'    }\n'}
                    {'}'}
                  </code>
                </pre>

                {/* Simulation Output Banner */}
                {runOutput && (
                  <div className={`mt-4 p-3 rounded-lg text-xs font-mono whitespace-pre-wrap animate-fadeIn ${
                    isLight 
                      ? 'bg-white border border-gray-200 text-emerald-600 shadow-sm' 
                      : 'bg-[#180a09] border border-[#43302f] text-emerald-400'
                  }`}>
                    {runOutput}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM SECTION */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full pt-12 sm:pt-16" id="ecosystem">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className={`text-3xl sm:text-5xl md:text-6xl tracking-tighter font-semibold mb-4 ${
              isLight ? 'text-black' : 'text-[#fadcd9]'
            }`}>
              The Yemini Platform.
            </h2>
            <p className={`text-lg sm:text-xl md:text-2xl tracking-tight max-w-3xl mx-auto ${
              isLight ? 'text-gray-600' : 'text-[#ab8986]'
            }`}>
              Transparent development status across mobile, desktop, and intelligent agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Feature Card - AVAILABLE NOW */}
            <div className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group h-[540px] sm:h-[600px] ${
              isLight 
                ? 'bg-white/70 border border-gray-200/80 shadow-md hover:shadow-elevated' 
                : 'bg-black/60 border border-[#43302f]/80'
            }`}>
              <div className="relative z-10 w-full md:w-3/4">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold tracking-widest uppercase font-mono ${
                    isLight ? 'text-gray-500' : 'text-[#ab8986]'
                  }`}>
                    Yemini Mobile
                  </span>
                  <StatusBadge status="available" size="sm" />
                </div>

                <h3 className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-4 ${
                  isLight ? 'text-black' : 'text-[#fadcd9]'
                }`}>
                  Pro power. Pocket size.
                </h3>
                <p className={`text-sm sm:text-base mb-8 leading-relaxed ${
                  isLight ? 'text-gray-600' : 'text-[#ab8986]'
                }`}>
                  Full on-device compilation for Python, C/C++, Rust, and Node.js. No cloud required. Complete with an integrated Linux terminal and touch accessory toolbar.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate('mobile')}
                    className={`font-semibold flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm ${
                      isLight 
                        ? 'bg-black text-white hover:bg-gray-800' 
                        : 'bg-[#ba1724] text-white hover:bg-[#930015]'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download APK (v1.2.0)</span>
                  </button>

                  <button
                    onClick={() => onNavigate('mobile')}
                    className={`font-medium flex items-center gap-1 text-sm ${
                      isLight 
                        ? 'text-blue-600 hover:underline' 
                        : 'text-[#ffb3ae] hover:underline'
                    }`}
                  >
                    <span>View features</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Abstract Phone Mockup */}
              <div className={`absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 w-[300px] sm:w-[350px] h-[480px] sm:h-[550px] rounded-[40px] shadow-2xl flex flex-col overflow-hidden rotate-[-5deg] transform group-hover:rotate-0 transition-transform duration-500 ${
                isLight 
                  ? 'bg-white border-8 border-gray-100 shadow-2xl' 
                  : 'bg-[#180a09] border-8 border-[#2c1b1a]'
              }`}>
                <div className="h-6 w-full flex justify-center pt-2">
                  <div className={`w-20 h-3.5 rounded-full ${isLight ? 'bg-gray-200' : 'bg-[#43302f]'}`} />
                </div>
                <div className={`flex-1 m-2 rounded-[24px] p-4 pt-6 shadow-inner code-font text-[10px] sm:text-[11px] overflow-hidden ${
                  isLight 
                    ? 'bg-gray-50 border border-gray-100 text-gray-800' 
                    : 'bg-[#271716] border border-[#43302f] text-[#fadcd9]'
                }`}>
                  <pre>
                    <code>
                      <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>import</span> math{'\n'}
                      <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>def</span> <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>compute_orbit</span>(radius):{'\n'}
                      {'    '}<span className={isLight ? 'text-gray-400 italic' : 'text-[#ab8986] italic'}># Local orbital calculations</span>{'\n'}
                      {'    '}speed = math.sqrt(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>398600</span> / radius){'\n'}
                      {'    '}<span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>print</span>(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>{`f"Velocity: {speed:.2f} km/s"`}</span>){'\n'}
                      {'    '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>return</span> speed{'\n\n'}
                      <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>compute_orbit</span>(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>6771.0</span>)
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop & AI Features - IN DEVELOPMENT */}
            <div className="flex flex-col gap-8">
              {/* Desktop Feature */}
              <div className={`glass-card rounded-3xl p-8 sm:p-10 flex-1 relative overflow-hidden group flex flex-col justify-between ${
                isLight 
                  ? 'bg-white/70 border border-gray-200/80 shadow-md hover:shadow-elevated' 
                  : 'bg-black/60 border border-[#43302f]/80'
              }`}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold tracking-widest uppercase font-mono ${
                      isLight ? 'text-gray-500' : 'text-[#ab8986]'
                    }`}>
                      Yemini Desktop
                    </span>
                    <StatusBadge status="in-development" size="sm" />
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-4 ${
                    isLight ? 'text-black' : 'text-[#fadcd9]'
                  }`}>
                    A serious IDE for serious work.
                  </h3>
                  <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                    isLight ? 'text-gray-600' : 'text-[#ab8986]'
                  }`}>
                    GPU-accelerated text rendering. Sub-100MB RAM footprint. Designed for macOS, Windows, and Linux without Electron bloat.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onNavigate('desktop')}
                    className={`font-semibold flex items-center gap-1.5 text-sm ${
                      isLight 
                        ? 'text-gray-900 hover:text-black' 
                        : 'text-[#fadcd9] hover:text-white'
                    }`}
                  >
                    <span>Join Desktop Waitlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className={`text-xs font-mono ${isLight ? 'text-gray-400' : 'text-zinc-500'}`}>
                    Private Preview Q4 2026
                  </span>
                </div>
              </div>

              {/* AI Feature */}
              <div className={`rounded-3xl p-8 sm:p-10 flex-1 relative overflow-hidden group flex flex-col justify-between shadow-xl border ${
                isLight 
                  ? 'bg-[#18181b] border-zinc-700 text-white' 
                  : 'bg-black border-[#43302f]/80 text-white'
              }`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-mono">
                      Yemini Intelligence
                    </span>
                    <StatusBadge status="in-development" size="sm" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-white">
                    Your AI coding partner.
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                    Understands your codebase locally through an AST graph. Proposes verified line-by-line diffs. Zero training on user source code.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 relative z-10">
                  <button
                    onClick={() => onNavigate('ai')}
                    className="text-white hover:text-zinc-200 font-semibold flex items-center gap-1 text-sm group"
                  >
                    <span>Join AI Early Access</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xs font-mono text-zinc-400">
                    Developer Beta
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFLINE-FIRST SECTION */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full pt-12 sm:pt-20" id="offline">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 lg:pr-10">
              <h2 className={`text-3xl sm:text-5xl lg:text-6xl tracking-tighter font-semibold mb-6 leading-tight ${
                isLight ? 'text-black' : 'text-[#fadcd9]'
              }`}>
                Zero server dependency.
              </h2>
              <p className={`text-base sm:text-xl tracking-tight mb-8 leading-relaxed ${
                isLight ? 'text-gray-600' : 'text-[#ab8986]'
              }`}>
                Yemini is designed around an offline-first experience. Install the toolchains you need, cache your dependencies, and build anywhere without a connection.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className={`border-t pt-4 ${isLight ? 'border-gray-200' : 'border-[#43302f]'}`}>
                  <div className={`font-semibold mb-1 text-base ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>Native Execution</div>
                  <div className={`text-xs sm:text-sm ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Run code directly on device CPU.</div>
                </div>
                <div className={`border-t pt-4 ${isLight ? 'border-gray-200' : 'border-[#43302f]'}`}>
                  <div className={`font-semibold mb-1 text-base ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>Local Compilers</div>
                  <div className={`text-xs sm:text-sm ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Clang, Rustc, Python built-in.</div>
                </div>
              </div>
            </div>

            {/* Offline Network Simulator Card */}
            <div className="flex-1 w-full">
              <div className={`glass-card rounded-3xl p-6 sm:p-8 shadow-xl ${
                isLight 
                  ? 'bg-white/70 border border-gray-200 shadow-elevated' 
                  : 'bg-black/60 border border-[#43302f]'
              }`}>
                <div className={`flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-6 border-b ${
                  isLight ? 'border-gray-100' : 'border-[#43302f]'
                }`}>
                  <div>
                    <div className={`text-sm font-medium ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>Network Simulator</div>
                    <div className={`text-xs ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Test local execution state</div>
                  </div>
                  <div className={`rounded-full p-1 flex text-xs font-medium w-max ${
                    isLight ? 'bg-gray-100' : 'bg-[#2c1b1a]'
                  }`}>
                    <button
                      onClick={() => setNetworkMode('online')}
                      className={`px-4 py-1.5 rounded-full transition-colors ${
                        networkMode === 'online' 
                          ? (isLight ? 'bg-white shadow-xs text-black' : 'bg-[#372624] text-[#fadcd9] shadow-xs')
                          : (isLight ? 'text-gray-500 hover:text-black' : 'text-[#ab8986] hover:text-[#fadcd9]')
                      }`}
                    >
                      Online
                    </button>
                    <button
                      onClick={() => setNetworkMode('offline')}
                      className={`px-4 py-1.5 rounded-full transition-colors ${
                        networkMode === 'offline' 
                          ? (isLight ? 'bg-white shadow-xs text-black font-semibold' : 'bg-[#ba1724] text-white shadow-xs')
                          : (isLight ? 'text-gray-500 hover:text-black' : 'text-[#ab8986] hover:text-[#fadcd9]')
                      }`}
                    >
                      Offline
                    </button>
                  </div>
                </div>

                <div className={`rounded-xl p-5 code-font text-xs sm:text-sm mb-4 border ${
                  isLight 
                    ? 'bg-gray-50 border-gray-100 text-gray-800' 
                    : 'bg-black border-[#43302f] text-[#fadcd9]'
                }`}>
                  <pre>
                    <code>
                      <span className={isLight ? 'text-gray-400 italic' : 'text-[#ab8986] italic'}>// 100% Offline Capable</span>{'\n'}
                      <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>#include</span> <span className={isLight ? 'text-green-600' : 'text-emerald-400'}>&lt;iostream&gt;</span>{'\n'}
                      <span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>int</span> <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>main</span>() {'{\n'}
                      {'    '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>std</span>::<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>cout</span> &lt;&lt; <span className={isLight ? 'text-orange-600' : 'text-amber-400'}>&quot;Running on local toolchain.&quot;</span>;{'\n'}
                      {'    '}<span className={isLight ? 'text-blue-600 font-bold' : 'text-[#ba1724] font-bold'}>return</span> <span className={isLight ? 'text-orange-600' : 'text-amber-400'}>0</span>;{'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>

                <div className={`flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg w-max border ${
                  isLight 
                    ? 'text-green-600 bg-green-50 border-green-200' 
                    : 'text-emerald-400 bg-emerald-950/40 border-emerald-900/60'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {networkMode === 'offline' 
                      ? 'Execution successful: 0ms ping (Offline on-device toolchain)' 
                      : 'Execution successful: Local compiler active'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOADS / GET ACCESS SECTION */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full pt-12 sm:pt-20" id="downloads">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-5xl tracking-tighter font-semibold mb-4 ${
              isLight ? 'text-black' : 'text-[#fadcd9]'
            }`}>
              Get started with Yemini.
            </h2>
            <p className={`text-lg sm:text-xl tracking-tight max-w-2xl mx-auto ${
              isLight ? 'text-gray-600' : 'text-[#ab8986]'
            }`}>
              Download Yemini Mobile today or join the waitlist for our upcoming desktop releases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Android - AVAILABLE NOW */}
            <div className={`glass-card rounded-2xl p-6 flex flex-col items-center text-center transition-all ${
              isLight 
                ? 'bg-white/80 border-2 border-emerald-500/40 shadow-elevated' 
                : 'bg-black/60 border-2 border-emerald-800/60 shadow-lg'
            }`}>
              <div className="flex items-center justify-between w-full mb-3">
                <span className="material-symbols-outlined text-3xl font-light text-emerald-500">
                  smartphone
                </span>
                <StatusBadge status="available" size="sm" />
              </div>
              <h4 className={`text-xl font-semibold mb-1 ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>Android</h4>
              <p className={`text-xs mb-6 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Signed APK Release v1.2.0</p>
              <button
                onClick={() => onNavigate('download')}
                className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors mt-auto shadow-md ${
                  isLight 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-[#ba1724] text-white hover:bg-[#930015] hover:text-[#ffdad7]'
                }`}
              >
                Download APK
              </button>
            </div>

            {/* macOS - IN DEVELOPMENT */}
            <div className={`glass-card rounded-2xl p-6 flex flex-col items-center text-center transition-all ${
              isLight 
                ? 'bg-white/70 border border-gray-200' 
                : 'bg-black/60 border border-[#43302f]/80'
            }`}>
              <div className="flex items-center justify-between w-full mb-3">
                <span className={`material-symbols-outlined text-3xl font-light ${
                  isLight ? 'text-gray-600' : 'text-[#fadcd9]'
                }`}>
                  desktop_mac
                </span>
                <StatusBadge status="in-development" size="sm" />
              </div>
              <h4 className={`text-xl font-semibold mb-1 ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>macOS</h4>
              <p className={`text-xs mb-6 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Apple Silicon &amp; Intel</p>
              <button
                onClick={() => onNavigate('desktop')}
                className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors mt-auto ${
                  isLight 
                    ? 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-300' 
                    : 'bg-[#372624] text-[#fadcd9] hover:bg-[#43302f] border border-[#5b403e]'
                }`}
              >
                Join Waitlist
              </button>
            </div>

            {/* Windows - IN DEVELOPMENT */}
            <div className={`glass-card rounded-2xl p-6 flex flex-col items-center text-center transition-all ${
              isLight 
                ? 'bg-white/70 border border-gray-200' 
                : 'bg-black/60 border border-[#43302f]/80'
            }`}>
              <div className="flex items-center justify-between w-full mb-3">
                <span className={`material-symbols-outlined text-3xl font-light ${
                  isLight ? 'text-gray-600' : 'text-[#fadcd9]'
                }`}>
                  desktop_windows
                </span>
                <StatusBadge status="in-development" size="sm" />
              </div>
              <h4 className={`text-xl font-semibold mb-1 ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>Windows</h4>
              <p className={`text-xs mb-6 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Windows 10 &amp; 11</p>
              <button
                onClick={() => onNavigate('desktop')}
                className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors mt-auto ${
                  isLight 
                    ? 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-300' 
                    : 'bg-[#372624] text-[#fadcd9] hover:bg-[#43302f] border border-[#5b403e]'
                }`}
              >
                Join Waitlist
              </button>
            </div>

            {/* Linux - IN DEVELOPMENT */}
            <div className={`glass-card rounded-2xl p-6 flex flex-col items-center text-center transition-all ${
              isLight 
                ? 'bg-white/70 border border-gray-200' 
                : 'bg-black/60 border border-[#43302f]/80'
            }`}>
              <div className="flex items-center justify-between w-full mb-3">
                <span className={`material-symbols-outlined text-3xl font-light ${
                  isLight ? 'text-gray-600' : 'text-[#fadcd9]'
                }`}>
                  terminal
                </span>
                <StatusBadge status="in-development" size="sm" />
              </div>
              <h4 className={`text-xl font-semibold mb-1 ${isLight ? 'text-black' : 'text-[#fadcd9]'}`}>Linux</h4>
              <p className={`text-xs mb-6 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>Debian, Ubuntu, Arch</p>
              <button
                onClick={() => onNavigate('desktop')}
                className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors mt-auto ${
                  isLight 
                    ? 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-300' 
                    : 'bg-[#372624] text-[#fadcd9] hover:bg-[#43302f] border border-[#5b403e]'
                }`}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
