import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface SectionLokokImpactProps {
  onNavigate: (route: PageRoute) => void;
}

export const SectionLokokImpact: React.FC<SectionLokokImpactProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section 
      id="mission-impact"
      className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        isLight 
          ? 'bg-gradient-to-b from-white via-[#fcf8f8] to-white text-[#1d1d1f]' 
          : 'bg-gradient-to-b from-black via-[#0d0405] to-black text-[#fadcd9]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Media Showcase matching lokok.JPG */}
          <div className="lg:col-span-7 relative flex justify-center py-6 sm:py-10">
            
            {/* Top Right Floating Quote Card matching lokok.JPG */}
            <div className={`absolute -top-3 right-0 sm:right-6 z-20 max-w-[240px] sm:max-w-[280px] rounded-2xl p-4 shadow-xl border text-left transition-transform hover:-translate-y-1 ${
              isLight 
                ? 'bg-white border-gray-200/90 text-gray-900' 
                : 'bg-[#150708] border-[#431418] text-white'
            }`}>
              <h4 className="text-xs sm:text-sm font-bold tracking-tight leading-snug">
                STF’s Mission: Democratizing Software Creation for Everyone
              </h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-[#ab8986] mt-1.5 font-mono">
                May 12, 2026
              </p>
            </div>

            {/* Mid Left Floating Quote Card (Editorial Serif) matching lokok.JPG */}
            <div className={`absolute top-28 -left-2 sm:-left-6 z-20 max-w-[220px] sm:max-w-[260px] rounded-2xl p-4 shadow-xl border text-left transition-transform hover:-translate-y-1 ${
              isLight 
                ? 'bg-white border-gray-200/90 text-gray-900' 
                : 'bg-[#150708] border-[#431418] text-white'
            }`}>
              <h4 className="text-xs sm:text-sm font-serif italic font-bold tracking-tight leading-snug">
                Inside the Movement for Offline-First Developer Sovereignty
              </h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-[#ab8986] mt-1.5 font-mono">
                December 9, 2026
              </p>
            </div>

            {/* Main Video Card Mockup matching lokok.JPG */}
            <div className={`relative z-10 w-full max-w-[440px] sm:max-w-[480px] rounded-3xl p-3 sm:p-4 shadow-2xl border overflow-hidden ${
              isLight ? 'bg-white border-gray-200' : 'bg-[#120506] border-[#381418]'
            }`}>
              
              {/* Top Video Header Tag */}
              <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-gray-500 dark:text-[#ab8986]">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#ba1724]">STF</span>
                  <span>Keynote • Software for Anyone</span>
                </div>
                <span>4K HD</span>
              </div>

              {/* Video Player Display Screen */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a070b] via-[#450d14] to-black flex items-center justify-center group shadow-inner">
                {/* Visual Stage Background */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ba1724] via-transparent to-black" />
                
                {/* Presenter Silhouette & Screen Graphics */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#580c14]/50 border border-white/20 mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-white/90 text-xs font-mono tracking-wider">SPHERE TECH FOUNDATION</p>
                  <p className="text-[#ffb3ae] text-[11px]">Global Developer Keynote 2026</p>
                </div>

                {/* Big Centered Play Button matching lokok.JPG */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#580c14] flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label={isPlaying ? "Pause keynote" : "Play keynote"}
                >
                  {isPlaying ? (
                    <span className="text-xl font-bold font-mono">❚❚</span>
                  ) : (
                    <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Bottom Video Progress Scrub Bar & Controls matching lokok.JPG */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white text-[10px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ba1724]" />
                    <span>00:00 / 12:00</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-80">
                    <span>🔊</span>
                    <span>CC</span>
                    <span>⚙</span>
                    <span>⛶</span>
                  </div>
                </div>
              </div>

              {/* Video Title & Metrics matching lokok.JPG */}
              <div className="p-3 text-left">
                <h5 className={`font-bold text-xs sm:text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Think mobile coding is impossible? Think again.
                </h5>
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-[#ab8986] mt-0.5">
                  1,910,976 views | STF Global Keynote • 2026
                </p>
                <div className="mt-2 pt-2 border-t border-gray-100 dark:border-white/10 flex items-center gap-4 text-[10px] text-gray-500 dark:text-[#ab8986]">
                  <button className="hover:text-[#580c14] dark:hover:text-white transition-colors">↗ Share</button>
                  <button className="hover:text-[#580c14] dark:hover:text-white transition-colors">+ Add</button>
                  <button className="hover:text-[#580c14] dark:hover:text-white transition-colors">♡ Like (57K)</button>
                </div>
              </div>

            </div>

            {/* Bottom Right Floating Card matching lokok.JPG */}
            <div className={`absolute -bottom-6 right-0 sm:right-4 z-20 max-w-[240px] sm:max-w-[280px] rounded-2xl p-4 shadow-xl border text-left transition-transform hover:-translate-y-1 ${
              isLight 
                ? 'bg-white border-gray-200/90 text-gray-900' 
                : 'bg-[#150708] border-[#431418] text-white'
            }`}>
              <h4 className="text-xs sm:text-sm font-bold tracking-tight leading-snug">
                Yemini leads the charge for accessible developer tools and on-device power
              </h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-[#ab8986] mt-1.5 font-mono">
                July 27, 2026
              </p>
            </div>

          </div>

          {/* Right Column: Mission & Foundation Copy matching lokok.JPG */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
                isLight ? 'text-[#1c1313]' : 'text-white'
              }`}>
                Software for a freer world
              </h2>
            </div>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-gray-600' : 'text-[#ab8986]'
            }`}>
              <p>
                At Yemini and the STF Ecosystem, we believe that software creation begins with accessibility, and this is at the heart of everything we do. Digital sovereignty isn&apos;t just something we talk about; it&apos;s our core engineering belief and the reason Yemini was created in the first place.
              </p>
              <p>
                We also believe in people before profits, and our backing foundation is the nonprofit{' '}
                <button
                  onClick={() => onNavigate('about')}
                  className={`font-semibold underline decoration-[#580c14] underline-offset-2 transition-colors cursor-pointer ${
                    isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                  }`}
                >
                  Sphere Tech Foundation
                </button>
                , whose mission is to fight for open, decentralized developer tools that promote freedom of creation and digital independence.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className={`px-7 py-3 rounded-full text-sm font-semibold transition-all active:scale-95 cursor-pointer border ${
                  isLight
                    ? 'border-[#580c14] text-[#580c14] hover:bg-[#580c14] hover:text-white'
                    : 'border-[#ba1724] text-[#fadcd9] hover:bg-[#580c14] hover:text-white'
                }`}
              >
                Learn about our impact
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
