import React, { useState } from 'react';

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
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
    '2xl': 'w-20 h-20',
    custom: ''
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      {!hasError ? (
        <img
          src="/yeminilogo.png"
          alt="Yemini Symbol"
          className={`w-full h-full object-contain ${
            glow ? 'filter drop-shadow-[0_0_12px_rgba(255,103,103,0.45)]' : ''
          }`}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full rounded-lg bg-[#0e0e13] border border-zinc-800 flex items-center justify-center p-1">
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M7 8L16 16L25 8M16 16V25"
              stroke="#ff4d4d"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
