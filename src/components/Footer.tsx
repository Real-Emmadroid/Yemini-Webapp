import React from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer className={`pt-16 pb-8 px-6 border-t transition-colors duration-300 ${
      isLight 
        ? 'bg-white text-gray-500 border-gray-200' 
        : 'bg-black text-[#ab8986] border-[#43302f]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 & 2: Brand */}
          <div className="col-span-2 lg:col-span-2">
            <button
              onClick={() => onNavigate('home')}
              className={`font-semibold tracking-tight text-lg flex items-center gap-1.5 mb-4 focus:outline-none hover:opacity-80 transition-opacity ${
                isLight ? 'text-black' : 'text-[#fadcd9]'
              }`}
            >
              <span className={`w-6 h-6 rounded-sm flex items-center justify-center text-xs font-bold shadow-sm ${
                isLight ? 'bg-black text-white' : 'bg-[#ba1724] text-white'
              }`}>
                Y
              </span>
              <span className="tracking-wider">YEMINI</span>
            </button>
            <p className={`text-xs max-w-xs mb-6 leading-relaxed ${
              isLight ? 'text-gray-500' : 'text-[#ab8986]'
            }`}>
              Developer tools for building without limits. Designed by STF Ecosystem to bring high-performance coding everywhere.
            </p>
            <div className={`flex items-center gap-2 text-[11px] ${
              isLight ? 'text-gray-600' : 'text-[#e4beba]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Offline-first runtime toolchains ready</span>
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className={`text-xs font-semibold mb-4 ${
              isLight ? 'text-black' : 'text-[#fadcd9]'
            }`}>
              Products
            </h4>
            <ul className={`flex flex-col gap-2.5 text-xs ${
              isLight ? 'text-gray-500' : 'text-[#ab8986]'
            }`}>
              <li>
                <button 
                  onClick={() => onNavigate('desktop')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Yemini Mac
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('desktop')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Yemini Windows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('mobile')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Yemini Mobile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Yemini Intelligence
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className={`text-xs font-semibold mb-4 ${
              isLight ? 'text-black' : 'text-[#fadcd9]'
            }`}>
              Resources
            </h4>
            <ul className={`flex flex-col gap-2.5 text-xs ${
              isLight ? 'text-gray-500' : 'text-[#ab8986]'
            }`}>
              <li>
                <button 
                  onClick={() => onNavigate('docs')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Documentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('download')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Downloads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('resources')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Release Notes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('resources')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Developer Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className={`text-xs font-semibold mb-4 ${
              isLight ? 'text-black' : 'text-[#fadcd9]'
            }`}>
              Company
            </h4>
            <ul className={`flex flex-col gap-2.5 text-xs ${
              isLight ? 'text-gray-500' : 'text-[#ab8986]'
            }`}>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  About Yemini
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('security')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Security
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('privacy')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Privacy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('terms')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className={`transition-colors text-left ${isLight ? 'hover:text-black' : 'hover:text-[#fadcd9]'}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center text-[10px] ${
          isLight ? 'border-gray-200 text-gray-400' : 'border-[#43302f] text-[#ab8986]'
        }`}>
          <p>Copyright © 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button 
              onClick={() => onNavigate('privacy')} 
              className={`transition-colors ${isLight ? 'hover:text-gray-600' : 'hover:text-[#fadcd9]'}`}
            >
              Privacy Policy
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#5b403e]'}>|</span>
            <button 
              onClick={() => onNavigate('terms')} 
              className={`transition-colors ${isLight ? 'hover:text-gray-600' : 'hover:text-[#fadcd9]'}`}
            >
              Terms of Use
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#5b403e]'}>|</span>
            <button 
              onClick={() => onNavigate('licenses')} 
              className={`transition-colors ${isLight ? 'hover:text-gray-600' : 'hover:text-[#fadcd9]'}`}
            >
              Licenses &amp; Site Map
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
