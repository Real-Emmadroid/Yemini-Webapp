import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ThemeWaveOverlay, WaveAnimationData } from '../components/ThemeWaveOverlay';

export type ThemeMode = 'dark' | 'light';

export type ToggleThemeEvent =
  | React.MouseEvent
  | { clientX?: number; clientY?: number; currentTarget?: EventTarget & HTMLElement }
  | undefined;

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: (event?: ToggleThemeEvent) => void;
  waveAnimation: WaveAnimationData | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('yemini_theme_mode') as ThemeMode | null;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    // Default to clean light mode matching the Yemini showcase design
    return 'light';
  });

  const [waveAnimation, setWaveAnimation] = useState<WaveAnimationData | null>(null);

  // Instant DOM synchronization without delay
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1d1d1f';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#fadcd9';
    }
    localStorage.setItem('yemini_theme_mode', theme);
    localStorage.setItem('yemini_theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  /**
   * Instant toggle with a high-fidelity bubble pulse wave
   * originating from the switch button and expanding across the entire webapp.
   */
  const toggleTheme = useCallback((event?: ToggleThemeEvent) => {
    setThemeState((prevTheme) => {
      const nextTheme: ThemeMode = prevTheme === 'dark' ? 'light' : 'dark';

      // 1. Instantaneous DOM application
      const root = document.documentElement;
      if (nextTheme === 'light') {
        root.classList.remove('dark');
        root.classList.add('light');
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#1d1d1f';
      } else {
        root.classList.remove('light');
        root.classList.add('dark');
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#fadcd9';
      }

      // 2. Calculate origin coordinates (x, y) from the switch button
      let x = typeof window !== 'undefined' ? window.innerWidth - 60 : 100;
      let y = 30;

      if (event) {
        if ('currentTarget' in event && event.currentTarget instanceof HTMLElement) {
          const rect = event.currentTarget.getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top + rect.height / 2;
        } else if ('clientX' in event && typeof event.clientX === 'number') {
          x = event.clientX;
          y = typeof event.clientY === 'number' ? event.clientY : 30;
        }
      }

      // 3. Compute maximum radius needed to cover the entire page down to the footer
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
      const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 900;

      const d1 = Math.hypot(x, y);
      const d2 = Math.hypot(windowWidth - x, y);
      const d3 = Math.hypot(x, windowHeight - y);
      const d4 = Math.hypot(windowWidth - x, windowHeight - y);
      const maxRadius = Math.max(d1, d2, d3, d4) + 300;

      // 4. Trigger the bubble pulse wave
      setWaveAnimation({
        id: Date.now(),
        x,
        y,
        toTheme: nextTheme,
        maxRadius,
      });

      return nextTheme;
    });
  }, []);

  const handleWaveComplete = useCallback(() => {
    setWaveAnimation(null);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, waveAnimation }}>
      {children}
      {/* Global bubble pulse wave overlay */}
      <ThemeWaveOverlay wave={waveAnimation} onComplete={handleWaveComplete} />
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
