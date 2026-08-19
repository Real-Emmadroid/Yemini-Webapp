import { ProductInfo } from '../types';

export const productsData: ProductInfo[] = [
  {
    id: 'mobile',
    name: 'Yemini Mobile',
    tagline: 'Your IDE. In your pocket.',
    shortDescription: 'A powerful mobile coding environment designed for writing, compiling, running and managing real projects directly from Android.',
    fullDescription: 'Yemini Mobile reimagines the mobile development experience from the ground up. Engineered with a low-latency touch engine, integrated Linux terminal, customizable accessory keyboard bar, and true local project execution without requiring internet access.',
    status: 'available',
    platform: 'Android',
    ctaText: 'Explore Mobile',
    route: 'mobile',
    features: [
      {
        title: 'Full Local Project Execution',
        description: 'Run Python scripts, C/C++ compiled binaries, Node.js servers, and Rust crates directly on your Android device without cloud latency.',
        badge: 'Offline-First'
      },
      {
        title: 'Mobile-Optimized Keyboard Accessory',
        description: 'Fast-access modifier keys, indentation helpers, bracket pairing, and navigation arrows designed specifically for touch typing.',
        badge: 'Ergonomic'
      },
      {
        title: 'Integrated Terminal & Shell',
        description: 'Built-in local shell environment with file management, git operations, package managers, and script execution.',
        badge: 'Native CLI'
      },
      {
        title: 'Modular Runtime Management',
        description: 'Install only the language toolchains you need to keep APK footprint minimal and device storage unencumbered.',
        badge: 'First-Party'
      }
    ],
    specs: [
      { label: 'Supported OS', value: 'Android 10.0+ (API Level 29+)' },
      { label: 'Architectures', value: 'arm64-v8a, armeabi-v7a, x86_64' },
      { label: 'Initial Package Size', value: '~48 MB (Core IDE)' },
      { label: 'Storage Engine', value: 'Scoped Storage & Internal Sandbox' },
      { label: 'Terminal Emulation', value: 'VT100 / xterm-256color compliant' }
    ]
  },
  {
    id: 'desktop',
    name: 'Yemini Desktop',
    tagline: 'A serious IDE for serious work.',
    shortDescription: 'A professional desktop development environment built for modern software engineering across Windows, macOS, and Linux.',
    fullDescription: 'Yemini Desktop delivers an uncompromising IDE experience. Built with a high-performance native core, multi-pane workspaces, robust Language Server Protocol (LSP) integration, split-view interactive terminals, hardware-accelerated text rendering, and native extension sandboxing.',
    status: 'available',
    platform: 'Windows • macOS • Linux',
    ctaText: 'Explore Desktop',
    route: 'desktop',
    features: [
      {
        title: 'Native Performance & Low Memory',
        description: 'Engineered with a lightweight native core ensuring sub-second startup times, instant file indexing, and butter-smooth scrolling.',
        badge: 'High Speed'
      },
      {
        title: 'First-Party Extensions & Language Servers',
        description: 'Install official curated extensions with zero bloat. Deep IntelliSense, semantic highlighting, type inspection, and auto-refactoring.',
        badge: 'LSP Native'
      },
      {
        title: 'Multi-pane Terminal & Split Workspaces',
        description: 'Dock multiple shell sessions, watch tasks, run local build servers, and manage background processes side-by-side.',
        badge: 'Productivity'
      },
      {
        title: 'Unified Project Sync',
        description: 'Seamlessly transition projects between your Android phone and desktop workstation with standard Git repositories or local transfers.',
        badge: 'Cross-Device'
      }
    ],
    specs: [
      { label: 'Platforms', value: 'macOS (Universal), Windows 10/11, Linux (Deb/RPM/AppImage)' },
      { label: 'Memory Footprint', value: '< 180 MB idle RAM' },
      { label: 'Rendering Engine', value: 'DirectX 12 / Metal / Vulkan GPU Canvas' },
      { label: 'Extension Model', value: 'Sandboxed First-Party Toolchains' }
    ]
  },
  {
    id: 'ai',
    name: 'Yemini AI',
    tagline: 'Your AI coding partner.',
    shortDescription: 'An intelligent coding agent designed to understand your codebase, generate clean code, debug failures, and accelerate your engineering workflow.',
    fullDescription: 'Yemini AI goes beyond basic auto-completion. Built as an autonomous coding partner, it constructs a complete semantic graph of your project repository, traces dependencies, proposes structured diffs, and orchestrates terminal tasks under your direct supervision.',
    status: 'coming-soon',
    platform: 'Mobile & Desktop Integrated',
    ctaText: 'Explore Yemini AI',
    route: 'ai',
    features: [
      {
        title: 'Repo-Aware Semantic Graph',
        description: 'Reads your entire project hierarchy, type definitions, and package configs before generating code modifications.',
        badge: 'Context Engine'
      },
      {
        title: 'Multi-Step Agent Reasoning',
        description: 'Breaks complex prompts into discrete steps: search codebase, inspect call graphs, formulate edits, verify in terminal.',
        badge: 'Autonomous Agent'
      },
      {
        title: 'Safe Diff Verification',
        description: 'Inspect precise line-by-line colored diffs before applying any changes to your local source files.',
        badge: 'Safety First'
      },
      {
        title: 'Strict Local Privacy',
        description: 'Code is processed strictly with explicit consent. Your intellectual property is never utilized to train public foundation models.',
        badge: 'Private & Secure'
      }
    ],
    specs: [
      { label: 'Availability', value: 'Preview / Developer Beta Waitlist' },
      { label: 'Architecture', value: 'Hybrid Local Context + Cloud Reasoning' },
      { label: 'Supported Editors', value: 'Yemini Desktop & Yemini Mobile' },
      { label: 'Target Release', value: 'Q4 2026' }
    ]
  }
];
