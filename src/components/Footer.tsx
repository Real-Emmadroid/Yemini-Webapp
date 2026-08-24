import React from 'react';
import { YeminiLogo } from './YeminiLogo';
import { PageRoute } from '../types';
import { Github, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050507] border-t border-zinc-800/80 text-zinc-400 text-sm relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#5b0000]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand & Philosophy (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none"
            >
              <YeminiLogo size="lg" />
            </button>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Developer tools for building without limits. Created by <span className="text-white font-medium">STF Ecosystem (Sphere Tech Foundation)</span> to bring high-performance coding across mobile and desktop.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All systems operational</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">v1.2.0-stable</span>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://github.com/SphereTechFoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/STFEcosystem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="X Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/spheretechfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@STFEcosystem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-200">Products</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('mobile')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Yemini Mobile</span>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-[#ff8585]">Android</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('desktop')}
                  className="hover:text-white transition-colors text-left"
                >
                  Yemini Desktop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span>Yemini AI</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-[#5b0000]/60 text-[#ff8585] border border-[#ff6767]/30">Preview</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-200">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('docs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('download')}
                  className="hover:text-white transition-colors text-left"
                >
                  Downloads & APKs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors text-left"
                >
                  Release Changelog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors text-left"
                >
                  Engineering Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Keyboard Shortcuts
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & STF */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-200">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Yemini
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span>STF Ecosystem</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('security')}
                  className="hover:text-white transition-colors text-left"
                >
                  Security Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-200">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('acceptable-use')}
                  className="hover:text-white transition-colors text-left"
                >
                  Acceptable Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('licenses')}
                  className="hover:text-white transition-colors text-left"
                >
                  Open Source Licenses
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Independent Product Brand</span>
            <span>•</span>
            <span>Designed for Global Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
