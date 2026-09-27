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
                An engineering initiative by{' '}
                <a
                  href="https://stfweb3ecosystem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold hover:underline inline-flex items-center gap-0.5 ${
                    isLight ? 'text-gray-800 hover:text-black' : 'text-[#fadcd9] hover:text-white'
                  }`}
                >
                  STF Ecosystem (Sphere Tech Foundation)
                  <svg className="w-2.5 h-2.5 opacity-60 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                .
              </p>
            </div>
          </div>

          {/* Social Channels (@yeminiofficial) & Community Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* Facebook */}
            <a
              id="footer-social-facebook"
              href="https://facebook.com/yeminiofficial"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini on Facebook (@yeminiofficial)"
              title="Facebook: @yeminiofficial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              id="footer-social-x"
              href="https://x.com/yeminiofficial"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini on X (@yeminiofficial)"
              title="X: @yeminiofficial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              id="footer-social-tiktok"
              href="https://tiktok.com/@yeminiofficial"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini on TikTok (@yeminiofficial)"
              title="TikTok: @yeminiofficial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              id="footer-social-instagram"
              href="https://instagram.com/yeminiofficial"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'border-gray-200 hover:border-black hover:text-black bg-white text-gray-600 shadow-xs'
                  : 'border-[#38201f] hover:border-[#ff8585] hover:text-white bg-[#180908] text-[#ab8986]'
              }`}
              aria-label="Yemini on Instagram (@yeminiofficial)"
              title="Instagram: @yeminiofficial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

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
              aria-label="Sphere Tech Foundation GitHub"
              title="GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
              aria-label="Sphere Tech Foundation Discord"
              title="Discord Community"
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

          {/* Column 4: Parent Company & Foundation */}
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
                <a
                  id="footer-link-stf-parent"
                  href="https://stfweb3ecosystem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-left transition-colors inline-flex items-center gap-1 cursor-pointer font-medium ${
                    isLight ? 'text-gray-900 hover:text-[#ba1724]' : 'text-white hover:text-[#ff8585]'
                  }`}
                >
                  <span>Sphere Tech Foundation</span>
                  <svg className="w-3 h-3 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
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
                  id="footer-link-stf-ecosystem-url"
                  href="https://stfweb3ecosystem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-left transition-colors inline-flex items-center gap-1 cursor-pointer ${
                    isLight ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  <span>stfweb3ecosystem.com</span>
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
