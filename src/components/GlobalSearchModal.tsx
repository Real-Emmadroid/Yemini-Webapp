import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Download, Sparkles, FileText, ArrowRight, CornerDownLeft, ShieldCheck, Smartphone, Monitor, RefreshCw } from 'lucide-react';
import { PageRoute, SearchResultItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { StatusBadge } from './StatusBadge';
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
  const { theme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isLight = theme === 'light';

  // Build searchable index
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
      description: 'Professional desktop IDE for macOS, Windows, and Linux. In active development.',
      category: 'Product',
      route: 'desktop',
      status: 'in-development'
    },
    {
      id: 'prod-ai',
      title: 'Yemini Intelligence',
      description: 'Autonomous coding agent, AST repository graph, and multi-turn refactoring. In development.',
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
      title: p.status === 'available' ? `Download Yemini for ${p.name}` : `Yemini for ${p.name} (Waitlist)`,
      description: `${p.subtitle} • ${p.fileSize} • ${p.status === 'available' ? 'Available now' : 'In development'}`,
      category: 'Download' as const,
      route: 'download' as PageRoute,
      targetId: p.id,
      status: p.status === 'available' ? 'available' as const : 'in-development' as const
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

  const getCategoryIcon = (category: string, id: string) => {
    if (id.includes('mobile') || id.includes('editor')) return <Smartphone className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ff6767]'}`} />;
    if (id.includes('notepad')) return <FileText className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ff6767]'}`} />;
    if (id.includes('converter')) return <RefreshCw className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ff6767]'}`} />;
    if (id.includes('desktop')) return <Monitor className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ff6767]'}`} />;
    if (id.includes('ai')) return <Sparkles className={`w-4 h-4 ${isLight ? 'text-purple-600' : 'text-[#ff6767]'}`} />;

    switch (category) {
      case 'Product':
        return <Sparkles className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-[#ff6767]'}`} />;
      case 'Docs':
        return <BookOpen className={`w-4 h-4 ${isLight ? 'text-blue-500' : 'text-sky-400'}`} />;
      case 'Download':
        return <Download className="w-4 h-4 text-emerald-500" />;
      case 'Legal':
        return <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-purple-500' : 'text-[#ff8585]'}`} />;
      default:
        return <FileText className={`w-4 h-4 ${isLight ? 'text-gray-400' : 'text-zinc-400'}`} />;
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 backdrop-blur-md animate-fadeIn ${
      isLight ? 'bg-black/40' : 'bg-black/80'
    }`}>
      <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border ${
        isLight ? 'bg-white border-gray-200' : 'bg-[#0e0e13] border-zinc-800'
      }`}>
        {/* Search Input Bar */}
        <div className={`flex items-center px-4 py-3.5 border-b gap-3 ${
          isLight ? 'border-gray-100' : 'border-zinc-800'
        }`}>
          <Search className={`w-5 h-5 shrink-0 ${isLight ? 'text-gray-400' : 'text-zinc-400'}`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation, downloads, guides..."
            className={`w-full bg-transparent text-base focus:outline-none ${
              isLight ? 'text-gray-900 placeholder-gray-400' : 'text-white placeholder-zinc-500'
            }`}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className={`p-1 ${isLight ? 'text-gray-400 hover:text-gray-600' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className={`px-2 py-1 text-xs font-mono rounded border ${
              isLight 
                ? 'text-gray-500 bg-gray-100 border-gray-200 hover:text-black' 
                : 'text-zinc-400 bg-zinc-800/80 border-zinc-700 hover:text-white'
            }`}
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className={`py-12 text-center ${isLight ? 'text-gray-400' : 'text-zinc-500'}`}>
              <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 opacity-70">Try searching for &quot;Python&quot;, &quot;Android&quot;, &quot;Privacy&quot;, &quot;Notepad&quot;, &quot;Editor&quot;, or &quot;Desktop&quot;</p>
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
                      ? (isLight 
                          ? 'bg-blue-50/80 border border-blue-200 text-black' 
                          : 'bg-zinc-800/90 border border-[#ff6767]/30 text-white')
                      : (isLight 
                          ? 'hover:bg-gray-50 text-gray-700 border border-transparent' 
                          : 'hover:bg-zinc-900/60 text-zinc-300 border border-transparent')
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`mt-0.5 shrink-0 p-1.5 rounded-lg border ${
                      isLight ? 'bg-gray-100 border-gray-200' : 'bg-zinc-900 border-zinc-800'
                    }`}>
                      {getCategoryIcon(item.category, item.id)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-semibold text-sm truncate ${isLight ? 'text-gray-900' : 'text-white'}`}>
                          {item.title}
                        </span>
                        {item.status && (
                          <StatusBadge status={item.status} size="sm" />
                        )}
                        <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border ${
                          isLight 
                            ? 'bg-gray-100 text-gray-600 border-gray-200' 
                            : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/50'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className={`text-xs line-clamp-1 mt-0.5 ${isLight ? 'text-gray-500' : 'text-zinc-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-3 shrink-0">
                    {isSelected && (
                      <span className={`flex items-center gap-1 text-[11px] font-mono ${
                        isLight ? 'text-blue-600' : 'text-[#ff6767]'
                      }`}>
                        <span>Select</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className={`w-4 h-4 ${isLight ? 'text-gray-400' : 'text-zinc-600'}`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className={`px-4 py-2.5 border-t flex items-center justify-between text-xs font-mono ${
          isLight ? 'bg-gray-50 border-gray-100 text-gray-500' : 'bg-[#0a0a0d] border-zinc-800/80 text-zinc-500'
        }`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className={`px-1.5 py-0.5 rounded border text-[10px] ${
                isLight ? 'bg-white border-gray-200 text-gray-600' : 'bg-zinc-800 border-zinc-700 text-zinc-300'
              }`}>↑</kbd>
              <kbd className={`px-1.5 py-0.5 rounded border text-[10px] ${
                isLight ? 'bg-white border-gray-200 text-gray-600' : 'bg-zinc-800 border-zinc-700 text-zinc-300'
              }`}>↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className={`px-1.5 py-0.5 rounded border text-[10px] ${
                isLight ? 'bg-white border-gray-200 text-gray-600' : 'bg-zinc-800 border-zinc-700 text-zinc-300'
              }`}>↵</kbd>
              <span>Open</span>
            </span>
          </div>
          <span>Yemini Ecosystem Index</span>
        </div>
      </div>
    </div>
  );
};
