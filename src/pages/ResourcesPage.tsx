import React, { useState } from 'react';
import { PageRoute, ResourcePost } from '../types';
import { resourcesData } from '../data/resourcesData';
import { useTheme } from '../context/ThemeContext';

interface ResourcesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activeArticleModal, setActiveArticleModal] = useState<ResourcePost | null>(null);

  const tags = ['all', 'Announcement', 'Architecture', 'Offline-First', 'Design', 'Security'];

  const filteredPosts = resourcesData.filter(post => 
    selectedTag === 'all' || post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())
  );

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight ${
          isLight ? 'text-zinc-900' : 'text-white'
        }`}>
          Insights, Architecture &amp; <br />
          <span className="text-yemini-gradient">Deep Dives.</span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
          isLight ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          Technical articles, engineering deep-dives, and design insights from the team building Yemini.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium capitalize transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#580c14] to-[#c41515] text-white font-semibold shadow-sm'
                    : isLight
                    ? 'bg-white text-zinc-700 hover:text-black hover:bg-zinc-100 border border-zinc-200/90 shadow-xs'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Article Banner */}
      {resourcesData[0] && (
        <div 
          onClick={() => setActiveArticleModal(resourcesData[0])}
          className={`rounded-3xl p-6 sm:p-10 lg:p-12 cursor-pointer transition-all space-y-6 ${
            isLight
              ? 'bg-white border border-zinc-200 shadow-sm hover:border-[#c41515]/40 hover:shadow-md'
              : 'bg-gradient-to-r from-[#0d0d13] to-[#08080c] border border-zinc-800 hover:border-[#ff6767]/40 yemini-glow-hover'
          }`}
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className={`px-2.5 py-1 rounded-full font-semibold ${
              isLight
                ? 'bg-[#580c14]/10 border border-[#580c14]/20 text-[#580c14]'
                : 'bg-[#5b0000]/60 border border-[#ff6767]/40 text-[#ff8585]'
            }`}>
              Featured Deep-Dive
            </span>
            <span className={isLight ? 'text-zinc-500' : 'text-zinc-400'}>{resourcesData[0].date}</span>
            <span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>•</span>
            <span className={`flex items-center gap-1.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {resourcesData[0].readTime}
            </span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            isLight 
              ? 'text-zinc-900 hover:text-[#580c14]' 
              : 'text-white hover:text-[#ff8585]'
          }`}>
            {resourcesData[0].title}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed max-w-4xl ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            {resourcesData[0].excerpt}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className={`text-xs font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
              By {resourcesData[0].author.name} ({resourcesData[0].author.role})
            </span>
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
              isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
            }`}>
              <span>Read Full Article</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      )}

      {/* Grid of Other Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(1).map((post) => (
          <div
            key={post.id}
            onClick={() => setActiveArticleModal(post)}
            className={`p-6 rounded-3xl flex flex-col justify-between cursor-pointer transition-all space-y-4 ${
              isLight
                ? 'bg-white border border-zinc-200 shadow-sm hover:border-zinc-300 hover:shadow-md'
                : 'bg-[#09090d] border border-zinc-800 hover:border-zinc-700 yemini-glow-hover'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`font-semibold ${isLight ? 'text-[#580c14]' : 'text-[#ff8585]'}`}>
                  {post.tags[0]}
                </span>
                <span className={isLight ? 'text-zinc-500' : 'text-zinc-500'}>{post.readTime}</span>
              </div>

              <h3 className={`text-lg font-bold leading-snug transition-colors ${
                isLight 
                  ? 'text-zinc-900 hover:text-[#580c14]' 
                  : 'text-white hover:text-[#ff8585]'
              }`}>
                {post.title}
              </h3>

              <p className={`text-xs leading-relaxed line-clamp-3 ${
                isLight ? 'text-zinc-600' : 'text-zinc-400'
              }`}>
                {post.excerpt}
              </p>
            </div>

            <div className={`pt-3 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-zinc-100 text-zinc-500' : 'border-zinc-800/80 text-zinc-500'
            }`}>
              <span>{post.date}</span>
              <span className={`font-sans font-semibold flex items-center gap-1 transition-colors ${
                isLight ? 'text-zinc-800 hover:text-[#580c14]' : 'text-zinc-300 hover:text-[#ff8585]'
              }`}>
                <span>Read</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className={`w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden ${
            isLight
              ? 'bg-white border border-zinc-200 text-zinc-900'
              : 'bg-[#0c0c10] border border-zinc-800 text-white'
          }`}>
            <div className={`flex items-start justify-between pb-4 border-b ${
              isLight ? 'border-zinc-200' : 'border-zinc-800'
            }`}>
              <div className="space-y-1 pr-4">
                <div className="flex flex-wrap items-center gap-2">
                  {activeArticleModal.tags.map(t => (
                    <span 
                      key={t} 
                      className={`text-xs font-mono font-semibold ${
                        isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                      }`}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <h2 className={`text-2xl font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                  {activeArticleModal.title}
                </h2>
                <div className={`text-xs font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  By {activeArticleModal.author.name} ({activeArticleModal.author.role}) • {activeArticleModal.date} • {activeArticleModal.readTime}
                </div>
              </div>
              <button
                onClick={() => setActiveArticleModal(null)}
                aria-label="Close article"
                className={`p-2 rounded-xl border transition-colors cursor-pointer shrink-0 ${
                  isLight
                    ? 'text-zinc-600 hover:text-black bg-zinc-100 hover:bg-zinc-200 border-zinc-200'
                    : 'text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border-zinc-800'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto py-6 space-y-4 text-sm leading-relaxed font-sans pr-1">
              <p className={`text-base font-medium ${
                isLight ? 'text-zinc-900' : 'text-zinc-200'
              }`}>
                {activeArticleModal.excerpt}
              </p>
              {activeArticleModal.content.map((paragraph, pIdx) => (
                <p key={pIdx} className={`leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={`pt-4 border-t flex justify-between items-center text-xs font-mono ${
              isLight ? 'border-zinc-200 text-zinc-500' : 'border-zinc-800 text-zinc-500'
            }`}>
              <span>Published by Yemini Team</span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className={`px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-zinc-900 text-white hover:bg-black'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
