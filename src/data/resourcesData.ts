import { ResourcePost } from '../types';

export const resourcesData: ResourcePost[] = [
  {
    id: 'announcing-yemini-1-2',
    title: 'Announcing Yemini 1.2: Native Rust Toolchain & Cross-Device Sync',
    type: 'announcement',
    author: {
      name: 'Elena Vance',
      role: 'Head of Developer Tooling, STF',
      avatarInitials: 'EV'
    },
    date: 'August 14, 2026',
    readTime: '4 min read',
    tags: ['Announcement', 'Release', 'Rust', 'Mobile'],
    excerpt: 'Today we are thrilled to announce Yemini 1.2, bringing first-party Rust Analyzer support, 40% faster startup on Android, and peer-to-peer workspace transfers.',
    content: [
      'When STF Ecosystem first conceived Yemini, the goal was audacious: provide developers with an uncompromising development environment that does not falter when moving away from a traditional desktop setup.',
      'With Yemini 1.2, we take our largest leap forward yet. We have integrated an official first-party Rust toolchain extension featuring Cargo and rust-analyzer, allowing you to compile native Rust crates directly on modern Android phones and desktop operating systems alike.',
      'Additionally, our engineering team has completely redesigned the internal file-tree rendering pipeline with virtualized DOM scrolling, effortlessly handling repositories with more than 10,000 files with silky 120 FPS performance.'
    ]
  },
  {
    id: 'offline-first-engineering',
    title: 'Why We Built Yemini as an Offline-First Development Platform',
    type: 'blog',
    author: {
      name: 'Marcus Thorne',
      role: 'Core Systems Architect, STF',
      avatarInitials: 'MT'
    },
    date: 'July 29, 2026',
    readTime: '6 min read',
    tags: ['Architecture', 'Offline-First', 'Philosophy'],
    excerpt: 'Cloud IDEs promise convenience but tether engineers to remote servers and subscription locks. Here is why local runtimes and offline capability remain paramount.',
    content: [
      'In recent years, the developer tooling industry has aggressively shifted towards cloud-hosted virtual machines and remote browser editors. While appealing at first glance, this paradigm introduces severe latency penalties, continuous cellular data consumption, and brittle dependence on remote server uptime.',
      'At STF Ecosystem, we believe software development is fundamentally a local craft. When you are on a high-speed train, in a remote workspace, or experiencing temporary network dropouts, your ability to think, edit, compile, and test your code should never be interrupted.',
      'Yemini packages self-contained compiler toolchains (Clang, Python bytecode VM, V8 Node.js, and rustc) directly onto your local device storage, providing immediate feedback with zero network latency.'
    ]
  },
  {
    id: 'mobile-touch-ergonomics',
    title: 'Designing Touch Ergonomics for Mobile Code Editors',
    type: 'guide',
    author: {
      name: 'Sophia Jin',
      role: 'Lead Interaction Designer, Yemini',
      avatarInitials: 'SJ'
    },
    date: 'July 11, 2026',
    readTime: '5 min read',
    tags: ['Design', 'Mobile', 'UI/UX'],
    excerpt: 'How we engineered a customizable accessory keyboard bar, gesture flicking, and caret precision specifically for programming on Android glass.',
    content: [
      'Typing source code on a virtual touchscreen is notoriously frustrating on conventional keyboard layouts. Code requires frequent access to brackets `{}`, colons `:`, semicolons `;`, arrows `->`, and indentation tabs that are buried two levels deep on standard mobile keyboards.',
      'In Yemini Mobile, we introduced a context-aware accessory toolbar that sits directly above your virtual keyboard. It intelligently anticipates symbols based on your active programming language grammar, offers one-tap indent/unindent, and features micro-haptic feedback.'
    ]
  },
  {
    id: 'first-party-security-model',
    title: 'The Security Case for a First-Party Only Extension Marketplace',
    type: 'blog',
    author: {
      name: 'Devin Zhao',
      role: 'Security Lead, STF Ecosystem',
      avatarInitials: 'DZ'
    },
    date: 'June 18, 2026',
    readTime: '7 min read',
    tags: ['Security', 'Marketplace', 'Extensions'],
    excerpt: 'Why Yemini rejects open uncurated extension stores in favor of verified, cryptographically signed first-party toolchains.',
    content: [
      'Open package registries and IDE extension marketplaces have increasingly become fertile attack surfaces for malicious typo-squatting, secret exfiltration, and supply-chain compromises.',
      'To safeguard developers, STF Ecosystem made a deliberate architectural choice: the Yemini Extensions Marketplace is exclusively first-party. Every extension is authored, compiled, signed, and maintained directly by STF engineers, ensuring zero untrusted third-party code in your development pipeline.'
    ]
  }
];
