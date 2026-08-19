import React, { useState } from 'react';
import { Copy, Check, Play, Terminal, Sparkles, RefreshCw } from 'lucide-react';
import { YeminiSymbol } from './YeminiSymbol';

interface CodeSnippet {
  id: string;
  name: string;
  language: string;
  code: string;
  output: string;
  executionTime: string;
}

const sampleSnippets: CodeSnippet[] = [
  {
    id: 'rust',
    name: 'main.rs',
    language: 'Rust',
    code: `// Yemini Native Core — Multi-Platform Compiler
use std::time::Instant;

fn compile_pipeline(target: &str) -> String {
    let timer = Instant::now();
    println!("[yemini-core] Compiling for {} architecture...", target);
    format!("Compiled in {:.2?} with 0 memory leaks", timer.elapsed())
}

fn main() {
    let targets = vec!["android-arm64", "macos-metal", "win-x64", "linux-vulkan"];
    for target in targets {
        let result = compile_pipeline(target);
        println!("✔ Target: {} -> {}", target, result);
    }
}`,
    output: `[yemini-core] Compiling for android-arm64 architecture...
✔ Target: android-arm64 -> Compiled in 42.10ms with 0 memory leaks
[yemini-core] Compiling for macos-metal architecture...
✔ Target: macos-metal -> Compiled in 38.50ms with 0 memory leaks
[yemini-core] Compiling for win-x64 architecture...
✔ Target: win-x64 -> Compiled in 45.20ms with 0 memory leaks
[yemini-core] Compiling for linux-vulkan architecture...
✔ Target: linux-vulkan -> Compiled in 39.80ms with 0 memory leaks

Build succeeded: 4 targets compiled offline in 0.16s`,
    executionTime: '0.16s'
  },
  {
    id: 'python',
    name: 'tensor_ops.py',
    language: 'Python',
    code: `# Yemini Python 3.12 Offline VM
import math
from typing import List

def matrix_vector_mult(matrix: List[List[float]], vector: List[float]) -> List[float]:
    """Execute local tensor product with zero network reliance."""
    rows, cols = len(matrix), len(vector)
    result = [0.0] * rows
    for i in range(rows):
        result[i] = sum(matrix[i][j] * vector[j] for j in range(cols))
    return result

if __name__ == "__main__":
    A = [[1.5, 2.0], [3.0, 4.5], [0.5, 1.2]]
    x = [2.0, -1.0]
    y = matrix_vector_mult(A, x)
    print(f"[tensor_ops] Computed result: {y}")
    print("[tensor_ops] Executed on local Android/Desktop runtime.")`,
    output: `[tensor_ops] Computed result: [1.0, 1.5, -0.2]
[tensor_ops] Executed on local Android/Desktop runtime.
[status] Process finished with exit code 0`,
    executionTime: '0.04s'
  },
  {
    id: 'typescript',
    name: 'server.ts',
    language: 'TypeScript',
    code: `// Node.js 22 LTS & TypeScript 5.8 on Yemini
import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = 3000;
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'online',
    platform: 'Yemini Runtime v1.2',
    author: 'STF Ecosystem',
    offlineCapable: true,
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(\`[http] Local dev server running at http://localhost:\${PORT}\`);
});`,
    output: `[http] Local dev server running at http://localhost:3000
[http] GET /api/status 200 OK (0.4ms)
[yemini] Hot reload active across devices`,
    executionTime: '0.08s'
  },
  {
    id: 'cpp',
    name: 'engine.cpp',
    language: 'C++',
    code: `// Modern C++23 Clang Toolchain
#include <iostream>
#include <vector>
#include <algorithm>
#include <ranges>

int main() {
    std::vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    std::ranges::sort(numbers);
    
    std::cout << "[clang-c++23] Sorted memory buffer: ";
    for (int n : numbers) {
        std::cout << n << " ";
    }
    std::cout << "\\n[clang-c++23] Zero runtime dependencies verified.\\n";
    return 0;
}`,
    output: `[clang-c++23] Sorted memory buffer: 11 12 22 25 34 64 90 
[clang-c++23] Zero runtime dependencies verified.
[clang] Binary compiled in 0.05s via on-device LLVM.`,
    executionTime: '0.05s'
  }
];

