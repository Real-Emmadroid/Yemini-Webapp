import React, { useState } from 'react';
import { PageRoute } from '../types';
import { legalDocuments } from '../data/legalData';
import { Smartphone, ExternalLink, FileText, RefreshCw, Share2, Webhook, Database, Image as ImageIcon } from 'lucide-react';

interface LegalPageProps {
  onNavigate: (route: PageRoute) => void;
  defaultDoc?: 'privacy' | 'terms' | 'cookies' | 'acceptable-use' | 'licenses';
}

const appPolicies: { route: PageRoute; name: string; blurb: string; cta: string; Icon: React.ElementType }[] = [
  { route: 'editorapp-privacy', name: 'Yemini Code Editor', blurb: 'Android Code Editor & local compiler plugins policy.', cta: 'View Editor Policy', Icon: Smartphone },
  { route: 'notepadapp-privacy', name: 'Yemini Notepad', blurb: 'Android Notepad, checklists & voice memos policy.', cta: 'View Notepad Policy', Icon: FileText },
  { route: 'converterapp-privacy', name: 'Yemini Converter', blurb: 'Offline on-device media & file conversion policy.', cta: 'View Converter Policy', Icon: RefreshCw },
  { route: 'shareapp-privacy', name: 'Yemini Share', blurb: 'Offline P2P file sharing & transfer policy.', cta: 'View Share Policy', Icon: Share2 },
  { route: 'apitesterapp-privacy', name: 'Yemini API Tester', blurb: 'On-device API client, request history & collections policy.', cta: 'View API Tester Policy', Icon: Webhook },
  { route: 'dbmsapp-privacy', name: 'Yemini DBMS', blurb: 'Database client, credentials & SSH tunnel policy.', cta: 'View DBMS Policy', Icon: Database },
  { route: 'imageeditorapp-privacy', name: 'Yemini Image Editor', blurb: 'On-device photo editing, sign-in & shared templates policy.', cta: 'View Image Policy', Icon: ImageIcon },
];

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

        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Trust &amp; Compliance Center
        </h1>

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          STF Ecosystem (Sphere Tech Foundation) governance terms, privacy standards, and software licensing.
        </p>
      </div>

      {/* Standalone Android Apps Privacy Policies Callout Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {appPolicies.map(({ route, name, blurb, cta, Icon }) => (
          <div key={route} className="p-4 sm:p-5 rounded-[4%] bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-[4%] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-[#ba1724] dark:text-[#ff8585] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{name}</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{blurb}</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate(route)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-[4%] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-900 dark:text-white transition-colors"
            >
              <span>{cta}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#ba1724] dark:text-[#ff6767]" />
            </button>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-[4%] text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white shadow-md'
                : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Document Reader Container */}
      <div className="bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 rounded-[4%] p-6 sm:p-12 space-y-8 text-sm text-zinc-700 dark:text-zinc-300">
        <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            {doc.title}
          </h2>
          <div className="text-xs font-mono text-zinc-500">
            Last Revised: {doc.lastUpdated} • Published by STF Ecosystem
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-2 leading-relaxed">
            {doc.description}
          </p>
        </div>

        <div className="space-y-8 leading-relaxed">
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                {sec.title}
              </h3>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
              {sec.bulletPoints && (
                <ul className="space-y-2 pl-2">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 text-sm">
                      <span className="text-[#ba1724] dark:text-[#ff6767] font-bold mt-0.5">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Official STF Legal Document</span>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[#ba1724] dark:text-[#ff8585] hover:underline"
          >
            Questions? Contact Legal Team
          </button>
        </div>
      </div>
    </div>
  );
};
