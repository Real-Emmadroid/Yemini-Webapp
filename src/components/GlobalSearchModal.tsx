import React, { useState, useEffect, useRef } from 'react';
import { PageRoute, SearchResultItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from './StatusBadge';
import { docArticles } from '../data/docsData';
import { platformsData } from '../data/downloadsData';
import { resourcesData } from '../data/resourcesData';
import { MobileVisual, DesktopVisual, AiVisual, SuiteVisual } from './ProductVisuals';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute, targetId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isLight = theme === 'light';

  // Search dataset
  const searchItems: (SearchResultItem & { status?: 'available' | 'in-development' })[] = [
    {
      id: 'prod-home',
      title: 'Yemini Ecosystem Overview',
      description: 'Software that makes creation and technology accessible to anyone.',
      category: 'Product',
      route: 'home'
    },
    {
      id: 'prod-mobile',
      title: 'Yemini Mobile for Android',
      description: 'Full-featured mobile coding editor, on-device compilers, local shell, and touch ergonomics.',
      category: 'Product',
      route: 'mobile',
      status: 'available'
    },
    {
      id: 'prod-desktop',
      title: 'Yemini Desktop IDE',
      description: 'Professional desktop IDE for macOS, Windows, and Linux. Sub-100MB RAM footprint.',
      category: 'Product',
      route: 'desktop',
      status: 'in-development'
    },
    {
      id: 'prod-ai',
      title: 'Yemini Intelligence',
      description: 'Autonomous coding agent, AST repository graph, and multi-turn refactoring.',
      category: 'Product',
      route: 'ai',
      status: 'in-development'
    },
    {
      id: 'legal-editor-privacy',
      title: 'Yemini Code Editor Privacy Policy',
      description: 'Dedicated in-app privacy policy for Yemini Code Editor Android app & offline runtime plugins.',
      category: 'Legal',
      route: 'editorapp-privacy'
    },
    {
      id: 'legal-notepad-privacy',
      title: 'Yemini Notepad Privacy Policy',
      description: 'Dedicated in-app privacy policy for Yemini Notepad Android application, checklists & voice memos.',
      category: 'Legal',
      route: 'notepadapp-privacy'
    },
    {
      id: 'legal-converter-privacy',
      title: 'Yemini Converter Privacy Policy',
      description: 'Dedicated in-app privacy policy for Yemini Converter offline media & document processing.',
      category: 'Legal',
      route: 'converterapp-privacy'
    },
    {
      id: 'legal-share-privacy',
      title: 'Yemini Share Privacy Policy',
      description: 'Dedicated in-app privacy policy for Yemini Share offline P2P file sharing & transfers.',
      category: 'Legal',
      route: 'shareapp-privacy'
    },
    // Documentation articles
    ...Object.values(docArticles).map(doc => ({
      id: `doc-${doc.id}`,
      title: doc.title,
      description: doc.summary,
      category: 'Docs' as const,
      route: 'docs' as PageRoute,
      targetId: doc.id
    })),
    // Downloads
    ...platformsData.map(p => ({
      id: `dl-${p.id}`,
      title: p.status === 'available' ? `Download Yemini for ${p.name}` : `Yemini for ${p.name} (Waitlist)`,
      description: `${p.subtitle} • ${p.fileSize} • ${p.status === 'available' ? 'Available now' : 'In development'}`,
      category: 'Download' as const,
      route: 'download' as PageRoute,
      targetId: p.id,
      status: p.status === 'available' ? ('available' as const) : ('in-development' as const)
    })),
    // Resources
    ...resourcesData.map(r => ({
      id: `res-${r.id}`,
      title: r.title,
      description: r.excerpt,
      category: 'Resource' as const,
      route: 'resources' as PageRoute,
      targetId: r.id
    }))
  ];

  const filteredItems = query.trim() === ''
    ? []
    : searchItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        const item = filteredItems[selectedIndex];
        onNavigate(item.route, item.targetId);
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelectProduct = (route: PageRoute) => {
    onNavigate(route);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center md:justify-end pt-16 md:pt-20 px-4 md:px-8 lg:px-16 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Card Modal Styled Exactly Like Meta's tyhyu.JPG */}
      <div 
        className={`relative w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden transition-all transform duration-200 z-10 my-4 ${
          isLight 
            ? 'bg-white text-gray-900 border border-gray-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]' 
            : 'bg-[#140808] text-[#fadcd9] border border-[#3d2423] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]'
        }`}
      >
        <div className="p-6 sm:p-8">
          {/* Top Bar: Title & Close Button (Matching tyhyu.JPG) */}
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl sm:text-3xl font-medium tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}>
              Search Yemini
            </h2>

            {/* Custom SVG Close Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isLight 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-[#2c1b1a] text-[#fadcd9]'
              }`}
              aria-label="Close search"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Search Input Box (Matching rounded box with search icon in tyhyu.JPG) */}
          <div className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${
            isLight 
              ? 'bg-white border-gray-300 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5' 
              : 'bg-[#1f0e0d] border-[#43302f] focus-within:border-[#ff8585] focus-within:ring-2 focus-within:ring-[#580c14]/40'
          }`}>
            {/* Custom SVG Magnifying Glass Icon */}
            <svg 
              className={`w-5 h-5 shrink-0 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for products or articles"
              className={`w-full bg-transparent text-base sm:text-lg focus:outline-none ${
                isLight ? 'text-gray-900 placeholder-gray-400' : 'text-white placeholder-zinc-500'
              }`}
            />

            {query && (
              <button
                onClick={() => setQuery('')}
                className={`p-1 rounded-full text-xs font-semibold ${
                  isLight ? 'text-gray-400 hover:text-black' : 'text-[#ab8986] hover:text-white'
                }`}
                aria-label="Clear query"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Initial View (query is empty): Devices / Products Quick Grid (Exactly matching tyhyu.JPG) */}
          {query.trim() === '' ? (
            <div className="mt-8 space-y-6">
              <div>
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                  isLight ? 'text-gray-500' : 'text-[#ab8986]'
                }`}>
                  Products
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {/* Product 1: Yemini Mobile */}
                  <button
                    onClick={() => handleSelectProduct('mobile')}
                    className={`group p-4 rounded-2xl border text-center flex flex-col items-center justify-between transition-all cursor-pointer ${
                      isLight 
                        ? 'bg-gray-50/70 border-gray-200/80 hover:bg-white hover:border-gray-300 hover:shadow-md' 
                        : 'bg-[#1b0c0b] border-[#43302f] hover:bg-[#271312] hover:border-[#580c14]'
                    }`}
                  >
                    <div className="w-full h-24 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                      <MobileVisual size="sm" />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold tracking-tight ${
                        isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                        Yemini Mobile
                      </div>
                      <div className={`text-[11px] mt-0.5 ${
                        isLight ? 'text-gray-500' : 'text-[#ab8986]'
                      }`}>
                        Android APK (v1.2.0)
                      </div>
                    </div>
                  </button>

                  {/* Product 2: Yemini Desktop */}
                  <button
                    onClick={() => handleSelectProduct('desktop')}
                    className={`group p-4 rounded-2xl border text-center flex flex-col items-center justify-between transition-all cursor-pointer ${
                      isLight 
                        ? 'bg-gray-50/70 border-gray-200/80 hover:bg-white hover:border-gray-300 hover:shadow-md' 
                        : 'bg-[#1b0c0b] border-[#43302f] hover:bg-[#271312] hover:border-[#580c14]'
                    }`}
                  >
                    <div className="w-full h-24 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                      <DesktopVisual size="sm" />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold tracking-tight ${
                        isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                        Yemini Desktop
                      </div>
                      <div className={`text-[11px] mt-0.5 ${
                        isLight ? 'text-gray-500' : 'text-[#ab8986]'
                      }`}>
                        macOS, Windows, Linux
                      </div>
                    </div>
                  </button>

                  {/* Product 3: Yemini Intelligence */}
                  <button
                    onClick={() => handleSelectProduct('ai')}
                    className={`group p-4 rounded-2xl border text-center flex flex-col items-center justify-between transition-all cursor-pointer col-span-2 sm:col-span-1 ${
                      isLight 
                        ? 'bg-gray-50/70 border-gray-200/80 hover:bg-white hover:border-gray-300 hover:shadow-md' 
                        : 'bg-[#1b0c0b] border-[#43302f] hover:bg-[#271312] hover:border-[#580c14]'
                    }`}
                  >
                    <div className="w-full h-24 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                      <AiVisual size="sm" />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold tracking-tight ${
                        isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                        Yemini Intelligence
                      </div>
                      <div className={`text-[11px] mt-0.5 ${
                        isLight ? 'text-gray-500' : 'text-[#ab8986]'
                      }`}>
                        AST Autonomous Partner
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Popular quick searches */}
              <div>
                <h4 className={`text-xs font-semibold mb-2.5 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`}>
                  Suggested Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Download APK', query: 'Download' },
                    { label: 'Offline Compilers', query: 'Offline' },
                    { label: 'Python on Android', query: 'Python' },
                    { label: 'Desktop Waitlist', query: 'Desktop' },
                    { label: 'Privacy Policy', query: 'Privacy' },
                    { label: 'Documentation', query: 'Docs' }
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => setQuery(chip.query)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                        isLight 
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                          : 'bg-[#271716] hover:bg-[#372624] text-[#fadcd9]'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Live Filtered Results List */
            <div className="mt-4 max-h-[50vh] overflow-y-auto divide-y space-y-1">
              {filteredItems.length === 0 ? (
                <div className={`py-12 text-center ${isLight ? 'text-gray-400' : 'text-zinc-500'}`}>
                  <p className="text-base font-medium">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs mt-1 opacity-70">
                    Try &ldquo;Mobile&rdquo;, &ldquo;Desktop&rdquo;, &ldquo;Python&rdquo;, &ldquo;Download&rdquo;, or &ldquo;Privacy&rdquo;
                  </p>
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.route, item.targetId);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? isLight 
                            ? 'bg-[#580c14]/10 text-black' 
                            : 'bg-[#580c14]/40 text-white'
                          : isLight 
                            ? 'hover:bg-gray-50 text-gray-700' 
                            : 'hover:bg-[#271312] text-[#fadcd9]'
                      }`}
                    >
                      <div className="min-w-0 pr-3">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`font-semibold text-sm truncate ${
                            isLight ? 'text-gray-900' : 'text-white'
                          }`}>
                            {item.title}
                          </span>
                          {item.status && (
                            <StatusBadge status={item.status} size="sm" />
                          )}
                          <span className={`text-[10px] uppercase font-mono px-1.5 py-0.2 rounded border ${
                            isLight 
                              ? 'bg-gray-100 text-gray-600 border-gray-200' 
                              : 'bg-black text-[#ab8986] border-[#43302f]'
                          }`}>
                            {item.category}
                          </span>
                        </div>
                        <p className={`text-xs line-clamp-1 ${
                          isLight ? 'text-gray-500' : 'text-[#ab8986]'
                        }`}>
                          {item.description}
                        </p>
                      </div>

                      {/* Custom Arrow SVG */}
                      <svg className={`w-4 h-4 shrink-0 ${isLight ? 'text-gray-400' : 'text-[#ab8986]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
