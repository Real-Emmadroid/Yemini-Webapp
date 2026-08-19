import React, { useState } from 'react';
import { PageRoute, ResourcePost } from '../types';
import { resourcesData } from '../data/resourcesData';
import { 
  BookOpen, Sparkles, Clock, Calendar, ArrowRight, 
  Search, ShieldCheck, Tag, User 
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activeArticleModal, setActiveArticleModal] = useState<ResourcePost | null>(null);

  const tags = ['all', 'Announcement', 'Architecture', 'Offline-First', 'Design', 'Security'];

  const filteredPosts = resourcesData.filter(post => 
    selectedTag === 'all' || post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())
  );

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <BookOpen className="w-3.5 h-3.5 text-[#ff6767]" />
          <span>STF Ecosystem Engineering Blog &amp; Resources</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Insights, Architecture &amp; <br />
          <span className="text-yemini-gradient">Deep Dives.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400">
          Technical articles, engineering deep-dives, and design insights from the team building Yemini.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-xl text-xs font-medium capitalize transition-all ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white font-semibold shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article Banner */}
      {resourcesData[0] && (
        <div 
          onClick={() => setActiveArticleModal(resourcesData[0])}
          className="bg-gradient-to-r from-[#0d0d13] to-[#08080c] border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 cursor-pointer hover:border-[#ff6767]/40 transition-all yemini-glow-hover space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-full bg-[#5b0000]/60 border border-[#ff6767]/40 text-[#ff8585] font-semibold">
              Featured Deep-Dive
            </span>
            <span className="text-zinc-400">{resourcesData[0].date}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {resourcesData[0].readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight hover:text-[#ff8585] transition-colors">
            {resourcesData[0].title}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-4xl">
            {resourcesData[0].excerpt}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-zinc-500 font-mono">By {resourcesData[0].author.name} ({resourcesData[0].author.role})</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff8585]">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
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
            className="p-6 rounded-3xl bg-[#09090d] border border-zinc-800 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition-all yemini-glow-hover space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="text-[#ff8585] font-semibold">{post.tags[0]}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug hover:text-[#ff8585] transition-colors">
                {post.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>{post.date}</span>
              <span className="text-zinc-300 font-sans font-semibold flex items-center gap-1">
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-3xl bg-[#0c0c10] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {activeArticleModal.tags.map(t => (
                    <span key={t} className="text-xs font-mono text-[#ff8585] font-semibold">#{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-white">{activeArticleModal.title}</h2>
                <div className="text-xs font-mono text-zinc-400">
                  By {activeArticleModal.author.name} ({activeArticleModal.author.role}) • {activeArticleModal.date} • {activeArticleModal.readTime}
                </div>
              </div>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto py-6 space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
              <p className="text-base font-medium text-zinc-200">{activeArticleModal.excerpt}</p>
              {activeArticleModal.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500 font-mono">
              <span>Published by STF Ecosystem</span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 text-white font-semibold hover:bg-zinc-700"
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
