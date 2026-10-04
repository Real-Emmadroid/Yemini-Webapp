import React from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import notepadIcon from '../../assets/apps/yemini-notepad.png';
import shareIcon from '../../assets/apps/yemini-chevron.png';
import converterIcon from '../../assets/apps/yemini-converter.png';
import mobileIcon from '../../assets/apps/yemini-mobile.png';
import dbmsIcon from '../../assets/apps/yemini-dbms.png';
import apiTesterIcon from '../../assets/apps/yemini-api-tester.png';
import imageEditorIcon from '../../assets/apps/yemini-image-editor.png';

interface SectionJjjGridProps {
  onNavigate: (route: PageRoute) => void;
}

export interface MarqueeProduct {
  id: string;
  name: string;
  targetId: string;
  route?: PageRoute;
  /**
   * Optional path to a PNG or WebP logo file (e.g. '/logos/mobile.png', '/logos/notepad.webp').
   * If provided, the image is rendered automatically.
   * If omitted or undefined, it automatically falls back to the clean SVG vector icon below.
   */
  logoImg?: string;
  /** True when the logo artwork already fills its own rounded square (no white backing tile). */
  logoFill?: boolean;
  svgIcon: React.ReactNode;
}

export const SectionJjjGrid: React.FC<SectionJjjGridProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // ROW 1: Flagship Yemini Products (Matching swsd.JPG)
  // Ready for PNG/WebP replacement at any time via `logoImg: '/path/to/logo.png'`
  const row1Products: MarqueeProduct[] = [
    {
      id: 'yemini-notepad',
      name: 'Yemini Notepad',
      targetId: 'companion-suite',
      route: 'notepadapp-privacy',
      logoImg: notepadIcon,
      logoFill: true,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      id: 'yemini-share',
      name: 'Yemini Share',
      targetId: 'companion-suite',
      route: 'shareapp-privacy',
      logoImg: shareIcon,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
    {
      id: 'yemini-converter',
      name: 'Yemini Converter',
      targetId: 'companion-suite',
      route: 'converterapp-privacy',
      logoImg: converterIcon,
      logoFill: true,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m16 3 4 4-4 4" />
          <path d="M20 7H4" />
          <path d="m8 21-4-4 4-4" />
          <path d="M4 17h16" />
        </svg>
      ),
    },
    {
      id: 'yemini-desktop',
      name: 'Yemini Desktop',
      targetId: 'desktop-workbench',
      route: 'desktop',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polyline points="7 8 10 10 7 12" />
        </svg>
      ),
    },
    {
      id: 'yemini-intelligence',
      name: 'Yemini Intelligence',
      targetId: 'mobile-intelligence',
      route: 'ai',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      id: 'yemini-mobile',
      name: 'Yemini Mobile',
      targetId: 'mobile-intelligence',
      route: 'mobile',
      logoImg: mobileIcon,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <path d="M12 18h.01" />
          <path d="m9 9 2 2-2 2" />
          <path d="m13 13 2-2-2-2" />
        </svg>
      ),
    },
    {
      id: 'yemini-editor',
      name: 'Yemini Editor',
      targetId: 'mobile-intelligence',
      route: 'editorapp-privacy',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: 'yemini-api-tester',
      name: 'Yemini API Tester',
      targetId: 'companion-suite',
      route: 'apitesterapp-privacy',
      logoImg: apiTesterIcon,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
          <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
        </svg>
      ),
    },
    {
      id: 'yemini-dbms',
      name: 'Yemini DBMS',
      targetId: 'companion-suite',
      route: 'dbmsapp-privacy',
      logoImg: dbmsIcon,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
          <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
      ),
    },
    {
      id: 'yemini-image-editor',
      name: 'Yemini Image Editor',
      targetId: 'companion-suite',
      route: 'imageeditorapp-privacy',
      logoImg: imageEditorIcon,
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" />
        </svg>
      ),
    },
  ];

  // ROW 2: Ecosystem, Architecture & Companion Tools (Matching swsd.JPG)
  const row2Products: MarqueeProduct[] = [
    {
      id: 'yemini-stf',
      name: 'STF Sovereign',
      targetId: 'mission-impact',
      route: 'about',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'yemini-docs',
      name: 'Docs & Specs',
      targetId: 'desktop-workbench',
      route: 'docs',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      id: 'yemini-data-sheets',
      name: 'Data & Sheets',
      targetId: 'desktop-workbench',
      route: 'resources',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      ),
    },
    {
      id: 'yemini-terminal-shell',
      name: 'Terminal Shell',
      targetId: 'mobile-intelligence',
      route: 'mobile',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      ),
    },
    {
      id: 'yemini-toolchains',
      name: 'Toolchains',
      targetId: 'desktop-workbench',
      route: 'mobile',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: 'yemini-p2p',
      name: 'Direct P2P',
      targetId: 'companion-suite',
      route: 'shareapp-privacy',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      ),
    },
    {
      id: 'yemini-offline-core',
      name: 'Offline Core',
      targetId: 'offline',
      route: 'security',
      svgIcon: (
        <svg
          className="w-7 h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 1l22 22" />
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
          <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      ),
    },
  ];

  const handleTileClick = (targetId: string, fallbackRoute?: PageRoute) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (fallbackRoute) {
      onNavigate(fallbackRoute);
    }
  };

  /* Exact Specification for Tiles (Matching swsd.JPG):
     - Size: 110px × 110px desktop, 90px × 90px mobile
     - LIGHT MODE: Crisp white background (bg-white), 1px solid #E6E2E3 border, text #1d1d1f, icon in #580c14
     - DARK MODE: Deep dark container matching swsd.JPG (dark:bg-[#121214] / dark:bg-black/90, dark:border-white/10), text white, icon in coral/wine #ff7b72
     - Border radius: rounded-[18px]
     - Flex column, centered content: icon on top, product name in 12-13px font below */
  const renderTile = (item: MarqueeProduct, keySuffix: string) => (
    <a
      key={`${item.id}-${keySuffix}`}
      href={`#${item.targetId}`}
      onClick={(e) => {
        e.preventDefault();
        handleTileClick(item.targetId, item.route);
      }}
      className={`w-[90px] h-[90px] md:w-[110px] md:h-[110px] shrink-0 rounded-[18px] flex flex-col items-center justify-center p-2 text-center transition-all active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#580c14] cursor-pointer select-none border ${
        isLight
          ? 'bg-white border-[#E6E2E3] text-[#1d1d1f] shadow-xs hover:border-[#580c14] hover:shadow-md'
          : 'bg-[#121214] border-white/10 text-white shadow-md hover:border-[#ff7b72] hover:shadow-black/70'
      }`}
      title={item.name}
      aria-label={`View details for ${item.name}`}
    >
      {/* Icon/Logo container at ~28px on top */}
      <div className={`${item.logoImg ? 'w-8 h-8' : 'w-7 h-7'} flex items-center justify-center mb-2 transition-transform duration-200 group-hover:scale-110 shrink-0 ${
        isLight ? 'text-[#580c14]' : 'text-[#ff7b72]'
      }`}>
        {item.logoImg ? (
          <img
            src={item.logoImg}
            alt=""
            className={`w-8 h-8 shrink-0 rounded-lg ${item.logoFill ? 'object-cover' : 'object-contain bg-white p-0.5'}`}
            loading="lazy"
          />
        ) : (
          item.svgIcon
        )}
      </div>

      {/* Product name label below in 12-13px medium-weight text, centered */}
      <span className={`text-[12px] md:text-[13px] font-medium leading-tight text-center transition-colors line-clamp-2 px-1 ${
        isLight
          ? 'text-[#1d1d1f] group-hover:text-[#580c14]'
          : 'text-white group-hover:text-[#ff7b72]'
      }`}>
        {item.name}
      </span>
    </a>
  );

  return (
    <section 
      id="ecosystem-intro" 
      className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        isLight 
          ? 'bg-gradient-to-b from-white via-[#fcf6f5] to-white text-[#1d1d1f]' 
          : 'bg-gradient-to-b from-black via-[#0d0405] to-black text-[#fadcd9]'
      }`}
    >
      {/* Inline styles for continuous right-to-left infinite marquee and reduced motion */}
      <style>{`
        @keyframes yemini-loop-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .yemini-marquee-row-1 {
          display: flex;
          width: max-content;
          animation: yemini-loop-rtl 38s linear infinite;
        }

        .yemini-marquee-row-2 {
          display: flex;
          width: max-content;
          animation: yemini-loop-rtl 30s linear infinite;
        }

        .yemini-marquee-row-1:hover,
        .yemini-marquee-row-1:focus-within,
        .yemini-marquee-row-2:hover,
        .yemini-marquee-row-2:focus-within {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .yemini-marquee-row-1,
          .yemini-marquee-row-2 {
            animation: none !important;
            transform: none !important;
            width: 100% !important;
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 16px !important;
          }
          .yemini-marquee-clone {
            display: none !important;
          }
        }
      `}</style>

      {/* Subtle ambient highlight behind headline */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-0 h-96 flex justify-center overflow-hidden opacity-35"
      >
        <div className="w-[800px] h-[350px] bg-[#580c14]/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline matching jjj.JPG */}
        <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.1] ${
          isLight ? 'text-[#1c1313]' : 'text-white'
        }`}>
          A better developer experience starts with freedom and sovereignty
        </h2>

        {/* Subtitle matching jjj.JPG */}
        <p className={`mt-5 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed ${
          isLight ? 'text-gray-600' : 'text-[#ab8986]'
        }`}>
          Take control of your code, workflows, and dependencies with 100% on-device execution.
        </p>

        {/* Primary Action Buttons matching jjj.JPG & swsd.JPG */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onNavigate('download')}
            className="px-6 sm:px-8 py-3 rounded-full text-sm sm:base font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Download Yemini
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all active:scale-95 cursor-pointer border ${
              isLight
                ? 'bg-white hover:bg-gray-50 text-[#1d1d1f] border-gray-300 shadow-sm'
                : 'bg-black/60 hover:bg-[#1f0d0e] text-white border-[#580c14] shadow-sm'
            }`}
          >
            Explore foundation
          </button>
        </div>

        {/* TWO-ROW CENTERED ICON MARQUEE (matching jjj.JPG & swsd.JPG)
            - Sits ~56px below buttons (mt-14)
            - Not too wide: centered with ~30% whitespace on each side (max-w-[760px] mx-auto)
            - CSS mask-image linear-gradient (transparent 0, black 40px, black calc(100% - 40px), transparent 100%)
            - Two stacked rows, both moving right to left in a seamless infinite loop
            - In Light Mode: crisp white tiles with deep wine icons
            - In Dark Mode: sleek dark containers (#121214) with coral/wine icons as in swsd.JPG
            - Hover or focus pauses the animation
            - Easily swap any icon with official PNG or WebP logos via logoImg */}
        <div className="w-full max-w-[760px] mx-auto mt-14 space-y-4">
          
          {/* ROW 1 (Flagship Products) */}
          <div 
            className="relative w-full overflow-hidden py-1"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)',
            }}
          >
            <div className="yemini-marquee-row-1">
              {/* Primary sequence */}
              <div className="flex items-center gap-[16px] shrink-0 pr-[16px]">
                {row1Products.map((p) => renderTile(p, 'r1-set1'))}
              </div>
              {/* Duplicated sequence for seamless infinite loop */}
              <div className="flex items-center gap-[16px] shrink-0 pr-[16px] yemini-marquee-clone">
                {row1Products.map((p) => renderTile(p, 'r1-set2'))}
              </div>
            </div>
          </div>

          {/* ROW 2 (Ecosystem & Companion Tools) */}
          <div 
            className="relative w-full overflow-hidden py-1"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)',
            }}
          >
            <div className="yemini-marquee-row-2">
              {/* Primary sequence */}
              <div className="flex items-center gap-[16px] shrink-0 pr-[16px]">
                {row2Products.map((p) => renderTile(p, 'r2-set1'))}
              </div>
              {/* Duplicated sequence for seamless infinite loop */}
              <div className="flex items-center gap-[16px] shrink-0 pr-[16px] yemini-marquee-clone">
                {row2Products.map((p) => renderTile(p, 'r2-set2'))}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SOCIAL PROOF, TRUST & RATINGS BAR (Exact replica of swsd.JPG) */}
        <div className={`mt-16 sm:mt-20 pt-8 sm:pt-10 w-full border-t flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 ${
          isLight ? 'border-gray-200 text-gray-700' : 'border-white/10 text-gray-300'
        }`}>
          {/* LEFT: 3 Overlapping Burgundy Badges (DEV, STF, YEM) + Trusted by 100,000+ creators */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#580c14] border-2 border-white dark:border-black flex items-center justify-center text-[10px] font-bold text-white tracking-wider">
                DEV
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7a131e] border-2 border-white dark:border-black flex items-center justify-center text-[10px] font-bold text-white tracking-wider">
                STF
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3d060b] border-2 border-white dark:border-black flex items-center justify-center text-[10px] font-bold text-white tracking-wider">
                YEM
              </div>
            </div>
            <div className="text-left">
              <p className={`text-xs sm:text-sm font-bold leading-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                Trusted by 100,000+ creators
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                Worldwide across 140+ countries
              </p>
            </div>
          </div>

          {/* CENTER: Red Star Rating (★★★★★ 4.9 / 5) + Android production release */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400 text-base shrink-0">
              ★
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-red-500 text-xs tracking-tighter">★★★★★</span>
                <span className={`text-xs sm:text-sm font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  4.9 / 5
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                Android production release
              </p>
            </div>
          </div>

          {/* RIGHT: 3 Pill Badges (100% Offline, Sub-100MB RAM, ARM64 Native) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-xs">
            <span className={`px-3 py-1.5 rounded-md border ${
              isLight 
                ? 'bg-gray-50 border-gray-200 text-gray-700' 
                : 'bg-white/5 border-white/15 text-gray-300'
            }`}>
              100% Offline
            </span>
            <span className={`px-3 py-1.5 rounded-md border ${
              isLight 
                ? 'bg-gray-50 border-gray-200 text-gray-700' 
                : 'bg-white/5 border-white/15 text-gray-300'
            }`}>
              Sub-100MB RAM
            </span>
            <span className={`px-3 py-1.5 rounded-md border ${
              isLight 
                ? 'bg-gray-50 border-gray-200 text-gray-700' 
                : 'bg-white/5 border-white/15 text-gray-300'
            }`}>
              ARM64 Native
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
