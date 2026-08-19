import { DocSection, DocArticle } from '../types';

export const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { id: 'introduction', title: 'Introduction to Yemini' },
      { id: 'quick-start', title: 'Quick Start Guide' },
      { id: 'architecture', title: 'Modular Architecture' }
    ]
  },
  {
    id: 'products',
    title: 'Products & Platforms',
    items: [
      { id: 'yemini-mobile', title: 'Yemini Mobile (Android)' },
      { id: 'yemini-desktop', title: 'Yemini Desktop (Win/Mac/Linux)' },
      { id: 'cross-device-sync', title: 'Cross-Device Workflow' }
    ]
  },
  {
    id: 'extensions-runtimes',
    title: 'Extensions & Runtimes',
    items: [
      { id: 'extension-marketplace', title: 'First-Party Marketplace' },
      { id: 'python-guide', title: 'Python Development' },
      { id: 'rust-guide', title: 'Rust & Cargo Setup' },
      { id: 'cpp-guide', title: 'C/C++ Clang Compiler' },
      { id: 'nodejs-guide', title: 'Node.js & TypeScript' },
      { id: 'offline-runtimes', title: 'Offline Runtimes' }
    ]
  },
  {
    id: 'terminal-debugging',
    title: 'Terminal & Debugging',
    items: [
      { id: 'integrated-terminal', title: 'Integrated Terminal' },
      { id: 'debugger-usage', title: 'LLDB & Native Debugger' },
      { id: 'git-integration', title: 'Git & Version Control' }
    ]
  },
  {
    id: 'ai-features',
    title: 'Yemini AI Agent',
    items: [
      { id: 'ai-overview', title: 'AI Agent Architecture', badge: 'Preview' },
      { id: 'ai-prompts', title: 'Prompting & Codebase Context' },
      { id: 'ai-privacy', title: 'Privacy & Security Guardrails' }
    ]
  },
  {
    id: 'reference',
    title: 'Reference & FAQ',
    items: [
      { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
      { id: 'troubleshooting', title: 'Troubleshooting' },
      { id: 'faq', title: 'Frequently Asked Questions' }
    ]
  }
];

