import React, { useState } from 'react';
import { ExtensionItem } from '../types';
import { 
  X, ShieldCheck, Download, Copy, Check, Star, 
  Terminal, HardDrive, Cpu, Layers, ExternalLink 
} from 'lucide-react';

interface ExtensionModalProps {
  extension: ExtensionItem | null;
  onClose: () => void;
  onNavigateToDownload: () => void;
}

export const ExtensionModal: React.FC<ExtensionModalProps> = ({
  extension,
  onClose,
  onNavigateToDownload
}) => {
  const [copied, setCopied] = useState(false);

  if (!extension) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(extension.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0c0c10] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Topbar */}
        <div className="p-6 bg-[#0f0f15] border-b border-zinc-800 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#ff8585] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  {extension.displayName}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  v{extension.version}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400 font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Official First-Party Toolchain
                </span>
                <span>•</span>
                <span>Published by {extension.publisher}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#08080b] border border-zinc-800/80 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block">Package Size</span>
              <span className="font-semibold text-zinc-200 mt-0.5 block">{extension.size}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Compatibility</span>
              <span className="font-semibold text-zinc-200 mt-0.5 block">{extension.compatibility.join(' & ')}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Active Installs</span>
              <span className="font-semibold text-zinc-200 mt-0.5 block">{extension.downloads} developers</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Package Overview
            </h4>
            <p className="text-zinc-300 leading-relaxed">
              {extension.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2.5">
              Included Toolchain Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {extension.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/70">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Command */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Installation via Yemini CLI or In-App Marketplace
            </h4>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#07070a] border border-zinc-800 font-mono text-xs text-zinc-200">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#ff6767]" />
                <span>{extension.command}</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* First-Party Trust Notice */}
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 text-xs text-zinc-400 space-y-1">
            <p className="font-semibold text-zinc-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>STF Verified & Cryptographically Signed</span>
            </p>
            <p>
              This toolchain is authored and maintained by STF Ecosystem engineers. It executes inside an isolated sandbox with zero malicious third-party dependencies.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#09090d] border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            Install directly from Yemini IDE
          </span>
          <button
            onClick={() => {
              onClose();
              onNavigateToDownload();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Get Yemini to Install</span>
          </button>
        </div>
      </div>
    </div>
  );
};
