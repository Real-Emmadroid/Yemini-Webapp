import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  Mail, MessageSquare, Send, CheckCircle2, 
  HelpCircle, ShieldAlert, Sparkles, Building, Globe 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
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
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <Mail className="w-3.5 h-3.5 text-[#ff6767]" />
          <span>STF Ecosystem Communications</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Get in touch with the <br />
          <span className="text-yemini-gradient">Yemini Team.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400">
          Have questions about Yemini, toolchain availability, security inquiries, or enterprise deployment? Our engineering team is here to assist.
        </p>
      </div>

      {/* Contact Card with Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#09090d] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        {/* Left column info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Direct Inquiries</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Select an inquiry type so your message reaches the appropriate STF working group.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1">
              <span className="font-semibold text-zinc-200 block">General &amp; Community Support</span>
              <span className="font-mono text-zinc-400 block">support@yemini.dev</span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1">
              <span className="font-semibold text-zinc-200 block">Security &amp; Vulnerability Disclosure</span>
              <span className="font-mono text-emerald-400 block">security@spheretech.org</span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1">
              <span className="font-semibold text-zinc-200 block">Parent Organization</span>
              <span className="text-zinc-400 block">STF Ecosystem (Sphere Tech Foundation)</span>
            </div>
          </div>
        </div>

        {/* Right column form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
              <p className="text-xs text-zinc-300 max-w-sm">
                Thank you for reaching out. An STF Ecosystem team member will respond to <span className="font-mono text-white">{email}</span> within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="mt-4 px-5 py-2 rounded-xl bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Inquiry Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['general', 'support', 'security', 'enterprise', 'press'] as const).map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-2 rounded-xl text-xs capitalize transition-colors font-medium ${
                        category === cat
                          ? 'bg-[#5b0000] text-white border border-[#ff6767]'
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
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full bg-[#121218] border border-zinc-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6767]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@example.com"
                    className="w-full bg-[#121218] border border-zinc-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6767]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Message Content *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry, bug report, or feature proposal..."
                  className="w-full bg-[#121218] border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6767]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
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
