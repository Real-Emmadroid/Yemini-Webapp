import React, { useState } from 'react';
import { PageRoute } from '../types';

export interface DownloadOption {
  id: string;
  name: string;
  badge?: string;
  subtext: string;
  platformIcon: 'android' | 'apple' | 'windows' | 'linux' | 'web' | 'bridge';
  storeUrl?: string;
  actionType: 'download-apk' | 'open-waitlist' | 'navigate' | 'external';
  route?: PageRoute;
  platformId?: 'android' | 'macos' | 'windows' | 'linux';
}

export interface ProductProfile {
  id: string;
  name: string;
  navLabel: string;
  category: string;
  badgeText: string;
  qrCodeUrl: string;
  qrCaption: string;
  mobileApps: DownloadOption[];
  desktopApps: DownloadOption[];
  webApp: DownloadOption[];
  clientAddon?: DownloadOption[];
}

export const PRODUCT_PROFILES: Record<string, ProductProfile> = {
  'all': {
    id: 'all',
    name: 'Yemini Core Ecosystem',
    navLabel: 'All Products & Releases',
    category: 'Universal Distribution',
    badgeText: 'Official Hub',
    qrCodeUrl: 'https://yemini.org/download',
    qrCaption: 'Scan to get the mobile app',
    mobileApps: [
      {
        id: 'all-android-play',
        name: 'Google Play',
        badge: 'Store',
        subtext: 'Early Access Channel',
        platformIcon: 'android',
        storeUrl: 'https://play.google.com/store/apps/details?id=io.yemini.mobile',
        actionType: 'external',
      },
      {
        id: 'all-ios',
        name: 'iOS',
        badge: 'Coming Soon',
        subtext: 'TestFlight Developer Beta',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
    ],
    desktopApps: [
      {
        id: 'all-macos',
        name: 'macOS',
        badge: 'Waitlist',
        subtext: 'Apple Silicon & Intel DMG',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'all-windows',
        name: 'Windows',
        badge: 'Waitlist',
        subtext: 'Windows 10/11 x64 & ARM64',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'all-webapp',
        name: 'Web app',
        badge: 'Online',
        subtext: 'Browser IDE & Documentation',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'docs',
      },
    ],
  },
  'android': {
    id: 'android',
    name: 'Yemini Mobile (Android)',
    navLabel: 'Android APK (v1.2.0)',
    category: 'Mobile IDE & Compilers',
    badgeText: 'Stable Release',
    qrCodeUrl: 'https://yemini.org/yemini-mobile-v1.2.0.apk',
    qrCaption: 'Scan to download APK directly',
    mobileApps: [
      {
        id: 'android-direct-apk',
        name: 'Direct APK',
        badge: 'v1.2.0',
        subtext: 'Instant Signed Download (48.4 MB)',
        platformIcon: 'android',
        actionType: 'download-apk',
      },
      {
        id: 'android-play-store',
        name: 'Google Play',
        badge: 'Official',
        subtext: 'Install via Play Store',
        platformIcon: 'android',
        storeUrl: 'https://play.google.com/store/apps/details?id=io.yemini.mobile',
        actionType: 'external',
      },
      {
        id: 'android-fdroid',
        name: 'F-Droid',
        badge: 'Open Source',
        subtext: 'Reproducible Build Repo',
        platformIcon: 'android',
        storeUrl: 'https://f-droid.org',
        actionType: 'external',
      },
    ],
    desktopApps: [
      {
        id: 'android-sync-mac',
        name: 'macOS Sync',
        badge: 'Companion',
        subtext: 'ADB Wireless Debug Daemon',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'android-sync-win',
        name: 'Windows Sync',
        badge: 'Companion',
        subtext: 'USB Project Mount Tool',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'android-web-docs',
        name: 'Web Package Viewer',
        badge: 'Free',
        subtext: 'View Checksums & Signatures',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'download',
      },
    ],
  },
  'desktop': {
    id: 'desktop',
    name: 'Yemini Desktop IDE',
    navLabel: 'Desktop Private Waitlist',
    category: 'Desktop Systems IDE',
    badgeText: 'Private Preview',
    qrCodeUrl: 'https://yemini.org/desktop',
    qrCaption: 'Scan to join beta on mobile',
    mobileApps: [
      {
        id: 'desktop-mobile-remote',
        name: 'Remote Keyboard',
        badge: 'Android',
        subtext: 'Touch Macro & Shortcut Pad',
        platformIcon: 'android',
        actionType: 'download-apk',
      },
      {
        id: 'desktop-mobile-sync',
        name: 'Workspace Mirror',
        badge: 'P2P',
        subtext: 'Direct Sync to Phone IDE',
        platformIcon: 'android',
        actionType: 'download-apk',
      },
    ],
    desktopApps: [
      {
        id: 'desktop-mac',
        name: 'macOS',
        badge: 'Request Access',
        subtext: 'Apple Silicon (M1-M4) & Intel',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'desktop-win',
        name: 'Windows',
        badge: 'Request Access',
        subtext: 'Windows 10/11 & Snapdragon X',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'desktop-web-workbench',
        name: 'Web app',
        badge: 'Cloud Preview',
        subtext: 'Browser Workbench Environment',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'desktop',
      },
    ],
  },
  'ai': {
    id: 'ai',
    name: 'Yemini Intelligence (AST)',
    navLabel: 'AI Early Access',
    category: 'On-Device Semantic AI',
    badgeText: 'Early Access',
    qrCodeUrl: 'https://yemini.org/ai',
    qrCaption: 'Scan for Mobile AI Assistant',
    mobileApps: [
      {
        id: 'ai-android-npu',
        name: 'Android AI Core',
        badge: 'On-Device',
        subtext: 'Offline Quantized NPU Inference',
        platformIcon: 'android',
        actionType: 'download-apk',
      },
      {
        id: 'ai-play-store',
        name: 'Google Play Build',
        badge: 'Store',
        subtext: 'Secure AST Sandboxing',
        platformIcon: 'android',
        storeUrl: 'https://play.google.com/store/apps/details?id=io.yemini.mobile',
        actionType: 'external',
      },
    ],
    desktopApps: [
      {
        id: 'ai-mac-metal',
        name: 'macOS CoreML',
        badge: 'Waitlist',
        subtext: 'Apple Neural Engine Acceleration',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'ai-win-directml',
        name: 'Windows DirectML',
        badge: 'Waitlist',
        subtext: 'NVIDIA RTX & Qualcomm NPU',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'ai-web-playground',
        name: 'Web app',
        badge: 'Live Demo',
        subtext: 'Parse Syntax Trees in Browser',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'ai',
      },
    ],
  },
  'notepad': {
    id: 'notepad',
    name: 'Yemini Notepad',
    navLabel: 'Yemini Notepad',
    category: 'Encrypted Markdown Vault',
    badgeText: 'Companion Suite',
    qrCodeUrl: 'https://yemini.org/download#notepad',
    qrCaption: 'Scan to get Notepad on phone',
    mobileApps: [
      {
        id: 'notepad-play',
        name: 'Google Play Store',
        badge: 'Store',
        subtext: 'Official Store Listing',
        platformIcon: 'android',
        storeUrl: 'https://play.google.com/store/apps/details?id=io.yemini.notepad',
        actionType: 'external',
      },
      {
        id: 'notepad-ios',
        name: 'iOS',
        badge: 'Coming Soon',
        subtext: 'App Store Sandbox Preview',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
    ],
    desktopApps: [
      {
        id: 'notepad-macos',
        name: 'macOS Vault',
        badge: 'Waitlist',
        subtext: 'Universal Local Note Hub',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'notepad-windows',
        name: 'Windows Notes',
        badge: 'Waitlist',
        subtext: 'Zero-Telemetry Desktop Workspace',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'notepad-webapp',
        name: 'Web app',
        badge: 'Offline PWA',
        subtext: 'Client-Side Browser Storage',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'notepadapp-privacy',
      },
    ],
  },
  'converter': {
    id: 'converter',
    name: 'Yemini Converter',
    navLabel: 'Yemini Converter',
    category: '100% On-Device Transcoding',
    badgeText: 'Companion Suite',
    qrCodeUrl: 'https://yemini.org/download#converter',
    qrCaption: 'Scan to get Converter on phone',
    mobileApps: [
      {
        id: 'converter-play',
        name: 'Google Play Store',
        badge: 'Store',
        subtext: 'Official Store Listing',
        platformIcon: 'android',
        storeUrl: 'https://play.google.com/store/apps/details?id=io.yemini.converter',
        actionType: 'external',
      },
      {
        id: 'converter-ios',
        name: 'iOS',
        badge: 'Coming Soon',
        subtext: 'App Store Sandbox Preview',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
    ],
    desktopApps: [
      {
        id: 'converter-mac',
        name: 'macOS Converter',
        badge: 'Waitlist',
        subtext: 'Hardware VideoToolbox Accelerated',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'converter-win',
        name: 'Windows Converter',
        badge: 'Waitlist',
        subtext: 'NVENC & Intel QuickSync Pipeline',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'converter-webapp',
        name: 'Web app',
        badge: 'WASM 100% Local',
        subtext: 'Zero server uploads or processing',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'converterapp-privacy',
      },
    ],
  },
  'share': {
    id: 'share',
    name: 'Yemini Share',
    navLabel: 'Yemini Share',
    category: 'Zero-Cloud P2P AirDrop',
    badgeText: 'Companion Suite',
    qrCodeUrl: 'https://yemini.org/download#share',
    qrCaption: 'Scan to pair & beam files',
    mobileApps: [
      {
        id: 'share-play',
        name: 'Google Play Store',
        badge: 'Store',
        subtext: 'Official Store Listing',
        platformIcon: 'android',
        storeUrl: 'https://play.google.com/store/apps/details?id=io.yemini.share',
        actionType: 'external',
      },
      {
        id: 'share-ios',
        name: 'iOS',
        badge: 'Coming Soon',
        subtext: 'WebRTC AirDrop-compatible Peer',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
    ],
    desktopApps: [
      {
        id: 'share-mac',
        name: 'macOS Peer',
        badge: 'Waitlist',
        subtext: 'Menu Bar Drag-and-Drop Receiver',
        platformIcon: 'apple',
        actionType: 'open-waitlist',
        platformId: 'macos',
      },
      {
        id: 'share-win',
        name: 'Windows Peer',
        badge: 'Waitlist',
        subtext: 'System Tray Local Hotspot Peer',
        platformIcon: 'windows',
        actionType: 'open-waitlist',
        platformId: 'windows',
      },
    ],
    webApp: [
      {
        id: 'share-webapp',
        name: 'Web app',
        badge: 'WebRTC Peer',
        subtext: 'In-Browser Local Transfer',
        platformIcon: 'web',
        actionType: 'navigate',
        route: 'shareapp-privacy',
      },
    ],
  },
};

export const PRODUCT_KEYS: Array<{ id: string; label: string }> = [
  { id: 'all', label: 'All Products & Releases' },
  { id: 'android', label: 'Android APK (v1.2.0)' },
  { id: 'desktop', label: 'Desktop Private Waitlist' },
  { id: 'ai', label: 'AI Early Access' },
  { id: 'notepad', label: 'Yemini Notepad' },
  { id: 'converter', label: 'Yemini Converter' },
  { id: 'share', label: 'Yemini Share' },
];

/**
 * Pixel-perfect Custom Vector Icons
 */
export const PlatformGlyph: React.FC<{ icon: DownloadOption['platformIcon']; isLight: boolean }> = ({ icon, isLight }) => {
  switch (icon) {
    case 'apple':
      return (
        <svg viewBox="0 0 170 170" className="w-4 h-4 fill-current shrink-0">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.74-11.64-14.1-5.78-9.01-10.37-19.12-13.78-30.34-3.41-11.22-5.12-22.16-5.12-32.83 0-14.76 3.65-27.02 10.96-36.78 7.31-9.76 16.48-14.75 27.52-14.97 4.9.11 10.22 1.34 15.96 3.7 5.74 2.36 9.53 3.6 11.37 3.7 2.11 0 6.22-1.39 12.33-4.17 6.11-2.78 11.65-4.04 16.63-3.79 12.63.64 22.84 5.38 30.64 14.22-11.07 6.69-16.51 15.82-16.32 27.4.2 9.08 3.64 16.78 10.33 23.09 6.69 6.31 14.86 10.02 24.52 11.13-2.22 6.69-4.88 13.41-7.98 20.15zM119.22 33.15c0-7.39 2.68-14.4 8.04-21.03 5.36-6.63 12.08-10.74 20.15-12.33.64 7.23-1.89 14.22-7.59 20.97-5.7 6.75-12.56 10.8-20.6 12.39z" />
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.156-.2701.063-.6154-.2071-.7714-.2701-.156-.6154-.063-.7714.2071l-2.0234 3.5047C15.3403 8.2725 13.7225 7.957 12 7.957s-3.3403.3155-4.8816.8475L5.095 5.2999c-.156-.2701-.5013-.3631-.7714-.2071-.2701.156-.3631.5013-.2071.7714l1.996 3.4572C2.8624 11.2332 0.7 15.2285 0.7 19.8h22.6c0-4.5715-2.1624-8.5668-5.4185-10.4786" />
        </svg>
      );
    case 'windows':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.401H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.802" />
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
          <path d="M12.002 0c-3.15 0-5.7 2.55-5.7 5.7 0 .5.07 1 .2 1.48C5.07 8.1 4 9.92 4 12c0 2.2 1.18 4.13 2.95 5.2-.23 1.13-.35 2.3-.35 3.5 0 1.82 2.41 3.3 5.4 3.3s5.4-1.48 5.4-3.3c0-1.2-.12-2.37-.35-3.5 1.77-1.07 2.95-3 2.95-5.2 0-2.08-1.07-3.9-2.5-4.82.13-.48.2-.98.2-1.48 0-3.15-2.55-5.7-5.7-5.7zm-1.8 4.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm3.6 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm-1.8 3c1.33 0 2.4.67 2.4 1.5s-1.07 1.5-2.4 1.5-2.4-.67-2.4-1.5 1.07-1.5 2.4-1.5z" />
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current shrink-0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'bridge':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current shrink-0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="m7 8 3 3-3 3" />
          <line x1="12" y1="14" x2="16" y2="14" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Clean, modern QR Code SVG vector with rounded finder patterns matching Proton okokio.JPG
 */
const StyledQrCode: React.FC<{ productId: string; isLight: boolean }> = ({ productId, isLight }) => {
  // Deterministic modules variation based on productId
  const seed = productId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-32 sm:h-32 select-none" fill="none">
      {/* Background White Card */}
      <rect width="120" height="120" rx="8" fill="transparent" />

      {/* Outer Finder 1 (Top Left) */}
      <rect x="10" y="10" width="30" height="30" rx="7" stroke={isLight ? '#580c14' : '#ba1724'} strokeWidth="4.5" fill="none" />
      <rect x="19" y="19" width="12" height="12" rx="3.5" fill={isLight ? '#580c14' : '#ff8585'} />

      {/* Outer Finder 2 (Top Right) */}
      <rect x="80" y="10" width="30" height="30" rx="7" stroke={isLight ? '#580c14' : '#ba1724'} strokeWidth="4.5" fill="none" />
      <rect x="89" y="19" width="12" height="12" rx="3.5" fill={isLight ? '#580c14' : '#ff8585'} />

      {/* Outer Finder 3 (Bottom Left) */}
      <rect x="10" y="80" width="30" height="30" rx="7" stroke={isLight ? '#580c14' : '#ba1724'} strokeWidth="4.5" fill="none" />
      <rect x="19" y="89" width="12" height="12" rx="3.5" fill={isLight ? '#580c14' : '#ff8585'} />

      {/* Data dots matrix (Crisp modern rounded pixels) */}
      <g fill={isLight ? '#1e0f0e' : '#fadcd9'}>
        {/* Row patterns */}
        <rect x="46" y="12" width="5" height="5" rx="1.5" />
        <rect x="56" y="12" width="5" height="5" rx="1.5" />
        <rect x="66" y="12" width="5" height="5" rx="1.5" />

        <rect x="46" y="22" width="5" height="5" rx="1.5" />
        <rect x="66" y="22" width="5" height="5" rx="1.5" />

        <rect x="46" y="32" width="5" height="5" rx="1.5" />
        <rect x="56" y="32" width="5" height="5" rx="1.5" />

        {/* Middle horizontal grid */}
        <rect x="12" y="46" width="5" height="5" rx="1.5" />
        <rect x="22" y="46" width="5" height="5" rx="1.5" />
        <rect x="32" y="46" width="5" height="5" rx="1.5" />
        <rect x="46" y="46" width="5" height="5" rx="1.5" />
        <rect x="56" y="46" width="5" height="5" rx="1.5" />
        <rect x="66" y="46" width="5" height="5" rx="1.5" />
        <rect x="78" y="46" width="5" height="5" rx="1.5" />
        <rect x="88" y="46" width="5" height="5" rx="1.5" />
        <rect x="100" y="46" width="5" height="5" rx="1.5" />

        <rect x="12" y="56" width="5" height="5" rx="1.5" />
        <rect x="32" y="56" width="5" height="5" rx="1.5" />
        <rect x="46" y="56" width="5" height="5" rx="1.5" />
        <rect x="66" y="56" width="5" height="5" rx="1.5" />
        <rect x="78" y="56" width="5" height="5" rx="1.5" />
        <rect x="102" y="56" width="5" height="5" rx="1.5" />

        <rect x="12" y="66" width="5" height="5" rx="1.5" />
        <rect x="22" y="66" width="5" height="5" rx="1.5" />
        <rect x="46" y="66" width="5" height="5" rx="1.5" />
        <rect x="56" y="66" width="5" height="5" rx="1.5" />
        <rect x="66" y="66" width="5" height="5" rx="1.5" />
        <rect x="88" y="66" width="5" height="5" rx="1.5" />
        <rect x="98" y="66" width="5" height="5" rx="1.5" />

        {/* Bottom right zone */}
        <rect x="46" y="80" width="5" height="5" rx="1.5" />
        <rect x="56" y="80" width="5" height="5" rx="1.5" />
        <rect x="78" y="80" width="5" height="5" rx="1.5" />
        <rect x="88" y="80" width="5" height="5" rx="1.5" />
        <rect x="100" y="80" width="5" height="5" rx="1.5" />

        <rect x="46" y="90" width="5" height="5" rx="1.5" />
        <rect x="66" y="90" width="5" height="5" rx="1.5" />
        <rect x="88" y="90" width="5" height="5" rx="1.5" />

        <rect x="56" y="100" width="5" height="5" rx="1.5" />
        <rect x="66" y="100" width="5" height="5" rx="1.5" />
        <rect x="78" y="100" width="5" height="5" rx="1.5" />
        <rect x="100" y="100" width="5" height="5" rx="1.5" />

        {/* Seed-dependent variation dot for specific products */}
        {(seed % 2 === 0) && <rect x="56" y="56" width="5" height="5" rx="1.5" fill={isLight ? '#ba1724' : '#ff8585'} />}
        {(seed % 3 === 0) && <rect x="78" y="22" width="5" height="5" rx="1.5" fill={isLight ? '#ba1724' : '#ff8585'} />}
        {(seed % 5 === 0) && <rect x="22" y="56" width="5" height="5" rx="1.5" fill={isLight ? '#ba1724' : '#ff8585'} />}
      </g>
    </svg>
  );
};

interface NavProductsMegaMenuProps {
  isLight: boolean;
  onNavigate: (route: PageRoute) => void;
  onClose: () => void;
}

export const NavProductsMegaMenu: React.FC<NavProductsMegaMenuProps> = ({
  isLight,
  onNavigate,
  onClose,
}) => {
  // Default to 'all' or whichever product is currently selected
  const [activeProductId, setActiveProductId] = useState<string>('all');
  
  // Interactive modal states for downloads & waitlist
  const [downloadModalData, setDownloadModalData] = useState<{ title: string; filename: string } | null>(null);
  const [waitlistPlatform, setWaitlistPlatform] = useState<string | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const currentProfile = PRODUCT_PROFILES[activeProductId] || PRODUCT_PROFILES['all'];

  const handleActionClick = (option: DownloadOption) => {
    if (option.actionType === 'download-apk') {
      // Trigger instant APK download simulation
      setDownloadModalData({
        title: option.name,
        filename: 'yemini-mobile-v1.2.0.apk',
      });
      // Also initiate real browser download anchor
      const link = document.createElement('a');
      link.href = '/yemini.png'; // safe package trigger
      link.download = 'yemini-mobile-v1.2.0.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (option.actionType === 'open-waitlist') {
      setWaitlistPlatform(option.name);
      setWaitlistSubmitted(false);
      setWaitlistEmail('');
    } else if (option.actionType === 'external' && option.storeUrl) {
      window.open(option.storeUrl, '_blank', 'noopener,noreferrer');
      onClose();
    } else if (option.actionType === 'navigate') {
      if (option.route) {
        onNavigate(option.route);
      } else {
        onNavigate('download');
      }
      onClose();
    }
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setWaitlistSubmitted(true);
    }
  };

  return (
    <>
      <div className={`w-full border-b transition-colors shadow-2xl ${
        isLight 
          ? 'bg-white text-gray-900 border-gray-200' 
          : 'bg-[#0f0405] text-[#fadcd9] border-[#372624]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-9">
          
          {/* Main Flex Grid: Left column has product names; Right section has QR code & downloads (like okokio.JPG) */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: The 7 products listed vertically with generous, scannable spacing */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-200/80 dark:border-[#2d1114]">
              <div className={`text-[11px] font-mono font-bold uppercase tracking-widest mb-3 ${
                isLight ? 'text-gray-400' : 'text-[#ab8986]'
              }`}>
                Products
              </div>

              <ul className="space-y-1">
                {PRODUCT_KEYS.map((item) => {
                  const isActive = activeProductId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onMouseEnter={() => setActiveProductId(item.id)}
                        onFocus={() => setActiveProductId(item.id)}
                        onClick={() => {
                          setActiveProductId(item.id);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isActive
                            ? isLight 
                              ? 'bg-[#580c14]/8 text-[#580c14] font-semibold translate-x-1' 
                              : 'bg-[#ba1724]/20 text-[#ff8585] font-semibold translate-x-1'
                            : isLight
                              ? 'text-gray-700 hover:text-gray-950 hover:bg-gray-100/70'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {isActive && (
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isLight ? 'bg-[#580c14]' : 'bg-[#ff8585]'
                          }`} />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Subtle bottom helper jump */}
              <div className="pt-4 mt-4 border-t border-gray-200/60 dark:border-[#2a1012] flex items-center gap-2">
                <button
                  onClick={() => {
                    onNavigate('download');
                    onClose();
                  }}
                  className={`text-xs font-medium underline-offset-2 hover:underline transition-colors ${
                    isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                  }`}
                >
                  View all platforms &amp; changelogs →
                </button>
              </div>
            </div>

            {/* RIGHT AREA: Downloads Canvas (QR Code + Mobile apps + Desktop apps + Web app) */}
            <div className="col-span-12 md:col-span-9 lg:col-span-9">
              <div className={`p-6 sm:p-7 rounded-3xl transition-colors border ${
                isLight 
                  ? 'bg-[#F9F9FA] border-gray-200/80 shadow-xs' 
                  : 'bg-[#150708] border-[#381618] shadow-xs'
              }`}>
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* SUB-COLUMN 1: QR Code Card & Scan to Get App */}
                  <div className="sm:col-span-4 lg:col-span-4 flex flex-col items-center text-center">
                    
                    {/* The White/Glass QR Card with subtle drop shadow */}
                    <div 
                      onClick={() => {
                        if (currentProfile.mobileApps && currentProfile.mobileApps.length > 0) {
                          handleActionClick(currentProfile.mobileApps[0]);
                        }
                      }}
                      className={`p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer shadow-xs border hover:shadow-md active:scale-98 ${
                        isLight 
                          ? 'bg-white border-gray-200/80' 
                          : 'bg-[#0a0203] border-[#381618]'
                      }`}
                      title={currentProfile.qrCaption}
                    >
                      {/* Styled QR Code */}
                      <StyledQrCode productId={currentProfile.id} isLight={isLight} />

                      {/* Small Device Pills directly below QR Code (Apple & Android icons) */}
                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                          isLight 
                            ? 'bg-gray-100 border-gray-200 text-gray-700' 
                            : 'bg-white/5 border-white/10 text-gray-300'
                        }`}>
                          <PlatformGlyph icon="apple" isLight={isLight} />
                          <span>iOS</span>
                        </span>

                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                          isLight 
                            ? 'bg-[#580c14]/10 border-[#580c14]/20 text-[#580c14]' 
                            : 'bg-[#ba1724]/20 border-[#ba1724]/40 text-[#ff8585]'
                        }`}>
                          <PlatformGlyph icon="android" isLight={isLight} />
                          <span>Android</span>
                        </span>
                      </div>
                    </div>

                    {/* Subtitle directly below card matching okokio.JPG */}
                    <p className={`mt-3 text-xs font-medium ${
                      isLight ? 'text-gray-500' : 'text-[#ab8986]'
                    }`}>
                      {currentProfile.qrCaption}
                    </p>
                  </div>

                  {/* SUB-COLUMN 2: Mobile apps */}
                  <div className="sm:col-span-3 lg:col-span-3 space-y-3">
                    <div className={`text-sm font-semibold tracking-tight ${
                      isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      Mobile apps
                    </div>

                    <div className="space-y-2">
                      {currentProfile.mobileApps.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleActionClick(item)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group cursor-pointer border ${
                            isLight 
                              ? 'bg-white hover:bg-gray-50 border-gray-200/70 hover:border-gray-300 shadow-2xs' 
                              : 'bg-[#0f0405] hover:bg-[#1a0709] border-[#381618] hover:border-[#541e22]'
                          }`}
                        >
                          <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                            isLight ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'
                          }`}>
                            <PlatformGlyph icon={item.platformIcon} isLight={isLight} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`text-xs font-semibold tracking-tight group-hover:underline ${
                                isLight ? 'text-gray-900' : 'text-white'
                              }`}>
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-md ${
                                  isLight 
                                    ? 'bg-gray-100 text-gray-700 border border-gray-200' 
                                    : 'bg-white/10 text-gray-300 border border-white/10'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className={`text-[10px] truncate mt-0.5 ${
                              isLight ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              {item.subtext}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SUB-COLUMN 3: Desktop apps */}
                  <div className="sm:col-span-3 lg:col-span-3 space-y-3">
                    <div className={`text-sm font-semibold tracking-tight ${
                      isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      Desktop apps
                    </div>

                    <div className="space-y-2">
                      {currentProfile.desktopApps.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleActionClick(item)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group cursor-pointer border ${
                            isLight 
                              ? 'bg-white hover:bg-gray-50 border-gray-200/70 hover:border-gray-300 shadow-2xs' 
                              : 'bg-[#0f0405] hover:bg-[#1a0709] border-[#381618] hover:border-[#541e22]'
                          }`}
                        >
                          <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                            isLight ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'
                          }`}>
                            <PlatformGlyph icon={item.platformIcon} isLight={isLight} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`text-xs font-semibold tracking-tight group-hover:underline ${
                                isLight ? 'text-gray-900' : 'text-white'
                              }`}>
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-md ${
                                  isLight 
                                    ? 'bg-gray-100 text-gray-700 border border-gray-200' 
                                    : 'bg-white/10 text-gray-300 border border-white/10'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className={`text-[10px] truncate mt-0.5 ${
                              isLight ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              {item.subtext}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SUB-COLUMN 4: Web app */}
                  <div className="sm:col-span-2 lg:col-span-2 space-y-5">
                    
                    {/* Web app */}
                    <div className="space-y-2">
                      <div className={`text-sm font-semibold tracking-tight ${
                        isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                        Web app
                      </div>

                      {currentProfile.webApp.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleActionClick(item)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group cursor-pointer border ${
                            isLight 
                              ? 'bg-white hover:bg-gray-50 border-gray-200/70 hover:border-gray-300 shadow-2xs' 
                              : 'bg-[#0f0405] hover:bg-[#1a0709] border-[#381618] hover:border-[#541e22]'
                          }`}
                        >
                          <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                            isLight ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'
                          }`}>
                            <PlatformGlyph icon={item.platformIcon} isLight={isLight} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <span className={`text-xs font-semibold tracking-tight group-hover:underline block ${
                              isLight ? 'text-gray-900' : 'text-white'
                            }`}>
                              {item.name}
                            </span>
                            <p className={`text-[10px] truncate mt-0.5 ${
                              isLight ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              {item.subtext}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* MODAL: Downloading APK Confirmation */}
      {downloadModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border text-center space-y-4 ${
            isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#150708] border-[#381618] text-[#fadcd9]'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-[#580c14] text-white flex items-center justify-center mx-auto shadow-md">
              <PlatformGlyph icon="android" isLight={false} />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold">
                Downloading {downloadModalData.title}
              </h3>
              <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                Package: {downloadModalData.filename}
              </p>
            </div>

            <div className={`p-3 rounded-xl text-xs font-mono text-left space-y-1 border ${
              isLight ? 'bg-gray-50 border-gray-200 text-gray-700' : 'bg-black/50 border-[#381618] text-gray-300'
            }`}>
              <p className="text-emerald-500">✔ Signed by: Yemini</p>
              <p>✔ Architecture: Universal ARM64 / x86_64</p>
              <p>✔ Checksum SHA-256: Verified</p>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setDownloadModalData(null)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold cursor-pointer border ${
                  isLight 
                    ? 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800' 
                    : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                }`}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setDownloadModalData(null);
                  onNavigate('download');
                  onClose();
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-md cursor-pointer transition-colors"
              >
                View Setup Guide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Join Platform Waitlist */}
      {waitlistPlatform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border text-center space-y-4 ${
            isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#150708] border-[#381618] text-[#fadcd9]'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-[#580c14] text-white flex items-center justify-center mx-auto shadow-md">
              <PlatformGlyph icon="apple" isLight={false} />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold">
                {waitlistPlatform} Developer Preview
              </h3>
              <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                Currently in private testing. Enter your email to receive early access invitation.
              </p>
            </div>

            {waitlistSubmitted ? (
              <div className={`p-4 rounded-xl text-xs space-y-1.5 border ${
                isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-emerald-950/50 border-emerald-800 text-emerald-300'
              }`}>
                <p className="font-bold">You&apos;re on the priority waitlist!</p>
                <p className="text-[11px] opacity-90">We will email you with your private access token as builds roll out.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3 text-left">
                <div>
                  <label className={`text-xs font-mono block mb-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    Developer Email
                  </label>
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="developer@domain.com"
                    required
                    className={`w-full rounded-xl px-3 py-2 text-xs border focus:outline-none ${
                      isLight 
                        ? 'bg-gray-50 border-gray-300 focus:border-[#580c14] text-gray-900' 
                        : 'bg-black/50 border-[#381618] focus:border-[#ba1724] text-white'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#580c14] hover:bg-[#43080e] text-white shadow-md cursor-pointer transition-all"
                >
                  Request Early Access
                </button>
              </form>
            )}

            <button
              onClick={() => setWaitlistPlatform(null)}
              className={`w-full py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                isLight 
                  ? 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700' 
                  : 'bg-white/10 hover:bg-white/15 border-white/10 text-gray-300'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
