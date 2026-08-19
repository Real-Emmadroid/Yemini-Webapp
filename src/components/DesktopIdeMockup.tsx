import React, { useState } from 'react';
import { 
  FolderTree, Search, GitBranch, Play, Package, Sparkles, 
  Terminal, Settings, FileCode, Check, AlertCircle, ChevronDown, 
  ChevronRight, RefreshCw, Layers, ShieldCheck, X, Plus
} from 'lucide-react';
import { YeminiSymbol } from './YeminiSymbol';

export const DesktopIdeMockup: React.FC = () => {
  const [activeActivity, setActiveActivity] = useState<'explorer' | 'git' | 'extensions' | 'ai'>('explorer');
  const [activeTab, setActiveTab] = useState<'main.rs' | 'Cargo.toml' | 'api.ts'>('main.rs');
  const [terminalTab, setTerminalTab] = useState<'terminal' | 'output' | 'problems'>('terminal');
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'yemini-desktop v1.2.0 (x86_64-apple-darwin)',
    'Loaded LSP: rust-analyzer (official STF)',
    '$ cargo build --release',
    '   Compiling yemini-core v1.2.0 (/workspace/core)',
    '    Finished release [optimized] target(s) in 0.42s'
  ]);

  const handleRunBuild = () => {
    setTerminalRunning(true);
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        '$ ./target/release/yemini-core --benchmark',
        '[yemini-bench] Initializing Metal GPU renderer...',
        '[yemini-bench] 120.0 FPS locked • 14.2 MB RAM consumed',
        '[yemini-bench] Zero latency buffer verification: PASS'
      ]);
      setTerminalRunning(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-full bg-[#08080b] border border-zinc-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-xs font-mono flex flex-col yemini-glow-hover">
      {/* Titlebar / Mac Header */}
      <div className="h-8 sm:h-9 bg-[#0e0e13] border-b border-zinc-800 px-2.5 sm:px-3 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-1.5 ml-1 sm:ml-2 truncate">
            <YeminiSymbol size="xs" />
            <span className="text-zinc-300 font-semibold text-[10px] sm:text-[11px] truncate">Yemini Desktop</span>
            <span className="text-zinc-600 text-[10px] sm:text-[11px] hidden md:inline">— workspace-stf [Release]</span>
          </div>
        </div>

        {/* Global Search Bar mockup */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-[#08080b] border border-zinc-800 text-zinc-400 text-[11px]">
          <Search className="w-3 h-3 text-zinc-500" />
          <span>Search files, commands (⌘P)</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={handleRunBuild}
            disabled={terminalRunning}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white font-medium text-[10px] sm:text-[11px] hover:brightness-110 active:scale-95 transition-all shadow-sm"
          >
            {terminalRunning ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
            <span>Run Build</span>
          </button>
        </div>
      </div>

      {/* Main IDE Body */}
      <div className="flex flex-1 min-h-[300px] sm:min-h-[420px] max-h-[420px] sm:max-h-[500px]">
        {/* Left Activity Bar */}
        <div className="w-9 sm:w-12 bg-[#0a0a0d] border-r border-zinc-800/80 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 shrink-0 select-none">
          <button
            onClick={() => setActiveActivity('explorer')}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors relative ${
              activeActivity === 'explorer' ? 'text-[#ff6767] bg-zinc-800/60' : 'text-zinc-500 hover:text-zinc-300'
            }`}
            title="Explorer"
          >
            <FolderTree className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {activeActivity === 'explorer' && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 sm:h-4 bg-[#ff6767] rounded-r" />
            )}
          </button>

          <button
            onClick={() => setActiveActivity('git')}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors relative ${
              activeActivity === 'git' ? 'text-[#ff6767] bg-zinc-800/60' : 'text-zinc-500 hover:text-zinc-300'
            }`}
            title="Source Control"
          >
            <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {activeActivity === 'git' && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 sm:h-4 bg-[#ff6767] rounded-r" />
            )}
          </button>

          <button
            onClick={() => setActiveActivity('extensions')}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors relative ${
              activeActivity === 'extensions' ? 'text-[#ff6767] bg-zinc-800/60' : 'text-zinc-500 hover:text-zinc-300'
            }`}
            title="Extensions Marketplace"
          >
            <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {activeActivity === 'extensions' && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 sm:h-4 bg-[#ff6767] rounded-r" />
            )}
          </button>

          <button
            onClick={() => setActiveActivity('ai')}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors relative ${
              activeActivity === 'ai' ? 'text-[#ff6767] bg-zinc-800/60' : 'text-zinc-500 hover:text-zinc-300'
            }`}
            title="Yemini AI Agent"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {activeActivity === 'ai' && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 sm:h-4 bg-[#ff6767] rounded-r" />
            )}
          </button>

          <div className="mt-auto">
            <button className="p-1.5 sm:p-2 text-zinc-600 hover:text-zinc-300 transition-colors" title="Settings">
              <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Secondary Sidebar Panel (desktop only) */}
        <div className="hidden lg:flex w-48 bg-[#0c0c10] border-r border-zinc-800/80 flex-col shrink-0 select-none">
          {activeActivity === 'explorer' && (
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                <span>Explorer</span>
                <span className="text-zinc-600">STF-CORE</span>
              </div>
              <div className="space-y-1 text-zinc-300">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ChevronDown className="w-3 h-3" />
                  <span className="font-semibold text-zinc-200">src</span>
                </div>
                <div className="pl-3 space-y-1">
                  <button
                    onClick={() => setActiveTab('main.rs')}
                    className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left ${
                      activeTab === 'main.rs' ? 'bg-[#181820] text-[#ff8585] font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-amber-400" />
                    <span>main.rs</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('api.ts')}
                    className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left ${
                      activeTab === 'api.ts' ? 'bg-[#181820] text-[#ff8585] font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-sky-400" />
                    <span>api.ts</span>
                  </button>
                </div>
                <button
                  onClick={() => setActiveTab('Cargo.toml')}
                  className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left ${
                    activeTab === 'Cargo.toml' ? 'bg-[#181820] text-[#ff8585] font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-purple-400" />
                  <span>Cargo.toml</span>
                </button>
              </div>
            </div>
          )}

          {activeActivity === 'git' && (
            <div className="p-3 space-y-2">
              <div className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                Source Control (Git)
              </div>
              <p className="text-zinc-500 text-[11px]">Branch: <span className="text-zinc-300 font-semibold">main</span></p>
              <div className="pt-2 space-y-1.5">
                <p className="text-[10px] text-zinc-400 font-semibold">Changes (1)</p>
                <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900 border border-zinc-800 text-[11px]">
                  <span className="text-amber-400">M src/main.rs</span>
                  <span className="text-emerald-400">+12 -2</span>
                </div>
              </div>
            </div>
          )}

          {activeActivity === 'extensions' && (
            <div className="p-3 space-y-2">
              <div className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                STF Marketplace
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-200">Rust Suite</span>
                    <span className="text-[9px] px-1 rounded bg-emerald-950 text-emerald-400">Active</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-0.5">rust-analyzer & Cargo</p>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-200">Python 3.12</span>
                    <span className="text-[9px] px-1 rounded bg-emerald-950 text-emerald-400">Active</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Pyright & VM</p>
                </div>
              </div>
            </div>
          )}

          {activeActivity === 'ai' && (
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-1.5 text-zinc-300 font-bold text-[10px]">
                <YeminiSymbol size="xs" />
                <span>YEMINI AI</span>
                <span className="text-[9px] px-1 rounded bg-[#5b0000] text-[#ff8585]">Preview</span>
              </div>
              <p className="text-zinc-400 text-[10px] leading-tight">
                Context loaded: <span className="text-zinc-200">32 files parsed</span>
              </p>
              <div className="p-2 rounded bg-zinc-900/90 border border-[#ff6767]/30 text-[11px] text-zinc-300 space-y-1">
                <p className="text-[#ff8585] font-semibold">Ready to assist:</p>
                <p className="text-zinc-400 text-[10px]">Ask to refactor functions or generate unit tests.</p>
              </div>
            </div>
          )}
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#070709] min-w-0">
          {/* Tabs */}
          <div className="flex items-center bg-[#0a0a0e] border-b border-zinc-800 overflow-x-auto no-scrollbar">
            {(['main.rs', 'Cargo.toml', 'api.ts'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 border-r border-zinc-800/80 text-[10px] sm:text-xs transition-colors shrink-0 ${
                  activeTab === tab
                    ? 'bg-[#070709] text-white border-t-2 border-t-[#ff6767] font-semibold'
                    : 'text-zinc-500 hover:text-zinc-300 bg-[#0c0c10]'
                }`}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="px-3 py-1 bg-[#09090c] border-b border-zinc-800/60 text-[9px] sm:text-[10px] text-zinc-500 flex items-center gap-1 truncate">
            <span>workspace-stf</span>
            <span>›</span>
            <span>src</span>
            <span>›</span>
            <span className="text-zinc-300 font-medium">{activeTab}</span>
          </div>

          {/* Code Text Area */}
          <div className="flex-1 p-2.5 sm:p-4 overflow-y-auto overflow-x-auto font-mono text-[10px] sm:text-[11px] leading-relaxed text-zinc-300">
            {activeTab === 'main.rs' && (
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-zinc-500">// Native Multi-Threaded Engine for Yemini Desktop</p>
                <p><span className="text-purple-400">use</span> std::sync::Arc;</p>
                <p><span className="text-purple-400">use</span> tokio::sync::Mutex;</p>
                <p>&nbsp;</p>
                <p><span className="text-sky-400">pub struct</span> <span className="text-amber-300">YeminiWorkspace</span> &#123;</p>
                <p className="pl-3 sm:pl-4">root_path: String,</p>
                <p className="pl-3 sm:pl-4">open_buffers: Arc&lt;Mutex&lt;Vec&lt;String&gt;&gt;&gt;,</p>
                <p className="pl-3 sm:pl-4">lsp_active: bool,</p>
                <p>&#125;</p>
                <p>&nbsp;</p>
                <p><span className="text-purple-400">impl</span> <span className="text-amber-300">YeminiWorkspace</span> &#123;</p>
                <p className="pl-3 sm:pl-4"><span className="text-sky-400">pub fn</span> <span className="text-[#ff8585] font-semibold">new</span>(path: &amp;str) -&gt; Self &#123;</p>
                <p className="pl-6 sm:pl-8">println!(<span className="text-emerald-300">&quot;[yemini-desktop] Initialized at &#123;&#125;&quot;</span>, path);</p>
                <p className="pl-6 sm:pl-8">Self &#123; root_path: path.to_string(), open_buffers: Arc::new(Mutex::new(vec![])), lsp_active: <span className="text-purple-400">true</span> &#125;</p>
                <p className="pl-3 sm:pl-4">&#125;</p>
                <p>&#125;</p>
              </div>
            )}

            {activeTab === 'Cargo.toml' && (
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-zinc-500"># Yemini Desktop Configuration</p>
                <p><span className="text-[#ff8585]">[package]</span></p>
                <p>name = <span className="text-emerald-300">&quot;yemini-core&quot;</span></p>
                <p>version = <span className="text-emerald-300">&quot;1.2.0&quot;</span></p>
                <p>edition = <span className="text-emerald-300">&quot;2024&quot;</span></p>
                <p>authors = [<span className="text-emerald-300">&quot;STF Ecosystem&quot;</span>]</p>
                <p>&nbsp;</p>
                <p><span className="text-[#ff8585]">[dependencies]</span></p>
                <p>tokio = &#123; version = <span className="text-emerald-300">&quot;1.38&quot;</span>, features = [<span className="text-emerald-300">&quot;full&quot;</span>] &#125;</p>
                <p>lsp-types = <span className="text-emerald-300">&quot;0.95&quot;</span></p>
              </div>
            )}

            {activeTab === 'api.ts' && (
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-zinc-500">// TypeScript Extension Runtime</p>
                <p><span className="text-purple-400">export interface</span> <span className="text-amber-300">ToolchainConfig</span> &#123;</p>
                <p className="pl-3 sm:pl-4">runtime: <span className="text-emerald-300">&quot;v8&quot;</span> | <span className="text-emerald-300">&quot;native&quot;</span> | <span className="text-emerald-300">&quot;wasm&quot;</span>;</p>
                <p className="pl-3 sm:pl-4">isolated: <span className="text-purple-400">boolean</span>;</p>
                <p>&#125;</p>
              </div>
            )}
          </div>

          {/* Bottom Integrated Terminal Panel */}
          <div className="h-24 sm:h-36 bg-[#0a0a0d] border-t border-zinc-800 flex flex-col shrink-0">
            {/* Terminal Tab Header */}
            <div className="h-6 sm:h-7 px-2.5 sm:px-3 bg-[#0d0d12] border-b border-zinc-800/80 flex items-center justify-between select-none">
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setTerminalTab('terminal')}
                  className={`text-[10px] sm:text-[11px] font-semibold ${terminalTab === 'terminal' ? 'text-[#ff8585]' : 'text-zinc-500'}`}
                >
                  Terminal
                </button>
                <button
                  onClick={() => setTerminalTab('output')}
                  className={`text-[10px] sm:text-[11px] font-semibold ${terminalTab === 'output' ? 'text-[#ff8585]' : 'text-zinc-500'}`}
                >
                  Output
                </button>
                <button
                  onClick={() => setTerminalTab('problems')}
                  className={`text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 ${terminalTab === 'problems' ? 'text-[#ff8585]' : 'text-zinc-500'}`}
                >
                  <span>Problems</span>
                  <span className="px-1 rounded-full bg-zinc-800 text-[8px] sm:text-[9px] text-emerald-400">0</span>
                </button>
              </div>
              <span className="text-[9px] sm:text-[10px] text-zinc-500 hidden sm:inline">bash (xterm-256color)</span>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-2 sm:p-2.5 overflow-y-auto font-mono text-[9px] sm:text-[10px] text-zinc-300 space-y-0.5">
              {terminalLogs.map((log, i) => (
                <p key={i} className={log.startsWith('$') ? 'text-amber-300' : log.includes('PASS') || log.includes('Finished') ? 'text-emerald-400' : 'text-zinc-400'}>
                  {log}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="h-5 sm:h-6 bg-[#09090c] border-t border-zinc-800/90 px-2.5 sm:px-3 flex items-center justify-between text-[9px] sm:text-[10px] text-zinc-400 select-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1 text-zinc-300 font-semibold">
            <GitBranch className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff6767]" />
            <span>main*</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span>0 Errors</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 font-mono">
          <span>Rust</span>
          <span>UTF-8</span>
          <span className="hidden sm:inline">Spaces: 4</span>
        </div>
      </div>
    </div>
  );
};
