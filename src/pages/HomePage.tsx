import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from '../components/StatusBadge';
import { 
  CheckCircle2, ArrowRight, Download
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

const SWITCHING_WORDS = ['Everyone', 'Developers', 'Creators', 'Writers', 'Students'];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const [networkMode, setNetworkMode] = useState<'online' | 'offline'>('offline');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Switching word state & animation
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % SWITCHING_WORDS.length);
        setIsFading(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className={`relative min-h-screen selection:text-white transition-colors duration-300 overflow-x-hidden ${
      isLight ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#580c14]' : 'bg-black text-[#fadcd9] selection:bg-[#580c14]'
    }`}>
      {/* HERO SECTION - Immersive Edge-to-Edge Fullscreen Video Hero */}
      <section className="relative w-full h-[100svh] min-h-[600px] sm:min-h-[680px] flex flex-col justify-between overflow-hidden">
        {/* Background Fullscreen Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Natural Vignette Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75 pointer-events-none" />

        {/* Top Area: Hero Headline */}
        <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 px-6 sm:px-10 md:px-16 lg:px-20">
          {/* Mobile Display: "Accessibility built for" + switching word below */}
          <h1 className="md:hidden text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg">
            Accessibility<br />
            built for<br />
            <span 
              className={`inline-block transition-all duration-350 ease-out transform ${
                isFading ? 'opacity-0 translate-y-2.5 scale-95' : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
              {SWITCHING_WORDS[wordIndex]}
            </span>
          </h1>

          {/* Desktop Display: Top-Left "Accessibility built for" */}
          <h1 className="hidden md:block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tighter leading-none drop-shadow-xl">
            Accessibility built for
          </h1>
        </div>

        {/* Bottom Area: Subtitle, CTAs & Bottom-Right Switching Text / Play-Pause Button */}
        <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col md:flex-row justify-between md:items-end gap-6 sm:gap-8">
          
          {/* Bottom-Left: Subtitle & Responsive Action Buttons */}
          <div className="flex flex-col items-start gap-4 max-w-lg">
            <p className="text-white text-sm sm:text-base md:text-lg font-medium tracking-tight drop-shadow-md leading-relaxed">
              Software that makes creation<br className="hidden sm:inline" /> accessible to anyone.
            </p>

            {/* Responsive non-breaking action button container */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto flex-nowrap py-1">
              {/* Primary Explore Yemini Button (Deep Wine #580c14) */}
              <button
                onClick={() => {
                  const el = document.getElementById('ecosystem');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('mobile');
                }}
                className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium bg-[#580c14] hover:bg-[#43080e] text-white shadow-xl transition-all active:scale-95 whitespace-nowrap shrink-0 text-center cursor-pointer"
              >
                Explore Yemini
              </button>

              {/* Secondary Learn More Button (Light Rounded Pill) */}
              <button
                onClick={() => {
                  const el = document.getElementById('ecosystem');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium bg-[#ede5e0] hover:bg-white text-black shadow-lg transition-all active:scale-95 whitespace-nowrap shrink-0 text-center cursor-pointer"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Bottom-Right: Desktop "Everyone" (Switching Text) & Video Play/Pause Toggle */}
          <div className="flex items-end justify-between md:justify-end gap-4 sm:gap-6 w-full md:w-auto">
            {/* Desktop Headline at Bottom-Right: Switching Text */}
            <h2 className="hidden md:block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tighter leading-none drop-shadow-xl whitespace-nowrap min-w-[320px] text-right">
              <span 
                className={`inline-block transition-all duration-350 ease-out transform ${
                  isFading ? 'opacity-0 translate-y-3 scale-95' : 'opacity-100 translate-y-0 scale-100'
                }`}
              >
                {SWITCHING_WORDS[wordIndex]}
              </span>
            </h2>

            {/* Video Play / Pause Toggle Button */}
            <button
              onClick={toggleVideoPlay}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all shadow-xl flex-shrink-0 cursor-pointer"
              title={isPlaying ? "Pause video" : "Play video"}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                /* Pause Icon (||) */
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4.5" width="3.5" height="15" rx="1" />
                  <rect x="14.5" y="4.5" width="3.5" height="15" rx="1" />
                </svg>
              ) : (
                /* Play Icon (▶) */
                <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </section>

      <main className="relative pb-24 flex flex-col gap-24 sm:gap-32 z-10">
        {/* ECOSYSTEM SECTION */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full pt-16 sm:pt-24" id="ecosystem">
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
                        : 'bg-[#580c14] text-white hover:bg-[#43080e]'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download APK (v1.2.0)</span>
                  </button>

                  <button
                    onClick={() => onNavigate('mobile')}
                    className={`font-medium flex items-center gap-1 text-sm ${
                      isLight 
                        ? 'text-[#580c14] hover:underline' 
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
                      <span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>import</span> math{'\n'}
                      <span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>def</span> <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>compute_orbit</span>(radius):{'\n'}
                      {'    '}<span className={isLight ? 'text-gray-400 italic' : 'text-[#ab8986] italic'}># Local orbital calculations</span>{'\n'}
                      {'    '}speed = math.sqrt(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>398600</span> / radius){'\n'}
                      {'    '}<span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>print</span>(<span className={isLight ? 'text-orange-600' : 'text-amber-400'}>{`f"Velocity: {speed:.2f} km/s"`}</span>){'\n'}
                      {'    '}<span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>return</span> speed{'\n\n'}
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
                          ? (isLight ? 'bg-white shadow-xs text-black font-semibold' : 'bg-[#580c14] text-white shadow-xs')
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
                      <span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>#include</span> <span className={isLight ? 'text-green-600' : 'text-emerald-400'}>&lt;iostream&gt;</span>{'\n'}
                      <span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>int</span> <span className={isLight ? 'text-purple-600' : 'text-[#92ccff]'}>main</span>() {'{\n'}
                      {'    '}<span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>std</span>::<span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>cout</span> &lt;&lt; <span className={isLight ? 'text-orange-600' : 'text-amber-400'}>&quot;Running on local toolchain.&quot;</span>;{'\n'}
                      {'    '}<span className={isLight ? 'text-[#580c14] font-bold' : 'text-[#ba1724] font-bold'}>return</span> <span className={isLight ? 'text-orange-600' : 'text-amber-400'}>0</span>;{'\n'}
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
                    : 'bg-[#580c14] text-white hover:bg-[#43080e]'
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
                    : 'bg-[#372624] text-[#fadcd9] hover:bg-[#43080e] border border-[#5b403e]'
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
                    : 'bg-[#372624] text-[#fadcd9] hover:bg-[#43080e] border border-[#5b403e]'
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
                    : 'bg-[#372624] text-[#fadcd9] hover:bg-[#43080e] border border-[#5b403e]'
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
