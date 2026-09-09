import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';

export interface OjkSlide {
  id: string;
  title: string;
  tag: string;
  /**
   * Optional custom image URL (PNG or WebP) for this slide, e.g. '/images/workbench-1.webp'.
   * If provided, renders full-bleed inside the slide container.
   * If omitted, renders the high-fidelity built-in mockup.
   */
  bgImage?: string;
}

interface SectionOjkWorkbenchProps {
  onNavigate: (route: PageRoute) => void;
  /**
   * Optional list of custom slide image paths (PNG or WebP) to override defaults.
   * e.g. ['/images/slide1.webp', '/images/slide2.webp', '/images/slide3.webp', '/images/slide4.webp']
   */
  customImages?: string[];
}

export const SectionOjkWorkbench: React.FC<SectionOjkWorkbenchProps> = ({ 
  onNavigate,
  customImages,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Exactly 4 Slides for the left sliding carousel
  // Users can easily set png or webp paths in customImages or directly via bgImage
  const baseSlides: OjkSlide[] = [
    {
      id: 'slide-sheets',
      title: 'Spreadsheet & Benchmark Matrix',
      tag: 'SHEETS',
      bgImage: customImages?.[0], // Replace with your PNG or WebP in the future
    },
    {
      id: 'slide-desktop-ide',
      title: 'Yemini Desktop Code Editor',
      tag: 'DESKTOP IDE',
      bgImage: customImages?.[1], // Replace with your PNG or WebP in the future
    },
    {
      id: 'slide-compilers',
      title: 'On-Device Toolchains & Compilers',
      tag: 'TOOLCHAINS',
      bgImage: customImages?.[2], // Replace with your PNG or WebP in the future
    },
    {
      id: 'slide-ecosystem',
      title: 'Zero-Telemetry Extensions',
      tag: 'ECOSYSTEM',
      bgImage: customImages?.[3], // Replace with your PNG or WebP in the future
    },
  ];

  const baseCount = baseSlides.length; // 4
  // Tripled buffer ensures a 100% seamless, continuous infinite loop without any jump
  const extendedSlides = [...baseSlides, ...baseSlides, ...baseSlides];

  // Start at the middle set (index 4)
  const [currentIndex, setCurrentIndex] = useState<number>(baseCount);
  const [withTransition, setWithTransition] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Smooth transition restoration
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        const timer = setTimeout(() => {
          setWithTransition(true);
        }, 50);
        return () => clearTimeout(timer);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  // Gentle, calm auto-slide (slides 4 images single one after the other)
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4600);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  // Seamless boundary wrap without visible rewind
  const handleTransitionEnd = () => {
    if (currentIndex >= baseCount * 2) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev - baseCount);
    } else if (currentIndex < baseCount) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev + baseCount);
    }
  };

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToDot = (index: number) => {
    setWithTransition(true);
    setCurrentIndex(baseCount + index);
  };

  // Active dot index (0..3)
  const activeDot = ((currentIndex % baseCount) + baseCount) % baseCount;

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="desktop-workbench"
      className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors overflow-hidden ${
        isLight ? 'bg-white text-[#1d1d1f]' : 'bg-black text-[#fadcd9]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout:
            Desktop: ~50/50 split (image on LEFT side, texts and writeups on RIGHT side)
            Mobile: image is ABOVE the writeups (stacks vertically) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE — Single Image Slider (displays 1 image at a time, sliding 4 images) */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex flex-col items-center">
            
            {/* Viewport Frame with rounded corners (~24px radius) */}
            <div 
              className={`relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-xl border select-none transition-shadow ${
                isLight 
                  ? 'bg-[#edf7f1] border-[#c8e2d4]' 
                  : 'bg-[#05140b] border-[#133520]'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slider Track: Slides 1 image at a time with smooth translation */}
              <div 
                className="w-full h-full flex"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: withTransition 
                    ? 'transform 850ms cubic-bezier(0.2, 0.8, 0.2, 1)' 
                    : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, idx) => (
                  <div 
                    key={`${slide.id}-${idx}`}
                    className="w-full h-full flex-shrink-0 relative overflow-hidden flex items-center justify-center p-3 sm:p-5"
                  >
                    {/* If user provides a custom image (PNG or WebP), render full-bleed */}
                    {slide.bgImage ? (
                      <img 
                        src={slide.bgImage} 
                        alt={slide.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      /* High-Fidelity Built-in Mockups matching ojk.JPG and Yemini Suite */
                      <div className="w-full h-full flex flex-col justify-center items-center relative">
                        
                        {/* SLIDE 1: Spreadsheet / Benchmark Inspector (Recreating ojk.JPG exactly) */}
                        {slide.id === 'slide-sheets' && (
                          <div className={`w-full max-w-[460px] rounded-2xl p-4 sm:p-5 shadow-2xl border transition-all ${
                            isLight 
                              ? 'bg-white/95 border-emerald-100 text-gray-800' 
                              : 'bg-[#091b10]/95 border-[#1b4329] text-gray-100'
                          }`}>
                            {/* Window Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-[#193a25]">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                                  +
                                </div>
                                <span className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">
                                  Inventory List ▾
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px]">
                                <div className="flex -space-x-1.5 overflow-hidden">
                                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">M</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">A</span>
                                  <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">F</span>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono">+1</span>
                                <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 font-medium">Share</span>
                                <span className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center font-bold">N</span>
                              </div>
                            </div>

                            {/* Toolbar Ribbon */}
                            <div className="flex items-center gap-2.5 py-2 text-[10px] font-mono text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-[#193a25] overflow-x-auto">
                              <span>↶</span>
                              <span>↷</span>
                              <span className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10 font-bold">100% ▾</span>
                              <span>Q</span>
                              <span>✎</span>
                              <span>$</span>
                              <span>%</span>
                              <span>.00</span>
                              <span>123</span>
                              <span>▤</span>
                              <span>▦</span>
                              <span>◫</span>
                            </div>

                            {/* Data Table Matrix */}
                            <div className="mt-3 rounded-lg border border-gray-100 dark:border-[#193a25] overflow-hidden text-[11px] font-mono">
                              <table className="w-full text-left border-collapse">
                                <thead>
                                  <tr className="bg-emerald-50 dark:bg-emerald-950/40 text-gray-500 dark:text-emerald-300 border-b border-gray-100 dark:border-[#193a25]">
                                    <th className="p-1.5 font-medium">Inventory ID</th>
                                    <th className="p-1.5 font-medium">Quantity</th>
                                    <th className="p-1.5 font-medium">Price</th>
                                    <th className="p-1.5 font-medium">Product Name</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-[#193a25]">
                                  <tr>
                                    <td className="p-1.5 text-gray-500">ID555</td>
                                    <td className="p-1.5"><div className="w-12 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                  </tr>
                                  <tr>
                                    <td className="p-1.5 text-gray-500">ID145</td>
                                    <td className="p-1.5"><div className="w-14 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-10 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                  </tr>
                                  <tr>
                                    <td className="p-1.5 text-gray-500">ID124</td>
                                    <td className="p-1.5"><div className="w-10 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                  </tr>
                                  <tr>
                                    <td className="p-1.5 text-gray-500">ID976</td>
                                    <td className="p-1.5"><div className="w-12 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-10 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5"><div className="w-22 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                  </tr>
                                  {/* Formula Row with Green Active Border matching ojk.JPG */}
                                  <tr className="bg-emerald-500/10">
                                    <td className="p-1.5 text-gray-500">ID225</td>
                                    <td className="p-1.5"><div className="w-10 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" /></td>
                                    <td className="p-1.5" colSpan={2}>
                                      <div className="relative border-2 border-emerald-600 dark:border-emerald-400 bg-white dark:bg-black px-2 py-1 rounded text-[10px] text-emerald-800 dark:text-emerald-300 font-bold whitespace-nowrap overflow-x-auto shadow-sm flex items-center justify-between">
                                        <span>=VLOOKUP(&quot;Price&quot;, A1:D100,2,FALSE)</span>
                                        <span className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-xs" />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* SLIDE 2: Yemini Desktop IDE Code Editor */}
                        {slide.id === 'slide-desktop-ide' && (
                          <div className={`w-full max-w-[460px] rounded-2xl p-4 sm:p-5 shadow-2xl border transition-all ${
                            isLight 
                              ? 'bg-white/95 border-gray-200 text-gray-800' 
                              : 'bg-[#12080a]/95 border-[#381618] text-gray-100'
                          }`}>
                            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                </div>
                                <span className="text-xs font-mono font-semibold ml-2 text-gray-700 dark:text-gray-300">
                                  engine.rs — Yemini Desktop
                                </span>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                                48 MB RAM
                              </span>
                            </div>

                            <div className="mt-3 font-mono text-[11px] leading-relaxed space-y-1">
                              <p><span className="text-purple-600 dark:text-purple-400">pub fn</span> <span className="text-blue-600 dark:text-blue-400">compile_native</span>() -&gt; <span className="text-amber-600 dark:text-amber-400">Result</span>&lt;Binary&gt; &#123;</p>
                              <p className="pl-4 text-gray-500">// Direct ARM64 SIMD compilation</p>
                              <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">let</span> ctx = CompilerContext::<span className="text-blue-600 dark:text-blue-400">zero_overhead</span>();</p>
                              <p className="pl-4">ctx.<span className="text-emerald-600 dark:text-emerald-400">emit_mach_o</span>(OptLevel::Release)?;</p>
                              <p>&#123;</p>
                            </div>

                            <div className="mt-4 p-2.5 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-gray-800 text-[10px] font-mono flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-gray-600 dark:text-gray-300">Finished in 0.38s</span>
                              </div>
                              <span className="text-gray-400">GPU Accelerated</span>
                            </div>
                          </div>
                        )}

                        {/* SLIDE 3: On-Device Toolchains & Compilers */}
                        {slide.id === 'slide-compilers' && (
                          <div className={`w-full max-w-[460px] rounded-2xl p-4 sm:p-5 shadow-2xl border transition-all ${
                            isLight 
                              ? 'bg-white/95 border-gray-200 text-gray-800' 
                              : 'bg-[#100914]/95 border-[#281530] text-gray-100'
                          }`}>
                            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                              <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                Native Toolchain Runtimes
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                                100% Offline
                              </span>
                            </div>

                            <div className="mt-3 space-y-2.5">
                              <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                                <span className="font-mono font-medium">Rustc 1.78</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">Native LLVM</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                                <span className="font-mono font-medium">Clang 18 (C++)</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">AVX2 / NEON</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                                <span className="font-mono font-medium">Python 3.12 Local</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">JIT Enclave</span>
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 font-mono">
                              <span>Zero Server Calls</span>
                              <span>CPU Core Affinity: 8/8</span>
                            </div>
                          </div>
                        )}

                        {/* SLIDE 4: Extension & Privacy Shield */}
                        {slide.id === 'slide-ecosystem' && (
                          <div className={`w-full max-w-[460px] rounded-2xl p-4 sm:p-5 shadow-2xl border transition-all ${
                            isLight 
                              ? 'bg-white/95 border-gray-200 text-gray-800' 
                              : 'bg-[#150a0b]/95 border-[#381618] text-gray-100'
                          }`}>
                            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                              <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                Privacy-First Plugin Shield
                              </span>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded bg-[#580c14]/15 font-bold ${
                                isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                              }`}>
                                Zero Telemetry
                              </span>
                            </div>

                            <div className="mt-3 space-y-2.5">
                              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                                <div className="w-7 h-7 rounded-md bg-blue-500/15 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                                  LSP
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold truncate">Rust Analyzer LSP</p>
                                  <p className="text-[10px] text-gray-400">Sandboxed local socket</p>
                                </div>
                                <span className="text-[10px] font-mono text-emerald-500 font-bold">Verified</span>
                              </div>

                              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                                <div className="w-7 h-7 rounded-md bg-purple-500/15 text-purple-600 flex items-center justify-center font-mono text-xs font-bold">
                                  FMT
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold truncate">Format on Save</p>
                                  <p className="text-[10px] text-gray-400">Pure AST re-write</p>
                                </div>
                                <span className="text-[10px] font-mono text-emerald-500 font-bold">Verified</span>
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 font-mono">
                              <span>Outgoing Network Sockets</span>
                              <span className="text-emerald-500 font-bold">0 (Blocked)</span>
                            </div>
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop Hover Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/25 dark:bg-white/20 backdrop-blur-md text-white items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all shadow-md cursor-pointer z-20"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/25 dark:bg-white/20 backdrop-blur-md text-white items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all shadow-md cursor-pointer z-20"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            {/* Pagination Controls below the Image matching ojk.JPG */}
            <div className="mt-5 flex items-center justify-center gap-3">
              {/* Capsule pill with 4 indicator dots */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/8 dark:bg-white/10 rounded-full">
                {baseSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToDot(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeDot === idx 
                        ? 'w-6 bg-[#580c14] dark:bg-[#ff8585]' 
                        : 'w-2 bg-black/25 dark:bg-white/30 hover:bg-black/40 dark:hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Pause / Play Toggle Button (||) matching ojk.JPG */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-black/8 dark:bg-white/10 flex items-center justify-center text-xs text-gray-700 dark:text-gray-200 hover:bg-black/15 dark:hover:bg-white/20 transition-all cursor-pointer"
                title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
                aria-label={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
              >
                {isPlaying ? (
                  /* Pause Icon (||) */
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4.5" width="3.5" height="15" rx="1" />
                    <rect x="14.5" y="4.5" width="3.5" height="15" rx="1" />
                  </svg>
                ) : (
                  /* Play Icon (▶) */
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT SIDE — Texts and Writeups (3 Feature rows stacked with ~40-48px gaps) */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex flex-col space-y-10 sm:space-y-12">
            
            {/* ITEM 1: Yemini Desktop IDE */}
            <div className="flex flex-col space-y-3 text-left">
              {/* Row 1: small icon badge + bold product name on the same line */}
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
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Yemini Desktop
                </h3>
              </div>

              {/* Row 2: one-line grey description with an inline underlined link */}
              <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                GPU-accelerated text rendering with sub-100MB RAM usage and{' '}
                <a 
                  href="#offline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('desktop');
                  }}
                  className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity ${
                    isLight 
                      ? 'text-[#580c14] decoration-[#580c14]' 
                      : 'text-[#ff8585] decoration-[#ff8585]'
                  }`}
                >
                  pure native performance
                </a>
                .
              </p>

              {/* Row 3: filled wine pill button "Get it for free" + text link "Explore Yemini Desktop ›" */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('download')}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Get it for free
                </button>
                <button
                  onClick={() => onNavigate('desktop')}
                  className={`text-sm font-medium flex items-center gap-1 group transition-colors cursor-pointer ${
                    isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                  }`}
                >
                  <span>Explore Yemini Desktop</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </button>
              </div>
            </div>

            {/* ITEM 2: On-Device Toolchains */}
            <div className="flex flex-col space-y-3 text-left">
              {/* Row 1: small icon badge + bold product name on the same line */}
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
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  On-Device Toolchains
                </h3>
              </div>

              {/* Row 2: one-line grey description with an inline underlined link */}
              <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                Pre-bundled Clang, Rust, Python, Go, and Node runtimes that execute on local CPU cores{' '}
                <a 
                  href="#offline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('mobile');
                  }}
                  className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity ${
                    isLight 
                      ? 'text-[#580c14] decoration-[#580c14]' 
                      : 'text-[#ff8585] decoration-[#ff8585]'
                  }`}
                >
                  without internet access
                </a>
                .
              </p>

              {/* Row 3: filled wine pill button "Get it for free" + text link "Explore Toolchains ›" */}
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
                  <span>Explore Toolchains</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </button>
              </div>
            </div>

            {/* ITEM 3: Extension Ecosystem */}
            <div className="flex flex-col space-y-3 text-left">
              {/* Row 1: small icon badge + bold product name on the same line */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#7a131e] flex items-center justify-center text-white shadow-sm shrink-0">
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Extension Ecosystem
                </h3>
              </div>

              {/* Row 2: one-line grey description with an inline underlined link */}
              <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                Lightweight Language Server Protocol (LSP) plugins, formatters, and themes that run{' '}
                <a 
                  href="#offline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('resources');
                  }}
                  className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity ${
                    isLight 
                      ? 'text-[#580c14] decoration-[#580c14]' 
                      : 'text-[#ff8585] decoration-[#ff8585]'
                  }`}
                >
                  without remote telemetry
                </a>
                .
              </p>

              {/* Row 3: filled wine pill button "Get it for free" + text link "Explore Ecosystem ›" */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('download')}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Get it for free
                </button>
                <button
                  onClick={() => onNavigate('resources')}
                  className={`text-sm font-medium flex items-center gap-1 group transition-colors cursor-pointer ${
                    isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                  }`}
                >
                  <span>Explore Ecosystem</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
