import { ProductInfo } from '../types';

export const productsData: ProductInfo[] = [
  {
    id: 'mobile',
    name: 'Yemini Mobile',
    tagline: 'Your IDE. In your pocket.',
    shortDescription: 'A powerful mobile coding environment designed for writing, compiling, running and managing real projects directly from Android.',
    fullDescription: 'Yemini Mobile reimagines mobile software development from first principles. Engineered with a low-latency touch engine, integrated Linux terminal, customizable accessory keyboard bar, and true local project execution without requiring internet access or remote servers.',
    status: 'available',
    platform: 'Android',
    ctaText: 'Download APK',
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
      { label: 'Terminal Emulation', value: 'VT100 / xterm-256color compliant' },
      { label: 'Release Status', value: 'Available now (v1.2.0)' }
    ]
  },
  {
    id: 'desktop',
    name: 'Yemini Desktop',
    tagline: 'A serious IDE for serious work.',
    shortDescription: 'A professional desktop development environment currently in active development for macOS, Windows, and Linux.',
    fullDescription: 'Yemini Desktop is engineered for uncompromising performance. Built with a high-throughput native core, GPU-accelerated text rendering, sub-100MB idle RAM footprint, and isolated first-party toolchain sandboxing. Currently in private development.',
    status: 'coming-soon',
    platform: 'macOS • Windows • Linux',
    ctaText: 'Join the Waitlist',
    route: 'desktop',
    features: [
      {
        title: 'GPU-Accelerated Rendering',
        description: 'Native Metal on macOS, DirectX 12 on Windows, and Vulkan on Linux ensure locked 120 FPS scrolling on 100,000+ line codebases.',
        badge: 'High Speed'
      },
      {
        title: 'Lightweight Native Core',
        description: 'Under 100MB idle memory footprint with instantaneous file indexing and cold startup under 300ms.',
        badge: 'Sub-100MB RAM'
      },
      {
        title: 'Multi-Pane Terminal & Split Workspaces',
        description: 'Dock multiple shell sessions, watch tasks, run local build servers, and manage background processes side-by-side.',
        badge: 'Productivity'
      },
      {
        title: 'Unified Project Continuity',
        description: 'Seamlessly transition projects between your Android phone and desktop workstation with standard Git repositories or local transfers.',
        badge: 'Cross-Device'
      }
    ],
    specs: [
      { label: 'Platforms', value: 'macOS (Universal), Windows 10/11, Linux' },
      { label: 'Memory Target', value: '< 100 MB idle RAM' },
      { label: 'Rendering Engine', value: 'DirectX 12 / Metal / Vulkan GPU Canvas' },
      { label: 'Development Status', value: 'In development (Private preview)' }
    ]
  },
  {
    id: 'ai',
    name: 'Yemini Intelligence',
    tagline: 'Your AI partner for serious engineering.',
    shortDescription: 'An intelligent coding agent designed to understand your codebase, formulate safe diffs, and debug failures with human-in-the-loop control.',
    fullDescription: 'Yemini Intelligence goes beyond autocomplete. Built as an autonomous partner, it constructs a complete semantic AST graph of your project repository, traces dependencies, proposes verified diffs, and runs validation checks under your direct supervision.',
    status: 'coming-soon',
    platform: 'Mobile & Desktop Integrated',
    ctaText: 'Join the Beta Waitlist',
    route: 'ai',
    features: [
      {
        title: 'Repo-Aware Semantic Graph',
        description: 'Constructs an AST graph of types, classes, and exported symbols before suggesting any code modifications.',
        badge: 'Context Engine'
      },
      {
        title: 'Multi-Turn Agent Reasoning',
        description: 'Breaks complex tasks into discrete steps: search symbols, inspect call graphs, formulate edits, verify in terminal.',
        badge: 'Autonomous Loop'
      },
      {
        title: 'Human-in-the-Loop Diffs',
        description: 'Inspect exact line-by-line syntax-highlighted diffs before any change is applied to your local disk.',
        badge: 'Safety First'
      },
      {
        title: 'Strict Local Privacy',
        description: 'Your source code is never used to train foundation models. Context is processed ephemerally and never logged.',
        badge: 'Private & Secure'
      }
    ],
    specs: [
      { label: 'Availability', value: 'In development (Early Access Waitlist)' },
      { label: 'Architecture', value: 'Hybrid Local Context + Cloud Reasoning' },
      { label: 'Supported Editors', value: 'Yemini Mobile & Desktop' },
      { label: 'Access Tier', value: 'Private Beta Waitlist' }
    ]
  }
];
