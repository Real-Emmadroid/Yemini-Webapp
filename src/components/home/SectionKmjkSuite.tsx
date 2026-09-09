import React from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface SectionKmjkSuiteProps {
  onNavigate: (route: PageRoute) => void;
  /**
   * Optional custom background image path (PNG or WebP), e.g. '/images/suite-showcase.webp'.
   * If provided, it renders full-bleed inside the left visual container.
   * If omitted, it renders the abstract flowing document/transfer graphic.
   */
  bgImage?: string;
}

export const SectionKmjkSuite: React.FC<SectionKmjkSuiteProps> = ({ onNavigate, bgImage }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section 
      id="companion-suite"
      className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors overflow-hidden ${
        isLight 
          ? 'bg-[#ffffff] text-[#1d1d1f]' 
          : 'bg-[#000000] text-[#fadcd9]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Centered Section Headline above two-column layout:
            ~44px desktop / ~28px mobile, deep wine (#580c14) in light mode, centered:
            "Share, convert, write. Instantly." */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-[28px] sm:text-[36px] md:text-[44px] font-bold tracking-tight leading-[1.15] ${
            isLight ? 'text-[#580c14]' : 'text-[#ff9494]'
          }`}>
            Share, convert, write. Instantly.
          </h2>
        </div>

        {/* Two-column layout: ~50/50 split desktop, stacks to image-then-list on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT — One large image/mockup, rounded corners (~24px radius), full height of column */}
          <div className="w-full flex justify-center">
            <div className={`relative w-full h-[420px] sm:h-[480px] lg:h-[530px] rounded-[24px] overflow-hidden shadow-xl border select-none transition-transform duration-300 hover:scale-[1.008] ${
              isLight 
                ? 'bg-gradient-to-br from-[#FBEEEF] via-[#F7E7E9] to-[#EED3D6] border-[#f2d8da]' 
                : 'bg-gradient-to-br from-[#220a0d] via-[#160608] to-[#0d0203] border-[#381618]'
            }`}>
              
              {/* Optional Custom PNG / WebP Background Image */}
              {bgImage ? (
                <img 
                  src={bgImage} 
                  alt="Share and Convert Suite Showcase" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  loading="lazy"
                />
              ) : (
                /* Abstract visual representing a file being shared/converted */
                <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden">
                  
                  {/* Subtle soft wine radial glow */}
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#580c14]/20 blur-3xl pointer-events-none" />
                  
                  {/* Flowing background document & transfer vector motif */}
                  <svg className="absolute inset-0 w-full h-full opacity-35 dark:opacity-20" viewBox="0 0 500 500" fill="none">
                    <path 
                      d="M-50 400 C 150 320, 250 460, 550 260" 
                      stroke="#580c14" 
                      strokeWidth="2" 
                      strokeDasharray="6 6" 
                    />
                    <path 
                      d="M-30 250 C 180 180, 320 340, 530 150" 
                      stroke="#ba1724" 
                      strokeWidth="1.5" 
                      strokeOpacity="0.6" 
                    />
                  </svg>

                  {/* Visual Floating Graphic in bottom-right corner: Source -> Arrow -> Converted Card */}
                  <div className="absolute right-4 bottom-6 sm:right-8 sm:bottom-10 flex flex-col items-end gap-3 z-10">
                    
                    {/* Floating Target File Card */}
                    <div className={`p-4 rounded-2xl shadow-xl border backdrop-blur-md max-w-[240px] sm:max-w-[270px] transform translate-y-1 transition-transform ${
                      isLight ? 'bg-white/90 border-gray-200/80 text-gray-800' : 'bg-[#18080a]/90 border-[#381618] text-gray-200'
                    }`}>
                      <div className={`flex items-center gap-2.5 pb-2 border-b ${isLight ? 'border-gray-100' : 'border-[#2a0e12]'}`}>
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-tight truncate">bundle_release.tar.gz</p>
                          <p className="text-[10px] text-gray-400 font-mono">14.2 MB • Ready</p>
                        </div>
                      </div>

                      {/* Transfer / Conversion Progress Bar */}
                      <div className="mt-2.5 space-y-1">
                        <div className="flex justify-between text-[10px] font-mono text-gray-500">
                          <span>Converted on-device</span>
                          <span className="text-emerald-500 font-bold">100%</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-gray-100' : 'bg-gray-800'}`}>
                          <div className="bg-emerald-500 h-full w-full rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle P2P Radar / Direct Sync Indicator */}
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono ${
                      isLight ? 'bg-black/5 text-[#580c14]' : 'bg-white/5 text-[#ff8585]'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Direct P2P • 120 MB/s</span>
                    </div>

                  </div>
                </div>
              )}

              {/* OVERLAY CARD near top-left of this image (drop shadow, ~16px padding):
                  Contains: bold short label ("Shared today"), smaller grey meta line ("3 files"),
                  and two tiny file-type icon thumbnails side by side beneath that text */}
              <div className={`absolute top-5 left-5 sm:top-7 sm:left-7 z-20 w-[230px] sm:w-[260px] p-4 sm:p-4.5 rounded-[18px] shadow-2xl border transition-all ${
                isLight 
                  ? 'bg-white border-gray-100/90 text-gray-900 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]' 
                  : 'bg-[#18080a] border-[#381618] text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]'
              }`}>
                {/* Bold short label: "Shared today" */}
                <h3 className={`text-base sm:text-lg font-bold tracking-tight leading-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Shared today
                </h3>

                {/* Smaller grey meta line: "3 files" */}
                <p className={`text-[11px] sm:text-xs font-mono mt-0.5 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                  3 files
                </p>

                {/* Two tiny file-type icon thumbnails side by side beneath that text */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  
                  {/* Thumbnail 1: Document/Archive file */}
                  <div className={`rounded-xl p-2.5 flex flex-col justify-between border ${
                    isLight 
                      ? 'bg-gray-50 border-gray-200/80 text-gray-800' 
                      : 'bg-[#120506] border-[#2f1013] text-gray-200'
                  }`}>
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[9px] font-mono ${
                      isLight ? 'bg-[#580c14]/10 text-[#580c14]' : 'bg-[#580c14]/30 text-[#ff8585]'
                    }`}>
                      PDF
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className={`w-full h-1 rounded-full ${isLight ? 'bg-gray-300' : 'bg-gray-700'}`} />
                      <div className={`w-3/4 h-1 rounded-full ${isLight ? 'bg-gray-200' : 'bg-gray-800'}`} />
                    </div>
                    <span className="text-[9px] font-mono text-gray-400 mt-2">
                      2.4 MB
                    </span>
                  </div>

                  {/* Thumbnail 2: Audio/Video memo file with play badge matching kmjk.JPG */}
                  <div className={`rounded-xl p-2.5 flex flex-col justify-between border relative overflow-hidden ${
                    isLight 
                      ? 'bg-gradient-to-br from-[#580c14]/90 to-[#2c060a] text-white border-transparent' 
                      : 'bg-gradient-to-br from-[#45090f] to-[#160305] text-white border-[#381618]'
                  }`}>
                    {/* Play Badge */}
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[8px] font-mono w-max">
                      <span>0:26</span>
                      <span>▶</span>
                    </div>

                    {/* Audio wave lines */}
                    <div className="flex items-end gap-0.5 h-6 my-1">
                      <div className="w-1 h-3 bg-white/70 rounded-full" />
                      <div className="w-1 h-5 bg-white rounded-full" />
                      <div className="w-1 h-2 bg-white/50 rounded-full" />
                      <div className="w-1 h-6 bg-white rounded-full" />
                      <div className="w-1 h-4 bg-white/80 rounded-full" />
                    </div>

                    <span className="text-[9px] font-mono text-white/80">
                      Voice.m4a
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — A vertical list of exactly 3 feature rows:
              Row 1: icon badge + bold name on one line
              Row 2: one-line grey description with an inline link
              Row 3: "Get it for free" pill + "Explore [Product] ›" link
              Stacked with ~40-48px gaps between rows. Fully static (no carousel).
              Items in order: Yemini Notepad, Yemini Converter, Yemini Share. */}
          <div className="w-full flex flex-col space-y-10 sm:space-y-12">
            
            {/* ITEM 1: Yemini Notepad */}
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

              {/* Row 2: one-line grey description with an inline underlined wine-colored link */}
              <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                Jot ideas and technical specs with{' '}
                <a 
                  href="#offline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('notepadapp-privacy');
                  }}
                  className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity ${
                    isLight 
                      ? 'text-[#580c14] decoration-[#580c14]' 
                      : 'text-[#ff8585] decoration-[#ff8585]'
                  }`}
                >
                  encrypted on-device storage
                </a>
                .
              </p>

              {/* Row 3: filled wine pill button "Get it for free" + text link "Explore Yemini Notepad ›" */}
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

            {/* ITEM 2: Yemini Converter */}
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
                    <path d="m16 3 4 4-4 4" />
                    <path d="M20 7H4" />
                    <path d="m8 21-4-4 4-4" />
                    <path d="M4 17h16" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Yemini Converter
                </h3>
              </div>

              {/* Row 2: one-line grey description with an inline underlined wine-colored link */}
              <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                Convert media, documents, and archives directly{' '}
                <a 
                  href="#offline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('converterapp-privacy');
                  }}
                  className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity ${
                    isLight 
                      ? 'text-[#580c14] decoration-[#580c14]' 
                      : 'text-[#ff8585] decoration-[#ff8585]'
                  }`}
                >
                  on-device
                </a>
                , safe from prying eyes.
              </p>

              {/* Row 3: filled wine pill button "Get it for free" + text link "Explore Yemini Converter ›" */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('download')}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Get it for free
                </button>
                <button
                  onClick={() => onNavigate('converterapp-privacy')}
                  className={`text-sm font-medium flex items-center gap-1 group transition-colors cursor-pointer ${
                    isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                  }`}
                >
                  <span>Explore Yemini Converter</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </button>
              </div>
            </div>

            {/* ITEM 3: Yemini Share */}
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
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Yemini Share
                </h3>
              </div>

              {/* Row 2: one-line grey description with an inline underlined wine-colored link */}
              <p className={`text-sm sm:text-[15px] leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                Transfer gigabytes across devices over{' '}
                <a 
                  href="#offline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('shareapp-privacy');
                  }}
                  className={`underline underline-offset-2 font-medium hover:opacity-80 transition-opacity ${
                    isLight 
                      ? 'text-[#580c14] decoration-[#580c14]' 
                      : 'text-[#ff8585] decoration-[#ff8585]'
                  }`}
                >
                  direct P2P Wi-Fi
                </a>{' '}
                without internet.
              </p>

              {/* Row 3: filled wine pill button "Get it for free" + text link "Explore Yemini Share ›" */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('download')}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Get it for free
                </button>
                <button
                  onClick={() => onNavigate('shareapp-privacy')}
                  className={`text-sm font-medium flex items-center gap-1 group transition-colors cursor-pointer ${
                    isLight ? 'text-[#580c14] hover:text-[#43080e]' : 'text-[#ff8585] hover:text-white'
                  }`}
                >
                  <span>Explore Yemini Share</span>
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
