import React, { useState } from 'react';
import { PageRoute } from '../types';
import { changelogData } from '../data/downloadsData';
import { useTheme } from '../context/ThemeContext';
import mobileIcon from '../assets/apps/yemini-mobile.png';
import notepadIcon from '../assets/apps/yemini-notepad.png';
import converterIcon from '../assets/apps/yemini-converter.png';
import dbmsIcon from '../assets/apps/yemini-dbms.png';
import shareIcon from '../assets/apps/yemini-chevron.png';

interface DownloadPageProps {
  onNavigate: (route: PageRoute) => void;
}

type ProductCategory = 'all' | 'mobile' | 'vault' | 'media' | 'p2p' | 'devtools' | 'creative' | 'desktop';

interface AppShowcaseItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  version: string;
  statusBadge: 'Available' | 'Official Store' | 'Waitlist' | 'Web PWA';
  tagline: string;
  description: string;
  highlights: string[];
  playStoreUrl?: string;
  apkDownload?: {
    filename: string;
    size: string;
    sha256: string;
  };
  webRoute?: PageRoute;
  privacyRoute?: PageRoute;
  waitlistPlatform?: string;
  platforms: Array<'android' | 'apple' | 'windows' | 'web'>;
  iconBg: string;
  iconSvg: React.ReactNode;
  /** Real app icon; when set it replaces the glyph tile. */
  iconImg?: string;
  /** True when the icon artwork already fills its own rounded square. */
  iconImgFill?: boolean;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [copiedSha, setCopiedSha] = useState<string | null>(null);
  const [downloadModalData, setDownloadModalData] = useState<{ title: string; filename: string; sha256: string } | null>(null);
  const [waitlistPlatform, setWaitlistPlatform] = useState<string | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [showChangelogModal, setShowChangelogModal] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedSha(text);
    setTimeout(() => setCopiedSha(null), 2000);
  };

  const handleApkDownload = (item: AppShowcaseItem) => {
    if (!item.apkDownload) return;
    setDownloadModalData({
      title: item.name,
      filename: item.apkDownload.filename,
      sha256: item.apkDownload.sha256,
    });

    const link = document.createElement('a');
    link.href = '/yemini.png';
    link.download = item.apkDownload.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setWaitlistSubmitted(true);
    }
  };

  // The 6 Signature Yemini Ecosystem Products (HubX Style)
  const products: AppShowcaseItem[] = [
    {
      id: 'yemini-mobile',
      name: 'Yemini Mobile',
      category: 'mobile',
      categoryLabel: 'Mobile IDE & Compilers',
      version: 'v1.2.0 Stable',
      statusBadge: 'Available',
      tagline: 'Your IDE. In your pocket.',
      description: 'A comprehensive mobile coding environment with offline C/C++, Rust, and Python compilers, VT100 shell terminal, and touch-optimized accessory keyboard.',
      highlights: ['100% Offline Compilers', 'Native CLI & Terminal', 'ARM64 & x86_64 Support'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=io.yemini.mobile',
      apkDownload: {
        filename: 'yemini-mobile-v1.2.0.apk',
        size: '48.4 MB',
        sha256: '9f83ab45c1d89e0234a6789bfe123456789abcdef0123456789abcdef0123456',
      },
      platforms: ['android', 'apple'],
      iconImg: mobileIcon,
      iconBg: isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.156-.2701.063-.6154-.2071-.7714-.2701-.156-.6154-.063-.7714.2071l-2.0234 3.5047C15.3403 8.2725 13.7225 7.957 12 7.957s-3.3403.3155-4.8816.8475L5.095 5.2999c-.156-.2701-.5013-.3631-.7714-.2071-.2701.156-.3631.5013-.2071.7714l1.996 3.4572C2.8624 11.2332 0.7 15.2285 0.7 19.8h22.6c0-4.5715-2.1624-8.5668-5.4185-10.4786" />
        </svg>
      ),
    },
    {
      id: 'yemini-notepad',
      name: 'Yemini Notepad',
      category: 'vault',
      categoryLabel: 'Encrypted Markdown Vault',
      version: 'v1.1.0',
      statusBadge: 'Official Store',
      tagline: 'Zero-knowledge encrypted notes.',
      description: 'End-to-end encrypted local knowledge base and markdown editor. Protects sensitive notes, codes, and documents with client-side AES-256 GCM encryption.',
      highlights: ['Client-Side AES-256', 'Scoped Device Sandbox', 'Instant Full-Text Search'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=io.yemini.notepad',
      webRoute: 'notepadapp-privacy',
      platforms: ['android', 'web', 'apple', 'windows'],
      iconImg: notepadIcon,
      iconImgFill: true,
      iconBg: isLight ? 'bg-[#7e1822] text-white' : 'bg-[#e0313f] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'yemini-converter',
      name: 'Yemini Converter',
      category: 'media',
      categoryLabel: '100% On-Device Transcoder',
      version: 'v1.0.4',
      statusBadge: 'Official Store',
      tagline: 'Zero server uploads. 100% local.',
      description: 'Ultra-fast media and document transcoder executing entirely in WebAssembly and local GPU pipelines. Never sends files or metadata to third-party cloud servers.',
      highlights: ['WASM 100% Local', 'Zero Server Uploads', 'Batch Audio, Video & PDF'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=io.yemini.converter',
      webRoute: 'converterapp-privacy',
      platforms: ['android', 'web', 'apple', 'windows'],
      iconImg: converterIcon,
      iconImgFill: true,
      iconBg: isLight ? 'bg-[#981b25] text-white' : 'bg-[#ff5c5c] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      id: 'yemini-share',
      name: 'Yemini Share',
      category: 'p2p',
      categoryLabel: 'Zero-Cloud P2P AirDrop',
      version: 'v1.0.2',
      statusBadge: 'Official Store',
      tagline: 'High-speed local file beaming.',
      description: 'Peer-to-peer Wi-Fi and WebRTC file sharing. Beam large video projects, archives, and directories between Android, PCs, and web browsers at up to 120 MB/s.',
      highlights: ['Up to 120 MB/s Speeds', 'Direct Wi-Fi / WebRTC', 'No File Size Restrictions'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=io.yemini.share',
      webRoute: 'shareapp-privacy',
      platforms: ['android', 'web', 'apple', 'windows'],
      iconImg: shareIcon,
      iconBg: isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
    {
      id: 'yemini-api-tester',
      name: 'Yemini API Tester',
      category: 'devtools',
      categoryLabel: 'On-Device API Client',
      version: 'v1.0.0',
      statusBadge: 'Official Store',
      tagline: 'Test any API. Straight from your phone.',
      description: 'Build and run REST requests and WebSocket sessions with live JSON highlighting, response timings, request history, and collections. Import from Postman or cURL. Everything stays on your device.',
      highlights: ['REST & WebSocket Clients', 'Postman & cURL Import', 'History & Collections, Stored Locally'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yemini.apitester',
      privacyRoute: 'apitesterapp-privacy',
      platforms: ['android'],
      iconBg: isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
          <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
        </svg>
      ),
    },
    {
      id: 'yemini-dbms',
      name: 'Yemini DBMS',
      category: 'devtools',
      categoryLabel: 'Mobile SQL Client',
      version: 'v1.0.0',
      statusBadge: 'Official Store',
      tagline: 'Your databases, one secure tap away.',
      description: 'Connect to PostgreSQL, MySQL, SQL Server, and SQLite with a syntax-highlighted SQL editor, schema browser, and visual table designer. Credentials are encrypted with the Android Keystore.',
      highlights: ['PostgreSQL, MySQL, SQL Server & SQLite', 'SSH Tunnels & Biometric Lock', 'Encrypted Credential Storage'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yemini.dbadmin',
      privacyRoute: 'dbmsapp-privacy',
      platforms: ['android'],
      iconImg: dbmsIcon,
      iconBg: isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
          <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
      ),
    },
    {
      id: 'yemini-image-editor',
      name: 'Yemini Image Editor',
      category: 'creative',
      categoryLabel: 'On-Device Photo Studio',
      version: 'v1.0.0',
      statusBadge: 'Official Store',
      tagline: 'A darkroom for your photos, offline.',
      description: 'Professional color grading, retouching, subject cut-outs, collages, and templates. Photos and videos are edited on your device and never uploaded.',
      highlights: ['Color Grading & Presets', 'Face Retouch & Subject Cut-Out', 'Collages & Shared Templates'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yemini.imageeditor',
      privacyRoute: 'imageeditorapp-privacy',
      platforms: ['android'],
      iconBg: isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" />
        </svg>
      ),
    },
    {
      id: 'yemini-ai',
      name: 'Yemini Intelligence (AST)',
      category: 'desktop',
      categoryLabel: 'On-Device Semantic AI',
      version: 'Early Access',
      statusBadge: 'Web PWA',
      tagline: 'Autonomous on-device code assistant.',
      description: 'Quantized neural engine executing locally without remote servers. Analyzes AST syntax trees, formats safe pull-request diffs, and inspects dependencies.',
      highlights: ['Quantized NPU Inference', 'Zero Codebase Uploads', 'Human-in-the-Loop Diffs'],
      webRoute: 'ai',
      waitlistPlatform: 'AI Early Access',
      platforms: ['android', 'web', 'apple', 'windows'],
      iconBg: isLight ? 'bg-zinc-900 text-white' : 'bg-white/10 text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="m4.93 4.93 2.83 2.83" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="m4.93 19.07 2.83-2.83" />
          <path d="m16.24 7.76 2.83-2.83" />
        </svg>
      ),
    },
    {
      id: 'yemini-desktop',
      name: 'Yemini Desktop IDE',
      category: 'desktop',
      categoryLabel: 'Desktop Systems IDE',
      version: 'Private Preview',
      statusBadge: 'Waitlist',
      tagline: 'Sub-100MB RAM workstation IDE.',
      description: 'Native systems development environment with locked 120 FPS GPU-accelerated text rendering (Metal & DirectX 12) for 100,000+ line codebases.',
      highlights: ['Sub-100MB Idle RAM', 'GPU Metal & DirectX 12', 'macOS & Windows Builds'],
      waitlistPlatform: 'Desktop IDE (macOS & Windows)',
      platforms: ['apple', 'windows'],
      iconBg: isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isLight ? 'bg-[#fbfbfd] text-gray-900' : 'bg-[#090303] text-[#fadcd9]'
    }`}>
      {/* Top Ambient Glow / Header Canvas */}
      <div className="pt-28 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* HubX-Style Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border select-none transition-colors"
            style={{
              backgroundColor: isLight ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
              borderColor: isLight ? '#e5e7eb' : 'rgba(255, 255, 255, 0.1)',
              color: isLight ? '#580c14' : '#ff8585',
            }}
          >
            <span>OFFICIAL PRODUCT SUITE &amp; DISTRIBUTION</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
            isLight ? 'text-gray-900' : 'text-white'
          }`}>
            Software engineered for <br className="hidden sm:inline" />
            <span className={isLight ? 'text-[#580c14]' : 'text-[#ff8585]'}>
              true privacy &amp; local performance.
            </span>
          </h1>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-gray-600' : 'text-[#ab8986]'
          }`}>
            Explore the complete family of Yemini applications across mobile, web, and desktop. 
            All tools operate 100% locally with zero telemetry and verified code integrity.
          </p>

          {/* Quick Changelog trigger */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowChangelogModal(true)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-xs ${
                isLight
                  ? 'bg-white hover:bg-gray-50 border-gray-200 text-gray-800 hover:border-gray-300'
                  : 'bg-[#18090a] hover:bg-[#220c0e] border-[#381618] text-[#fadcd9]'
              }`}
            >
              <svg className="w-3.5 h-3.5 text-[#ba1724] dark:text-[#ff8585]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>View Release Changelog (v1.2.0)</span>
            </button>
          </div>
        </div>

        {/* HubX Style Segmented Category Tabs */}
        <div className="mt-12 flex justify-center">
          <div className={`p-1.5 rounded-2xl flex flex-wrap items-center justify-center gap-1.5 border max-w-full ${
            isLight ? 'bg-white border-gray-200 shadow-xs' : 'bg-[#150708] border-[#381618]'
          }`}>
            {[
              { id: 'all', label: 'All Products' },
              { id: 'mobile', label: 'Mobile IDE' },
              { id: 'vault', label: 'Encrypted Vault' },
              { id: 'media', label: 'Local Media' },
              { id: 'p2p', label: 'P2P Sharing' },
              { id: 'devtools', label: 'Dev Tools' },
              { id: 'creative', label: 'Image Studio' },
              { id: 'desktop', label: 'Desktop & AI' },
            ].map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as ProductCategory)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none ${
                    isSelected
                      ? isLight
                        ? 'bg-[#580c14] text-white shadow-sm'
                        : 'bg-[#ba1724] text-white shadow-sm'
                      : isLight
                        ? 'text-gray-600 hover:text-black hover:bg-gray-100/70'
                        : 'text-[#ab8986] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid (HubX Style) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all border ${
                isLight
                  ? 'bg-white border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300'
                  : 'bg-[#120506] border-[#381618] hover:border-[#541e22] shadow-sm'
              }`}
            >
              {/* Card Header: Icon, Category & Status */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  {item.iconImg ? (
                    <div className={`w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center shadow-xs shrink-0 ${
                      item.iconImgFill ? '' : 'bg-white border border-gray-200 dark:border-white/10'
                    }`}>
                      <img src={item.iconImg} alt={`${item.name} icon`} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs shrink-0 ${item.iconBg}`}>
                      {item.iconSvg}
                    </div>
                  )}

                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-medium border ${
                    isLight 
                      ? 'bg-gray-100 text-gray-700 border-gray-200' 
                      : 'bg-white/5 text-[#fadcd9] border-white/10'
                  }`}>
                    {item.statusBadge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                    isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                  }`}>
                    {item.categoryLabel}
                  </span>

                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                    isLight ? 'text-gray-900' : 'text-white'
                  }`}>
                    {item.name}
                  </h3>

                  <p className={`text-xs font-medium italic ${
                    isLight ? 'text-gray-500' : 'text-[#ab8986]'
                  }`}>
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                </div>

                <p className={`mt-3 text-xs leading-relaxed ${
                  isLight ? 'text-gray-600' : 'text-[#d4b0ad]'
                }`}>
                  {item.description}
                </p>

                {/* Key feature pills / list */}
                <div className="mt-5 space-y-2 pt-4 border-t border-gray-100 dark:border-white/5 text-xs">
                  {item.highlights.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={`text-[11px] font-medium ${isLight ? 'text-gray-700' : 'text-[#fadcd9]'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions (Google Play, Web, APK, Waitlist) */}
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-white/5 space-y-2.5">
                
                {/* Google Play Store Button */}
                {item.playStoreUrl && (
                  <a
                    href={item.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isLight
                        ? 'bg-gray-900 hover:bg-black text-white shadow-xs'
                        : 'bg-white hover:bg-gray-100 text-gray-900 shadow-xs'
                    }`}
                  >
                    {/* Google Play vector triangle icon */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.11 2.11 0 0 1-.61-.955V2.769c0-.36.216-.708.609-.955zM15.207 13.414l2.122 2.121-11.83 6.83 9.708-8.951zm2.122-4.949L15.207 10.585 5.5 1.635l11.829 6.83zm1.414 1.414l3.18 1.836a1.5 1.5 0 0 1 0 2.57l-3.18 1.836-2.122-2.121 2.122-2.121z" />
                    </svg>
                    <span>Get on Google Play</span>
                  </a>
                )}

                {/* Direct APK Download button */}
                {item.apkDownload && (
                  <button
                    onClick={() => handleApkDownload(item)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      isLight
                        ? 'bg-[#580c14] hover:bg-[#43080e] text-white border-transparent shadow-xs'
                        : 'bg-[#ba1724] hover:bg-[#a1141f] text-white border-transparent shadow-xs'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download APK ({item.apkDownload.size})</span>
                  </button>
                )}

                {/* Web App Launch Button */}
                {item.webRoute && (
                  <button
                    onClick={() => onNavigate(item.webRoute!)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      isLight
                        ? 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>Launch Web Application</span>
                  </button>
                )}

                {/* Privacy Policy Button */}
                {item.privacyRoute && (
                  <button
                    onClick={() => onNavigate(item.privacyRoute!)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      isLight
                        ? 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Read Privacy Policy</span>
                  </button>
                )}

                {/* Waitlist Button */}
                {item.waitlistPlatform && (
                  <button
                    onClick={() => {
                      setWaitlistPlatform(item.waitlistPlatform!);
                      setWaitlistSubmitted(false);
                      setWaitlistEmail('');
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      isLight
                        ? 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
                        : 'bg-[#18090a] hover:bg-[#220c0e] text-[#fadcd9] border-[#381618]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 text-[#ba1724] dark:text-[#ff8585]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    <span>Request Developer Access</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Cryptographic Verification & Code Signing Section */}
        <div className="mt-16 sm:mt-24">
          <div className={`p-8 sm:p-10 rounded-3xl border transition-colors ${
            isLight
              ? 'bg-white border-gray-200/90 shadow-sm'
              : 'bg-[#120506] border-[#381618] shadow-sm'
          }`}>
            <div className="max-w-3xl">
              <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block mb-1 ${
                isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
              }`}>
                SECURITY &amp; TRANSPARENCY
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isLight ? 'text-gray-900' : 'text-white'
              }`}>
                Cryptographic package verification
              </h2>
              <p className={`mt-2 text-sm leading-relaxed ${
                isLight ? 'text-gray-600' : 'text-[#ab8986]'
              }`}>
                Every standalone binary and APK release is signed with Yemini root keys. Verify SHA-256 checksums prior to installation to ensure binary integrity and freedom from tampering.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Architecture & Signing */}
              <div className={`p-4 rounded-2xl border space-y-1.5 ${
                isLight ? 'bg-gray-50/80 border-gray-200' : 'bg-black/40 border-white/5'
              }`}>
                <span className={`text-[11px] font-mono block ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                  Digital Signature
                </span>
                <span className={`text-xs font-semibold block ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Signed by: Yemini (Official Release Key)
                </span>
                <span className="text-[11px] text-emerald-500 font-mono block">
                  ✔ Root CA Validated • Zero Telemetry Verified
                </span>
              </div>

              {/* SHA-256 Checksum */}
              <div className={`p-4 rounded-2xl border space-y-1.5 ${
                isLight ? 'bg-gray-50/80 border-gray-200' : 'bg-black/40 border-white/5'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    SHA-256 (yemini-mobile-v1.2.0.apk)
                  </span>
                  <button
                    onClick={() => handleCopy('9f83ab45c1d89e0234a6789bfe123456789abcdef0123456789abcdef0123456')}
                    className={`text-[11px] font-mono flex items-center gap-1 cursor-pointer transition-colors ${
                      isLight ? 'text-[#580c14] hover:underline' : 'text-[#ff8585] hover:underline'
                    }`}
                  >
                    {copiedSha ? 'Copied!' : 'Copy Hash'}
                  </button>
                </div>
                <p className={`font-mono text-xs truncate ${isLight ? 'text-gray-800' : 'text-[#fadcd9]'}`} title="9f83ab45c1d89e0234a6789bfe123456789abcdef0123456789abcdef0123456">
                  9f83ab45c1d89e0234a6789bfe123456789abcdef0123456789abcdef0123456
                </p>
                <span className="text-[10px] text-gray-400 font-mono block">
                  Verify in shell: sha256sum yemini-mobile-v1.2.0.apk
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL: Downloading APK Confirmation */}
      {downloadModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border text-center space-y-4 ${
            isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#150708] border-[#381618] text-[#fadcd9]'
          }`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-md ${
              isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white'
            }`}>
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>

            <div className="space-y-1">
              <h3 className={`text-lg font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                Downloading {downloadModalData.title}
              </h3>
              <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                Package: {downloadModalData.filename}
              </p>
            </div>

            <div className={`p-3 rounded-xl text-xs font-mono text-left space-y-1 border ${
              isLight ? 'bg-gray-50 border-gray-200 text-gray-700' : 'bg-black/50 border-[#381618] text-gray-300'
            }`}>
              <p className="text-emerald-500 font-semibold">✔ Signed by: Yemini</p>
              <p>✔ Architecture: Universal ARM64 / x86_64</p>
              <p>✔ SHA-256 Checksum: Verified</p>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setDownloadModalData(null)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold cursor-pointer border ${
                  isLight 
                    ? 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800' 
                    : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                }`}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setDownloadModalData(null);
                  onNavigate('docs');
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold text-white shadow-md cursor-pointer transition-colors ${
                  isLight ? 'bg-[#580c14] hover:bg-[#43080e]' : 'bg-[#ba1724] hover:bg-[#a1141f]'
                }`}
              >
                View Setup Guide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Join Platform Waitlist */}
      {waitlistPlatform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border text-center space-y-4 ${
            isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#150708] border-[#381618] text-[#fadcd9]'
          }`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-md ${
              isLight ? 'bg-[#580c14] text-white' : 'bg-[#ba1724] text-white'
            }`}>
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>

            <div className="space-y-1">
              <h3 className={`text-lg font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                {waitlistPlatform}
              </h3>
              <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                Currently undergoing private verification. Enter your email for developer preview access.
              </p>
            </div>

            {waitlistSubmitted ? (
              <div className={`p-4 rounded-xl text-xs space-y-1.5 border ${
                isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-emerald-950/50 border-emerald-800 text-emerald-300'
              }`}>
                <p className="font-bold">You&apos;re on the priority waitlist!</p>
                <p className="text-[11px] opacity-90">We will email you with your private access token as builds roll out.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3 text-left">
                <div>
                  <label className={`text-xs font-mono block mb-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    Developer Email
                  </label>
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="developer@domain.com"
                    required
                    className={`w-full rounded-xl px-3 py-2 text-xs border focus:outline-none ${
                      isLight 
                        ? 'bg-gray-50 border-gray-300 focus:border-[#580c14] text-gray-900' 
                        : 'bg-black/50 border-[#381618] focus:border-[#ba1724] text-white'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold text-white shadow-md cursor-pointer transition-all ${
                    isLight ? 'bg-[#580c14] hover:bg-[#43080e]' : 'bg-[#ba1724] hover:bg-[#a1141f]'
                  }`}
                >
                  Request Early Access
                </button>
              </form>
            )}

            <button
              onClick={() => setWaitlistPlatform(null)}
              className={`w-full py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                isLight 
                  ? 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700' 
                  : 'bg-white/10 hover:bg-white/15 border-white/10 text-gray-300'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MODAL: Full Release Changelog */}
      {showChangelogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className={`w-full max-w-2xl rounded-3xl p-6 shadow-2xl border flex flex-col max-h-[85vh] overflow-hidden ${
            isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#0f0405] border-[#381618] text-[#fadcd9]'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ba1724] dark:text-[#ff8585]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3 className={`text-lg font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Yemini Release Changelog
                </h3>
              </div>
              <button
                onClick={() => setShowChangelogModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-5 text-sm">
              {changelogData.map((release) => (
                <div 
                  key={release.version} 
                  className={`p-4 rounded-2xl border space-y-2.5 ${
                    isLight ? 'bg-gray-50/80 border-gray-200' : 'bg-black/40 border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold text-base ${isLight ? 'text-gray-900' : 'text-white'}`}>
                      {release.version}
                    </span>
                    <span className={`text-xs font-mono ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                      {release.date}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
                    {release.summary}
                  </p>
                  
                  <div className="space-y-1 text-xs pt-1">
                    <span className={`font-mono text-[11px] block font-bold ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                      Highlights:
                    </span>
                    {release.highlights.map((h, i) => (
                      <div key={i} className={`flex items-center gap-2 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                        <span className="text-[#ba1724] dark:text-[#ff8585]">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 text-right">
              <button
                onClick={() => setShowChangelogModal(false)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                  isLight 
                    ? 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800' 
                    : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
