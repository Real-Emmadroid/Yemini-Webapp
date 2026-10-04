import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from '../components/StatusBadge';
import { SectionJjjGrid } from '../components/home/SectionJjjGrid';
import { SectionBnbnMobile } from '../components/home/SectionBnbnMobile';
import { SectionKmjkSuite } from '../components/home/SectionKmjkSuite';
import { SectionOjkWorkbench } from '../components/home/SectionOjkWorkbench';
import { SectionLokokImpact } from '../components/home/SectionLokokImpact';
import { SectionPartnerships } from '../components/home/SectionPartnerships';
import { SectionGetStarted } from '../components/home/SectionGetStarted';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

const SWITCHING_WORDS = ['Everyone', 'Developers', 'Creators', 'Writers', 'Students'];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
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
                  const el = document.getElementById('ecosystem-intro');
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
                  const el = document.getElementById('ecosystem-intro');
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

      {/* MAIN HOMEPAGE FLOW */}
      <main className="relative flex flex-col z-10">
        
        {/* SECTION 1: jjj.jpg is first (A better developer experience starts with freedom and sovereignty + app grid + social proof) */}
        <SectionJjjGrid onNavigate={onNavigate} />

        {/* SECTION 2: bnbn.jpg is second (Code and compile. Everywhere. + Mobile/AI split + phone slider) */}
        <SectionBnbnMobile onNavigate={onNavigate} />

        {/* SECTION 3: kmjk.jpg is third (Store, convert, transfer. Privately. + Notepad/Converter/Share + workspace card) */}
        <SectionKmjkSuite onNavigate={onNavigate} />

        {/* SECTION 4: ojk.jpg is fourth (Desktop IDE + toolchains + interactive spreadsheet/benchmark inspector) */}
        <SectionOjkWorkbench onNavigate={onNavigate} />

        {/* SECTION 5: lokok.jpg is fifth (Video player with floating press cards + Software for a freer world foundation) */}
        <SectionLokokImpact onNavigate={onNavigate} />

        {/* SECTION 6: MOVING SLIDE OF PARTNERSHIP (Auto-moving partner logos, pauses on hover, no arrows/dots) */}
        <SectionPartnerships />

        {/* SECTION 7: GET STARTED (Sell your app, Blog, Careers, Technologies) */}
        <SectionGetStarted onNavigate={onNavigate} />

      </main>
    </div>
  );
};
