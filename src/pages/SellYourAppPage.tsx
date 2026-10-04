import React from 'react';
import { PageRoute } from '../types';

interface SellYourAppPageProps {
  onNavigate: (route: PageRoute) => void;
}

const SUPPORT_EMAIL = 'yeminisupport@gmail.com';
const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Selling my app to STF Ecosystem')}`;

const criteria = [
  {
    title: 'An Android app people use',
    body: 'A live app on Google Play, or one close to launch, with a clear purpose and a real audience.',
  },
  {
    title: 'Respect for the user',
    body: 'No hidden tracking, no dark patterns. If your app collects data, it says so plainly and has a privacy policy.',
  },
  {
    title: 'Code we can maintain',
    body: 'A source project that builds, with the signing keys and accounts needed to hand it over cleanly.',
  },
  {
    title: 'A fit with what we build',
    body: 'Developer tools, productivity, media, and utilities that work well offline sit closest to the Yemini family.',
  },
];

const steps = [
  { title: 'Send us the details', body: 'Email us a short summary of your app using the checklist at the bottom of this page.' },
  { title: 'We review it', body: 'Our team looks at the app, its code, and its privacy practices, and may ask follow-up questions.' },
  { title: 'We talk terms', body: 'If it is a fit, we discuss an offer and what a smooth handover looks like for you.' },
  { title: 'Handover', body: 'You transfer the code, store listing, and accounts, and your users move to a home that will keep improving the app.' },
];

const checklist = [
  'App name and Google Play link',
  'What the app does and who uses it',
  'Active users and install count, if you are comfortable sharing',
  'What you own: source code, signing keys, store account, domain',
  'Why you are selling',
];

export const SellYourAppPage: React.FC<SellYourAppPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20 sm:space-y-28">
      <header className="max-w-3xl space-y-5">
        <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#ba1724] dark:text-[#ff8585]">
          Sell your app
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
          Your app deserves a good home.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          STF Ecosystem, the foundation behind Yemini, acquires Android apps built with care. If you are ready to pass yours on to a team that will look after it and its users, we would like to hear from you.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={mailto}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white transition-colors"
          >
            Contact us
          </a>
          <button
            onClick={() => onNavigate('download')}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            See our apps
          </button>
        </div>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">What we look for</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {criteria.map((c) => (
            <div key={c.title} className="border-t border-zinc-200 dark:border-zinc-800 pt-5 space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{c.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">How it works</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="font-mono text-sm text-[#ba1724] dark:text-[#ff8585] pt-1 shrink-0">0{i + 1}</span>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090d] p-7 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Ready to talk?</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Include the points listed here in your email and we will get back to you. Everything you share is treated as confidential.
          </p>
          <a
            href={mailto}
            className="inline-block mt-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white transition-colors"
          >
            Email {SUPPORT_EMAIL}
          </a>
        </div>
        <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-[#ba1724] dark:text-[#ff8585]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SellYourAppPage;
