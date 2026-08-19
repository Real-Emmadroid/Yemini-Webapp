import React, { useState } from 'react';
import { PageRoute, PlatformDownload } from '../types';
import { platformsData, changelogData } from '../data/downloadsData';
import { 
  Download, Smartphone, Monitor, ShieldCheck, CheckCircle2, 
  Copy, Check, FileCode2, Terminal, Info, Clock, Layers, Sparkles 
} from 'lucide-react';

interface DownloadPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  const [activePlatformId, setActivePlatformId] = useState<'android' | 'windows' | 'macos' | 'linux'>('android');
  const [copiedSha, setCopiedSha] = useState(false);
  const [downloadModalTriggered, setDownloadModalTriggered] = useState<string | null>(null);
  const [showChangelogModal, setShowChangelogModal] = useState(false);

  const activePlatform = platformsData.find(p => p.id === activePlatformId)!;

  const handleCopySha = (sha: string) => {
    navigator.clipboard.writeText(sha);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleDownloadClick = (platform: PlatformDownload) => {
    setDownloadModalTriggered(platform.name);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Download Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <Download className="w-3.5 h-3.5 text-[#ff6767]" />
          <span>Official Distribution Channels</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Yemini is ready <br />
          <span className="text-yemini-gradient">when you are.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400">
          Download the latest stable release for Android, Windows, macOS, or Linux. All packages are signed and maintained directly by STF Ecosystem.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2 text-xs font-mono">
          <button
            onClick={() => setShowChangelogModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Clock className="w-3.5 h-3.5 text-[#ff8585]" />
            <span>View Release Changelog (v1.2.0)</span>
          </button>
        </div>
      </div>

      {/* OS Tab Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0e0e13] border border-zinc-800 gap-2">
          {platformsData.map((plat) => {
            const isSelected = activePlatformId === plat.id;
            return (
              <button
                key={plat.id}
                onClick={() => setActivePlatformId(plat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white shadow-lg shadow-[#5b0000]/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                {plat.category === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                <span>{plat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Platform Primary Card */}
      <div className="max-w-4xl mx-auto bg-[#09090d] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 yemini-glow-hover">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activePlatform.name} — {activePlatform.subtitle}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
              <span className="text-emerald-400 font-semibold">{activePlatform.version}</span>
              <span>•</span>
              <span>Released {activePlatform.releaseDate}</span>
              <span>•</span>
              <span>{activePlatform.fileSize}</span>
            </div>
          </div>

          <button
            onClick={() => handleDownloadClick(activePlatform)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:brightness-110 shadow-xl shadow-[#5b0000]/40 transition-all active:scale-95 shrink-0"
          >
            <Download className="w-5 h-5" />
            <span>{activePlatform.downloadLabel}</span>
          </button>
        </div>

        {/* Architectures & Checksum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
            <span className="text-zinc-500 block">Supported CPU Architectures</span>
            <span className="text-zinc-200 font-semibold block">{activePlatform.supportedArchitectures.join(', ')}</span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">SHA-256 Checksum</span>
              <button
                onClick={() => handleCopySha(activePlatform.sha256)}
                className="text-zinc-400 hover:text-white flex items-center gap-1 text-[10px]"
              >
                {copiedSha ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSha ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <span className="text-zinc-300 font-mono text-[11px] truncate block" title={activePlatform.sha256}>
              {activePlatform.sha256}
            </span>
          </div>
        </div>

        {/* Installation Steps & System Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Installation Instructions
            </h4>
            <div className="space-y-2">
              {activePlatform.installSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              System Requirements
            </h4>
            <div className="space-y-2">
              {activePlatform.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Trigger Confirmation Modal */}
      {downloadModalTriggered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md bg-[#0e0e13] border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-5 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5b0000] to-[#ff6767] text-white flex items-center justify-center mx-auto shadow-lg">
              <Download className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                Preparing {downloadModalTriggered} Package
              </h3>
              <p className="text-xs text-zinc-400">
                Verifying digital signature from STF Ecosystem release mirror.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 text-left space-y-1">
              <p className="text-emerald-400">✔ Release signed by: Sphere Tech Foundation</p>
              <p className="text-zinc-400">✔ Package: {activePlatform.packageType}</p>
              <p className="text-zinc-400">✔ Checksum verification: Valid</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setDownloadModalTriggered(null)}
                className="flex-1 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setDownloadModalTriggered(null);
                  onNavigate('docs');
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white text-xs font-semibold transition-all hover:brightness-110"
              >
                View Setup Docs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Changelog Modal */}
      {showChangelogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl bg-[#0c0c10] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ff8585]" />
                <h3 className="text-lg font-bold text-white">Yemini Release Changelog</h3>
              </div>
              <button
                onClick={() => setShowChangelogModal(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-6 text-sm">
              {changelogData.map((release) => (
                <div key={release.version} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">{release.version}</span>
                    <span className="text-xs font-mono text-zinc-500">{release.date}</span>
                  </div>
                  <p className="text-xs text-zinc-300">{release.summary}</p>
                  
                  <div className="space-y-1 text-xs">
                    <span className="text-zinc-500 font-mono">Highlights:</span>
                    {release.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-300">
                        <span className="text-[#ff6767]">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 text-right">
              <button
                onClick={() => setShowChangelogModal(false)}
                className="px-5 py-2 rounded-xl bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
