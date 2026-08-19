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
    id: 'windows',
    name: 'Windows',
    subtitle: 'Yemini Desktop for Windows 10 & 11',
    category: 'desktop',
    version: '1.2.0-stable',
    releaseDate: 'August 14, 2026',
    status: 'available',
    fileSize: '84.2 MB',
    packageType: '.exe / .msi Installer',
    downloadLabel: 'Download for Windows (x64)',
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    supportedArchitectures: ['x64 (64-bit Intel/AMD)', 'ARM64 (Snapdragon X Elite)'],
    requirements: [
      'Windows 10 (version 1909+) or Windows 11',
      '4 GB RAM minimum (8 GB+ recommended)',
      '500 MB available disk space',
      'DirectX 11 or higher capable GPU for hardware-accelerated canvas rendering'
    ],
    installSteps: [
      'Download `Yemini-Setup-1.2.0-x64.exe` installer.',
      'Double-click the installer and follow the prompt (default installation path is `AppData\\Local\\Programs\\Yemini`).',
      'Select "Add to PATH" if you wish to run `yemini` from PowerShell or Command Prompt.',
      'Launch Yemini from the Start Menu and select your workspace folder.'
    ]
  },
  {
    id: 'macos',
    name: 'macOS',
    subtitle: 'Yemini Desktop for Apple Silicon & Intel',
    category: 'desktop',
    version: '1.2.0-stable',
    releaseDate: 'August 14, 2026',
    status: 'available',
    fileSize: '88.7 MB (Universal Binary)',
    packageType: '.dmg / Homebrew Cask',
    downloadLabel: 'Download for macOS (Universal)',
    sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    supportedArchitectures: ['Apple Silicon (M1/M2/M3/M4)', 'Intel (x86_64)'],
    requirements: [
      'macOS 12.0 (Monterey) or newer (macOS Sonoma / Sequoia tested)',
      '4 GB unified memory minimum (8 GB+ recommended)',
      '500 MB disk space',
      'Metal GPU support enabled'
    ],
    installSteps: [
      'Download `Yemini-1.2.0-Universal.dmg`.',
      'Open the `.dmg` archive and drag the Yemini icon into your `Applications` folder.',
      'To install via Homebrew: run `brew install --cask yemini` in your Terminal.',
      'Launch Yemini and enjoy native Metal-accelerated performance.'
    ]
  },
  {
    id: 'linux',
    name: 'Linux',
    subtitle: 'Yemini Desktop for Debian, Ubuntu, Fedora, Arch',
    category: 'desktop',
    version: '1.2.0-stable',
    releaseDate: 'August 14, 2026',
    status: 'available',
    fileSize: '79.1 MB',
    packageType: '.deb / .rpm / .AppImage / tar.gz',
    downloadLabel: 'Download for Linux (.deb / AppImage)',
    sha256: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    supportedArchitectures: ['x86_64', 'aarch64 (ARM64)'],
    requirements: [
      'glibc 2.28+ (Ubuntu 20.04+, Debian 11+, Fedora 34+, Arch Linux)',
      'Wayland or X11 Display Server with Vulkan/OpenGL acceleration',
      '4 GB RAM minimum',
      '500 MB available disk space'
    ],
    installSteps: [
      'For Debian/Ubuntu: `sudo dpkg -i yemini_1.2.0_amd64.deb`',
      'For AppImage: `chmod +x Yemini-1.2.0.AppImage && ./Yemini-1.2.0.AppImage`',
      'For Arch (AUR): `yay -S yemini-bin`',
      'Or extract the portable `yemini-1.2.0-linux-x64.tar.gz` to `/opt/yemini`.'
    ]
  }
];

export const changelogData: ChangelogRelease[] = [
  {
    version: 'v1.2.0',
    date: 'August 14, 2026',
    badge: 'Latest Stable',
    summary: 'Massive performance boost for mobile runtimes, new Rust toolchain support, and unified workspace syncing.',
    highlights: [
      'Introduced official first-party Rust Analyzer & Cargo toolchain extension',
      'Up to 40% faster cold starts on Android with native binary pre-compilation',
      'Added split terminal support with multi-tab session management on Desktop',
      'Refined touch accessory bar with gesture flicking for quick symbol input'
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
          'Corrected window frame snapping behavior on multi-monitor macOS setups'
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
      'Added official Node.js 22 & TypeScript 5.8 runtime toolchain',
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
    summary: 'Initial public launch of the Yemini developer ecosystem by STF Ecosystem (Sphere Tech Foundation).',
    highlights: [
      'Public debut of Yemini Mobile for Android and Yemini Desktop for Windows, macOS, and Linux',
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
