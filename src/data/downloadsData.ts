import { PlatformDownload, ChangelogRelease } from '../types';

export const platformsData: PlatformDownload[] = [
  {
    id: 'android',
    name: 'Android',
    subtitle: 'Yemini Mobile for Smartphones & Tablets',
    category: 'mobile',
    version: '1.2.0-stable',
    releaseDate: 'August 14, 2026',
    status: 'available',
    fileSize: '48.4 MB (Core APK)',
    packageType: '.apk (Signed Release)',
    downloadLabel: 'Download APK (v1.2.0)',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    supportedArchitectures: ['ARM64 (v8a)', 'ARM32 (v7a)', 'x86_64'],
    requirements: [
      'Android 10.0 (API Level 29) or higher',
      'Minimum 3 GB RAM (4 GB+ recommended for heavy builds)',
      '150 MB free internal storage for base editor + storage for installed runtimes',
      'Storage permissions granted for Scoped Project Directory'
    ],
    installSteps: [
      'Download the official `yemini-mobile-v1.2.0.apk` package to your Android device.',
      'Open the downloaded file and enable "Install unknown apps" for your browser if prompted.',
      'Tap Install and launch Yemini from your app drawer.',
      'Grant workspace storage permissions and choose your primary project directory.',
      'Open the Extensions tab to install your preferred language toolchains (Python, C++, Node.js, etc.).'
    ]
  },
  {
    id: 'macos',
    name: 'macOS',
    subtitle: 'Yemini Desktop for Apple Silicon & Intel',
    category: 'desktop',
    version: 'Preview in development',
    releaseDate: 'Coming Q4 2026',
    status: 'coming-soon',
    fileSize: '~85 MB (Target)',
    packageType: '.dmg / Homebrew (In development)',
    downloadLabel: 'Join macOS Waitlist',
    sha256: 'In development — checksum published upon release',
    supportedArchitectures: ['Apple Silicon (M1/M2/M3/M4)', 'Intel (x86_64)'],
    requirements: [
      'macOS 12.0 (Monterey) or newer (Sonoma / Sequoia ready)',
      '4 GB unified memory minimum (8 GB+ recommended)',
      '500 MB disk space',
      'Metal GPU support enabled'
    ],
    installSteps: [
      'Join the developer waitlist to receive access to the private beta build.',
      'When released, DMG package will be signed with Apple Developer ID.',
      'Homebrew Cask installation (`brew install --cask yemini`) will be enabled on launch.',
      'Hardware-accelerated Metal text engine runs out of the box.'
    ]
  },
  {
    id: 'windows',
    name: 'Windows',
    subtitle: 'Yemini Desktop for Windows 10 & 11',
    category: 'desktop',
    version: 'Preview in development',
    releaseDate: 'Coming Q4 2026',
    status: 'coming-soon',
    fileSize: '~80 MB (Target)',
    packageType: '.exe / .msi (In development)',
    downloadLabel: 'Join Windows Waitlist',
    sha256: 'In development — checksum published upon release',
    supportedArchitectures: ['x64 (64-bit Intel/AMD)', 'ARM64 (Snapdragon X Elite)'],
    requirements: [
      'Windows 10 (version 1909+) or Windows 11',
      '4 GB RAM minimum (8 GB+ recommended)',
      '500 MB available disk space',
      'DirectX 11 or higher capable GPU for hardware-accelerated canvas rendering'
    ],
    installSteps: [
      'Join the developer waitlist for preview access notification.',
      'Installers will include both standalone `.exe` and MSI enterprise deployment packages.',
      'Supports integrated PowerShell, WSL2, and Windows Terminal interoperability.',
      'Signed with STF Ecosystem EV code signing certificate.'
    ]
  },
  {
    id: 'linux',
    name: 'Linux',
    subtitle: 'Yemini Desktop for Debian, Ubuntu, Fedora, Arch',
    category: 'desktop',
    version: 'Preview in development',
    releaseDate: 'Coming Q4 2026',
    status: 'coming-soon',
    fileSize: '~75 MB (Target)',
    packageType: '.deb / AppImage / Flatpak (In development)',
    downloadLabel: 'Join Linux Waitlist',
    sha256: 'In development — checksum published upon release',
    supportedArchitectures: ['x86_64', 'aarch64 (ARM64)'],
    requirements: [
      'glibc 2.28+ (Ubuntu 20.04+, Debian 11+, Fedora 34+, Arch Linux)',
      'Wayland or X11 Display Server with Vulkan/OpenGL acceleration',
      '4 GB RAM minimum',
      '500 MB available disk space'
    ],
    installSteps: [
      'Join the developer waitlist for the open beta release announcement.',
      'Packages will be distributed via `.deb`, AppImage, AUR (`yemini-bin`), and Flatpak.',
      'Zero external daemon dependencies; native POSIX shell execution.'
    ]
  }
];

