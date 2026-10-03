import React from 'react';
import { PageRoute } from '../types';
import { 
  ShieldCheck, Lock, HardDrive, Key, EyeOff, 
  Terminal, CheckCircle2, FileCode2, AlertCircle 
} from 'lucide-react';

interface SecurityPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Security Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-[#ba1724] dark:text-[#ff6767]" />
          <span>STF Trust &amp; Security Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
          Security by Design. <br />
          <span className="text-yemini-gradient">Zero Surprises.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          We treat developer source code as the ultimate confidential asset. Yemini is engineered with strict local sandbox isolation, zero telemetry lock-in, and cryptographically verified toolchains.
        </p>
      </div>

      {/* 4 Pillars of Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">First-Party Curated Toolchains</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Unlike traditional open registries that suffer from typosquatting and malicious credential stealers, Yemini toolchains are strictly first-party. Every runtime, formatter, and debugger is compiled and signed directly by STF Ecosystem engineers.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
            <EyeOff className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Zero Telemetry Code Leaks</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Your file contents, syntax trees, AST nodes, and local git histories never leave your device unless you explicitly configure remote remotes. Yemini does not harvest keystrokes or source code for undisclosed AI training.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
            <HardDrive className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Process &amp; Filesystem Isolation</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Language servers and build tasks run in unprivileged child processes. On Android, Yemini operates within Android Scoped Storage boundaries, preventing unauthorized access to external device photos or private application data.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#ba1724] dark:text-[#ff8585] w-fit">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Cryptographic Release Integrity</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every APK binary, Windows installer, macOS DMG, and Linux archive is published alongside official SHA-256 digests and signed with STF Ecosystem’s root certificate authority.
          </p>
        </div>
      </div>

      {/* Responsible Disclosure Contact */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0a0a0e] border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Discovered a security vulnerability?</h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            STF Ecosystem operates a coordinated vulnerability disclosure program with rapid response times.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white font-semibold text-xs hover:brightness-110 transition-all shrink-0"
        >
          Submit Security Report
        </button>
      </div>
    </div>
  );
};
