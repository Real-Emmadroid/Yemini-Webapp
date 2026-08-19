import React, { useState } from 'react';
import { Wifi, WifiOff, Play, Terminal, CheckCircle2, Cpu, HardDrive, ShieldCheck, Zap } from 'lucide-react';

export const OfflineSimulator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false); // Default to offline to demonstrate the power!
  const [executionResult, setExecutionResult] = useState<string | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);

  const handleTriggerOfflineRun = () => {
    setIsCompiling(true);
    setExecutionResult(null);

    setTimeout(() => {
      setIsCompiling(false);
      setExecutionResult(
        `[yemini-local-runtime] Invoking on-device C++ Clang binary...
> /data/user/0/org.spheretech.yemini/bin/clang++ -O3 main.cpp -o main
> ./main
Output: Matrix calculated in 0.04s. Zero network packets sent.
Status: Success (Exit Code 0) • 100% Local Execution`
      );
    }, 350);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0a0a0e] border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden yemini-glow-hover">
      {/* Header and Toggle Switch */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff8585]">
              Interactive Simulation
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
              On-Device VM
            </span>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
            Toggle Network &amp; Test Local Execution
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
            Simulate an airplane or offline environment by toggling internet connectivity. Notice how code compilation and local servers run without disruption.
          </p>
        </div>

        {/* Network Connection Toggle Button */}
        <div className="flex items-center gap-2 sm:gap-3 bg-[#111116] p-1.5 rounded-2xl border border-zinc-800 shrink-0 w-full sm:w-auto justify-center">
          <button
            onClick={() => setIsOnline(true)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              isOnline
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Online</span>
          </button>

          <button
            onClick={() => setIsOnline(false)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              !isOnline
                ? 'bg-[#5b0000]/80 text-[#ff8585] border border-[#ff6767]/40 shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Offline Mode</span>
          </button>
        </div>
      </div>

      {/* Visual State Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-6">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e0e14] border border-zinc-800/80 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-amber-400" />
              <span>Installed Toolchains</span>
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">Local NVMe</span>
          </div>
          <p className="text-sm font-semibold text-white">Clang 18 + Python 3.12</p>
          <p className="text-xs text-zinc-500">Stored on-device • 0 KB network used</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e0e14] border border-zinc-800/80 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Execution Engine</span>
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">ARM64 / x86</span>
          </div>
          <p className="text-sm font-semibold text-white">Native CPU Compilation</p>
          <p className="text-xs text-zinc-500">Local sandbox process isolation</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e0e14] border border-zinc-800/80 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              {isOnline ? <Wifi className="w-4 h-4 text-emerald-400" /> : <WifiOff className="w-4 h-4 text-[#ff6767]" />}
              <span>Network State</span>
            </span>
            <span className={`font-mono text-[11px] ${isOnline ? 'text-emerald-400' : 'text-[#ff8585]'}`}>
              {isOnline ? 'Connected' : 'DISCONNECTED'}
            </span>
          </div>
          <p className="text-sm font-semibold text-white">
            {isOnline ? 'Cloud sync active' : '100% Offline Capable'}
          </p>
          <p className="text-xs text-zinc-500">
            {isOnline ? 'Ready for remote git' : 'Local IDE & compilers functional'}
          </p>
        </div>
      </div>

      {/* Interactive Code / Execution Box */}
      <div className="rounded-2xl bg-[#070709] border border-zinc-800 overflow-hidden font-mono text-xs">
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d0d12] border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-zinc-400 min-w-0">
            <Terminal className="w-4 h-4 text-[#ff6767] shrink-0" />
            <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs truncate">main.cpp — Local On-Device Project</span>
          </div>

          <button
            onClick={handleTriggerOfflineRun}
            disabled={isCompiling}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:from-[#7a0000] hover:to-[#ff6767] text-white font-semibold text-[11px] sm:text-xs shadow-md transition-all active:scale-95 disabled:opacity-50 shrink-0"
          >
            {isCompiling ? (
              <span>Compiling Locally...</span>
            ) : (
              <>
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                <span>Test Local Run</span>
              </>
            )}
          </button>
        </div>

        <div className="p-3 sm:p-4 text-zinc-300 space-y-0.5 sm:space-y-1 text-[11px] sm:text-xs overflow-x-auto leading-relaxed">
          <p className="text-zinc-500">// Written, compiled, and executed locally on this device</p>
          <p><span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;iostream&gt;</span></p>
          <p><span className="text-sky-400">int</span> <span className="text-[#ff8585] font-semibold">main</span>() &#123;</p>
          <p className="pl-3 sm:pl-4"><span className="text-amber-300">std::cout</span> &lt;&lt; <span className="text-emerald-300">&quot;Running 100% offline with Yemini on-device toolchain.&quot;</span> &lt;&lt; std::endl;</p>
          <p className="pl-3 sm:pl-4"><span className="text-purple-400">return</span> 0;</p>
          <p>&#125;</p>
        </div>

        {/* Output Area */}
        <div className="border-t border-zinc-800 bg-[#060608] p-3 sm:p-4 text-[10px] sm:text-[11px]">
          {executionResult ? (
            <div className="space-y-1 animate-fadeIn">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold pb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Latency Local Output:</span>
              </div>
              <pre className="text-zinc-300 whitespace-pre-wrap overflow-x-auto">{executionResult}</pre>
            </div>
          ) : (
            <p className="text-zinc-600 italic">
              Click &quot;Test Local Run&quot; to invoke the local on-device compiler without sending a single byte over the web.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
