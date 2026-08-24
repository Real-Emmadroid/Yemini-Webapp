import React, { useState, useEffect } from 'react';
import { YeminiLogo } from './YeminiLogo';
import { PageRoute } from '../types';
import { 
  Search, ChevronDown, Menu, X, Smartphone, Monitor, Sparkles, 
  Download, ShieldCheck, BookOpen, ChevronRight, FileText
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'py-2.5 bg-[#070709]/95 backdrop-blur-xl border-b border-zinc-800/90 shadow-xl shadow-black/60'
            : 'py-4 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6767] rounded-lg transition-transform active:scale-95"
            aria-label="Yemini Home"
          >
            <YeminiLogo size={isScrolled ? 'sm' : 'md'} />
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('home')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  ['home', 'mobile', 'desktop', 'ai'].includes(currentRoute)
                    ? 'text-white bg-zinc-800/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-white' : 'text-zinc-500'}`} />
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 p-2 bg-[#0e0e13] border border-zinc-800 rounded-xl shadow-2xl z-50 animate-fadeIn">
                  <button
                    onClick={() => handleLinkClick('mobile')}
                    className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-800/60 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-[#ff6767]/40 text-[#ff6767]">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#ff8585] flex items-center gap-2">
                        <span>Yemini Mobile</span>
                        <span className="text-[10px] font-mono px-1 rounded bg-zinc-800 text-zinc-400">Android</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Mobile IDE, terminal & runtimes</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLinkClick('desktop')}
                    className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-800/60 transition-colors text-left group mt-1"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-[#ff6767]/40 text-[#ff6767]">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#ff8585] flex items-center gap-2">
                        <span>Yemini Desktop</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Win, macOS, Linux professional IDE</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLinkClick('ai')}
                    className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-800/60 transition-colors text-left group mt-1"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-[#ff6767]/40 text-[#ff6767]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#ff8585] flex items-center gap-2">
                        <span>Yemini AI</span>
                        <span className="text-[10px] font-mono px-1 rounded bg-[#5b0000]/50 border border-[#ff6767]/30 text-[#ff8585]">Preview</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Intelligent autonomous coding agent</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Downloads */}
            <button
              onClick={() => handleLinkClick('download')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentRoute === 'download'
                  ? 'text-white bg-zinc-800/50'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
              }`}
            >
              Downloads
            </button>

            {/* Resources */}
            <button
              onClick={() => handleLinkClick('resources')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentRoute === 'resources'
                  ? 'text-white bg-zinc-800/50'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
              }`}
            >
              Resources
            </button>

            {/* Documentation */}
            <button
              onClick={() => handleLinkClick('docs')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentRoute === 'docs'
                  ? 'text-white bg-zinc-800/50'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
              }`}
            >
              Docs
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="Search (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-500" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">⌘K</kbd>
            </button>

            {/* Sign In Trigger */}
            <button
              onClick={() => handleLinkClick('docs')}
              className="text-sm font-medium text-zinc-400 hover:text-white px-2 py-1.5 transition-colors"
            >
              Sign in
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => handleLinkClick('download')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:from-[#7a0000] hover:to-[#ff6767] shadow-md shadow-[#5b0000]/30 transition-all hover:scale-[1.02] active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>Get Yemini</span>
            </button>
          </div>

          {/* Mobile Right Controls: Search + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={onOpenSearch}
              className="min-w-[40px] min-h-[40px] p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white active:scale-95 flex items-center justify-center"
              aria-label="Search Yemini"
            >
              <Search className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="min-w-[40px] min-h-[40px] p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white active:scale-95 flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN / DRAWER MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 top-[60px] sm:top-[68px] flex flex-col animate-fadeIn">
          {/* Backdrop Blur Click-To-Close Layer */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Sheet Container */}
          <div className="relative bg-[#070709] border-b border-zinc-800 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto p-5 space-y-5 text-left">
            {/* Products Group */}
            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#ff8585] px-3 py-1 font-semibold">
                Core Products
              </p>

              <button
                onClick={() => handleLinkClick('mobile')}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  currentRoute === 'mobile' ? 'bg-zinc-800/80 border border-zinc-700/80 text-white' : 'bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ff6767]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <span>Yemini Mobile</span>
                      <span className="text-[9px] font-mono px-1 rounded bg-zinc-800 text-zinc-400">Android</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Native mobile IDE & on-device toolchains</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>

              <button
                onClick={() => handleLinkClick('desktop')}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors mt-1.5 ${
                  currentRoute === 'desktop' ? 'bg-zinc-800/80 border border-zinc-700/80 text-white' : 'bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ff6767]">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      <span>Yemini Desktop</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Win, macOS, Linux high-performance IDE</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>

              <button
                onClick={() => handleLinkClick('ai')}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors mt-1.5 ${
                  currentRoute === 'ai' ? 'bg-zinc-800/80 border border-zinc-700/80 text-white' : 'bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ff6767]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <span>Yemini AI Agent</span>
                      <span className="text-[9px] font-mono px-1 rounded bg-[#5b0000] text-[#ff8585]">Preview</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Intelligent codebase reasoning partner</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
            </div>

            {/* Ecosystem Navigation */}
            <div className="pt-3 border-t border-zinc-800/80 space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#ff8585] px-3 py-1 font-semibold">
                Ecosystem &amp; Docs
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleLinkClick('download')}
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentRoute === 'download' ? 'bg-zinc-800 text-white' : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/50'
                  }`}
                >
                  <Download className="w-4 h-4 text-[#ff6767]" />
                  <span>Downloads</span>
                </button>

                <button
                  onClick={() => handleLinkClick('docs')}
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentRoute === 'docs' ? 'bg-zinc-800 text-white' : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/50'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-[#ff6767]" />
                  <span>Documentation</span>
                </button>

                <button
                  onClick={() => handleLinkClick('resources')}
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentRoute === 'resources' ? 'bg-zinc-800 text-white' : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/50'
                  }`}
                >
                  <FileText className="w-4 h-4 text-[#ff6767]" />
                  <span>Resources</span>
                </button>

                <button
                  onClick={() => handleLinkClick('security')}
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentRoute === 'security' ? 'bg-zinc-800 text-white' : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/50'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-[#ff6767]" />
                  <span>Security</span>
                </button>
              </div>
            </div>

            {/* Quick Actions / Download CTA */}
            <div className="pt-3 border-t border-zinc-800/80 space-y-2.5">
              <button
                onClick={() => handleLinkClick('download')}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-center text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 shadow-lg shadow-[#5b0000]/40 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Yemini (Free)</span>
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono px-1">
                <span>STF Ecosystem</span>
                <span>v1.2.0 Stable</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
