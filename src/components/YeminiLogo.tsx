import React, { useState } from 'react';

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
  imageSrc = '/yemini.png'
}) => {
  const [imageError, setImageError] = useState(false);

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

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none group text-center ${className}`}>
      {/* Horizontal Logotype Image (yemini.png) */}
      <div className="flex items-center justify-center">
        {!imageError ? (
          <img
            src={imageSrc}
            alt="Yemini"
            className={`${logoHeights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_14px_rgba(255,103,103,0.2)]`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center gap-2.5">
            <img
              src="/yeminilogo.png"
              alt="Yemini Symbol"
              className="w-9 h-9 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-extrabold text-white text-2xl tracking-tight">Yemini</span>
          </div>
        )}
      </div>

      {/* Subtitle centered properly directly under the logo, refined and smaller */}
      {showSubtitle && (
        <div className={`${subtitleSizes[size]} text-zinc-400 font-medium tracking-wide -mt-0.5 flex items-center justify-center gap-1`}>
          <span className="text-zinc-500 font-normal">by</span>
          <span className="text-zinc-300 font-semibold group-hover:text-white transition-colors">STF Ecosystem</span>
        </div>
      )}
    </div>
  );
};
