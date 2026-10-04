import React from 'react';
import { PageRoute } from '../types';

interface CareersPageProps {
  onNavigate: (route: PageRoute) => void;
}

const SUPPORT_EMAIL = 'yeminisupport@gmail.com';
const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Introduction: working with Yemini')}`;

const values = [
  {
    title: 'Local first',
    body: 'Software should keep working without a connection. We design for the device in your hand before we think about a server.',
  },
  {
    title: 'Private by default',
    body: 'Your files, notes, and credentials belong to you. We collect as little as we can and say plainly what we do collect.',
  },
  {
    title: 'Accessible to everyone',
    body: 'Good tools should not need a fast phone, a fast network, or a big budget. We build for the many, not the few.',
  },
  {
    title: 'Care in the details',
    body: 'Small, honest, well-made things. We would rather ship fewer features that feel right than many that do not.',
  },
];

const areas = [
  'Android engineering with Kotlin and Jetpack Compose',
  'Developer tools, compilers, and on-device runtimes',
  'Interface and interaction design for touch',
  'Security and privacy engineering',
  'Writing, documentation, and developer education',
];

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20 sm:space-y-28">
      <header className="max-w-3xl space-y-5">
        <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#ba1724] dark:text-[#ff8585]">
          Careers
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
          Build software that respects people.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Yemini is made by STF Ecosystem (Sphere Tech Foundation), a small team making tools that work offline and keep your data yours. If that sounds like your kind of work, here is how we think and how to reach us.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">How we work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {values.map((v) => (
            <div key={v.title} className="border-t border-zinc-200 dark:border-zinc-800 pt-5 space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{v.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Where we work</h2>
        <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
          {areas.map((a) => (
            <li key={a} className="flex gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <span aria-hidden="true" className="text-[#ba1724] dark:text-[#ff8585]">•</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090d] p-7 sm:p-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Open roles</h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          We have no roles listed right now, but we still read every introduction. Tell us who you are, what you have built, and what you would like to work on. Links to your work are the best CV.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={mailto}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-[#580c14] hover:bg-[#43080e] text-white transition-colors"
          >
            Introduce yourself
          </a>
          <button
            onClick={() => onNavigate('about')}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            About Yemini
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
