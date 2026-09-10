import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export interface PartnerItem {
  id: string;
  name: string;
  /**
   * Path to partner logo image (WebP or PNG).
   * Replace this with your own image path anytime, e.g.:
   * '/images/partners/my-partner.webp' or '/images/partners/my-partner.png'
   */
  logoSrc: string;
  /** Optional website or documentation URL */
  url?: string;
  /** Subtitle or descriptor */
  category?: string;
}

/**
 * Default list of partners.
 * You can easily update or add your WebP / PNG logo paths here.
 */
export const PARTNER_LOGOS: PartnerItem[] = [
  {
    id: 'partner-stf',
    name: 'Sovereign Tech Fund',
    category: 'Sovereignty & Infrastructure',
    logoSrc: '/images/partners/sovereign-tech-fund.webp',
  },
  {
    id: 'partner-rust',
    name: 'Rust Foundation',
    category: 'Systems & Compilers',
    logoSrc: '/images/partners/rust-foundation.png',
  },
  {
    id: 'partner-riscv',
    name: 'RISC-V International',
    category: 'Open Hardware Architecture',
    logoSrc: '/images/partners/riscv-international.webp',
  },
  {
    id: 'partner-llvm',
    name: 'LLVM Project',
    category: 'Toolchain & JIT Backend',
    logoSrc: '/images/partners/llvm-compiler.png',
  },
  {
    id: 'partner-matrix',
    name: 'Matrix Foundation',
    category: 'Decentralized Communications',
    logoSrc: '/images/partners/matrix-protocol.webp',
  },
  {
    id: 'partner-linux',
    name: 'Linux Foundation',
    category: 'Kernel & Toolchains',
    logoSrc: '/images/partners/linux-foundation.png',
  },
  {
    id: 'partner-tor',
    name: 'Tor Project',
    category: 'Privacy Research',
    logoSrc: '/images/partners/tor-project.webp',
  },
  {
    id: 'partner-eff',
    name: 'Electronic Frontier Alliance',
    category: 'Digital Civil Liberties',
    logoSrc: '/images/partners/eff-alliance.png',
  },
  {
    id: 'partner-osi',
    name: 'Open Source Initiative',
    category: 'Open Standards',
    logoSrc: '/images/partners/open-source-initiative.webp',
  },
  {
    id: 'partner-gnupg',
    name: 'GnuPG & Crypto',
    category: 'On-Device Cryptography',
    logoSrc: '/images/partners/gnupg.png',
  },
];

export const SectionPartnerships: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Duplicate the logos array so the horizontal marquee loops smoothly without jump or gap
  const marqueePartners = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section 
      id="partnerships"
      aria-label="Partnerships"
      className={`relative w-full py-14 sm:py-20 overflow-hidden transition-colors border-y ${
        isLight 
          ? 'bg-[#F9F9FA] border-gray-200/70 text-[#1d1d1f]' 
          : 'bg-[#0a0304] border-[#2d1114] text-[#fadcd9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <p className={`text-xs font-mono font-bold tracking-widest uppercase ${
          isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
        }`}>
          Partnerships &amp; Ecosystem
        </p>
      </div>

      {/* Moving Slide Container - Edge-to-edge masked marquee */}
      <div 
        className="partner-marquee-wrapper relative w-full overflow-hidden partner-mask py-3 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Animated Marquee Track: pauses automatically when hovered */}
        <div 
          className="partner-marquee-track flex items-center gap-8 sm:gap-12"
          style={{
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
        >
          {marqueePartners.map((partner, index) => {
            const hasError = failedImages[`${partner.id}-${index}`];

            return (
              <div
                key={`${partner.id}-${index}`}
                className={`flex-shrink-0 flex items-center justify-center px-6 py-3.5 rounded-xl border transition-all duration-300 ${
                  isLight 
                    ? 'bg-white/80 hover:bg-white border-gray-200/80 hover:border-gray-300 shadow-xs' 
                    : 'bg-[#150608]/80 hover:bg-[#1f090c] border-[#381618] hover:border-[#521e22] shadow-xs'
                }`}
                style={{
                  minWidth: '180px',
                  height: '64px',
                }}
              >
                {!hasError ? (
                  /* Partner Logo Image (PNG or WebP) */
                  <img
                    src={partner.logoSrc}
                    alt={partner.name}
                    loading="lazy"
                    onError={() => handleImageError(`${partner.id}-${index}`)}
                    className={`max-h-8 max-w-[140px] w-auto h-auto object-contain transition-all duration-300 ${
                      isLight 
                        ? 'opacity-75 hover:opacity-100 grayscale hover:grayscale-0' 
                        : 'opacity-70 hover:opacity-100 grayscale hover:grayscale-0 brightness-110'
                    }`}
                  />
                ) : (
                  /* Elegant Clean Monochrome Fallback before custom image is loaded */
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full ${
                      isLight ? 'bg-[#580c14]' : 'bg-[#ff8585]'
                    }`} />
                    <span className={`text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap font-mono ${
                      isLight ? 'text-gray-800' : 'text-gray-200'
                    }`}>
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
