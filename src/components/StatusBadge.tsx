import React from 'react';
import { useTheme } from '../context/ThemeContext';

export interface StatusBadgeProps {
  status: 'available' | 'in-development' | 'coming-soon' | 'live';
  size?: 'sm' | 'md';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  className = ''
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const isAvailable = status === 'available' || status === 'live';

  const dotColor = isAvailable 
    ? 'bg-emerald-500 shadow-emerald-500/50' 
    : isLight 
      ? 'bg-amber-500 shadow-amber-500/40' 
      : 'bg-[#ff9988] shadow-[#ff9988]/40';

  const containerStyle = isAvailable
    ? isLight
      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
      : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60'
    : isLight
      ? 'bg-amber-50/80 text-amber-900 border-amber-200'
      : 'bg-[#271716] text-[#ffb3ae] border-[#5b403e]';

  const sizeClasses = size === 'sm' 
    ? 'px-2 py-0.5 text-[10px]' 
    : 'px-2.5 py-1 text-xs';

  const label = isAvailable ? 'Available now' : 'In development';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium border font-mono tracking-tight select-none shadow-xs ${sizeClasses} ${containerStyle} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 shadow-xs ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
};
