import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import headerLogoImg from '../assets/headerlogo.png';
import headerDarkImg from '../assets/headerdark.png';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('yeminisupport@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer
      id="site-footer"
      className={`border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#fbfbfd] text-gray-600 border-gray-200/90'
          : 'bg-[#090303] text-[#ab8986] border-[#2c1716]'
      }`}
    >
      {/* Top Banner / Social Connect Bar */}
      <div
        className={`border-b ${
          isLight ? 'border-gray-200/80 bg-white/70' : 'border-[#221211] bg-[#0f0505]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <button
              id="footer-brand-top"
              onClick={() => onNavigate('home')}
              className="focus:outline-none hover:opacity-85 transition-opacity cursor-pointer shrink-0"
              aria-label="Yemini Home"
            >
              <img
                src={isLight ? headerDarkImg : headerLogoImg}
                alt="Yemini Logo"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </button>
            <div className="sm:border-l sm:pl-4 sm:border-gray-200 dark:sm:border-[#38201f]">
              <p
                className={`text-xs sm:text-sm font-medium ${
                  isLight ? 'text-gray-900' : 'text-[#f5dedb]'
                }`}
              >
                Software that makes creation accessible to anyone.
              </p>
              <p
                className={`text-xs mt-0.5 ${
                  isLight ? 'text-gray-500' : 'text-[#8f6e6b]'
                }`}
              >
                An engineering initiative by STF Ecosystem (Sphere Tech Foundation).
              </p>
            </div>
          </div>

          {/* Custom SVG Social & Community Vectors */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              id="footer-social-github"
              href="https://github.com/spheretechorg"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              id="footer-social-x"
              href="https://x.com/spheretechorg"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini on X"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              id="footer-social-discord"
              href="https://discord.gg/spheretech"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini Discord Community"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Email Support / Copy */}
            <button
              id="footer-action-email"
              onClick={handleCopyEmail}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-mono transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black bg-white text-gray-700 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] bg-[#180908] text-[#fadcd9]'
              }`}
              title="Copy developer support email"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{copiedEmail ? 'Copied!' : 'yeminisupport@gmail.com'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8">
          
          {/* Column 1: Products */}
          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isLight ? 'text-gray-900' : 'text-[#f5dedb]'
              }`}
            >
              Products
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-link-mobile"
                  onClick={() => onNavigate('mobile')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Yemini Mobile (Android)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-desktop"
                  onClick={() => onNavigate('desktop')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Yemini Desktop IDE
                </button>
              </li>
              <li>
                <button
                  id="footer-link-ai"
                  onClick={() => onNavigate('ai')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Yemini Intelligence
                </button>
              </li>
              <li>
                <button
                  id="footer-link-notepad"
                  onClick={() => onNavigate('notepadapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Yemini Notepad
                </button>
              </li>
              <li>
                <button
                  id="footer-link-converter"
                  onClick={() => onNavigate('converterapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Yemini Converter
                </button>
              </li>
              <li>
                <button
                  id="footer-link-share"
                  onClick={() => onNavigate('shareapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Yemini Share (P2P)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Ecosystem & Architecture */}
          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isLight ? 'text-gray-900' : 'text-[#f5dedb]'
              }`}
            >
              Ecosystem
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-link-architecture"
                  onClick={() => onNavigate('home')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Architecture Overview
                </button>
              </li>
              <li>
                <button
                  id="footer-link-offline"
                  onClick={() => onNavigate('home')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  100% Offline Runtime
                </button>
              </li>
              <li>
                <button
                  id="footer-link-compilers"
                  onClick={() => onNavigate('mobile')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  On-Device Toolchains
                </button>
              </li>
              <li>
                <button
                  id="footer-link-benchmarks"
                  onClick={() => onNavigate('desktop')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  RAM &amp; Cold-Start Benchmarks
                </button>
              </li>
              <li>
                <button
                  id="footer-link-sandboxing"
                  onClick={() => onNavigate('security')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  App Sandboxing &amp; Isolation
                </button>
              </li>
              <li>
                <button
                  id="footer-link-extensions"
                  onClick={() => onNavigate('docs')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Extensions Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Documentation & Guides */}
          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isLight ? 'text-gray-900' : 'text-[#f5dedb]'
              }`}
            >
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-link-docs-home"
                  onClick={() => onNavigate('docs')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  id="footer-link-download-center"
                  onClick={() => onNavigate('download')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Download Center
                </button>
              </li>
              <li>
                <button
                  id="footer-link-quickstart"
                  onClick={() => onNavigate('docs')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Quickstart Guides
                </button>
              </li>
              <li>
                <button
                  id="footer-link-changelog"
                  onClick={() => onNavigate('resources')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Release Notes &amp; Changelogs
                </button>
              </li>
              <li>
                <button
                  id="footer-link-blog"
                  onClick={() => onNavigate('resources')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Developer Blog
                </button>
              </li>
              <li>
                <button
                  id="footer-link-apk-hashes"
                  onClick={() => onNavigate('download')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  SHA-256 Signatures
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Support */}
          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isLight ? 'text-gray-900' : 'text-[#f5dedb]'
              }`}
            >
              Foundation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onNavigate('about')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  About Yemini
                </button>
              </li>
              <li>
                <button
                  id="footer-link-stf"
                  onClick={() => onNavigate('about')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Sphere Tech Foundation
                </button>
              </li>
              <li>
                <button
                  id="footer-link-security"
                  onClick={() => onNavigate('security')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Security Center
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => onNavigate('contact')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Contact &amp; Inquiries
                </button>
              </li>
              <li>
                <a
                  id="footer-link-spheretech-org"
                  href="https://spheretech.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-left transition-colors inline-flex items-center gap-1 cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  <span>spheretech.org</span>
                  <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Privacy & Dedicated In-App Notices */}
          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isLight ? 'text-gray-900' : 'text-[#f5dedb]'
              }`}
            >
              Legal &amp; Privacy
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-link-privacy"
                  onClick={() => onNavigate('privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-link-terms"
                  onClick={() => onNavigate('terms')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  id="footer-link-delete-account"
                  onClick={() => onNavigate('delete-account')}
                  className={`text-left font-medium transition-colors cursor-pointer text-[#ba1724] dark:text-[#ff8585] ${
                    isLight ? 'hover:underline' : 'hover:underline'
                  }`}
                >
                  Account Deletion Request
                </button>
              </li>
              <li>
                <button
                  id="footer-link-editor-privacy"
                  onClick={() => onNavigate('editorapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Code Editor Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-link-notepad-privacy"
                  onClick={() => onNavigate('notepadapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Notepad Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-link-converter-privacy"
                  onClick={() => onNavigate('converterapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Converter Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-link-share-privacy"
                  onClick={() => onNavigate('shareapp-privacy')}
                  className={`text-left transition-colors cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  Share Privacy Policy
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar (Meta Style) */}
      <div
        className={`border-t py-6 text-xs transition-colors ${
          isLight
            ? 'border-gray-200/90 bg-[#f5f5f7] text-gray-500'
            : 'border-[#221211] bg-[#070202] text-[#8f6e6b]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Region / Language & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            {/* Custom SVG Globe Icon */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border select-none ${
                isLight
                  ? 'bg-white border-gray-200 text-gray-700'
                  : 'bg-[#150706] border-[#38201f] text-[#fadcd9]'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>Global (English)</span>
            </div>

            <p className="text-[11px]">
              © 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.
            </p>
          </div>

          {/* Legal Navigation Pills / Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px]">
            <button
              id="subfooter-privacy"
              onClick={() => onNavigate('privacy')}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-gray-900' : 'hover:text-white'
              }`}
            >
              Privacy Policy
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#38201f]'}>•</span>
            <button
              id="subfooter-terms"
              onClick={() => onNavigate('terms')}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-gray-900' : 'hover:text-white'
              }`}
            >
              Terms of Use
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#38201f]'}>•</span>
            <button
              id="subfooter-delete-account"
              onClick={() => onNavigate('delete-account')}
              className={`transition-colors cursor-pointer font-medium text-[#ba1724] dark:text-[#ff8585] ${
                isLight ? 'hover:underline' : 'hover:underline'
              }`}
            >
              Delete Account
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#38201f]'}>•</span>
            <button
              id="subfooter-cookies"
              onClick={() => onNavigate('cookies')}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-gray-900' : 'hover:text-white'
              }`}
            >
              Cookie Policy
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#38201f]'}>•</span>
            <button
              id="subfooter-acceptable-use"
              onClick={() => onNavigate('acceptable-use')}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-gray-900' : 'hover:text-white'
              }`}
            >
              Acceptable Use
            </button>
            <span className={isLight ? 'text-gray-300' : 'text-[#38201f]'}>•</span>
            <button
              id="subfooter-licenses"
              onClick={() => onNavigate('licenses')}
              className={`transition-colors cursor-pointer ${
                isLight ? 'hover:text-gray-900' : 'hover:text-white'
              }`}
            >
              Licenses &amp; Site Map
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
