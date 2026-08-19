import React, { useState } from 'react';
import { PageRoute, ExtensionCategory, ExtensionItem } from '../types';
import { extensionsData } from '../data/extensionsData';
import { ExtensionCard } from '../components/ExtensionCard';
import { ExtensionModal } from '../components/ExtensionModal';
import { 
  Package, Search, ShieldCheck, Download, 
  Terminal, Sparkles, Layers 
} from 'lucide-react';

interface ExtensionsPageProps {
  onNavigate: (route: PageRoute) => void;
  selectedExtension: ExtensionItem | null;
  onOpenExtensionModal: (ext: ExtensionItem) => void;
  onCloseExtensionModal: () => void;
}

export const ExtensionsPage: React.FC<ExtensionsPageProps> = ({
  onNavigate,
  selectedExtension,
  onOpenExtensionModal,
  onCloseExtensionModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ExtensionCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [targetPlatform, setTargetPlatform] = useState<'All' | 'Mobile' | 'Desktop'>('All');

  const categories: { id: ExtensionCategory; label: string }[] = [
    { id: 'all', label: 'All Extensions' },
    { id: 'languages', label: 'Languages & Runtimes' },
    { id: 'developer-tools', label: 'Developer Tools' },
    { id: 'debugging', label: 'Debugging' },
    { id: 'formatting', label: 'Formatters' },
    { id: 'linters', label: 'Linters' },
    { id: 'themes', label: 'Themes' }
  ];

  const filteredExtensions = extensionsData.filter(ext => {
    const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
    const matchesSearch = 
      ext.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPlatform = targetPlatform === 'All' || ext.compatibility.includes(targetPlatform);
    return matchesCategory && matchesSearch && matchesPlatform;
  });

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <Package className="w-3.5 h-3.5 text-[#ff6767]" />
          <span>First-Party Marketplace</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Install what you need. <br />
          <span className="text-yemini-gradient">Your stack. Your speed.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400">
          Official first-party toolchains, runtimes, compilers, formatters, and debuggers. Cryptographically verified and published exclusively by STF Ecosystem.
        </p>

        {/* Security / First-Party Notice */}
        <div className="p-3.5 rounded-2xl bg-[#0e0e14] border border-zinc-800 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Curated Ecosystem: Zero untrusted third-party packages or supply-chain vectors.</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Python, Rust, Clang C++, Prettier, LLDB..."
              className="w-full bg-[#0a0a0d] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6767]"
            />
          </div>

          {/* Target Platform Filter */}
          <div className="flex items-center gap-2 bg-[#09090c] p-1 rounded-xl border border-zinc-800 self-start md:self-auto text-xs font-mono">
            <span className="px-2 text-zinc-500">Platform:</span>
            {(['All', 'Mobile', 'Desktop'] as const).map((plat) => (
              <button
                key={plat}
                onClick={() => setTargetPlatform(plat)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  targetPlatform === plat
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white shadow-md shadow-[#5b0000]/30 font-semibold'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Extension Cards Grid */}
      {filteredExtensions.length === 0 ? (
        <div className="p-16 text-center rounded-3xl bg-[#09090d] border border-zinc-800 space-y-3">
          <Package className="w-8 h-8 text-zinc-600 mx-auto" />
          <p className="text-zinc-300 font-semibold">No extensions found</p>
          <p className="text-xs text-zinc-500">Try adjusting your search query or selected category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExtensions.map((ext) => (
            <ExtensionCard
              key={ext.id}
              extension={ext}
              onOpenDetails={onOpenExtensionModal}
              onNavigateToDownload={() => onNavigate('download')}
            />
          ))}
        </div>
      )}

      {/* CLI Installation Banner */}
      <div className="p-8 rounded-3xl bg-[#0a0a0e] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-white">Prefer the command line?</h3>
          <p className="text-xs text-zinc-400 font-mono">
            Run <span className="text-[#ff8585]">yemini install &lt;package&gt;</span> directly in your mobile or desktop shell.
          </p>
        </div>

        <button
          onClick={() => onNavigate('download')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold border border-zinc-800 hover:border-zinc-700 transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Get Yemini to Install</span>
        </button>
      </div>

      {/* Extension Detail Modal */}
      <ExtensionModal
        extension={selectedExtension}
        onClose={onCloseExtensionModal}
        onNavigateToDownload={() => onNavigate('download')}
      />
    </div>
  );
};
