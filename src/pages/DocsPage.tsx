import React, { useState } from 'react';
import { PageRoute } from '../types';
import { docSections, docArticles } from '../data/docsData';
import { 
  BookOpen, Search, Copy, Check, ChevronRight, ChevronDown, 
  Info, AlertTriangle, Lightbulb, ArrowLeft, ArrowRight, 
  Terminal, FileCode, Layers, ShieldCheck 
} from 'lucide-react';

interface DocsPageProps {
  onNavigate: (route: PageRoute) => void;
  activeDocId?: string;
}

export const DocsPage: React.FC<DocsPageProps> = ({
  onNavigate,
  activeDocId = 'introduction'
}) => {
  const [selectedDocId, setSelectedDocId] = useState<string>(activeDocId);
  const [searchFilter, setSearchFilter] = useState('');
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const activeArticle = docArticles[selectedDocId] || docArticles['introduction'];

  // Flatten articles for next / previous navigation
  const allDocIds = Object.keys(docArticles);
  const currentIndex = allDocIds.indexOf(selectedDocId);
  const prevDocId = currentIndex > 0 ? allDocIds[currentIndex - 1] : null;
  const nextDocId = currentIndex < allDocIds.length - 1 ? allDocIds[currentIndex + 1] : null;

  const handleCopyCode = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar (Doc Tree) */}
        <aside className="lg:col-span-3 bg-[#09090d] border border-zinc-800/90 rounded-2xl p-4 sticky top-24 max-h-[85vh] overflow-y-auto space-y-4">
          {/* Docs Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter topics..."
              className="w-full bg-[#121218] border border-zinc-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6767]"
            />
          </div>

          {/* Section Tree */}
          <div className="space-y-4 text-xs">
            {docSections.map((sec) => {
              const matchingItems = sec.items.filter(item => 
                item.title.toLowerCase().includes(searchFilter.toLowerCase())
              );
              if (searchFilter && matchingItems.length === 0) return null;

              return (
                <div key={sec.id} className="space-y-1.5">
                  <h4 className="font-mono font-bold uppercase tracking-wider text-[10px] text-zinc-500 px-2">
                    {sec.title}
                  </h4>
                  <div className="space-y-0.5">
                    {(searchFilter ? matchingItems : sec.items).map((item) => {
                      const isActive = selectedDocId === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setSelectedDocId(item.id)}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                            isActive
                              ? 'bg-zinc-800 text-[#ff8585] font-semibold'
                              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                          }`}
                        >
                          <span className="truncate">{item.title}</span>
                          {item.badge && (
                            <span className="text-[9px] font-mono px-1 rounded bg-[#5b0000]/60 text-[#ff8585]">
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
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 bg-[#0a0a0e] border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <button onClick={() => onNavigate('home')} className="hover:text-zinc-300">Docs</button>
            <span>/</span>
            <span>{activeArticle.category}</span>
            <span>/</span>
            <span className="text-[#ff8585] font-semibold">{activeArticle.title}</span>
          </div>

          {/* Article Header */}
          <div className="space-y-3 pb-6 border-b border-zinc-800">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {activeArticle.title}
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed">
              {activeArticle.summary}
            </p>
            <div className="text-xs font-mono text-zinc-500">
              Last updated: {activeArticle.lastUpdated} • Maintained by STF Ecosystem
            </div>
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-sm text-zinc-300 leading-relaxed">
            {activeArticle.content.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {sec.heading}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {sec.text}
                </p>

                {/* Callout Box */}
                {sec.callout && (
                  <div className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1 ${
                    sec.callout.type === 'tip'
                      ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-200'
                      : sec.callout.type === 'warning'
                      ? 'bg-amber-950/40 border-amber-800/50 text-amber-200'
                      : 'bg-sky-950/40 border-sky-800/50 text-sky-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5">
                      {sec.callout.type === 'tip' ? <Lightbulb className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                      <span>{sec.callout.title}</span>
                    </div>
                    <p>{sec.callout.text}</p>
                  </div>
                )}

                {/* Code Snippet Box */}
                {sec.code && (
                  <div className="rounded-2xl bg-[#07070a] border border-zinc-800 overflow-hidden font-mono text-xs">
                    <div className="px-4 py-2 bg-[#0e0e14] border-b border-zinc-800 flex items-center justify-between text-zinc-400">
                      <span>{sec.code.language}</span>
                      <button
                        onClick={() => handleCopyCode(sec.code!.code, idx)}
                        className="flex items-center gap-1 text-[11px] hover:text-white transition-colors"
                      >
                        {copiedCodeIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCodeIndex === idx ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-zinc-200 overflow-x-auto leading-relaxed">
                      <code>{sec.code.code}</code>
                    </pre>
                    {sec.code.caption && (
                      <div className="px-4 py-1.5 bg-[#0a0a0d] border-t border-zinc-800/80 text-[10px] text-zinc-500">
                        {sec.code.caption}
                      </div>
                    )}
                  </div>
                )}

                {/* Bullet List */}
                {sec.list && (
                  <ul className="space-y-2 pl-2">
                    {sec.list.map((li, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300">
                        <span className="text-[#ff6767] font-bold mt-0.5">•</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Next / Previous Navigation */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevDocId ? (
              <button
                onClick={() => setSelectedDocId(prevDocId)}
                className="w-full sm:w-auto flex items-center gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-left transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-zinc-400" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block">Previous Topic</span>
                  <span className="text-xs font-semibold text-white block">{docArticles[prevDocId].title}</span>
                </div>
              </button>
            ) : <div />}

            {nextDocId ? (
              <button
                onClick={() => setSelectedDocId(nextDocId)}
                className="w-full sm:w-auto flex items-center justify-between gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-right transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block">Next Topic</span>
                  <span className="text-xs font-semibold text-white block">{docArticles[nextDocId].title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#ff6767]" />
              </button>
            ) : <div />}
          </div>
        </main>
      </div>
    </div>
  );
};