export const docArticles: Record<string, DocArticle> = {
  'introduction': {
    id: 'introduction',
    title: 'Introduction to Yemini',
    sectionId: 'getting-started',
    category: 'Getting Started',
    lastUpdated: 'August 2026',
    summary: 'Learn what Yemini is, why it was created by STF Ecosystem, and how it transforms developer mobility and power.',
    content: [
      {
        heading: 'What is Yemini?',
        text: 'Yemini is an independent modern developer ecosystem created by STF Ecosystem (Sphere Tech Foundation). It provides a unified development experience across Android mobile devices, modern desktop workstations, and an upcoming intelligent coding agent.'
      },
      {
        heading: 'Core Philosophy: Build Without Limits',
        text: 'Traditional development environments have historically confined engineers to hefty desktop setups. Yemini rejects this limitation. We believe your development tools should move as freely as your ideas—enabling you to draft algorithms on mobile, compile native binaries offline, refactor projects on desktop, and leverage AI whenever needed.',
        list: [
          'Modular Architecture: Install only the language runtimes and tools you actively need.',
          'Offline-First Reliability: Core code editors, terminals, and compiled runtimes function without internet connectivity.',
          'First-Party Trust: All extensions are officially engineered and verified by STF Ecosystem to guarantee security and zero supply-chain vulnerabilities.',
          'Universal Workflow: Shared project ergonomics between smartphone, tablet, and multi-monitor workstation.'
        ]
      },
      {
        heading: 'The Role of STF Ecosystem',
        text: 'Yemini is an independent developer product created and supported by STF Ecosystem (Sphere Tech Foundation). While Yemini operates as its own dedicated product brand, STF Ecosystem provides long-term foundational stewardship, infrastructure governance, and open engineering standards.'
      }
    ],
    relatedDocIds: ['quick-start', 'architecture', 'yemini-mobile']
  },
  'quick-start': {
    id: 'quick-start',
    title: 'Quick Start Guide',
    sectionId: 'getting-started',
    category: 'Getting Started',
    lastUpdated: 'August 2026',
    summary: 'Step-by-step setup guide to install Yemini, initialize a project, and run your first code within 60 seconds.',
    content: [
      {
        heading: '1. Download & Installation',
        text: 'Download Yemini for your preferred platform from the official download hub. On Android, install the signed APK. On Desktop, install the appropriate package for macOS, Windows, or Linux.',
        callout: {
          type: 'info',
          title: 'System Requirements',
          text: 'Android 10+ with 3GB+ RAM, or 64-bit Windows/macOS/Linux with at least 4GB RAM.'
        }
      },
      {
        heading: '2. Launching and Selecting a Workspace',
        text: 'When you first launch Yemini, you will be prompted to open an existing repository folder or initialize a new project workspace. On Android, Yemini utilizes Scoped Storage to keep your files secure and accessible.'
      },
      {
        heading: '3. Installing Your First Extension',
        text: 'Yemini is modular by default. Open the Extensions sidebar or run the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) to install your preferred language toolchain:',
        code: {
          language: 'bash',
          code: '# Install Python 3.12 runtime and LSP server\nyemini install python\n\n# Or install Rust toolchain with Cargo\nyemini install rust\n\n# Or install Node.js 22 LTS with TypeScript\nyemini install nodejs',
          caption: 'Installing first-party extensions via Yemini CLI or Extensions UI'
        }
      },
      {
        heading: '4. Running Code',
        text: 'Create a new file (e.g. `main.py` or `main.rs`), write your logic, and press the prominent Run button in the top navigation bar or trigger `F5`. The integrated terminal will automatically invoke the local compiler or interpreter and display live output.'
      }
    ],
    relatedDocIds: ['introduction', 'extension-marketplace', 'integrated-terminal']
  },
  'architecture': {
    id: 'architecture',
    title: 'Modular Architecture',
    sectionId: 'getting-started',
    category: 'Getting Started',
    lastUpdated: 'August 2026',
    summary: 'Understand the lightweight core design and sandboxed extension engine behind Yemini.',
    content: [
      {
        heading: 'Why Modular?',
        text: 'Most traditional IDEs force developers to download gigabytes of pre-packaged dependencies they may never use. Yemini adopts a lean core architecture: the base IDE weighs under 50 MB, offering lightning-quick startup times and minimal memory footprint.'
      },
      {
        heading: 'The Extension Sandbox',
        text: 'Each installed runtime (such as Python, Clang C++, or Rust Cargo) operates inside an isolated sandbox environment. Extensions communicate with the core editor through strict asynchronous protocols (Language Server Protocol and Debug Adapter Protocol), ensuring that a heavy language server never freezes the editor UI.'
      }
    ],
    relatedDocIds: ['extension-marketplace', 'offline-runtimes']
  },
  'yemini-mobile': {
    id: 'yemini-mobile',
    title: 'Yemini Mobile (Android)',
    sectionId: 'products',
    category: 'Products & Platforms',
    lastUpdated: 'August 2026',
    summary: 'Deep dive into mobile coding with Android touch ergonomics, keyboard accessory rows, and local shell execution.',
    content: [
      {
        heading: 'Designed for Mobile Ergonomics',
        text: 'Coding on a touchscreen requires purpose-built touch interfaces. Yemini Mobile incorporates an intelligent keyboard accessory bar above your default virtual keyboard. It provides instant access to brackets, symbols, arrows, indentation toggles, and shortcut keys.'
      },
      {
        heading: 'True Local Compilation',
        text: 'Unlike cloud-streamed mobile editors that require a continuous high-speed cellular connection, Yemini Mobile ships with on-device compiler toolchains tailored for ARM64 and x86_64 Android architectures. You can write and execute code on airplanes, subways, or remote locations.'
      },
      {
        heading: 'Hardware Keyboard & Mouse Support',
        text: 'Connect a Bluetooth keyboard or USB-C hub to transform your Android tablet into a complete productivity workstation with standard desktop keyboard shortcuts (`Ctrl+S`, `Ctrl+F`, `Ctrl+P`).'
      }
    ],
    relatedDocIds: ['yemini-desktop', 'keyboard-shortcuts']
  },
  'yemini-desktop': {
    id: 'yemini-desktop',
    title: 'Yemini Desktop (Win/Mac/Linux)',
    sectionId: 'products',
    category: 'Products & Platforms',
    lastUpdated: 'August 2026',
    summary: 'Explore Yemini Desktop: native GPU canvas rendering, split workspaces, and multi-threaded terminal.',
    content: [
      {
        heading: 'A Serious IDE for Serious Work',
        text: 'Yemini Desktop is engineered for software engineers handling enterprise-grade codebases, hundreds of thousands of source files, and complex monorepo structures.'
      },
      {
        heading: 'GPU-Accelerated Text Engine',
        text: 'Utilizing DirectX 12 on Windows, Metal on macOS, and Vulkan on Linux, Yemini renders code at a locked 120+ FPS with zero input latency even in 50,000-line files.'
      },
      {
        heading: 'Integrated Multi-Panel Layouts',
        text: 'Easily drag and drop tabs to create horizontal or vertical split panes, dock the debugger alongside terminal sessions, and preview web apps in live sidecar tabs.'
      }
    ],
    relatedDocIds: ['yemini-mobile', 'integrated-terminal']
  },
  'cross-device-sync': {
    id: 'cross-device-sync',
    title: 'Cross-Device Workflow',
    sectionId: 'products',
    category: 'Products & Platforms',
    lastUpdated: 'August 2026',
    summary: 'How to seamlessly transition active development sessions between your smartphone and workstation.',
    content: [
      {
        heading: 'Code Anywhere. Continue Everywhere.',
        text: 'Start drafting a feature branch on Yemini Mobile during your commute, commit your changes using the built-in Git client, and pull the branch directly into Yemini Desktop when you arrive at your desk.'
      },
      {
        heading: 'Standard Git & Local Transfer',
        text: 'Because Yemini uses standard filesystem structures and native Git repositories, there are no proprietary lock-ins or cloud database conversions. Your source code remains your pure, portable Git repository.'
      }
    ],
    relatedDocIds: ['git-integration', 'yemini-mobile']
  },
  'extension-marketplace': {
    id: 'extension-marketplace',
    title: 'First-Party Marketplace',
    sectionId: 'extensions-runtimes',
    category: 'Extensions & Runtimes',
    lastUpdated: 'August 2026',
    summary: 'Why Yemini employs an official first-party extension model and how packages are validated.',
    content: [
      {
        heading: 'First-Party Curation by STF Ecosystem',
        text: 'Open marketplaces frequently suffer from unvetted packages, abandoned plugins, and severe supply-chain security risks. The Yemini Extensions Marketplace is exclusively curated and published by STF Ecosystem. Every runtime and tool is cryptographically signed, thoroughly tested, and maintained for stability.'
      },
      {
        heading: 'Supported Extension Categories',
        text: 'The marketplace provides modular packages across languages, compilers, debuggers, code formatters, linters, developer tools, and accessibility themes.'
      }
    ],
    relatedDocIds: ['python-guide', 'rust-guide', 'offline-runtimes']
  },
  'python-guide': {
    id: 'python-guide',
    title: 'Python Development',
    sectionId: 'extensions-runtimes',
    category: 'Extensions & Runtimes',
    lastUpdated: 'August 2026',
    summary: 'Setting up Python 3.12 runtime, virtual environments, PyPI packages, and Pyright LSP.',
    content: [
      {
        heading: 'Installation & Setup',
        text: 'Install the official Python extension via `yemini install python`. The package includes a standalone Python 3.12 interpreter, pip, and Pyright language server.',
        code: {
          language: 'python',
          code: '# main.py\ndef calculate_fibonacci(n: int) -> list[int]:\n    """Generate Fibonacci sequence up to n terms."""\n    sequence = [0, 1]\n    while len(sequence) < n:\n        sequence.append(sequence[-1] + sequence[-2])\n    return sequence[:n]\n\nif __name__ == "__main__":\n    print("Fibonacci series (10 terms):", calculate_fibonacci(10))',
          caption: 'Example Python script running natively in Yemini'
        }
      }
    ],
    relatedDocIds: ['rust-guide', 'nodejs-guide']
  },
  'rust-guide': {
    id: 'rust-guide',
    title: 'Rust & Cargo Setup',
    sectionId: 'extensions-runtimes',
    category: 'Extensions & Runtimes',
    lastUpdated: 'August 2026',
    summary: 'Compiling Rust projects, inspecting borrow checker hints, and managing Cargo dependencies.',
    content: [
      {
        heading: 'Rust Toolchain on Mobile & Desktop',
        text: 'Install Rust using `yemini install rust`. It provisions `rustc`, `cargo`, and `rust-analyzer` for instant compile-time error checks and type inference.',
        code: {
          language: 'rust',
          code: '// src/main.rs\nfn main() {\n    let items = vec!["Mobile", "Desktop", "AI"];\n    println!("Yemini Developer Ecosystem:");\n    for item in items {\n        println!(" - {}", item);\n    }\n}',
          caption: 'Compiling native Rust binary directly inside Yemini'
        }
      }
    ],
    relatedDocIds: ['cpp-guide', 'offline-runtimes']
  },
  'cpp-guide': {
    id: 'cpp-guide',
    title: 'C/C++ Clang Compiler',
    sectionId: 'extensions-runtimes',
    category: 'Extensions & Runtimes',
    lastUpdated: 'August 2026',
    summary: 'Building high-performance C and C++ projects with LLVM/Clang and CMake in Yemini.',
    content: [
      {
        heading: 'Modern C++23 Toolchain',
        text: 'Install with `yemini install cpp`. Features Clang 18+, clangd language server, CMake builder, and LLDB debugging integration.',
        code: {
          language: 'cpp',
          code: '#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    std::vector<std::string> tools = {"Yemini Mobile", "Yemini Desktop", "Yemini AI"};\n    std::cout << "Building high-performance software with Yemini\\n";\n    for (const auto& tool : tools) {\n        std::cout << " -> " << tool << "\\n";\n    }\n    return 0;\n}',
          caption: 'C++23 example code'
        }
      }
    ],
    relatedDocIds: ['rust-guide', 'debugger-usage']
  },
  'nodejs-guide': {
    id: 'nodejs-guide',
    title: 'Node.js & TypeScript',
    sectionId: 'extensions-runtimes',
    category: 'Extensions & Runtimes',
    lastUpdated: 'August 2026',
    summary: 'Developing full-stack JavaScript, TypeScript, and web projects with live browser preview.',
    content: [
      {
        heading: 'Node.js 22 LTS & TypeScript 5.8',
        text: 'Install with `yemini install nodejs`. Includes V8 execution engine, npm package manager, and full TypeScript type diagnostic server.'
      }
    ],
    relatedDocIds: ['python-guide', 'extension-marketplace']
  },
  'offline-runtimes': {
    id: 'offline-runtimes',
    title: 'Offline Runtimes',
    sectionId: 'extensions-runtimes',
    category: 'Extensions & Runtimes',
    lastUpdated: 'August 2026',
    summary: 'How Yemini enables 100% offline development without remote server dependencies.',
    content: [
      {
        heading: 'Autonomous Local Execution',
        text: 'Once an extension toolchain is installed onto your device, all compilers, interpreters, formatters, and linters run strictly locally. You do not need a Wi-Fi connection or active subscription to write, format, build, and debug your code.'
      }
    ],
    relatedDocIds: ['architecture', 'yemini-mobile']
  },
  'integrated-terminal': {
    id: 'integrated-terminal',
    title: 'Integrated Terminal',
    sectionId: 'terminal-debugging',
    category: 'Terminal & Debugging',
    lastUpdated: 'August 2026',
    summary: 'Using the built-in command-line interface, managing shell sessions, and running scripts.',
    content: [
      {
        heading: 'A First-Class Terminal Experience',
        text: 'Yemini includes a full-featured terminal emulator supporting xterm-256color, ANSI escape sequences, split panels, and shell switching (bash, zsh, sh).'
      }
    ],
    relatedDocIds: ['debugger-usage', 'git-integration']
  },
  'debugger-usage': {
    id: 'debugger-usage',
    title: 'LLDB & Native Debugger',
    sectionId: 'terminal-debugging',
    category: 'Terminal & Debugging',
    lastUpdated: 'August 2026',
    summary: 'Setting breakpoints, stepping through execution frames, inspecting memory, and evaluating variables.',
    content: [
      {
        heading: 'Visual Debugging Suite',
        text: 'Click on the editor line number gutter to set a breakpoint. When execution halts, inspect the Call Stack, Local Variables, and Watch expressions in real time.'
      }
    ],
    relatedDocIds: ['integrated-terminal', 'cpp-guide']
  },
  'git-integration': {
    id: 'git-integration',
    title: 'Git & Version Control',
    sectionId: 'terminal-debugging',
    category: 'Terminal & Debugging',
    lastUpdated: 'August 2026',
    summary: 'Staging files, visual merge conflict resolution, branch switching, and remote synchronization.',
    content: [
      {
        heading: 'Native Version Control',
        text: 'Yemini features an interactive Source Control panel. View changed files, stage individual hunks or entire files, author commit messages, and push/pull to GitHub or self-hosted Git servers.'
      }
    ],
    relatedDocIds: ['cross-device-sync', 'integrated-terminal']
  },
  'ai-overview': {
    id: 'ai-overview',
    title: 'AI Agent Architecture',
    sectionId: 'ai-features',
    category: 'Yemini AI Agent',
    lastUpdated: 'August 2026',
    summary: 'Overview of Yemini AI coding agent (Coming Soon), repository graph engine, and multi-turn reasoning.',
    content: [
      {
        heading: 'The Next Generation of AI Coding',
        text: 'Yemini AI is designed as a deep codebase companion. Rather than merely autocompleting single lines of code, it parses your repository Abstract Syntax Tree (AST), identifies dependencies across files, formulates step-by-step refactoring plans, and presents clean diffs for your explicit approval.',
        callout: {
          type: 'tip',
          title: 'Status: Developer Preview / Beta',
          text: 'Yemini AI is currently under active development by STF Ecosystem. Join the early developer waitlist to receive access in upcoming releases.'
        }
      }
    ],
    relatedDocIds: ['ai-prompts', 'ai-privacy']
  },
  'ai-prompts': {
    id: 'ai-prompts',
    title: 'Prompting & Codebase Context',
    sectionId: 'ai-features',
    category: 'Yemini AI Agent',
    lastUpdated: 'August 2026',
    summary: 'Best practices for steering the Yemini AI agent, referencing specific modules, and verifying diffs.',
    content: [
      {
        heading: 'Context-Aware Prompts',
        text: 'Reference specific files or symbols using `@filename` or `@functionName` inside the AI chat panel to focus the agent on specific subsystem layers.'
      }
    ],
    relatedDocIds: ['ai-overview', 'ai-privacy']
  },
  'ai-privacy': {
    id: 'ai-privacy',
    title: 'Privacy & Security Guardrails',
    sectionId: 'ai-features',
    category: 'Yemini AI Agent',
    lastUpdated: 'August 2026',
    summary: 'Our commitment to data sovereignty: zero customer code used for training foundation models.',
    content: [
      {
        heading: 'Data Sovereignty Guarantee',
        text: 'STF Ecosystem adheres to strict privacy ethics. Source code submitted for AI assistance is processed transiently in isolated secure enclaves and is never retained or utilized to train general foundation models.'
      }
    ],
    relatedDocIds: ['ai-overview', 'troubleshooting']
  },
  'keyboard-shortcuts': {
    id: 'keyboard-shortcuts',
    title: 'Keyboard Shortcuts',
    sectionId: 'reference',
    category: 'Reference & FAQ',
    lastUpdated: 'August 2026',
    summary: 'Standard hotkeys and shortcut reference for Yemini Desktop and Yemini Mobile with external keyboard.',
    content: [
      {
        heading: 'General Editor Shortcuts',
        text: 'Default keybindings for high-speed navigation:',
        list: [
          'Command / Ctrl + P : Quick open file search',
          'Command / Ctrl + Shift + P : Command palette',
          'Command / Ctrl + S : Save current file',
          'Command / Ctrl + Shift + F : Global text search across workspace',
          'F5 : Start debugging / Run current target',
          'Ctrl + ` (Backtick) : Toggle integrated terminal',
          'Command / Ctrl + B : Toggle primary sidebar explorer'
        ]
      }
    ],
    relatedDocIds: ['quick-start', 'faq']
  },
  'troubleshooting': {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    sectionId: 'reference',
    category: 'Reference & FAQ',
    lastUpdated: 'August 2026',
    summary: 'Solutions for common setup questions, Android storage permissions, and extension installations.',
    content: [
      {
        heading: 'Android Storage Permission Issues',
        text: 'If Yemini Mobile cannot read your project directory, navigate to Android Settings > Apps > Yemini > Permissions > Files and media, and select "Allow management of all files".'
      },
      {
        heading: 'Extension Download Verification Failures',
        text: 'If an extension fails to install, verify your system clock is synchronized and run `yemini cache clean` in the terminal before retrying.'
      }
    ],
    relatedDocIds: ['faq', 'quick-start']
  },
  'faq': {
    id: 'faq',
    title: 'Frequently Asked Questions',
    sectionId: 'reference',
    category: 'Reference & FAQ',
    lastUpdated: 'August 2026',
    summary: 'Answers to frequently asked questions regarding Yemini, STF Ecosystem, and licensing.',
    content: [
      {
        heading: 'Is Yemini free to use?',
        text: 'Yes. Yemini Mobile and Yemini Desktop core editions, along with all official first-party extensions, are freely available for developers worldwide as part of STF Ecosystem’s mission to democratize developer tooling.'
      },
      {
        heading: 'Can third parties publish extensions to the marketplace?',
        text: 'Currently, the Yemini Extension Marketplace is strictly first-party to ensure absolute security and quality control. All extensions are published and maintained directly by STF Ecosystem.'
      },
      {
        heading: 'Who is STF Ecosystem?',
        text: 'STF Ecosystem (Sphere Tech Foundation) is the non-profit technology foundation and developer organization behind Yemini. It fosters accessible, decentralized, and high-performance open computing tools.'
      }
    ],
    relatedDocIds: ['introduction', 'troubleshooting']
  }
};
