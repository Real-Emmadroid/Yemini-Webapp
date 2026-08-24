import React, { useState } from 'react';
import { PageRoute } from '../types';
import { legalDocuments } from '../data/legalData';
import { Scale, Smartphone, ExternalLink } from 'lucide-react';

interface LegalPageProps {
  onNavigate: (route: PageRoute) => void;
  defaultDoc?: 'privacy' | 'terms' | 'cookies' | 'acceptable-use' | 'licenses';
}

export const LegalPage: React.FC<LegalPageProps> = ({
  onNavigate,
  defaultDoc = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies' | 'acceptable-use' | 'licenses'>(defaultDoc);

  const doc = legalDocuments[activeTab] || legalDocuments['privacy'];

  const tabs: { id: 'privacy' | 'terms' | 'cookies' | 'acceptable-use' | 'licenses'; label: string }[] = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'cookies', label: 'Cookie Policy' },
    { id: 'acceptable-use', label: 'Acceptable Use' },
    { id: 'licenses', label: 'Open Source Licenses' }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <Scale className="w-3.5 h-3.5 text-[#ff6767]" />
          <span>Legal &amp; Regulatory Governance</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Trust &amp; Compliance Center
        </h1>

        <p className="text-base text-zinc-400">
          STF Ecosystem (Sphere Tech Foundation) governance terms, privacy standards, and software licensing.
        </p>
      </div>

      {/* Standalone Android App Privacy Policy Callout Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-[#ff8585] shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Yemini Code Editor Android Privacy Policy</h4>
            <p className="text-xs text-zinc-400">
              Looking for the dedicated in-app privacy policy embedded in the Android app?
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('app-privacy')}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-semibold text-white transition-colors shrink-0"
        >
          <span>View In-App Policy</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#ff6767]" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white shadow-md'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Document Reader Container */}
      <div className="bg-[#09090d] border border-zinc-800 rounded-3xl p-6 sm:p-12 space-y-8 text-sm text-zinc-300">
        <div className="pb-6 border-b border-zinc-800 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {doc.title}
          </h2>
          <div className="text-xs font-mono text-zinc-500">
            Last Revised: {doc.lastUpdated} • Published by STF Ecosystem
          </div>
          <p className="text-xs text-zinc-400 pt-2 leading-relaxed">
            {doc.description}
          </p>
        </div>

        <div className="space-y-8 leading-relaxed">
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg font-bold text-white tracking-tight">
                {sec.title}
              </h3>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-zinc-300 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
              {sec.bulletPoints && (
                <ul className="space-y-2 pl-2">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <span className="text-[#ff6767] font-bold mt-0.5">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Official STF Legal Document</span>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[#ff8585] hover:underline"
          >
            Questions? Contact Legal Team
          </button>
        </div>
      </div>
    </div>
  );
};
