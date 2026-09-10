import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface SectionBnbnMobileProps {
  onNavigate: (route: PageRoute) => void;
}

export interface CarouselPanel {
  id: string;
  tag: string; // Text 1 (e.g. "MOBILE")
  title: string; // Text 2 (e.g. "Code from anywhere, no laptop needed.")
  route?: PageRoute;
  targetId: string;
  /**
   * Optional background image path (PNG or WebP), e.g. '/images/mobile-panel.webp'.
   * If provided, it renders full-bleed as the container's background image.
   * If omitted or undefined, it automatically displays the built-in high-fidelity mockup.
   */
  bgImage?: string;
}

export const SectionBnbnMobile: React.FC<SectionBnbnMobileProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // 4 Core Carousel Items
  const basePanels: CarouselPanel[] = [
    {
      id: 'panel-mobile',
      tag: 'MOBILE',
      title: 'Code from anywhere, no laptop needed.',
      targetId: 'downloads',
      route: 'download',
    },
    {
      id: 'panel-notepad',
      tag: 'NOTEPAD',
      title: 'Capture ideas the moment they strike.',
      targetId: 'companion-suite',
      route: 'notepadapp-privacy',
    },
    {
      id: 'panel-converter',
      tag: 'CONVERTER',
      title: 'Transform media and files on-device.',
      targetId: 'companion-suite',
      route: 'converterapp-privacy',
    },
    {
      id: 'panel-share',
      tag: 'SHARE',
      title: 'Transfer gigabytes without the internet.',
      targetId: 'companion-suite',
      route: 'shareapp-privacy',
    },
  ];

  // Render 4 panels + duplicates so desktop 2-card view always has smooth cards visible
  const extendedPanels = [...basePanels, ...basePanels];

  // Current index is 0..3
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Gentle, calm auto-scroll from right to left (moving one after the other)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % basePanels.length);
    }, 4600); // Calm 4.6s reading interval

    return () => clearInterval(interval);
  }, [isPaused, basePanels.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + basePanels.length) % basePanels.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % basePanels.length);
  };

  const goToDot = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (targetId: string, route?: PageRoute) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (route) {
      onNavigate(route);
    }
  };

  return (
    <section 
      id="mobile-intelligence"
      className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors overflow-hidden ${
        isLight 
          ? 'bg-[#FAFAFA] text-[#1d1d1f]' 
          : 'bg-[#080203] text-[#fadcd9]'
      }`}
    >
      {/* Very subtle soft wine-tinted glow in one corner (top-left) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#580c14]/5 dark:bg-[#580c14]/15 blur-[120px]"
      />

      <div className="max-w-6xl mx-auto">
        {/* Two-column layout:
            Desktop: left column ~40% width, right column ~60%
            Below ~900px width: stack right column below left column, full width each */}
        <div className="flex flex-col min-[900px]:flex-row gap-12 min-[900px]:gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN (left-aligned, not centered, ~40% desktop width) */}
          <div className="w-full min-[900px]:w-[40%] flex flex-col text-left shrink-0">
            
            {/* Headline: ~44px desktop / ~28px mobile, deep wine (#580c14) in light mode, left-aligned */}
            <h2 className={`text-[28px] sm:text-[36px] min-[900px]:text-[44px] font-bold tracking-tight leading-[1.15] ${
              isLight ? 'text-[#580c14]' : 'text-white'
            }`}>
              Build and write. Anywhere.
            </h2>

            {/* Two feature blocks stacked vertically with ~48px gap (mt-10 sm:mt-12 space-y-12) */}
            <div className="mt-10 sm:mt-12 space-y-12">
              
              {/* BLOCK 1 — Yemini Mobile */}
              <div className="flex flex-col space-y-3">
                {/* Row 1: small icon badge + bold product name "Yemini Mobile" on the same line */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#580c14] flex items-center justify-center text-white shadow-sm shrink-0">
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="3" />
                      <path d="M12 18h.01" />
                      <path d="m9 9 2 2-2 2" />
                      <path d="m13 13 2-2-2-2" />
                    </svg>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Yemini Mobile
                  </h3>
                </div>

                {/* Row 2: one line of muted-grey description with one inline underlined wine-colored link on a keyword */}
                <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                  Code on the go with{' '}
                  <button 
                    onClick={() => onNavigate('mobile')}
                    className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity cursor-pointer ${
                      isLight 
                        ? 'text-[#580c14] decoration-[#580c14]' 
                        : 'text-[#ff8585] decoration-[#ff8585]'
                    }`}
                  >
                    on-device compilers
                  </button>{' '}
                  for Python, Rust, C/C++, and Node.js.
                </p>

                {/* Row 3: filled wine pill button "Get it for free" + text link with a trailing chevron "Explore Yemini Mobile ›" */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => onNavigate('download')}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    Get it for free
                  </button>
                  <button
                    onClick={() => onNavigate('mobile')}
                    className={`text-sm font-medium flex items-center gap-1 group transition-colors cursor-pointer ${
                      isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                    }`}
                  >
                    <span>Explore Yemini Mobile</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                  </button>
                </div>
              </div>

              {/* BLOCK 2 — Yemini Notepad */}
              <div className="flex flex-col space-y-3">
                {/* Row 1: small icon badge + bold product name "Yemini Notepad" on the same line */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#6e131c] flex items-center justify-center text-white shadow-sm shrink-0">
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Yemini Notepad
                  </h3>
                </div>

                {/* Row 2: one line of muted-grey description with one inline underlined wine-colored link on a keyword */}
                <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                  Jot ideas and{' '}
                  <button 
                    onClick={() => {
                      const el = document.getElementById('companion-suite');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else onNavigate('notepadapp-privacy');
                    }}
                    className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity cursor-pointer ${
                      isLight 
                        ? 'text-[#580c14] decoration-[#580c14]' 
                        : 'text-[#ff8585] decoration-[#ff8585]'
                    }`}
                  >
                    write freely
                  </button>
                  , the moment they happen.
                </p>

                {/* Row 3: filled wine pill button "Get it for free" + text link with a trailing chevron "Explore Yemini Notepad ›" */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => onNavigate('download')}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    Get it for free
                  </button>
                  <button
                    onClick={() => onNavigate('notepadapp-privacy')}
                    className={`text-sm font-medium flex items-center gap-1 group transition-colors cursor-pointer ${
                      isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                    }`}
                  >
                    <span>Explore Yemini Notepad</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN (~60% desktop width):
              Two visual panels side by side in the viewport, sliding smoothly right-to-left
              Directly below: carousel control row (left arrow, 4 indicators, right arrow) */}
          <div 
            className="w-full min-[900px]:w-[60%] flex flex-col items-center overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Sliding Carousel Viewport */}
            <div className="w-full overflow-hidden py-1">
              <div 
                className="bnbn-carousel-track"
                style={{
                  '--current-idx': currentIndex,
                } as React.CSSProperties}
              >
                {extendedPanels.map((panel, idx) => {
                  const originalIndex = idx % basePanels.length;
                  return (
                    <div
                      key={`${panel.id}-ext-${idx}`}
                      onClick={() => handleCardClick(panel.targetId, panel.route)}
                      className={`relative rounded-[20px] p-6 sm:p-7 min-h-[420px] sm:min-h-[450px] overflow-hidden flex flex-col justify-between cursor-pointer shrink-0 w-full sm:w-[calc(50%-10px)] select-none transition-colors border ${
                        isLight 
                          ? 'bg-[#FBEEEF] border-[#f2d8da]' 
                          : 'bg-[#180809] border-[#381618]'
                      }`}
                    >
                      {/* CUSTOM BACKGROUND IMAGE (If provided, fills the container background) */}
                      {panel.bgImage && (
                        <>
                          <img
                            src={panel.bgImage}
                            alt={panel.title}
                            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                          />
                          {/* Gradient tint over custom image to keep text 1 and text 2 perfectly legible */}
                          <div className={`absolute inset-0 z-[1] pointer-events-none ${
                            isLight 
                              ? 'bg-gradient-to-b from-[#FBEEEF]/90 via-[#FBEEEF]/55 to-transparent' 
                              : 'bg-gradient-to-b from-black/90 via-black/55 to-transparent'
                          }`} />
                        </>
                      )}

                      {/* Text 1 and Text 2 (Always crisp on top) */}
                      <div className="relative z-10 text-left">
                        {/* Text 1: Tag/Category */}
                        <span className={`text-[11px] font-bold tracking-widest uppercase ${
                          isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                        }`}>
                          {panel.tag}
                        </span>
                        {/* Text 2: Bold Headline */}
                        <h4 className={`text-xl sm:text-2xl font-bold tracking-tight mt-1.5 leading-snug max-w-[260px] ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          {panel.title}
                        </h4>
                      </div>

                      {/* BUILT-IN DEFAULT MOCKUPS (Used when no custom bgImage is passed) */}
                      {!panel.bgImage && (
                        <div className="relative mt-6 self-end w-full max-w-[260px] translate-x-3 translate-y-3 pointer-events-none select-none z-10">
                          {originalIndex === 0 && (
                            /* PANEL 1: Mobile Code Phone Mockup */
                            <div className="w-full rounded-2xl bg-black p-2.5 shadow-xl border border-gray-800 ring-1 ring-black/40">
                              <div className="flex items-center justify-between px-2 pb-2 text-[9px] text-gray-400 font-mono">
                                <span>9:41</span>
                                <div className="w-12 h-2.5 bg-gray-900 rounded-full mx-auto" />
                                <span>5G</span>
                              </div>
                              <div className="rounded-xl bg-[#0e0708] border border-[#2a0e12] p-3 text-[10px] font-mono leading-relaxed space-y-1 text-gray-300">
                                <div className="flex items-center justify-between pb-1.5 border-b border-[#2a0e12] text-[9px] text-[#ff8585]">
                                  <span>main.rs</span>
                                  <span className="text-emerald-400">ARM64</span>
                                </div>
                                <p><span className="text-[#ba1724]">fn</span> <span className="text-amber-300">main</span>() &#123;</p>
                                <p className="pl-2.5 text-gray-400">// Native local run</p>
                                <p className="pl-2.5"><span className="text-[#ba1724]">let</span> mut sys = Toolchain::new();</p>
                                <p className="pl-2.5 text-emerald-400">sys.compile_offline();</p>
                                <p>&#125;</p>
                                <div className="mt-2 pt-2 border-t border-[#2a0e12] text-[9px] text-emerald-400 flex items-center gap-1">
                                  <span>$</span>
                                  <span className="text-gray-300">cargo run --release</span>
                                  <span className="w-1.5 h-3 bg-emerald-400 animate-pulse ml-auto" />
                                </div>
                              </div>
                            </div>
                          )}

                          {originalIndex === 1 && (
                            /* PANEL 2: Notepad UI Card Mockup */
                            <div className={`w-full rounded-2xl p-4 shadow-xl border ${
                              isLight 
                                ? 'bg-white border-gray-200' 
                                : 'bg-[#120506] border-[#381418]'
                            }`}>
                              <div className={`flex items-center justify-between pb-2 border-b ${
                                isLight ? 'border-gray-100' : 'border-[#2a0e12]'
                              }`}>
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#580c14]" />
                                  <span className={`text-xs font-bold ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                    Architecture Specs
                                  </span>
                                </div>
                                <span className="text-[9px] font-mono text-gray-400">Saved</span>
                              </div>
                              <div className={`mt-3 space-y-2.5 text-xs ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                                <div className="flex items-center gap-2">
                                  <span className="w-3.5 h-3.5 rounded border border-[#580c14] bg-[#580c14]/10 flex items-center justify-center text-[9px] text-[#580c14]">✓</span>
                                  <span className="text-[11px] leading-tight font-medium">Offline syntax tree engine</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-3.5 h-3.5 rounded border border-[#580c14] bg-[#580c14]/10 flex items-center justify-center text-[9px] text-[#580c14]">✓</span>
                                  <span className="text-[11px] leading-tight font-medium">Local AES-256 vault storage</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className={`w-3.5 h-3.5 rounded border ${isLight ? 'border-gray-300' : 'border-gray-600'}`} />
                                  <span className="text-[11px] leading-tight text-gray-400">Zero telemetry verification</span>
                                </div>
                                <div className="pt-2 space-y-1.5 opacity-60">
                                  <div className={`w-full h-1.5 rounded-full ${isLight ? 'bg-gray-200' : 'bg-gray-700'}`} />
                                  <div className={`w-4/5 h-1.5 rounded-full ${isLight ? 'bg-gray-200' : 'bg-gray-700'}`} />
                                  <div className={`w-2/3 h-1.5 rounded-full ${isLight ? 'bg-gray-200' : 'bg-gray-700'}`} />
                                </div>
                              </div>
                            </div>
                          )}

                          {originalIndex === 2 && (
                            /* PANEL 3: Converter Tool Mockup */
                            <div className={`w-full rounded-2xl p-4 shadow-xl border ${
                              isLight 
                                ? 'bg-white border-gray-200' 
                                : 'bg-[#120506] border-[#381418]'
                            }`}>
                              <div className={`flex items-center justify-between pb-2 border-b ${
                                isLight ? 'border-gray-100' : 'border-[#2a0e12]'
                              }`}>
                                <span className={`text-xs font-bold ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                  On-Device Pipeline
                                </span>
                                <span className="text-[9px] font-mono text-emerald-500">100% Local</span>
                              </div>
                              <div className="mt-3 space-y-2">
                                <div className={`p-2 rounded-lg border flex items-center justify-between text-[11px] ${
                                  isLight 
                                    ? 'bg-gray-50 border-gray-100' 
                                    : 'bg-black/40 border-[#2a0e12]'
                                }`}>
                                  <span className="font-mono text-gray-500">source.pdf</span>
                                  <span className={`font-bold ${isLight ? 'text-[#580c14]' : 'text-[#ff8585]'}`}>
                                    → markdown
                                  </span>
                                </div>
                                <div className={`p-2 rounded-lg border flex items-center justify-between text-[11px] ${
                                  isLight 
                                    ? 'bg-gray-50 border-gray-100' 
                                    : 'bg-black/40 border-[#2a0e12]'
                                }`}>
                                  <span className="font-mono text-gray-500">audio.wav</span>
                                  <span className={`font-bold ${isLight ? 'text-[#580c14]' : 'text-[#ff8585]'}`}>
                                    → text (whisper)
                                  </span>
                                </div>
                                <div className={`w-full h-1.5 rounded-full overflow-hidden mt-2 ${
                                  isLight ? 'bg-gray-200' : 'bg-gray-800'
                                }`}>
                                  <div className="bg-[#580c14] h-full w-4/5 rounded-full" />
                                </div>
                              </div>
                            </div>
                          )}

                          {originalIndex === 3 && (
                            /* PANEL 4: P2P Share Radar Mockup */
                            <div className={`w-full rounded-2xl p-4 shadow-xl border ${
                              isLight 
                                ? 'bg-white border-gray-200' 
                                : 'bg-[#120506] border-[#381418]'
                            }`}>
                              <div className={`flex items-center justify-between pb-2 border-b ${
                                isLight ? 'border-gray-100' : 'border-[#2a0e12]'
                              }`}>
                                <span className={`text-xs font-bold ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                  Peer Discovery
                                </span>
                                <span className="text-[9px] font-mono text-emerald-500">Direct Wi-Fi</span>
                              </div>
                              <div className="mt-3 flex items-center justify-around py-3">
                                <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                                  isLight 
                                    ? 'bg-[#580c14]/15 border-[#580c14] text-[#580c14]' 
                                    : 'bg-[#580c14]/25 border-[#ff8585] text-[#ff8585]'
                                }`}>
                                  YOU
                                </div>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-[#580c14] to-emerald-500 animate-pulse" />
                                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-500">
                                  PEER
                                </div>
                              </div>
                              <p className="text-[10px] font-mono text-center text-gray-400">
                                Transferring: 4.8 GB (120 MB/s)
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Control Row directly below the panels:
                Left-chevron button, EXACTLY 4 dot indicators, right-chevron button */}
            <div className="mt-6 flex items-center justify-center gap-3">
              {/* Circular Left-Chevron Button */}
              <button
                onClick={prevSlide}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95 cursor-pointer border shadow-xs ${
                  isLight 
                    ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300' 
                    : 'bg-[#150708] border-[#381618] text-[#fadcd9] hover:bg-[#250d0f]'
                }`}
                title="Previous panel"
                aria-label="Previous panel"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* EXACTLY 4 dot indicators (reflecting the 4 unique panels) */}
              <div className="flex items-center gap-2 px-1">
                {basePanels.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => goToDot(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx 
                        ? (isLight ? 'w-6 bg-[#580c14]' : 'w-6 bg-[#ff8585]')
                        : (isLight ? 'w-2.5 bg-gray-300 hover:bg-gray-400' : 'w-2.5 bg-[#431418] hover:bg-[#682026]')
                    }`}
                    aria-label={`Select ${p.tag} panel`}
                  />
                ))}
              </div>

              {/* Circular Right-Chevron Button */}
              <button
                onClick={nextSlide}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95 cursor-pointer border shadow-xs ${
                  isLight 
                    ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300' 
                    : 'bg-[#150708] border-[#381618] text-[#fadcd9] hover:bg-[#250d0f]'
                }`}
                title="Next panel"
                aria-label="Next panel"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
