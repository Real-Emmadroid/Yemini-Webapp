import React from 'react';
import { PageRoute } from '../types';

interface TechnologiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

interface Pillar {
  title: string;
  summary: string;
  items: { name: string; detail: string }[];
}

const pillars: Pillar[] = [
  {
    title: 'Native Android',
    summary: 'Every Yemini app is a native Android app, built to start fast and run well on modest hardware.',
    items: [
      { name: 'Kotlin & Jetpack Compose', detail: 'Declarative, touch-first interfaces.' },
      { name: 'Room & DataStore', detail: 'Local databases and settings that live on the device.' },
      { name: 'Kotlin Coroutines', detail: 'Responsive screens while heavy work runs in the background.' },
    ],
  },
  {
    title: 'On-device processing',
    summary: 'Your photos, files, and queries are handled on your phone, not uploaded for processing.',
    items: [
      { name: 'GPU image pipeline', detail: 'GPU-accelerated filters and grading in Yemini Image Editor.' },
      { name: 'Google ML Kit', detail: 'Face detection and subject cut-out that run on the device.' },
      { name: 'Media3 Transformer', detail: 'Video editing and export without a server.' },
    ],
  },
  {
    title: 'Security by design',
    summary: 'Sensitive data is encrypted at rest, and you decide what leaves the device.',
    items: [
      { name: 'Android Keystore', detail: 'Database credentials in Yemini DBMS are encrypted with device-bound keys.' },
      { name: 'AES-256-GCM backups', detail: 'Exports are encrypted with a passphrase only you know.' },
      { name: 'Biometric lock', detail: 'Fingerprint or face unlock handled entirely by Android.' },
    ],
  },
  {
    title: 'Connectivity, when you choose it',
    summary: 'Offline is the default. When a tool needs the network, it talks directly to the service you picked.',
    items: [
      { name: 'JDBC drivers', detail: 'PostgreSQL, MySQL, and SQL Server connections from Yemini DBMS.' },
      { name: 'SSH tunnels', detail: 'Reach private databases securely through your own SSH host.' },
      { name: 'OkHttp & WebSockets', detail: 'REST and real-time testing in Yemini API Tester.' },
    ],
  },
  {
    title: 'The web and the templates service',
    summary: 'This website and the shared-template service are small, simple, and inexpensive to run.',
    items: [
      { name: 'React & Vite', detail: 'The Yemini website you are reading.' },
      { name: 'Cloudflare Workers', detail: 'A lightweight API that serves and reviews Image Editor templates.' },
      { name: 'Neon Postgres', detail: 'Where approved templates are stored, behind the Worker.' },
    ],
  },
];

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20 sm:space-y-24">
      <header className="max-w-3xl space-y-5">
        <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#ba1724] dark:text-[#ff8585]">
          Technologies
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
          The technology behind Yemini.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          We pick tools that keep your work on your device, run well on ordinary phones, and are easy to audit. This is what we use and why.
        </p>
      </header>

      <div className="space-y-14">
        {pillars.map((p) => (
          <section key={p.title} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <div className="md:col-span-5 space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{p.title}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.summary}</p>
            </div>
            <dl className="md:col-span-7 space-y-5">
              {p.items.map((it) => (
                <div key={it.name}>
                  <dt className="font-semibold text-zinc-900 dark:text-white">{it.name}</dt>
                  <dd className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{it.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090d] p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">See it in practice</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Read how we handle security, or try the apps.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('security')}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            Security Center
          </button>
          <button
            onClick={() => onNavigate('download')}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white transition-colors cursor-pointer"
          >
            Download Yemini
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
