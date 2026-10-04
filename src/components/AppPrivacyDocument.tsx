import React from 'react';
import { useTheme } from '../context/ThemeContext';

export interface PolicyBullet {
  lead?: string;
  text: React.ReactNode;
}

export interface PolicySubsection {
  title: string;
  intro?: React.ReactNode;
  bullets?: PolicyBullet[];
}

export interface PolicySection {
  title: string;
  intro?: React.ReactNode;
  bullets?: PolicyBullet[];
  subsections?: PolicySubsection[];
  outro?: React.ReactNode;
}

export interface PolicyThirdParty {
  name: string;
  url: string;
}

interface AppPrivacyDocumentProps {
  appName: string;
  platform: string;
  effectiveDate: string;
  summary: React.ReactNode;
  sections: PolicySection[];
  thirdParties: PolicyThirdParty[];
}

const accent = 'text-[#ba1724] dark:text-[#ff8585]';

export const SUPPORT_EMAIL = 'yeminisupport@gmail.com';

export const MailLink: React.FC = () => (
  <a href={`mailto:${SUPPORT_EMAIL}`} className={`${accent} underline font-mono`}>{SUPPORT_EMAIL}</a>
);

export const AppPrivacyDocument: React.FC<AppPrivacyDocumentProps> = ({
  appName,
  platform,
  effectiveDate,
  summary,
  sections,
  thirdParties,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const h2 = `text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`;
  const h3 = `text-base sm:text-lg font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`;
  const panel = isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/90 border-zinc-800';
  const rule = isLight ? 'border-zinc-200' : 'border-zinc-800/80';

  const renderBullets = (bullets: PolicyBullet[]) => (
    <ul className="list-disc pl-6 space-y-2">
      {bullets.map((b, i) => (
        <li key={i}>
          {b.lead && <strong>{b.lead}: </strong>}
          {b.text}
        </li>
      ))}
    </ul>
  );

  const lastSectionNumber = sections.length + 2;

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-8 lg:px-12 font-sans transition-colors ${
      isLight ? 'bg-white text-zinc-800' : 'bg-[#070709] text-zinc-300'
    }`}>
      <article className="max-w-4xl mx-auto space-y-10 text-sm sm:text-base leading-relaxed">

        <header className={`space-y-4 pb-8 border-b ${rule}`}>
          <div className="h-6" aria-hidden="true" />
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            Privacy Policy for {appName}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
            <span><strong>Effective Date:</strong> {effectiveDate}</span>
            <span>•</span>
            <span><strong>Application:</strong> {appName} ({platform})</span>
            <span>•</span>
            <span><strong>Provider:</strong> STF Ecosystem (Sphere Tech Foundation)</span>
          </div>
        </header>

        <section className="space-y-4">
          <p className={`text-base sm:text-lg ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
            <strong>{appName}</strong> (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), provided by <strong>STF Ecosystem (Sphere Tech Foundation)</strong>, is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application.
          </p>

          <div className={`p-4 sm:p-5 border space-y-2 ${panel}`}>
            <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              Executive Summary
            </h3>
            <div className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>{summary}</div>
          </div>

          <p>
            If you choose to use the App, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described here.
          </p>
        </section>

        {sections.map((section, idx) => (
          <section key={section.title} className="space-y-4">
            <h2 className={h2}>{idx + 1}. {section.title}</h2>
            {section.intro && <p>{section.intro}</p>}
            {section.bullets && renderBullets(section.bullets)}
            {section.subsections?.map((sub) => (
              <div key={sub.title} className="space-y-3 pt-2">
                <h3 className={h3}>{sub.title}</h3>
                {sub.intro && <p>{sub.intro}</p>}
                {sub.bullets && renderBullets(sub.bullets)}
              </div>
            ))}
            {section.outro && <p>{section.outro}</p>}
          </section>
        ))}

        <section className="space-y-4">
          <h2 className={h2}>{sections.length + 1}. Third-Party Service Providers</h2>
          <p>
            The App relies on the following third-party services. Each has its own privacy policy:
          </p>
          <ul className="space-y-2.5 pl-2 font-mono text-xs sm:text-sm">
            {thirdParties.map((tp) => (
              <li key={tp.name} className={`p-2.5 border flex items-center justify-between gap-4 ${panel}`}>
                <span className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>{tp.name}</span>
                <a href={tp.url} target="_blank" rel="noopener noreferrer" className={`${accent} hover:underline shrink-0`}>
                  Privacy Policy ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className={h2}>{sections.length + 2}. Children&apos;s Privacy &amp; Policy Changes</h2>
          <p>
            {appName} is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us so we can delete it promptly.
          </p>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the effective date above.
          </p>
        </section>

        <section className={`space-y-3 pt-6 border-t ${rule}`}>
          <h2 className={h2}>{lastSectionNumber + 1}. Contact Us</h2>
          <p>If you have any questions or suggestions about this Privacy Policy, please contact us at:</p>
          <div className={`p-4 border space-y-1 font-mono text-xs sm:text-sm ${
            isLight ? 'bg-zinc-50 border-zinc-200 text-zinc-700' : 'bg-zinc-900/90 border-zinc-800 text-zinc-300'
          }`}>
            <p><strong>Organization:</strong> STF Ecosystem (Sphere Tech Foundation)</p>
            <p><strong>Support &amp; Privacy:</strong> <a href={`mailto:${SUPPORT_EMAIL}`} className={`${accent} hover:underline`}>{SUPPORT_EMAIL}</a></p>
            <p><strong>Website:</strong> <a href="https://stfweb3ecosystem.com/" target="_blank" rel="noopener noreferrer" className={`${accent} hover:underline`}>stfweb3ecosystem.com</a></p>
          </div>
        </section>

        <footer className={`pt-8 pb-12 border-t text-xs font-mono text-center text-zinc-500 ${
          isLight ? 'border-zinc-200' : 'border-zinc-800/60'
        }`}>
          <p>© 2026 Yemini. All rights reserved.</p>
          <p className="mt-1">{appName} • Standalone In-App Privacy Document</p>
        </footer>

      </article>
    </div>
  );
};
