import React, { useState, useRef } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isLight = theme === 'light';

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

      <main className="relative pt-24 sm:pt-28 pb-24 flex flex-col gap-24 sm:gap-32 z-10">
        {/* HERO SECTION - Immersive Video Banner matching Meta Glasses style */}
        <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="relative w-full h-[82vh] sm:h-[88vh] rounded-3xl overflow-hidden shadow-2xl bg-black flex flex-col justify-between p-6 sm:p-12 md:p-16">
            
            {/* Background Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-85 pointer-events-none"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-42848-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

            {/* Top Row: Top-Left Aligned Headline */}
            <div className="relative z-10 flex justify-between items-start">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none max-w-2xl drop-shadow-md">
                Meet the all-new
              </h1>
            </div>

            {/* Bottom Row: Bottom-Left Subtitle & Buttons, Bottom-Right Headline & Play/Pause */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
              
              {/* Bottom-Left: Subtitle & CTA */}
              <div className="flex flex-col items-start gap-4 max-w-md">
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal tracking-tight drop-shadow">
                  Bold developer tools. Signature performance. Powerful AI. Starting at $0.
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onNavigate('mobile')}
                    className="px-6 py-3 rounded-full text-sm sm:text-base font-medium bg-[#0066cc] text-white hover:bg-[#0051a8] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Shop / Download</span>
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('ecosystem');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-full text-sm sm:text-base font-medium bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all active:scale-95 border border-white/20"
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Bottom-Right: Headline & Play/Pause Button */}
              <div className="flex items-end gap-4">
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none drop-shadow-md">
                  Yemini Platform
                </h2>
                
                {/* Video Play/Pause Toggle Button */}
                <button
                  onClick={toggleVideoPlay}
                  className="w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-black/70 transition-all active:scale-95 shadow-lg mb-1"
                  title={isPlaying ? "Pause video" : "Play video"}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
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
