import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from './StatusBadge';
import headerLogoImg from '../assets/headerlogo.png';
import headerDarkImg from '../assets/headerdark.png';
import { MobileVisual, DesktopVisual, AiVisual } from './ProductVisuals';
import { NavProductsMegaMenu } from './NavProductsMegaMenu';
import { MobileProductsNav } from './MobileProductsNav';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMegaMenuOpen, setProductsMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setProductsMegaMenuOpen(false);
  };

  const handleSectionJump = (sectionId: string) => {
    setMobileMenuOpen(false);
    setProductsMegaMenuOpen(false);
    if (currentRoute !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnterMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setProductsMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setProductsMegaMenuOpen(false);
    }, 150);
  };

  const isLight = theme === 'light';

  return (
    <>
      {/* Desktop & Main Navbar Header (Clean Meta style matching ooo.JPG) */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 h-[56px] flex items-center justify-between px-4 sm:px-8 transition-colors duration-200 border-b ${
          isLight 
            ? 'bg-white text-gray-900 border-gray-200/80' 
            : 'bg-black text-[#fadcd9] border-[#372624]'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Left Group: Brand Logo & Navigation Links */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Yemini Home"
            >
              <img
                src={isLight ? headerDarkImg : headerLogoImg}
                alt="Yemini"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </button>

            {/* Left Nav items (Clean Meta style from ooo.JPG: Products, Ecosystem, Docs, Resources) */}
            <div className="hidden md:flex items-center gap-7 text-sm font-normal">
              {/* Products Item with Mega Menu Trigger (Replaces Shop) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterMegaMenu}
                onMouseLeave={handleMouseLeaveMegaMenu}
              >
                <button
                  onClick={() => setProductsMegaMenuOpen(prev => !prev)}
                  className={`py-4 transition-colors flex items-center gap-1 cursor-pointer font-medium ${
                    productsMegaMenuOpen || ['mobile', 'desktop', 'ai'].includes(currentRoute)
                      ? isLight ? 'text-black font-semibold' : 'text-white font-semibold'
                      : isLight ? 'text-gray-700 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                  }`}
                >
                  <span>Products</span>
                </button>
              </div>

              {/* Ecosystem */}
              <button
                onClick={() => handleSectionJump('ecosystem')}
                className={`transition-colors cursor-pointer ${
                  isLight ? 'text-gray-700 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                Ecosystem
              </button>

              {/* Documentation */}
              <button
                onClick={() => handleLinkClick('docs')}
                className={`transition-colors cursor-pointer ${
                  currentRoute === 'docs'
                    ? isLight ? 'text-black font-semibold' : 'text-white font-semibold'
                    : isLight ? 'text-gray-700 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                Documentation
              </button>

              {/* Resources */}
              <button
                onClick={() => handleLinkClick('resources')}
                className={`transition-colors cursor-pointer ${
                  currentRoute === 'resources'
                    ? isLight ? 'text-black font-semibold' : 'text-white font-semibold'
                    : isLight ? 'text-gray-700 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                Resources
              </button>
            </div>
          </div>

          {/* Right Group (Explore, Support, Search Icon, Theme Toggle, Download Button) */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Secondary Right Links (Hidden on small mobile) */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-normal">
              <button
                onClick={() => handleLinkClick('about')}
                className={`transition-colors cursor-pointer ${
                  isLight ? 'text-gray-700 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className={`transition-colors cursor-pointer ${
                  isLight ? 'text-gray-700 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                Support
              </button>
            </div>

            {/* Clean Custom SVG Search Icon Button (Matching Meta style Q in ooo.JPG) */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isLight 
                  ? 'hover:bg-gray-100 text-gray-800' 
                  : 'hover:bg-[#271716] text-[#fadcd9]'
              }`}
              title="Search Yemini (⌘K)"
              aria-label="Search"
            >
              <svg 
                className="w-4 h-4 sm:w-4.5 sm:h-4.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.9" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isLight 
                  ? 'hover:bg-gray-100 text-gray-800' 
                  : 'hover:bg-[#271716] text-[#fadcd9]'
              }`}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle theme"
            >
              {isLight ? (
                /* Moon SVG */
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun SVG */
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Download Button (Pill button) */}
            <button
              onClick={() => handleLinkClick('download')}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm active:scale-95 cursor-pointer ${
                isLight 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-[#580c14] text-white hover:bg-[#43080e]'
              }`}
            >
              Download
            </button>

            {/* Mobile Hamburger Toggle (Visible only on mobile) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-lg cursor-pointer ${
                isLight ? 'text-gray-800 hover:bg-gray-100' : 'text-[#fadcd9] hover:bg-[#271716]'
              }`}
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* DESKTOP MEGA MENU DROPDOWN (Styled exactly like Meta's ooo.JPG) */}
      {productsMegaMenuOpen && (
        <div
          className="hidden md:block fixed top-[56px] inset-x-0 w-full z-40 transition-all duration-200"
          onMouseEnter={handleMouseEnterMegaMenu}
          onMouseLeave={handleMouseLeaveMegaMenu}
        >
          {/* Backdrop for click outside */}
          <div 
            className="fixed inset-0 top-[56px] bg-black/40 backdrop-blur-xs -z-10"
            onClick={() => setProductsMegaMenuOpen(false)}
          />

          {/* Desktop Products Mega Menu with Proton-style QR code & downloads */}
          <NavProductsMegaMenu
            isLight={isLight}
            onNavigate={handleLinkClick}
            onClose={() => setProductsMegaMenuOpen(false)}
          />
        </div>
      )}

      {/* MOBILE NAV DRAWER (Styled cleanly matching Meta's llk.JPG) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Menu Sheet */}
          <div className={`relative w-full h-full flex flex-col overflow-y-auto ${
            isLight ? 'bg-white text-gray-900' : 'bg-[#100505] text-[#fadcd9]'
          }`}>
            {/* Top Bar: Centered Logo & Close Button (Matching llk.JPG) */}
            <div className={`px-6 py-4 flex items-center justify-between border-b shrink-0 ${
              isLight ? 'border-gray-200' : 'border-[#372624]'
            }`}>
              <div className="w-6" /> {/* spacer for balance */}
              
              <button
                onClick={() => handleLinkClick('home')}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={isLight ? headerDarkImg : headerLogoImg}
                  alt="Yemini"
                  className="h-6 w-auto object-contain"
                />
              </button>

              {/* Close Button X (Custom SVG) */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-1.5 rounded-full cursor-pointer ${
                  isLight ? 'text-gray-800 hover:bg-gray-100' : 'text-[#fadcd9] hover:bg-[#271716]'
                }`}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Primary Nav List with chevron > arrows (Matching llk.JPG) */}
            <div className="p-6 space-y-1">
              {/* Products (Replaces Shop) */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(prev => !prev)}
                  className={`w-full py-4 flex items-center justify-between text-xl font-medium border-b cursor-pointer ${
                    isLight ? 'border-gray-100 text-gray-900' : 'border-[#271716] text-white'
                  }`}
                >
                  <span>Products</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-90' : ''} ${
                      isLight ? 'text-gray-400' : 'text-[#ab8986]'
                    }`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                {/* Expanded mobile products list with nested accordion & distribution suite matching ikikijj.JPG */}
                {mobileProductsOpen && (
                  <div className={`py-2 border-b ${isLight ? 'border-gray-100' : 'border-[#271716]'}`}>
                    <MobileProductsNav
                      isLight={isLight}
                      onNavigate={handleLinkClick}
                      onCloseMenu={() => setMobileMenuOpen(false)}
                    />
                  </div>
                )}
              </div>

              {/* Ecosystem */}
              <button
                onClick={() => handleSectionJump('ecosystem')}
                className={`w-full py-4 flex items-center justify-between text-xl font-medium border-b cursor-pointer ${
                  isLight ? 'border-gray-100 text-gray-900' : 'border-[#271716] text-white'
                }`}
              >
                <span>Ecosystem</span>
                <svg className={`w-5 h-5 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Documentation */}
              <button
                onClick={() => handleLinkClick('docs')}
                className={`w-full py-4 flex items-center justify-between text-xl font-medium border-b cursor-pointer ${
                  isLight ? 'border-gray-100 text-gray-900' : 'border-[#271716] text-white'
                }`}
              >
                <span>Documentation</span>
                <svg className={`w-5 h-5 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Downloads */}
              <button
                onClick={() => handleLinkClick('download')}
                className={`w-full py-4 flex items-center justify-between text-xl font-medium border-b cursor-pointer ${
                  isLight ? 'border-gray-100 text-gray-900' : 'border-[#271716] text-white'
                }`}
              >
                <span>Downloads</span>
                <svg className={`w-5 h-5 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Featured Section with Product Cards (Matching llk.JPG!) */}
            <div className="px-6 py-4">
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                isLight ? 'text-gray-400' : 'text-[#ab8986]'
              }`}>
                Featured
              </h3>

              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar">
                {/* Mobile */}
                <button
                  onClick={() => handleLinkClick('mobile')}
                  className={`shrink-0 w-44 p-3.5 rounded-2xl border text-center flex flex-col items-center justify-between cursor-pointer ${
                    isLight 
                      ? 'bg-gray-50 border-gray-200 hover:bg-white' 
                      : 'bg-[#180a09] border-[#372624] hover:bg-[#200d0c]'
                  }`}
                >
                  <div className="h-28 flex items-center justify-center mb-2">
                    <MobileVisual size="sm" />
                  </div>
                  <div className={`text-xs font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Yemini Mobile
                  </div>
                  <div className={`text-[10px] mt-0.5 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>
                    Android Release v1.2.0
                  </div>
                </button>

                {/* Desktop */}
                <button
                  onClick={() => handleLinkClick('desktop')}
                  className={`shrink-0 w-44 p-3.5 rounded-2xl border text-center flex flex-col items-center justify-between cursor-pointer ${
                    isLight 
                      ? 'bg-gray-50 border-gray-200 hover:bg-white' 
                      : 'bg-[#180a09] border-[#372624] hover:bg-[#200d0c]'
                  }`}
                >
                  <div className="h-28 flex items-center justify-center mb-2">
                    <DesktopVisual size="sm" />
                  </div>
                  <div className={`text-xs font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Yemini Desktop
                  </div>
                  <div className={`text-[10px] mt-0.5 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>
                    macOS, Windows, Linux
                  </div>
                </button>

                {/* AI */}
                <button
                  onClick={() => handleLinkClick('ai')}
                  className={`shrink-0 w-44 p-3.5 rounded-2xl border text-center flex flex-col items-center justify-between cursor-pointer ${
                    isLight 
                      ? 'bg-gray-50 border-gray-200 hover:bg-white' 
                      : 'bg-[#180a09] border-[#372624] hover:bg-[#200d0c]'
                  }`}
                >
                  <div className="h-28 flex items-center justify-center mb-2">
                    <AiVisual size="sm" />
                  </div>
                  <div className={`text-xs font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Yemini Intelligence
                  </div>
                  <div className={`text-[10px] mt-0.5 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>
                    AST Autonomous Partner
                  </div>
                </button>
              </div>
            </div>

            {/* Divider (Matching llk.JPG) */}
            <div className={`border-t my-2 ${isLight ? 'border-gray-200' : 'border-[#372624]'}`} />

            {/* Bottom Section (Matching llk.JPG: Globe/Language, Explore, Support) */}
            <div className="p-6 space-y-3 mt-auto">
              {/* Globe Icon / Language & Theme */}
              <div className="flex items-center justify-between py-2 text-base font-normal">
                <div className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Global (English)</span>
                </div>

                <button
                  onClick={toggleTheme}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    isLight 
                      ? 'bg-gray-100 border-gray-200 text-gray-800' 
                      : 'bg-[#271716] border-[#43302f] text-[#fadcd9]'
                  }`}
                >
                  {isLight ? 'Switch to Dark' : 'Switch to Light'}
                </button>
              </div>

              {/* Explore Yemini */}
              <button
                onClick={() => handleLinkClick('about')}
                className={`w-full py-3 flex items-center justify-between text-base font-normal cursor-pointer ${
                  isLight ? 'text-gray-800 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                <span>Explore Yemini</span>
                <svg className={`w-4 h-4 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Support */}
              <button
                onClick={() => handleLinkClick('contact')}
                className={`w-full py-3 flex items-center justify-between text-base font-normal cursor-pointer ${
                  isLight ? 'text-gray-800 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                }`}
              >
                <span>Support &amp; Community</span>
                <svg className={`w-4 h-4 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
