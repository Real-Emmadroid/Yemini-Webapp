import React, { useState } from 'react';
import { PageRoute } from '../types';
import { AiAgentInteractive } from '../components/AiAgentInteractive';
import { YeminiSymbol } from '../components/YeminiSymbol';
import { StatusBadge } from '../components/StatusBadge';
import { 
  Sparkles, ShieldCheck, Terminal, FileCode, CheckCircle2, 
  ArrowRight, Lock, Check, Send, BellRing 
} from 'lucide-react';
import { productsData } from '../data/productsData';

interface AiPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AiPage: React.FC<AiPageProps> = ({ onNavigate }) => {
  const aiData = productsData.find(p => p.id === 'ai')!;
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* AI Hero */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
          <YeminiSymbol size="xs" />
          <span>Yemini Intelligence</span>
          <StatusBadge status="in-development" size="sm" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
          Meet the AI <br />
          <span className="text-yemini-gradient">built for your code.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {aiData.fullDescription}
        </p>

        {/* Waitlist Box */}
        <div className="max-w-md mx-auto pt-4">
          {submitted ? (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-sm flex items-center justify-center gap-2 animate-fadeIn">
              <Check className="w-5 h-5" />
              <span>You&apos;re on the Yemini Intelligence developer waitlist!</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex items-center gap-2 bg-zinc-50 dark:bg-[#0e0e13] border border-zinc-200 dark:border-zinc-800 p-2 rounded-2xl shadow-xl">
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Enter work email for early access..."
                required
                className="flex-1 bg-transparent px-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 text-white font-semibold text-xs transition-all active:scale-95 shrink-0 flex items-center gap-1.5"
              >
                <BellRing className="w-3.5 h-3.5" />
                <span>Join Beta</span>
              </button>
            </form>
          )}
          <p className="text-[11px] font-mono text-zinc-500 mt-2">
            In active development • Private preview rollout for STF developers
          </p>
        </div>
      </div>

      {/* Interactive Agent Simulator */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ba1724] dark:text-[#ff8585]">
            Live Interactive Concept
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            See the multi-turn agent loop in action
          </h2>
        </div>
        <AiAgentInteractive />
      </div>

      {/* Core Principles Grid */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ba1724] dark:text-[#ff8585]">
            Engineering Guardrails
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            How Yemini AI handles your codebase.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <FileCode className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Full AST Graph</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Builds a structural semantic graph of your types, classes, and exported symbols to ensure zero hallucinated API calls.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Zero Training Policy</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Your source code is never used to train public models. Code context is processed transiently and discarded immediately.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Human in the Loop</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No code is written or terminal command executed without displaying an explicit colored diff for your confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
