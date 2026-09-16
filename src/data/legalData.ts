import { LegalDocument } from '../types';

export const legalDocuments: Record<string, LegalDocument> = {
  'privacy': {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'August 14, 2026',
    description: 'How Yemini and STF Ecosystem (Sphere Tech Foundation) handle, protect, and respect your personal data and project source code.',
    sections: [
      {
        title: '1. Local-First Data Sovereignty',
        paragraphs: [
          'Yemini is fundamentally engineered with a local-first architecture. Your source code files, project structures, git commits, and compiled binaries reside entirely on your physical device filesystem.',
          'Unless you explicitly connect to a remote Git provider (such as GitHub, GitLab, or a self-hosted repository) or opt-in to cloud synchronization features, no source code is ever transmitted to STF Ecosystem servers.'
        ]
      },
      {
        title: '2. Information We Do Not Collect',
        paragraphs: [
          'We do not collect the following categories of information under any circumstances:',
          'Our core belief is that developer privacy is non-negotiable.'
        ],
        bulletPoints: [
          'Contents of your local source files, scripts, or project metadata',
          'Environment variables, private keys, API secrets, or credentials stored in your workspace',
          'Keystroke telemetry or background typing patterns',
          'Advertising identifiers or cross-app tracking beacons'
        ]
      },
      {
        title: '3. Extension Marketplace Telemetry & Downloads',
        paragraphs: [
          'When you browse or download first-party extensions via the Yemini Extension Marketplace, our content delivery network logs standard HTTP access metrics (e.g. IP address, requested extension package version, timestamp) strictly for bandwidth management and DDoS mitigation. These logs are purged on a rolling 30-day schedule.'
        ]
      },
      {
        title: '4. Yemini AI Transmitted Context (When Enabled)',
        paragraphs: [
          'When utilizing Yemini AI services (in preview/beta), snippets of code and queries explicitly submitted by the user are encrypted via TLS 1.3 in transit. STF Ecosystem does not use private user source code to train public foundation models.'
        ]
      },
      {
        title: '5. Contact and Inquiries',
        paragraphs: [
          'For any inquiries regarding data protection and privacy practices at STF Ecosystem, or general developer support, contact us at yeminisupport@gmail.com or privacy@spheretech.org.'
        ]
      }
    ]
  },
  'terms': {
    id: 'terms',
    title: 'Terms of Service',
    lastUpdated: 'August 14, 2026',
    description: 'Standard terms governing the use of Yemini applications, extensions marketplace, and associated STF Ecosystem developer services.',
    sections: [
      {
        title: '1. Acceptance of Terms',
        paragraphs: [
          'By downloading, installing, or accessing Yemini (including Yemini Mobile, Yemini Desktop, and official extensions), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the software.'
        ]
      },
      {
        title: '2. Software License & Permitted Use',
        paragraphs: [
          'Yemini is provided by Sphere Tech Foundation (STF Ecosystem). You are granted a non-exclusive, worldwide, royalty-free license to use Yemini for commercial, open source, educational, and personal software development.'
        ]
      },
      {
        title: '3. Intellectual Property on User Projects',
        paragraphs: [
          'You retain 100% full, exclusive ownership and all intellectual property rights over any software, code, assets, or applications you author, compile, or build using Yemini. STF Ecosystem claims zero rights or royalties on your creations.'
        ]
      },
      {
        title: '4. Disclaimer of Warranty',
        paragraphs: [
          'Yemini is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. STF Ecosystem does not warrant that the software will be completely error-free or uninterrupted. For inquiries, reach out to yeminisupport@gmail.com.'
        ]
      }
    ]
  },
  'cookies': {
    id: 'cookies',
    title: 'Cookie & Storage Policy',
    lastUpdated: 'August 14, 2026',
    description: 'Information on how we use essential cookies and browser storage on the official Yemini website and documentation portals.',
    sections: [
      {
        title: '1. Essential Cookies Only',
        paragraphs: [
          'The official Yemini website does not deploy third-party advertising cookies, ad trackers, or behavioural profiling scripts. We use strictly necessary client storage to remember your theme preference (Dark/OLED) and active documentation search filters.'
        ]
      },
      {
        title: '2. Managing Your Preferences',
        paragraphs: [
          'You may clear your browser local storage and cache at any time via your browser settings. Clearing storage will reset your local UI preferences back to the default dark aesthetic.'
        ]
      }
    ]
  },
  'acceptable-use': {
    id: 'acceptable-use',
    title: 'Acceptable Use Policy',
    lastUpdated: 'August 14, 2026',
    description: 'Guidelines for responsible use of Yemini developer tools, extension distribution endpoints, and community resources.',
    sections: [
      {
        title: '1. Responsible Use',
        paragraphs: [
          'Yemini is built to empower creators and engineers worldwide. Users must not utilize Yemini network services, extension CDNs, or AI capabilities for activities that violate applicable regional or international laws.'
        ]
      },
      {
        title: '2. Prohibited Activities',
        paragraphs: [
          'The following activities are strictly prohibited when interfacing with Yemini infrastructure:'
        ],
        bulletPoints: [
          'Attempting to reverse-engineer, inject malware into, or spoof official STF cryptographic extension signatures',
          'Deploying automated scrapers to perform Denial of Service attacks against our release endpoints',
          'Using Yemini AI to generate malware, ransomware, or exploit payloads targeting critical infrastructure'
        ]
      }
    ]
  },
  'licenses': {
    id: 'licenses',
    title: 'Open Source & Third-Party Licenses',
    lastUpdated: 'August 14, 2026',
    description: 'Open source credits, upstream dependencies, and software licensing notices utilized within Yemini.',
    sections: [
      {
        title: '1. Upstream Open Source Acknowledgements',
        paragraphs: [
          'Yemini proudly stands on the shoulders of the global open source community. We acknowledge and extend our gratitude to the authors of the following foundational technologies:'
        ],
        bulletPoints: [
          'LLVM / Clang Compiler Infrastructure — Apache License 2.0 with LLVM Exceptions',
          'Rust Programming Language & Cargo — MIT License and Apache License 2.0',
          'Python Software Foundation — PSF License Agreement',
          'Node.js & V8 JavaScript Engine — MIT and BSD Licenses',
          'Language Server Protocol (LSP) Specification — MIT License'
        ]
      },
      {
        title: '2. STF Ecosystem Open Source Commitment',
        paragraphs: [
          'STF Ecosystem is committed to contributing upstream improvements to compiler backends, terminal emulators, and mobile developer ergonomics.'
        ]
      }
    ]
  }
};
