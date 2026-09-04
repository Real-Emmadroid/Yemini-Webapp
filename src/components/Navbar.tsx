import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from './StatusBadge';
import headerLogoImg from '../assets/headerlogo.png';
import headerDarkImg from '../assets/headerdark.png';
import { 
  Search, Menu, X, Smartphone, Monitor, Sparkles, 
  Download, Sun, Moon, ArrowRight
} from 'lucide-react';

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
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

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
    setProductsDropdownOpen(false);
  };

  const handleSectionJump = (sectionId: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
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

  const isLight = theme === 'light';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 glass-nav h-[52px] flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
        <div className="flex items-center gap-8 max-w-7xl mx-auto w-full justify-between text-xs font-medium tracking-wide">
          {/* Left: Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 hover:opacity-85 transition-opacity focus:outline-none"
            aria-label="Yemini Home"
          >
            <img
              src={isLight ? headerDarkImg : headerLogoImg}
              alt="Yemini Logo"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </button>

          {/* Center: Desktop Navigation Links */}
          <div className={`hidden md:flex items-center gap-8 font-medium text-xs ${
            isLight ? 'text-gray-600' : 'text-[#ab8986]'
          }`}>
            {/* Products with hover popover */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('home')}
                className={`py-2 flex items-center gap-1 transition-colors ${
                  isLight 
                    ? (['mobile', 'desktop', 'ai'].includes(currentRoute) ? 'text-black font-semibold' : 'hover:text-black')
                    : (['mobile', 'desktop', 'ai'].includes(currentRoute) ? 'text-[#fadcd9] font-semibold' : 'hover:text-[#fadcd9]')
                }`}
              >
                Products
              </button>

              {productsDropdownOpen && (
                <div className={`absolute top-full -left-6 mt-1 w-72 p-2 rounded-2xl shadow-2xl z-50 animate-fadeIn text-left ${
                  isLight 
                    ? 'bg-white border border-gray-200 shadow-elevated' 
                    : 'bg-[#180a09] border border-[#43302f]'
                }`}>
                  <button
                    onClick={() => handleLinkClick('mobile')}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-colors text-left group ${
                      isLight ? 'hover:bg-gray-100' : 'hover:bg-[#2c1b1a]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Smartphone className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ba1724]'}`} />
                      <div>
                        <div className={`text-xs font-semibold ${isLight ? 'text-black' : 'text-[#fadcd9] group-hover:text-white'}`}>
                          Yemini Mobile
                        </div>
                        <div className={`text-[10px] ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>
                          Android native toolchains
                        </div>
                      </div>
                    </div>
                    <StatusBadge status="available" size="sm" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('desktop')}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-colors text-left group mt-0.5 ${
                      isLight ? 'hover:bg-gray-100' : 'hover:bg-[#2c1b1a]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Monitor className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ba1724]'}`} />
                      <div>
                        <div className={`text-xs font-semibold ${isLight ? 'text-black' : 'text-[#fadcd9] group-hover:text-white'}`}>
                          Yemini Desktop
                        </div>
                        <div className={`text-[10px] ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>
                          macOS, Windows, Linux IDE
                        </div>
                      </div>
                    </div>
                    <StatusBadge status="in-development" size="sm" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('ai')}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-colors text-left group mt-0.5 ${
                      isLight ? 'hover:bg-gray-100' : 'hover:bg-[#2c1b1a]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className={`w-4 h-4 ${isLight ? 'text-purple-600' : 'text-[#ba1724]'}`} />
                      <div>
                        <div className={`text-xs font-semibold ${isLight ? 'text-black' : 'text-[#fadcd9] group-hover:text-white'}`}>
                          Yemini Intelligence
                        </div>
                        <div className={`text-[10px] ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`}>
                          Autonomous coding agent
                        </div>
                      </div>
                    </div>
                    <StatusBadge status="in-development" size="sm" />
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleSectionJump('ecosystem')}
              className={`transition-colors ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
            >
              Ecosystem
            </button>

            <button 
              onClick={() => {
                if (currentRoute === 'home') {
                  handleSectionJump('downloads');
                } else {
                  handleLinkClick('download');
                }
              }}
              className={`transition-colors ${
                isLight 
                  ? (currentRoute === 'download' ? 'text-black font-semibold' : 'hover:text-black')
                  : (currentRoute === 'download' ? 'text-[#fadcd9] font-semibold' : 'hover:text-[#fadcd9]')
              }`}
            >
              Downloads
            </button>

            <button 
              onClick={() => handleLinkClick('docs')}
              className={`transition-colors ${
                isLight 
                  ? (currentRoute === 'docs' ? 'text-black font-semibold' : 'hover:text-black')
                  : (currentRoute === 'docs' ? 'text-[#fadcd9] font-semibold' : 'hover:text-[#fadcd9]')
              }`}
            >
              Docs
            </button>

            <button 
              onClick={() => handleLinkClick('about')}
              className={`transition-colors ${
                isLight 
                  ? (currentRoute === 'about' ? 'text-black font-semibold' : 'hover:text-black')
                  : (currentRoute === 'about' ? 'text-[#fadcd9] font-semibold' : 'hover:text-[#fadcd9]')
              }`}
            >
              About
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-all duration-200 active:scale-90 flex items-center justify-center ${
                isLight 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-gray-200/80 shadow-xs' 
                  : 'bg-[#271716] text-[#e4beba] hover:bg-[#372624] hover:text-white border border-[#43302f]'
              }`}
              title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              aria-label="Toggle dark/light theme"
            >
              {isLight ? (
                <Moon className="w-3.5 h-3.5 text-gray-700" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-[#ffb3ae]" />
              )}
            </button>

            {/* Quick Search Trigger (⌘K) */}
            <button
              onClick={onOpenSearch}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] transition-colors ${
                isLight 
                  ? 'bg-gray-100/90 border border-gray-200 text-gray-500 hover:text-black hover:border-gray-300' 
                  : 'bg-[#271716]/70 border border-[#43302f] text-[#ab8986] hover:text-[#fadcd9] hover:border-[#ab8986]'
              }`}
              title="Search (Cmd+K)"
            >
              <Search className={`w-3 h-3 ${isLight ? 'text-gray-500' : 'text-[#ab8986]'}`} />
              <span>Search</span>
              <kbd className={`px-1 py-0.2 rounded text-[9px] ${
                isLight ? 'bg-white border border-gray-200 text-gray-600' : 'bg-[#180a09] text-[#e4beba]'
              }`}>⌘K</kbd>
            </button>

            {/* Download Button */}
            <button
              onClick={() => handleLinkClick('download')}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-colors shadow-sm active:scale-95 ${
                isLight 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-[#ba1724] text-white hover:bg-[#930015] hover:text-[#ffdad6]'
              }`}
            >
              Download
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`md:hidden p-1.5 active:scale-95 ${
                isLight ? 'text-gray-800 hover:text-black' : 'text-[#fadcd9] hover:text-white'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 top-[52px] flex flex-col animate-fadeIn">
          <div 
            className={`absolute inset-0 backdrop-blur-md ${isLight ? 'bg-white/85' : 'bg-black/85'}`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className={`relative border-b p-5 space-y-4 max-h-[calc(100vh-52px)] overflow-y-auto ${
            isLight ? 'bg-white border-gray-200 text-gray-800' : 'bg-[#180a09] border-[#43302f] text-[#fadcd9]'
          }`}>
            <div className="space-y-1">
              <p className={`text-[10px] uppercase font-bold tracking-widest mb-2 ${
                isLight ? 'text-gray-400' : 'text-[#ab8986]'
              }`}>
                Products &amp; Ecosystem
              </p>
              <button
                onClick={() => handleLinkClick('home')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleLinkClick('mobile')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm flex items-center justify-between ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-500" />
                  <span>Yemini Mobile</span>
                </div>
                <StatusBadge status="available" size="sm" />
              </button>
              <button
                onClick={() => handleLinkClick('desktop')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm flex items-center justify-between ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-500" />
                  <span>Yemini Desktop</span>
                </div>
                <StatusBadge status="in-development" size="sm" />
              </button>
              <button
                onClick={() => handleLinkClick('ai')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm flex items-center justify-between ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Yemini Intelligence</span>
                </div>
                <StatusBadge status="in-development" size="sm" />
              </button>
            </div>

            <div className={`border-t pt-3 space-y-1 ${isLight ? 'border-gray-200' : 'border-[#43302f]'}`}>
              <p className={`text-[10px] uppercase font-bold tracking-widest mb-2 ${
                isLight ? 'text-gray-400' : 'text-[#ab8986]'
              }`}>
                Navigation
              </p>
              <button
                onClick={() => handleSectionJump('ecosystem')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                Ecosystem
              </button>
              <button
                onClick={() => handleLinkClick('download')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                Downloads &amp; Waitlist
              </button>
              <button
                onClick={() => handleLinkClick('docs')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                Documentation
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                About &amp; Mission
              </button>
              <button
                onClick={() => handleLinkClick('resources')}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                  isLight ? 'hover:bg-gray-100 text-black' : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
                }`}
              >
                Resources &amp; Blog
              </button>
            </div>

            {/* Mobile Theme Toggle & Quick Actions */}
            <div className={`border-t pt-3 flex flex-col gap-2.5 ${isLight ? 'border-gray-200' : 'border-[#43302f]'}`}>
              <button
                onClick={toggleTheme}
                className={`w-full py-2 px-3 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  isLight 
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                    : 'bg-[#271716] text-[#fadcd9] hover:bg-[#372624]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {isLight ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-[#ffb3ae]" />}
                  <span>Theme: {isLight ? 'Light Mode' : 'Dark Mode'}</span>
                </span>
                <span className="text-[11px] opacity-70">Tap to switch</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={onOpenSearch}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 ${
                    isLight 
                      ? 'bg-gray-100 border border-gray-200 text-gray-800' 
                      : 'bg-[#271716] border border-[#43302f] text-[#fadcd9]'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search</span>
                </button>
                <button
                  onClick={() => handleLinkClick('download')}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                    isLight 
                      ? 'bg-black text-white' 
                      : 'bg-[#ba1724] text-white'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
