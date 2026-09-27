import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { docSections, docArticles } from '../data/docsData';
import { useTheme } from '../context/ThemeContext';

interface DocsPageProps {
  onNavigate: (route: PageRoute) => void;
  activeDocId?: string;
}

export const DocsPage: React.FC<DocsPageProps> = ({
  onNavigate,
  activeDocId = 'introduction'
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [selectedDocId, setSelectedDocId] = useState<string>(activeDocId);
  const [searchFilter, setSearchFilter] = useState('');
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [tabletSidebarVisible, setTabletSidebarVisible] = useState(true);

  const articleTopRef = useRef<HTMLDivElement>(null);

  const activeArticle = docArticles[selectedDocId] || docArticles['introduction'];

  // Flatten articles for next / previous navigation
  const allDocIds = Object.keys(docArticles);
  const currentIndex = allDocIds.indexOf(selectedDocId);
  const prevDocId = currentIndex > 0 ? allDocIds[currentIndex - 1] : null;
  const nextDocId = currentIndex < allDocIds.length - 1 ? allDocIds[currentIndex + 1] : null;

  // Total topics count
  const totalTopicsCount = allDocIds.length;

  const handleCopyCode = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleSelectTopic = (docId: string) => {
    setSelectedDocId(docId);
    setMobileDrawerOpen(false);

    // Smooth scroll article into view
    setTimeout(() => {
      if (articleTopRef.current) {
        articleTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileDrawerOpen]);

  // Sidebar navigation content component (shared between desktop, tablet, and mobile drawer)
  const renderSidebarContent = (isDrawer = false) => {
    return (
      <div className="space-y-4">
        {/* Search Box */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search topics & guides..."
            className={`w-full rounded-xl pl-9 pr-8 py-2 text-xs transition-colors focus:outline-none ${
              isLight
                ? 'bg-zinc-100/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-[#580c14] focus:bg-white'
                : 'bg-[#121218] border border-zinc-800 text-white placeholder-zinc-500 focus:border-[#ff6767]'
            }`}
          />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1"
              aria-label="Clear search"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Section List */}
        <div className="space-y-4 text-xs">
          {docSections.map((sec) => {
            const matchingItems = sec.items.filter(item => 
              item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
              sec.title.toLowerCase().includes(searchFilter.toLowerCase())
            );
            if (searchFilter && matchingItems.length === 0) return null;

            return (
              <div key={sec.id} className="space-y-1.5">
                <h4 className={`font-mono font-semibold uppercase tracking-wider text-[10px] px-2.5 py-1 ${
                  isLight ? 'text-zinc-500' : 'text-zinc-500'
                }`}>
                  {sec.title}
                </h4>
                <div className="space-y-0.5">
                  {(searchFilter ? matchingItems : sec.items).map((item) => {
                    const isActive = selectedDocId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectTopic(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors cursor-pointer ${
                          isActive
                            ? isLight
                              ? 'bg-[#580c14]/10 text-[#580c14] font-bold border-l-3 border-[#580c14]'
                              : 'bg-zinc-800 text-[#ff8585] font-semibold border-l-3 border-[#ff6767]'
                            : isLight
                            ? 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                        }`}
                      >
                        <span className="truncate pr-2">{item.title}</span>
                        {item.badge && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-medium shrink-0 ${
                            isLight
                              ? 'bg-[#580c14]/10 text-[#580c14]'
                              : 'bg-[#5b0000]/60 text-[#ff8585]'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Mobile & Tablet Quick Bar (Fixed/Sticky Helper for immediate access to docs topics) */}
      <div className="lg:hidden mb-4 sticky top-14 z-30 pt-2 pb-2">
        <div className={`p-3 rounded-2xl border shadow-sm backdrop-blur-md flex items-center justify-between gap-3 ${
          isLight 
            ? 'bg-white/95 border-zinc-200 text-zinc-900' 
            : 'bg-[#0c0c12]/95 border-zinc-800 text-white'
        }`}>
          {/* Current Topic indicator */}
          <div className="min-w-0 flex-1">
            <span className={`text-[10px] font-mono uppercase tracking-wider block truncate ${
              isLight ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              {activeArticle.category}
            </span>
            <span className={`text-xs font-bold block truncate ${
              isLight ? 'text-zinc-900' : 'text-zinc-100'
            }`}>
              {activeArticle.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Tablet toggle button */}
            <button
              onClick={() => setTabletSidebarVisible(!tabletSidebarVisible)}
              className={`hidden md:flex lg:hidden items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                tabletSidebarVisible
                  ? isLight
                    ? 'bg-[#580c14] text-white border-[#580c14]'
                    : 'bg-[#580c14] text-white border-[#ff6767]/40'
                  : isLight
                  ? 'bg-zinc-100 text-zinc-800 border-zinc-200'
                  : 'bg-zinc-900 text-zinc-200 border-zinc-800'
              }`}
            >
              <span>{tabletSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}</span>
            </button>

            {/* Mobile Drawer Trigger (visible on small screens) */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className={`md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer border shadow-xs transition-colors ${
                isLight
                  ? 'bg-[#580c14] text-white border-[#580c14] hover:bg-[#720e1a]'
                  : 'bg-[#580c14] text-white border-[#ff6767]/40 hover:bg-[#720e1a]'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span>Topics ({totalTopicsCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar (Desktop & Tablet) */}
        {tabletSidebarVisible && (
          <aside className="hidden md:block md:col-span-5 lg:col-span-3">
            <div className={`border rounded-2xl p-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4 shadow-xs ${
              isLight
                ? 'bg-white border-zinc-200'
                : 'bg-[#09090d] border-zinc-800/90'
            }`}>
              <div className="flex items-center justify-between pb-1 border-b border-zinc-200/50 dark:border-zinc-800/60">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                  isLight ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  Documentation
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isLight ? 'bg-zinc-100 text-zinc-600' : 'bg-zinc-900 text-zinc-400'
                }`}>
                  {totalTopicsCount} guides
                </span>
              </div>
              {renderSidebarContent(false)}
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main 
          ref={articleTopRef}
          className={`space-y-8 rounded-3xl p-5 sm:p-8 lg:p-10 border transition-all ${
            tabletSidebarVisible 
              ? 'col-span-1 md:col-span-7 lg:col-span-9' 
              : 'col-span-1 md:col-span-12'
          } ${
            isLight
              ? 'bg-white border-zinc-200 shadow-sm text-zinc-900'
              : 'bg-[#0a0a0e] border-zinc-800 text-white'
          }`}
        >
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <button 
              onClick={() => onNavigate('home')} 
              className={`hover:underline cursor-pointer ${
                isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Docs
            </button>
            <span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>/</span>
            <span className={isLight ? 'text-zinc-600' : 'text-zinc-400'}>{activeArticle.category}</span>
            <span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>/</span>
            <span className={`font-semibold ${isLight ? 'text-[#580c14]' : 'text-[#ff8585]'}`}>
              {activeArticle.title}
            </span>
          </div>

          {/* Article Header */}
          <div className={`space-y-3 pb-6 border-b ${
            isLight ? 'border-zinc-200' : 'border-zinc-800'
          }`}>
            <h1 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              {activeArticle.title}
            </h1>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-zinc-600' : 'text-zinc-400'
            }`}>
              {activeArticle.summary}
            </p>
            <div className={`text-xs font-mono flex flex-wrap items-center gap-3 pt-1 ${
              isLight ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              <span>Last updated: {activeArticle.lastUpdated}</span>
              <span>•</span>
              <span>Official Yemini Guide</span>
            </div>
          </div>

          {/* Quick Outline / In-page Jump (Super handy for mobile & tablet reading) */}
          {activeArticle.content.length > 1 && (
            <div className={`p-4 rounded-2xl border text-xs space-y-2 ${
              isLight
                ? 'bg-zinc-50/80 border-zinc-200'
                : 'bg-zinc-900/40 border-zinc-800'
            }`}>
              <span className={`font-mono uppercase tracking-wider font-semibold block text-[10px] ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                On this page
              </span>
              <div className="flex flex-wrap gap-2">
                {activeArticle.content.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#heading-${idx}`}
                    className={`px-2.5 py-1 rounded-lg transition-colors truncate max-w-full ${
                      isLight
                        ? 'bg-white text-zinc-700 hover:text-black border border-zinc-200'
                        : 'bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-700/60'
                    }`}
                  >
                    {sec.heading}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-8 text-sm leading-relaxed">
            {activeArticle.content.map((sec, idx) => (
              <div key={idx} id={`heading-${idx}`} className="space-y-3.5 scroll-mt-24">
                <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  {sec.heading}
                </h2>
                
                <p className={`leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  {sec.text}
                </p>

                {/* Callout Box */}
                {sec.callout && (
                  <div className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-1.5 ${
                    sec.callout.type === 'tip'
                      ? isLight
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-emerald-950/40 border-emerald-800/50 text-emerald-200'
                      : sec.callout.type === 'warning'
                      ? isLight
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : 'bg-amber-950/40 border-amber-800/50 text-amber-200'
                      : isLight
                      ? 'bg-sky-50 border-sky-200 text-sky-900'
                      : 'bg-sky-950/40 border-sky-800/50 text-sky-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wide">
                      <span className="font-mono">
                        {sec.callout.type === 'tip' ? '💡' : sec.callout.type === 'warning' ? '⚠️' : 'ℹ️'}
                      </span>
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="opacity-95">{sec.callout.text}</p>
                  </div>
                )}

                {/* Code Snippet Box */}
                {sec.code && (
                  <div className="rounded-2xl border border-zinc-800 bg-[#0d0d12] overflow-hidden font-mono text-xs max-w-full">
                    <div className="px-4 py-2.5 bg-[#14141c] border-b border-zinc-800 flex items-center justify-between text-zinc-400">
                      <span className="text-[11px] font-semibold text-zinc-300">{sec.code.language}</span>
                      <button
                        onClick={() => handleCopyCode(sec.code!.code, idx)}
                        className="flex items-center gap-1.5 text-[11px] py-1 px-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer"
                        aria-label="Copy code snippet"
                      >
                        {copiedCodeIndex === idx ? (
                          <>
                            <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="text-emerald-400 font-medium">Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-zinc-200 overflow-x-auto leading-relaxed text-xs">
                      <code>{sec.code.code}</code>
                    </pre>
                    {sec.code.caption && (
                      <div className="px-4 py-2 bg-[#101016] border-t border-zinc-800/80 text-[11px] text-zinc-400">
                        {sec.code.caption}
                      </div>
                    )}
                  </div>
                )}

                {/* Bullet List */}
                {sec.list && (
                  <ul className="space-y-2.5 pl-1 pt-1">
                    {sec.list.map((li, i) => (
                      <li key={i} className={`flex items-start gap-2.5 ${
                        isLight ? 'text-zinc-700' : 'text-zinc-300'
                      }`}>
                        <span className={`font-bold mt-0.5 shrink-0 ${
                          isLight ? 'text-[#580c14]' : 'text-[#ff6767]'
                        }`}>
                          •
                        </span>
                        <span className="leading-relaxed">{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Next / Previous Navigation Footer */}
          <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isLight ? 'border-zinc-200' : 'border-zinc-800'
          }`}>
            {prevDocId ? (
              <button
                onClick={() => handleSelectTopic(prevDocId)}
                className={`w-full sm:w-auto flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isLight
                    ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-900'
                    : 'bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800 text-white'
                }`}
              >
                <svg className="w-4 h-4 text-zinc-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <div className="min-w-0">
                  <span className={`text-[10px] font-mono block ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Previous Topic
                  </span>
                  <span className="text-xs font-bold block truncate">
                    {docArticles[prevDocId].title}
                  </span>
                </div>
              </button>
            ) : <div />}

            {nextDocId ? (
              <button
                onClick={() => handleSelectTopic(nextDocId)}
                className={`w-full sm:w-auto flex items-center justify-between gap-3 p-3.5 rounded-2xl border text-right transition-all cursor-pointer ${
                  isLight
                    ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-900'
                    : 'bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800 text-white'
                }`}
              >
                <div className="min-w-0">
                  <span className={`text-[10px] font-mono block ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Next Topic
                  </span>
                  <span className="text-xs font-bold block truncate">
                    {docArticles[nextDocId].title}
                  </span>
                </div>
                <svg className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#580c14]' : 'text-[#ff6767]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            ) : <div />}
          </div>
        </main>
      </div>

      {/* Mobile Drawer (Bottom Sheet / Modal on small screens) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop click to close */}
          <div 
            className="flex-1" 
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className={`w-full rounded-t-3xl border-t p-5 max-h-[82vh] flex flex-col shadow-2xl animate-slideUp ${
            isLight
              ? 'bg-white border-zinc-200 text-zinc-900'
              : 'bg-[#0e0e14] border-zinc-800 text-white'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Documentation Topics</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isLight ? 'bg-zinc-100 text-zinc-600' : 'bg-zinc-800 text-zinc-300'
                }`}>
                  {totalTopicsCount}
                </span>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className={`p-1.5 rounded-xl border cursor-pointer ${
                  isLight
                    ? 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-black'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                }`}
                aria-label="Close topics drawer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto py-3 space-y-4">
              {renderSidebarContent(true)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
