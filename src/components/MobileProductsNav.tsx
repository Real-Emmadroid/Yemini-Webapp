import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  PRODUCT_KEYS,
  PRODUCT_PROFILES,
  DownloadOption,
  ProductProfile,
  PlatformGlyph,
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
                    {profile.mobileApps.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={(e) => handleOptionClick(opt, e)}
                        className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                          isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-7 h-7 flex items-center justify-center ${
                            isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                          }`}>
                            {opt.platformIcon === 'apple' ? (
                              <div className="w-7 h-7 rounded-none bg-[#580c14] dark:bg-[#ba1724] text-white text-[10px] font-bold flex items-center justify-center tracking-tight shadow-none select-none">
                                iOS
                              </div>
                            ) : (
                              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.156-.2701.063-.6154-.2071-.7714-.2701-.156-.6154-.063-.7714.2071l-2.0234 3.5047C15.3403 8.2725 13.7225 7.957 12 7.957s-3.3403.3155-4.8816.8475L5.095 5.2999c-.156-.2701-.5013-.3631-.7714-.2071-.2701.156-.3631.5013-.2071.7714l1.996 3.4572C2.8624 11.2332 0.7 15.2285 0.7 19.8h22.6c0-4.5715-2.1624-8.5668-5.4185-10.4786" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-base font-semibold ${
                            isLight ? 'text-gray-900' : 'text-white'
                          }`}>
                            {opt.name}
                          </span>
                        </div>
                        {opt.badge && (
                          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-none ${
                            isLight ? 'bg-gray-100 text-gray-700' : 'bg-white/10 text-gray-300'
                          }`}>
                            {opt.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. DESKTOP APPS SECTION */}
                {profile.desktopApps.length > 0 && (
                  <div className="space-y-2">
                    <div className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b ${
                      isLight ? 'text-gray-400 border-gray-100' : 'text-[#ab8986] border-[#2b1214]'
                    }`}>
                      Desktop apps
                    </div>

                    <div className="space-y-1 pt-1">
                      {profile.desktopApps.map((opt) => (
                        <div
                          key={opt.id}
                          onClick={(e) => handleOptionClick(opt, e)}
                          className={`flex items-center justify-between py-2.5 px-2 rounded-none cursor-pointer transition-colors active:scale-[0.99] ${
                            isLight ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`w-7 h-7 flex items-center justify-center ${
                              isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
                            }`}>
                              <PlatformGlyph icon={opt.platformIcon} isLight={isLight} />
                            </div>
                            <span className={`text-base font-semibold ${
                              isLight ? 'text-gray-900' : 'text-white'
                            }`}>
                              {opt.name}
                            </span>
                          </div>
                          {opt.badge && (
                            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-none ${
                              isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-gray-300'
                            }`}>
                              {opt.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. WEB APP */}
                {profile.webApp.length > 0 && (
                  <div className="space-y-2">
                    <div className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b ${
                      isLight ? 'text-gray-400 border-gray-100' : 'text-[#ab8986] border-[#2b1214]'
                    }`}>
                      Web app
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
                <span className="font-semibold">Yemini</span>
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
