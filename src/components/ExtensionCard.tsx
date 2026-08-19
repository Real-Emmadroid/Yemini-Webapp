import React, { useState } from 'react';
import { ExtensionItem } from '../types';
import { 
  ShieldCheck, Download, Copy, Check, Star, ArrowUpRight, 
  FileCode2, Cpu, Zap, Code2, Boxes, Coffee, Layers, Compass, 
  Server, Wand2, CheckCircle2, Bug, Palette, GitBranch 
} from 'lucide-react';

interface ExtensionCardProps {
  extension: ExtensionItem;
  onOpenDetails: (extension: ExtensionItem) => void;
  onNavigateToDownload: () => void;
}

export const ExtensionCard: React.FC<ExtensionCardProps> = ({
  extension,
  onOpenDetails,
  onNavigateToDownload
}) => {
  const [copied, setCopied] = useState(false);

  const getExtensionIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#ff8585]" };
    switch (iconName) {
      case 'FileCode2': return <FileCode2 {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Wand2': return <Wand2 {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Bug': return <Bug {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      default: return <FileCode2 {...props} />;
    }
  };

  const handleCopyCommand = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(extension.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onOpenDetails(extension)}
      className="group relative bg-[#0a0a0e] border border-zinc-800/90 rounded-2xl p-5 hover:border-[#ff6767]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-black/60 yemini-glow-hover"
    >
      <div>
        {/* Card Header: Icon + Publisher Badge + Version */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 group-hover:border-[#ff6767]/30 transition-colors shrink-0">
            {getExtensionIcon(extension.iconName)}
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3 h-3" />
              <span>Official STF</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">v{extension.version}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h4 className="text-base font-bold text-white group-hover:text-[#ff8585] transition-colors line-clamp-1">
          {extension.displayName}
        </h4>
        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed line-clamp-2">
          {extension.shortDescription}
        </p>

        {/* Compatibility & Specs */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-zinc-800/70 text-[11px] font-mono text-zinc-400">
          <span className="text-zinc-500">Target:</span>
          {extension.compatibility.map((c) => (
            <span
              key={c}
              className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {c}
            </span>
          ))}
          <span className="ml-auto text-zinc-500">{extension.size}</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between gap-2">
        {/* Copy CLI command snippet */}
        <button
          onClick={handleCopyCommand}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors"
          title={`Copy "${extension.command}"`}
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-zinc-500" />}
          <span>{extension.name}</span>
        </button>

        {/* Details CTA */}
        <span className="text-xs font-semibold text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};
