import React, { useState } from 'react';
import yeminiSymbolAsset from '../assets/yeminilogo.png';

interface YeminiSymbolProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  className?: string;
  glow?: boolean;
}

export const YeminiSymbol: React.FC<YeminiSymbolProps> = ({
  size = 'md',
  className = '',
  glow = false
}) => {
  const [loadStage, setLoadStage] = useState<number>(0);

  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
    '2xl': 'w-20 h-20',
    custom: ''
  };

  const handleImgError = () => {
    if (loadStage === 0) {
      setLoadStage(1);
    } else {
      setLoadStage(2);
    }
  };

  return (
    <span className={`relative inline-flex items-center justify-center shrink-0 align-middle ${sizeClasses[size]} ${className}`}>
      {loadStage <= 1 ? (
        <img
          src={loadStage === 0 ? yeminiSymbolAsset : '/yeminilogo.png'}
          alt="Yemini Symbol"
          className={`w-full h-full object-contain ${
            glow ? 'filter drop-shadow-[0_0_12px_rgba(255,103,103,0.45)]' : ''
          }`}
          referrerPolicy="no-referrer"
          onError={handleImgError}
        />
      ) : (
        <span className="w-full h-full rounded-lg bg-gradient-to-br from-[#5b0000] to-[#ff4d4d] inline-flex items-center justify-center p-1 shadow-sm">
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M7 8L16 16L25 8M16 16V25"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </span>
  );
};
