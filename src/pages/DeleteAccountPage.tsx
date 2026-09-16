import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';

interface DeleteAccountPageProps {
  onNavigate?: (route: PageRoute) => void;
}

export const DeleteAccountPage: React.FC<DeleteAccountPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const isLight = theme === 'light';
  const supportEmail = 'yeminisupport@gmail.com';

  const emailTemplate = `To: ${supportEmail}
Subject: Account Deletion Request

Hello Yemini Support Team,

I am requesting the permanent deletion of my Yemini account and all associated cloud data.

1. Email address associated with my Yemini account: [YOUR REGISTERED EMAIL]
2. Confirmation: I confirm that I want my account, profile, and all cloud-synced project data permanently deleted.

Thank you.`;

  const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(
    'Account Deletion Request'
  )}&body=${encodeURIComponent(
    'Hello Yemini Support Team,\n\nI am requesting the permanent deletion of my Yemini account and all associated cloud data.\n\n1. Email address associated with my Yemini account: [Enter your account email]\n2. Confirmation: I confirm that I want my account and all associated data permanently deleted.\n\nThank you.'
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(supportEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard API unavailable
    }
  };

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(emailTemplate);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className={`min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200 ${
        isLight
          ? 'bg-[#f5f5f7] text-[#1d1d1f]'
          : 'bg-[#070709] text-zinc-300'
      }`}
    >
      <article className="max-w-3xl mx-auto space-y-12">
        {/* Top Breadcrumb / Back Link */}
        {onNavigate && (
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              id="back-to-legal-btn"
              onClick={() => onNavigate('privacy')}
              className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                isLight
                  ? 'text-gray-600 hover:text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Legal &amp; Privacy Center</span>
            </button>
            <span className={isLight ? 'text-gray-400' : 'text-zinc-600'}>/</span>
            <span className={isLight ? 'text-gray-900' : 'text-zinc-200'}>
              Account Deletion
            </span>
          </div>
        )}

        {/* Document Header */}
        <header className="space-y-4 pb-8 border-b border-zinc-800/60">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium border ${
              isLight
                ? 'bg-white border-gray-300 text-red-900'
                : 'bg-zinc-900 border-zinc-800 text-[#ff8585]'
            }`}
          >
            <span>Google Play Policy Compliance • Data Transparency</span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            Delete Your Yemini Account
          </h1>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-gray-700' : 'text-zinc-300'
            }`}
          >
            If you&apos;d like to delete your Yemini account and associated data,
            follow the steps below.
          </p>
        </header>

        {/* Section: How to Request Deletion */}
        <section className="space-y-6">
          <h2
            className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            How to Request Deletion
          </h2>

          <p className="leading-relaxed">
            Send an email to{' '}
            <a
              href={`mailto:${supportEmail}`}
              className="font-mono font-semibold underline underline-offset-4 decoration-1 hover:text-[#ba1724]"
            >
              {supportEmail}
            </a>{' '}
            with the subject line &ldquo;Account Deletion Request,&rdquo; including:
          </p>

          <ol
            className={`list-decimal pl-6 space-y-2.5 font-medium ${
              isLight ? 'text-gray-800' : 'text-zinc-200'
            }`}
          >
            <li>The email address associated with your Yemini account</li>
            <li>Confirmation that you want your account and data permanently deleted</li>
          </ol>

          {/* Timeframe Callout */}
          <div
            className={`p-4 rounded-xl border ${
              isLight
                ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                : 'bg-zinc-900/90 border-zinc-800 text-zinc-300'
            }`}
          >
            <p className="text-sm leading-relaxed">
              We will process your request within <strong>7–14 business days</strong> and
              send you a confirmation once it&apos;s complete.
            </p>
          </div>

          {/* Action Buttons & Quick Template */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="btn-open-email-client"
                href={mailtoUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#ba1724] hover:bg-[#9a101d] transition-colors shadow-xs cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Compose Request in Email Client</span>
              </a>

              <button
                id="btn-copy-email"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Copy Support Email</span>
                  </>
                )}
              </button>

              <button
                id="btn-copy-template"
                onClick={handleCopyTemplate}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                {copiedTemplate ? (
                  <>
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>Template Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span>Copy Email Template</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Draft Box */}
            <div
              className={`p-4 rounded-xl border font-mono text-xs leading-relaxed space-y-1 ${
                isLight
                  ? 'bg-gray-100 border-gray-300 text-gray-800'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-300'
              }`}
            >
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                Standard Email Request Template
              </div>
              <p>
                <strong>To:</strong> {supportEmail}
              </p>
              <p>
                <strong>Subject:</strong> Account Deletion Request
              </p>
              <div className="pt-2 text-zinc-400">
                <p>Hello Yemini Support Team,</p>
                <p className="mt-1">
                  I am requesting the permanent deletion of my Yemini account and all associated cloud data.
                </p>
                <p className="mt-1">
                  1. Registered Account Email: [Your Email Here]
                </p>
                <p>
                  2. Confirmation: I confirm that I want my account and data permanently deleted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What Gets Deleted */}
        <section className="space-y-4 pt-6 border-t border-zinc-800/60">
          <h2
            className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            What Gets Deleted
          </h2>
          <p className="leading-relaxed">
            When your account is deleted, the following are permanently removed:
          </p>
          <ul
            className={`list-disc pl-6 space-y-2 leading-relaxed ${
              isLight ? 'text-gray-800' : 'text-zinc-300'
            }`}
          >
            <li>Your account information (email address, display name, password hash)</li>
            <li>Any projects you synced to the cloud, including their file contents</li>
            <li>Your device registration and usage analytics tied to your account</li>
            <li>
              Your GitHub connection status (the connection flag itself — this does not affect
              your actual GitHub account or repositories, which are entirely separate and unaffected)
            </li>
          </ul>
        </section>

        {/* Section: What May Be Retained */}
        <section className="space-y-4 pt-6 border-t border-zinc-800/60">
          <h2
            className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            What May Be Retained
          </h2>
          <ul
            className={`list-disc pl-6 space-y-2 leading-relaxed ${
              isLight ? 'text-gray-800' : 'text-zinc-300'
            }`}
          >
            <li>
              Aggregated, anonymized usage statistics that can no longer be tied to your identity
              may be retained for product improvement purposes
            </li>
            <li>
              Data we&apos;re legally required to retain (e.g., for fraud prevention or legal
              compliance) will be kept only as long as required by applicable law
            </li>
          </ul>
        </section>

        {/* Section: Local-Only Data */}
        <section className="space-y-4 pt-6 border-t border-zinc-800/60">
          <h2
            className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            Local-Only Data
          </h2>
          <p className="leading-relaxed">
            Projects and files you never synced to the cloud exist only on your device and are not
            affected by this process — you can delete those directly within the app or by
            uninstalling it.
          </p>
        </section>

        {/* Section: Questions */}
        <section className="space-y-4 pt-6 border-t border-zinc-800/60">
          <h2
            className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            Questions
          </h2>
          <p className="leading-relaxed">
            If you have questions about this process, contact us at{' '}
            <a
              href={`mailto:${supportEmail}`}
              className="font-mono font-semibold underline underline-offset-4 decoration-1 hover:text-[#ba1724]"
            >
              {supportEmail}
            </a>
            .
          </p>
        </section>

        {/* Mandatory Policy Disclosure Footnote */}
        <footer className="pt-8 pb-4 border-t border-zinc-800/60 text-xs text-zinc-500 font-mono space-y-2">
          <p className="italic">
            This page is referenced from the Yemini Google Play Store listing, as required by
            Google Play&apos;s account deletion policy.
          </p>
          <p>© 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.</p>
        </footer>
      </article>
    </div>
  );
};

export default DeleteAccountPage;