export const CodeWindow: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<CodeSnippet>(sampleSnippets[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [outputVisible, setOutputVisible] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setOutputVisible(true);
    }, 450);
  };

  return (
    <div className="w-full bg-[#0a0a0d] border border-zinc-800/90 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-sm font-mono flex flex-col transition-all duration-300 yemini-glow-hover">
      {/* Window Topbar */}
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d0d12] border-b border-zinc-800/80 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
        {/* Top bar first line on mobile / Left group on desktop */}
        <div className="flex items-center justify-between sm:justify-start gap-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 border border-rose-600/60 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 border border-amber-600/60 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 border border-emerald-600/60 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 pl-1.5">
              <YeminiSymbol size="xs" />
              <span className="text-zinc-400 text-[11px] sm:text-xs font-mono font-medium">yemini-workspace</span>
            </div>
          </div>

          {/* Right Actions (shown inline on mobile top bar) */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              title="Copy code"
              aria-label="Copy code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] text-white text-[11px] font-semibold shadow-sm transition-all active:scale-95 disabled:opacity-50"
            >
              {isRunning ? (
                <RefreshCw className="w-3 h-3 animate-spin" />
              ) : (
                <Play className="w-3 h-3 fill-current" />
              )}
              <span>Run</span>
            </button>
          </div>
        </div>

        {/* Tabs for Language Selection (horizontal scrollable on mobile) */}
        <div className="flex items-center gap-1 bg-[#09090c] p-1 rounded-lg border border-zinc-800/70 overflow-x-auto no-scrollbar max-w-full">
          {sampleSnippets.map((snippet) => {
            const isActive = activeSnippet.id === snippet.id;
            return (
              <button
                key={snippet.id}
                onClick={() => setActiveSnippet(snippet)}
                className={`px-2.5 sm:px-3 py-1 rounded text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#181820] text-white shadow-sm border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {snippet.name}
              </button>
            );
          })}
        </div>

        {/* Right Actions for Desktop (hidden on mobile, handled above) */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="Copy code"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#5b0000] to-[#ff4d4d] hover:from-[#7a0000] hover:to-[#ff6767] text-white text-xs font-semibold shadow-sm transition-all active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>Run</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-3 sm:p-6 overflow-x-auto bg-[#070709] max-h-[300px] sm:max-h-[380px] overflow-y-auto">
        <pre className="text-zinc-200 text-[11px] sm:text-xs leading-relaxed font-mono">
          <code>
            {activeSnippet.code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row group">
                <span className="table-cell pr-3 sm:pr-4 text-right select-none text-zinc-600 group-hover:text-zinc-400 text-[10px] sm:text-xs w-6 sm:w-8">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {line.startsWith('//') || line.startsWith('#') ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : line.includes('fn ') || line.includes('def ') || line.includes('function ') ? (
                    <span className="text-[#ff8585] font-semibold">{line}</span>
                  ) : line.includes('import ') || line.includes('use ') || line.includes('from ') || line.includes('#include') ? (
                    <span className="text-purple-400">{line}</span>
                  ) : line.includes('let ') || line.includes('const ') || line.includes('var ') ? (
                    <span className="text-sky-400">{line}</span>
                  ) : line.includes('println!') || line.includes('print(') || line.includes('console.log') || line.includes('std::cout') ? (
                    <span className="text-amber-300">{line}</span>
                  ) : line.includes('"') ? (
                    <span className="text-emerald-300">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Live Terminal Output Panel */}
      {outputVisible && (
        <div className="border-t border-zinc-800 bg-[#0c0c10] p-3 sm:p-4 text-[11px] sm:text-xs font-mono">
          <div className="flex items-center justify-between text-zinc-400 pb-2 mb-2 border-b border-zinc-800/80 gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#ff6767] shrink-0" />
              <span className="font-semibold text-zinc-300 text-[10px] sm:text-xs truncate">Yemini Local Runtime</span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shrink-0">
                Exit 0
              </span>
            </div>
            <span className="text-zinc-500 text-[10px] sm:text-xs shrink-0">Time: {activeSnippet.executionTime}</span>
          </div>
          <pre className="text-zinc-300 whitespace-pre-wrap leading-relaxed text-[10px] sm:text-xs overflow-x-auto">
            {activeSnippet.output}
          </pre>
        </div>
      )}
    </div>
  );
};