export const changelogData: ChangelogRelease[] = [
  {
    version: 'v1.2.0',
    date: 'August 14, 2026',
    badge: 'Latest Stable (Mobile)',
    summary: 'Massive performance boost for mobile runtimes, new Rust toolchain support, and unified workspace syncing.',
    highlights: [
      'Introduced official first-party Rust Analyzer & Cargo toolchain extension',
      'Up to 40% faster cold starts on Android with native binary pre-compilation',
      'Refined touch accessory bar with gesture flicking for quick symbol input',
      'Added preview architecture for upcoming desktop unified workspace synchronization'
    ],
    changes: [
      {
        category: 'Added',
        items: [
          'Rust 1.80+ Cargo extension in official first-party marketplace',
          'Interactive Git branch visualizer and inline commit blame annotations',
          'Keyboard shortcut customization modal with VS Code / Vim preset keymaps',
          'Export and import workspace project bundles directly over local Wi-Fi/P2P'
        ]
      },
      {
        category: 'Changed',
        items: [
          'Optimized memory usage for the C++ Clang compiler suite by 25%',
          'Refined dark theme tokens to conform to WCAG AAA contrast standard',
          'Replaced file explorer tree renderer with virtualized DOM for 10,000+ file repos'
        ]
      },
      {
        category: 'Fixed',
        items: [
          'Resolved an issue where mobile terminal input would disconnect during backgrounding',
          'Fixed Prettier formatting timeout on large multi-megabyte JSON schema files',
          'Corrected touch input cursor snapping on high-density OLED displays'
        ]
      },
      {
        category: 'Security',
        items: [
          'Enforced strict cryptographic SHA-256 validation on all downloaded extension packages',
          'Hardened sandboxed process isolation for user-compiled C/C++ binaries on Android'
        ]
      }
    ]
  },
  {
    version: 'v1.1.0',
    date: 'June 28, 2026',
    summary: 'Node.js 22 LTS toolchain, improved Python Pyright language server, and full offline build capabilities.',
    highlights: [
      'Added official Node.js 22 & TypeScript runtime toolchain',
      'Upgraded Python extension with real-time Pyright type analysis',
      'Implemented offline-first project caching and build pipelines'
    ],
    changes: [
      {
        category: 'Added',
        items: [
          'First-party Node.js runtime extension with built-in npm/pnpm resolver',
          'Integrated HTTP local web preview tab for full-stack mobile development',
          'Support for external USB keyboards and mouse pointer precision on Android tablets'
        ]
      },
      {
        category: 'Fixed',
        items: [
          'Fixed terminal ANSI color rendering quirks in xterm-256color mode',
          'Resolved file watcher race condition when switching Git branches rapidly'
        ]
      }
    ]
  },
  {
    version: 'v1.0.0',
    date: 'May 02, 2026',
    summary: 'Initial public launch of Yemini Mobile for Android by STF Ecosystem (Sphere Tech Foundation).',
    highlights: [
      'Public debut of Yemini Mobile for Android',
      'First-party extension marketplace debut with Python, C++, Go, Java, and Prettier',
      'Core offline development engine and local shell integration'
    ],
    changes: [
      {
        category: 'Added',
        items: [
          'Core Yemini Editor engine with syntax highlighting for 50+ languages',
          'Sandboxed first-party extension marketplace architecture',
          'Official Yemini Crimson theme and design identity'
        ]
      }
    ]
  }
];
