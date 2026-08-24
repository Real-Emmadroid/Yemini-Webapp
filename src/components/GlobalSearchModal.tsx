import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Download, Sparkles, FileText, ArrowRight, CornerDownLeft, ShieldCheck } from 'lucide-react';
import { PageRoute, SearchResultItem } from '../types';
import { docArticles } from '../data/docsData';
import { platformsData } from '../data/downloadsData';
import { resourcesData } from '../data/resourcesData';

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
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build searchable index
  const searchItems: SearchResultItem[] = [
    {
      id: 'prod-home',
      title: 'Yemini Ecosystem Overview',
      description: 'Developer tools for building without limits across mobile, desktop, and AI.',
      category: 'Product',
      route: 'home'
    },
    {
      id: 'prod-mobile',
      title: 'Yemini Mobile for Android',
      description: 'Full-featured mobile coding editor, local shell, and touch ergonomics.',
      category: 'Product',
      route: 'mobile'
    },
    {
      id: 'prod-desktop',
      title: 'Yemini Desktop IDE',
      description: 'Professional desktop IDE for Windows, macOS, and Linux with GPU text engine.',
      category: 'Product',
      route: 'desktop'
    },
    {
      id: 'prod-ai',
      title: 'Yemini AI Agent',
      description: 'Autonomous coding agent, AST repository graph, and multi-turn refactoring.',
      category: 'Product',
      route: 'ai'
    },
    {
      id: 'legal-app-privacy',
      title: 'Yemini Android App Privacy Policy',
      description: 'Dedicated in-app privacy policy for Yemini Code Editor Android app & offline runtime plugins.',
      category: 'Legal',
      route: 'app-privacy'
    },
    // Docs
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
      title: `Download Yemini for ${p.name}`,
      description: `${p.subtitle} • ${p.fileSize} • ${p.packageType}`,
      category: 'Download' as const,
      route: 'download' as PageRoute,
      targetId: p.id
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
    ? searchItems.slice(0, 8)
    : searchItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 12);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
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

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product':
        return <Sparkles className="w-4 h-4 text-[#ff6767]" />;
      case 'Docs':
        return <BookOpen className="w-4 h-4 text-sky-400" />;
      case 'Download':
        return <Download className="w-4 h-4 text-emerald-400" />;
      case 'Legal':
        return <ShieldCheck className="w-4 h-4 text-[#ff8585]" />;
      default:
        return <FileText className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0e0e13] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation, downloads, guides..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-500 hover:text-zinc-300 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/80 rounded border border-zinc-700 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-zinc-600 mt-1">Try searching for &quot;Python&quot;, &quot;Android&quot;, &quot;Privacy&quot;, &quot;Terminal&quot;, or &quot;Desktop&quot;</p>
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
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-zinc-800/90 border border-[#ff6767]/30 text-white'
                      : 'hover:bg-zinc-900/60 text-zinc-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-3 shrink-0">
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-[#ff6767]">
                        <span>Select</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-[#0a0a0d] border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px]">↵</kbd>
              <span>Open</span>
            </span>
          </div>
          <span>Yemini Ecosystem Index</span>
        </div>
      </div>
    </div>
  );
};
