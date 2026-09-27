import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  Mail, Send, CheckCircle2, ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [category, setCategory] = useState<'general' | 'support' | 'security' | 'enterprise' | 'press'>('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={`pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 transition-colors ${
      isLight ? 'text-zinc-800' : 'text-zinc-200'
    }`}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <a
          href="https://stfweb3ecosystem.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono transition-all hover:scale-105 ${
            isLight
              ? 'bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-zinc-800 shadow-xs'
              : 'bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300'
          }`}
        >
          <Mail className="w-3.5 h-3.5 text-[#ba1724] dark:text-[#ff6767]" />
          <span>STF Ecosystem Communications • Sphere Tech Foundation</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>

        <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight ${
          isLight ? 'text-zinc-900' : 'text-white'
        }`}>
          Get in touch with the <br />
          <span className="text-yemini-gradient">Yemini Team.</span>
        </h1>

        <p className={`text-base sm:text-lg ${
          isLight ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          Have questions about Yemini, toolchain availability, security inquiries, or enterprise deployment? Our engineering team is here to assist.
        </p>
      </div>

      {/* Contact Card with Form */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl p-6 sm:p-10 border transition-colors ${
        isLight
          ? 'bg-white border-zinc-200 shadow-sm'
          : 'bg-[#09090d] border-zinc-800 shadow-2xl'
      }`}>
        {/* Left column info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h3 className={`text-xl font-bold ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              Direct Inquiries
            </h3>
            <p className={`text-xs leading-relaxed ${
              isLight ? 'text-zinc-600' : 'text-zinc-400'
            }`}>
              Select an inquiry type so your message reaches the appropriate STF working group.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className={`p-4 rounded-2xl border space-y-1 transition-colors ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'
            }`}>
              <span className={`font-semibold block ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                General &amp; Developer Support
              </span>
              <a 
                href="mailto:yeminisupport@gmail.com"
                className="font-mono text-[#ba1724] dark:text-[#ff8585] hover:underline block break-all font-medium"
              >
                yeminisupport@gmail.com
              </a>
            </div>

            <div className={`p-4 rounded-2xl border space-y-1 transition-colors ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'
            }`}>
              <span className={`font-semibold block ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                Security &amp; Vulnerability Disclosure
              </span>
              <a 
                href="mailto:yeminisupport@gmail.com"
                className="font-mono text-emerald-600 dark:text-emerald-400 block hover:underline"
              >
                yeminisupport@gmail.com
              </a>
            </div>

            <div className={`p-4 rounded-2xl border space-y-1 transition-colors ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'
            }`}>
              <span className={`font-semibold block ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                Account Deletion Inquiries
              </span>
              <button
                onClick={() => onNavigate('delete-account')}
                className="font-medium text-[#ba1724] dark:text-[#ff8585] hover:underline cursor-pointer block text-left"
              >
                Account Deletion Request Guide →
              </button>
            </div>

            <div className={`p-4 rounded-2xl border space-y-1 transition-colors ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'
            }`}>
              <span className={`font-semibold block ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                Parent Company
              </span>
              <a
                href="https://stfweb3ecosystem.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#ba1724] dark:text-[#ff8585] hover:underline inline-flex items-center gap-1"
              >
                <span>Sphere Tech Foundation (stfweb3ecosystem.com)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Official Social Channels Card */}
            <div className={`p-4 rounded-2xl border space-y-2 transition-colors ${
              isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'
            }`}>
              <span className={`font-semibold block ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                Official Socials (@yeminiofficial)
              </span>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="https://facebook.com/yeminiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                      : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-200'
                  }`}
                >
                  Facebook
                </a>
                <a
                  href="https://x.com/yeminiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                      : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-200'
                  }`}
                >
                  X
                </a>
                <a
                  href="https://tiktok.com/@yeminiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                      : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-200'
                  }`}
                >
                  TikTok
                </a>
                <a
                  href="https://instagram.com/yeminiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                      : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-200'
                  }`}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className={`h-full flex flex-col items-center justify-center p-8 text-center space-y-4 rounded-2xl border transition-colors ${
              isLight
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-emerald-950/20 border-emerald-800/40 text-white'
            }`}>
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className={`text-xl font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                Message Transmitted
              </h4>
              <p className={`text-xs max-w-sm ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                Thank you for reaching out. An STF Ecosystem team member will respond to <span className="font-mono font-semibold">{email}</span> within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className={`mt-4 px-5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                  isLight
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-mono mb-1.5 ${
                  isLight ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  Inquiry Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['general', 'support', 'security', 'enterprise', 'press'] as const).map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-2 rounded-xl text-xs capitalize transition-colors font-medium cursor-pointer ${
                        category === cat
                          ? isLight
                            ? 'bg-[#ba1724] text-white border border-[#ba1724] shadow-xs'
                            : 'bg-[#5b0000] text-white border border-[#ff6767]'
                          : isLight
                            ? 'bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-200'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono mb-1.5 ${
                    isLight ? 'text-zinc-600' : 'text-zinc-400'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className={`w-full rounded-xl px-3.5 py-2 text-sm border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-[#ba1724] focus:bg-white'
                        : 'bg-[#121218] border-zinc-800 text-white placeholder-zinc-500 focus:border-[#ff6767]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono mb-1.5 ${
                    isLight ? 'text-zinc-600' : 'text-zinc-400'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@example.com"
                    className={`w-full rounded-xl px-3.5 py-2 text-sm border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-[#ba1724] focus:bg-white'
                        : 'bg-[#121218] border-zinc-800 text-white placeholder-zinc-500 focus:border-[#ff6767]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono mb-1.5 ${
                  isLight ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  Message Content *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry, bug report, or feature proposal..."
                  className={`w-full rounded-xl p-3.5 text-sm border focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-[#ba1724] focus:bg-white'
                      : 'bg-[#121218] border-zinc-800 text-white placeholder-zinc-500 focus:border-[#ff6767]'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 text-white font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
