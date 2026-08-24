import React, { useState } from 'react';
import defaultYeminiImg from '../assets/yemini.png';
import fallbackSymbolImg from '../assets/yeminilogo.png';

interface YeminiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  imageSrc?: string;
}

export const YeminiLogo: React.FC<YeminiLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  imageSrc
}) => {
  // Stage 0: default direct import / passed src
  // Stage 1: try public relative url
  // Stage 2: fallback symbol
  // Stage 3: SVG vector fallback
  const [loadStage, setLoadStage] = useState<number>(0);

  // Height mappings for the horizontal logotype
  const logoHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-18 sm:h-22'
  };

  const subtitleSizes = {
    sm: 'text-[8.5px]',
    md: 'text-[9.5px]',
    lg: 'text-[11px]',
    xl: 'text-xs'
  };

  // Determine current image candidate
  const currentSrc = imageSrc || defaultYeminiImg;

  const handlePrimaryError = () => {
    if (loadStage === 0) {
      setLoadStage(1);
    } else if (loadStage === 1) {
      setLoadStage(2);
    } else {
      setLoadStage(3);
    }
  };

  return (
    <span className={`inline-flex flex-col items-center justify-center select-none group text-center ${className}`}>
      {/* Horizontal Logotype Image */}
      <span className="inline-flex items-center justify-center">
        {loadStage <= 1 ? (
          <img
            src={loadStage === 0 ? currentSrc : '/yemini.png'}
            alt="Yemini"
            className={`${logoHeights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_14px_rgba(255,103,103,0.2)]`}
            referrerPolicy="no-referrer"
            onError={handlePrimaryError}
          />
        ) : loadStage === 2 ? (
          <span className="inline-flex items-center gap-2.5">
            <img
              src={fallbackSymbolImg || '/yeminilogo.png'}
              alt="Yemini Symbol"
              className="w-9 h-9 object-contain"
              referrerPolicy="no-referrer"
              onError={() => setLoadStage(3)}
            />
            <span className="font-extrabold text-white text-2xl tracking-tight">Yemini</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-2.5 py-1">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#5b0000] via-[#b31217] to-[#ff4d4d] flex items-center justify-center shadow-lg shadow-[#ff4d4d]/20">
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                <path
                  d="M7 8L16 16L25 8M16 16V25"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-extrabold text-white text-2xl tracking-tight">Yemini</span>
          </span>
        )}
      </span>

      {/* Subtitle centered properly directly under the logo without any unrequested icon */}
      {showSubtitle && (
        <span className={`${subtitleSizes[size]} text-zinc-400 font-medium tracking-wide -mt-0.5 inline-flex items-center justify-center gap-1`}>
          <span className="text-zinc-500 font-normal">by</span>
          <span className="text-zinc-300 font-semibold group-hover:text-white transition-colors">STF Ecosystem</span>
        </span>
      )}
    </span>
  );
};
