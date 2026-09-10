import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  PRODUCT_KEYS,
  PRODUCT_PROFILES,
  DownloadOption,
  ProductProfile,
} from './NavProductsMegaMenu';

interface MobileProductsNavProps {
  isLight: boolean;
  onNavigate: (route: PageRoute) => void;
  onCloseMenu: () => void;
  onRequestDownloadApk?: (title: string) => void;
  onRequestWaitlist?: (platformName: string) => void;
}

/**
 * Mobile-optimized Products Dropdown with per-product distribution suite,
 * without "Available now"/"In development" badges, without "back"/"Download" breadcrumb,
 * and with clean angular (no border-radius) styling as requested.
 */
export const MobileProductsNav: React.FC<MobileProductsNavProps> = ({
  isLight,
  onNavigate,
  onCloseMenu,
  onRequestDownloadApk,
  onRequestWaitlist,
}) => {
  // Tracks which specific product dropdown is currently opened
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  
  // Internal modal states for direct mobile handling
  const [localDownloadModal, setLocalDownloadModal] = useState<{ title: string; filename: string } | null>(null);
  const [localWaitlistPlatform, setLocalWaitlistPlatform] = useState<string | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleProductToggle = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedProductId((prev) => (prev === productId ? null : productId));
  };

  const triggerApkDownload = (title: string) => {
    if (onRequestDownloadApk) {
      onRequestDownloadApk(title);
    } else {
      const link = document.createElement('a');
      link.href = '/yemini.png';
      link.download = 'yemini-mobile-v1.2.0.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLocalDownloadModal({ title, filename: 'yemini-mobile-v1.2.0.apk' });
    }
  };

  const triggerWaitlist = (platform: string) => {
    if (onRequestWaitlist) {
      onRequestWaitlist(platform);
    } else {
      setLocalWaitlistPlatform(platform);
      setWaitlistSubmitted(false);
      setWaitlistEmail('');
    }
  };

  const handleOptionClick = (option: DownloadOption, e: React.MouseEvent) => {
    e.stopPropagation();
    if (option.actionType === 'download-apk') {
      triggerApkDownload(option.name);
    } else if (option.actionType === 'open-waitlist') {
      triggerWaitlist(option.name);
    } else if (option.actionType === 'external' && option.storeUrl) {
      window.open(option.storeUrl, '_blank', 'noopener,noreferrer');
      onCloseMenu();
    } else if (option.actionType === 'navigate') {
      if (option.route) {
        onNavigate(option.route);
      } else {
        onNavigate('download');
      }
      onCloseMenu();
    }
  };

  return (
    <div className={`space-y-1 py-1 ${isLight ? 'text-gray-900' : 'text-[#fadcd9]'}`}>
      {PRODUCT_KEYS.map((item) => {
        const isExpanded = expandedProductId === item.id;
        const profile: ProductProfile = PRODUCT_PROFILES[item.id] || PRODUCT_PROFILES['all'];

        return (
          <div
            key={item.id}
            className={`rounded-none transition-all duration-200 border ${
              isExpanded
                ? isLight
                  ? 'bg-gray-50/80 border-gray-200 shadow-none'
                  : 'bg-[#18090a] border-[#381618] shadow-none'
                : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {/* Product Header Row with secondary Dropdown Trigger (no badges) */}
            <div
              onClick={(e) => handleProductToggle(item.id, e)}
              className="w-full flex items-center justify-between px-3 py-3 cursor-pointer select-none rounded-none"
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className={`text-base font-semibold truncate ${
                  isExpanded 
                    ? isLight ? 'text-[#580c14]' : 'text-[#ff8585]' 
                    : isLight ? 'text-gray-800' : 'text-[#fadcd9]'
                }`}>
                  {item.label}
                </span>
              </div>

              {/* Product Dropdown chevron button */}
              <button
                type="button"
                aria-label={`Toggle distribution suite for ${item.label}`}
                onClick={(e) => handleProductToggle(item.id, e)}
                className={`p-1.5 rounded-none transition-transform duration-200 cursor-pointer ${
                  isExpanded
                    ? 'rotate-180 text-[#580c14] dark:text-[#ff8585] bg-[#580c14]/10 dark:bg-[#ba1724]/20'
                    : isLight ? 'text-gray-400 hover:text-gray-700' : 'text-[#ab8986] hover:text-white'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>

            {/* EXPANDED DISTRIBUTION SUITE (No back/Download breadcrumbs, no border radius) */}
            {isExpanded && (
              <div className={`px-4 pt-3 pb-5 space-y-5 border-t rounded-none animate-fadeIn ${
                isLight ? 'border-gray-200 bg-white' : 'border-[#2d1114] bg-[#120506]'
              }`}>
                {/* 1. MOBILE APPS SECTION */}
                <div className="space-y-2">
                  <div className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b ${
                    isLight ? 'text-gray-400 border-gray-100' : 'text-[#ab8986] border-[#2b1214]'
                  }`}>
                    Mobile apps
                  </div>

                  <div className="space-y-1 pt-1">
                    {/* iOS Option with custom iOS badge */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerWaitlist('iOS');
                      }}
                      className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                        isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-7 h-7 rounded-none bg-[#580c14] dark:bg-[#ba1724] text-white text-[10px] font-bold flex items-center justify-center tracking-tight shadow-none select-none">
                          iOS
                        </div>
                        <span className={`text-base font-semibold ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          iOS
                        </span>
                      </div>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-none ${
                        isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-gray-300'
                      }`}>
                        Waitlist
                      </span>
                    </div>

                    {/* Android Option with official robot glyph */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerApkDownload(profile.name);
                      }}
                      className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                        isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-7 h-7 flex items-center justify-center ${
                          isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                        }`}>
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.156-.2701.063-.6154-.2071-.7714-.2701-.156-.6154-.063-.7714.2071l-2.0234 3.5047C15.3403 8.2725 13.7225 7.957 12 7.957s-3.3403.3155-4.8816.8475L5.095 5.2999c-.156-.2701-.5013-.3631-.7714-.2071-.2701.156-.3631.5013-.2071.7714l1.996 3.4572C2.8624 11.2332 0.7 15.2285 0.7 19.8h22.6c0-4.5715-2.1624-8.5668-5.4185-10.4786" />
                          </svg>
                        </div>
                        <span className={`text-base font-semibold ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          Android
                        </span>
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-none ${
                        isLight ? 'bg-[#580c14]/10 text-[#580c14]' : 'bg-[#ba1724]/20 text-[#ff8585]'
                      }`}>
                        APK v1.2.0
                      </span>
                    </div>

                    {/* Google Play link if applicable */}
                    {profile.mobileApps.find((app) => app.storeUrl) && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          const playOpt = profile.mobileApps.find((app) => app.storeUrl);
                          if (playOpt?.storeUrl) {
                            window.open(playOpt.storeUrl, '_blank', 'noopener,noreferrer');
                            onCloseMenu();
                          }
                        }}
                        className={`flex items-center justify-between py-2 px-2 rounded-none cursor-pointer text-xs transition-colors ${
                          isLight ? 'text-gray-600 hover:text-black hover:bg-gray-50' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="pl-10">Google Play Store listing</span>
                        <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. DESKTOP APPS SECTION */}
                <div className="space-y-2">
                  <div className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b ${
                    isLight ? 'text-gray-400 border-gray-100' : 'text-[#ab8986] border-[#2b1214]'
                  }`}>
                    Desktop apps
                  </div>

                  <div className="space-y-1 pt-1">
                    {/* macOS */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerWaitlist('macOS');
                      }}
                      className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                        isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-7 h-7 flex items-center justify-center ${
                          isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                        }`}>
                          <svg viewBox="0 0 170 170" className="w-5 h-5 fill-current shrink-0">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.74-11.64-14.1-5.78-9.01-10.37-19.12-13.78-30.34-3.41-11.22-5.12-22.16-5.12-32.83 0-14.76 3.65-27.02 10.96-36.78 7.31-9.76 16.48-14.75 27.52-14.97 4.9.11 10.22 1.34 15.96 3.7 5.74 2.36 9.53 3.6 11.37 3.7 2.11 0 6.22-1.39 12.33-4.17 6.11-2.78 11.65-4.04 16.63-3.79 12.63.64 22.84 5.38 30.64 14.22-11.07 6.69-16.51 15.82-16.32 27.4.2 9.08 3.64 16.78 10.33 23.09 6.69 6.31 14.86 10.02 24.52 11.13-2.22 6.69-4.88 13.41-7.98 20.15zM119.22 33.15c0-7.39 2.68-14.4 8.04-21.03 5.36-6.63 12.08-10.74 20.15-12.33.64 7.23-1.89 14.22-7.59 20.97-5.7 6.75-12.56 10.8-20.6 12.39z" />
                          </svg>
                        </div>
                        <span className={`text-base font-semibold ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          macOS
                        </span>
                      </div>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-none ${
                        isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-gray-300'
                      }`}>
                        Apple Silicon
                      </span>
                    </div>

                    {/* Windows */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerWaitlist('Windows');
                      }}
                      className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                        isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-7 h-7 flex items-center justify-center ${
                          isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                        }`}>
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.401H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.802" />
                          </svg>
                        </div>
                        <span className={`text-base font-semibold ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          Windows
                        </span>
                      </div>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-none ${
                        isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-gray-300'
                      }`}>
                        x64 &amp; ARM64
                      </span>
                    </div>

                    {/* Linux */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerWaitlist('Linux');
                      }}
                      className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                        isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-7 h-7 flex items-center justify-center ${
                          isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                        }`}>
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                            <path d="M12.002 0c-3.15 0-5.7 2.55-5.7 5.7 0 .5.07 1 .2 1.48C5.07 8.1 4 9.92 4 12c0 2.2 1.18 4.13 2.95 5.2-.23 1.13-.35 2.3-.35 3.5 0 1.82 2.41 3.3 5.4 3.3s5.4-1.48 5.4-3.3c0-1.2-.12-2.37-.35-3.5 1.77-1.07 2.95-3 2.95-5.2 0-2.08-1.07-3.9-2.5-4.82.13-.48.2-.98.2-1.48 0-3.15-2.55-5.7-5.7-5.7zm-1.8 4.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm3.6 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm-1.8 3c1.33 0 2.4.67 2.4 1.5s-1.07 1.5-2.4 1.5-2.4-.67-2.4-1.5 1.07-1.5 2.4-1.5z" />
                          </svg>
                        </div>
                        <span className={`text-base font-semibold ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          Linux
                        </span>
                      </div>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-none ${
                        isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-gray-300'
                      }`}>
                        .deb &amp; .rpm
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. WEB APP & ADD-ONS */}
                {(profile.webApp.length > 0 || profile.clientAddon.length > 0) && (
                  <div className="space-y-2">
                    <div className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b ${
                      isLight ? 'text-gray-400 border-gray-100' : 'text-[#ab8986] border-[#2b1214]'
                    }`}>
                      Web &amp; Tools
                    </div>

                    <div className="space-y-1 pt-1">
                      {profile.webApp.map((opt) => (
                        <div
                          key={opt.id}
                          onClick={(e) => handleOptionClick(opt, e)}
                          className={`flex items-center justify-between py-2 px-2 rounded-none cursor-pointer transition-colors ${
                            isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`w-7 h-7 flex items-center justify-center ${
                              isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                            }`}>
                              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                              </svg>
                            </div>
                            <span className={`text-sm font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}>
                              {opt.name}
                            </span>
                          </div>
                          <span className={`text-[10px] font-mono opacity-70`}>{opt.badge}</span>
                        </div>
                      ))}

                      {profile.clientAddon.map((opt) => (
                        <div
                          key={opt.id}
                          onClick={(e) => handleOptionClick(opt, e)}
                          className={`flex items-center justify-between py-2 px-2 rounded-none cursor-pointer transition-colors ${
                            isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`w-7 h-7 flex items-center justify-center ${
                              isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                            }`}>
                              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                              </svg>
                            </div>
                            <span className={`text-sm font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}>
                              {opt.name}
                            </span>
                          </div>
                          <span className={`text-[10px] font-mono opacity-70`}>{opt.badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Direct Mobile Download Verification Modal (No border radius) */}
      {localDownloadModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLocalDownloadModal(null)}
        >
          <div 
            className={`w-full max-w-sm p-6 rounded-none shadow-2xl border text-left space-y-4 ${
              isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#18090a] border-[#381618] text-[#fadcd9]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#580c14] text-white flex items-center justify-center shadow-none">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Downloading APK</h3>
                  <p className="text-xs opacity-70">yemini-mobile-v1.2.0.apk</p>
                </div>
              </div>
              <button
                onClick={() => setLocalDownloadModal(null)}
                className="p-1 rounded-none opacity-60 hover:opacity-100 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className={`p-3 rounded-none text-xs space-y-1.5 font-mono ${
              isLight ? 'bg-gray-50 border border-gray-100 text-gray-700' : 'bg-black/40 border border-white/5 text-[#d4b0ad]'
            }`}>
              <div className="flex justify-between">
                <span className="opacity-60">Architectures:</span>
                <span className="font-semibold">Universal ARM64 / x86_64</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">Signed by:</span>
                <span className="font-semibold">Sphere Tech Foundation</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">Checksum:</span>
                <span className="text-emerald-500 font-semibold">SHA-256 Verified</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  setLocalDownloadModal(null);
                  onNavigate('download');
                  onCloseMenu();
                }}
                className={`flex-1 py-2.5 rounded-none text-xs font-semibold text-center cursor-pointer transition-colors ${
                  isLight ? 'bg-[#580c14] text-white hover:bg-[#40090e]' : 'bg-[#ba1724] text-white hover:bg-[#a1141f]'
                }`}
              >
                View Setup Guide
              </button>
              <button
                onClick={() => setLocalDownloadModal(null)}
                className={`py-2.5 px-4 rounded-none text-xs font-medium cursor-pointer border ${
                  isLight ? 'border-gray-200 text-gray-700 hover:bg-gray-100' : 'border-[#381618] text-gray-300 hover:bg-white/5'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Direct Mobile Waitlist Modal (No border radius) */}
      {localWaitlistPlatform && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLocalWaitlistPlatform(null)}
        >
          <div 
            className={`w-full max-w-sm p-6 rounded-none shadow-2xl border text-left space-y-4 ${
              isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#18090a] border-[#381618] text-[#fadcd9]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className={`text-[10px] font-mono tracking-widest uppercase font-bold px-2 py-0.5 rounded-none ${
                  isLight ? 'bg-[#580c14]/10 text-[#580c14]' : 'bg-[#ba1724]/20 text-[#ff8585]'
                }`}>
                  Private Waitlist
                </span>
                <h3 className="font-bold text-lg mt-1.5">
                  {localWaitlistPlatform} Release
                </h3>
              </div>
              <button
                onClick={() => setLocalWaitlistPlatform(null)}
                className="p-1 rounded-none opacity-60 hover:opacity-100 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <p className="text-xs opacity-80 leading-relaxed">
              Native build for {localWaitlistPlatform} is undergoing audited testing. Reserve your developer preview seat.
            </p>

            {waitlistSubmitted ? (
              <div className="py-4 text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-none bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-emerald-500">Access invite confirmed!</p>
                <button
                  onClick={() => setLocalWaitlistPlatform(null)}
                  className={`w-full mt-2 py-2 rounded-none text-xs font-semibold cursor-pointer ${
                    isLight ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  Done
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (waitlistEmail) setWaitlistSubmitted(true);
                }}
                className="space-y-3 pt-1"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-none text-xs outline-none border focus:ring-2 focus:ring-[#ba1724]/40 transition-all ${
                    isLight 
                      ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400' 
                      : 'bg-black/50 border-[#381618] text-white placeholder-gray-500'
                  }`}
                />
                <button
                  type="submit"
                  className={`w-full py-2.5 rounded-none text-xs font-semibold text-center cursor-pointer transition-colors shadow-none ${
                    isLight ? 'bg-[#580c14] text-white hover:bg-[#40090e]' : 'bg-[#ba1724] text-white hover:bg-[#a1141f]'
                  }`}
                >
                  Request Early Access
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
