import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../context/ThemeContext';

export interface WaveAnimationData {
  id: number;
  x: number;
  y: number;
  toTheme: ThemeMode;
  maxRadius: number;
}

interface ThemeWaveOverlayProps {
  wave: WaveAnimationData | null;
  onComplete: () => void;
}

/**
 * Natural physical carpet-fold ripple easing curve.
 * Steady, majestic rolling propagation across the entire page.
 */
function easeCarpetFold(t: number): number {
  if (t < 0.12) {
    return 1.8 * t * t;
  }
  return 1 - Math.pow(1 - t, 1.85);
}

/**
 * Calculates organic, non-circular roughness variation around the circumference.
 * Combines multiple prime harmonics (3, 5, 8, 12, 17) to produce authentic
 * physical wrinkles, creases, and undulating ripples instead of a smooth circle.
 */
function getRoughnessDelta(theta: number, r: number): number {
  const phase = r * 0.0012;
  return (
    0.11 * Math.sin(3 * theta + 0.85) +
    0.075 * Math.cos(5 * theta + 2.1 + phase) +
    0.05 * Math.sin(8 * theta + 4.3) +
    0.032 * Math.cos(12 * theta + 1.2 + phase * 1.5) +
    0.02 * Math.sin(17 * theta + 3.7)
  );
}

/**
 * Single Colorless, Invisible Wave — The Webapp Body Itself Makes the Wave
 *
 * - 100% Colorless & Invisible Medium: ZERO overlay colors, ZERO tints, ZERO gray bands,
 *   ZERO backdrop-filter brightness or contrast modifications.
 * - The wave is made exclusively by the physical 3D undulation of the webapp's own body:
 *   Cards, preview windows, navbar, buttons, headings, and sections physically lift off the
 *   page surface in 3D, tilt forward and backward along the wave propagation front, and settle
 *   smoothly back into resting position.
 * - Organic Rough Curve: Follows an undulating, non-circular rough fold path.
 * - Slower, gradual pace (~2.4 seconds) rolling steadily across the webapp down to the footer.
 */
export const ThemeWaveOverlay: React.FC<ThemeWaveOverlayProps> = ({ wave, onComplete }) => {
  const [activeWave, setActiveWave] = useState<WaveAnimationData | null>(null);

  useEffect(() => {
    if (!wave) return;

    setActiveWave(wave);

    const DURATION = 2400; // 2.4s: majestic, deliberate, physical carpet fold propagation
    const effectiveMaxRadius = wave.maxRadius * 1.24; // Ensure rough peaks clear edges
    const startTime = performance.now();
    let animationFrameId: number;

    // Select the prominent visual blocks across the webapp
    const selector = 'nav, footer, .glass-card, .mac-window, h1, h2, h3, button, a.inline-flex, section > div, .relative.z-10';
    const rawElements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    // Keep top-level visual items so nested children don't double-transform
    const bodyElements = rawElements.filter((el, idx) => {
      return !rawElements.some((other, otherIdx) => otherIdx !== idx && other.contains(el));
    });

    // Cache of actively transformed elements to cleanly restore
    const transformedElements = new Set<HTMLElement>();

    const cleanupBodyTransforms = () => {
      transformedElements.forEach((el) => {
        el.style.transform = '';
        el.style.willChange = '';
      });
      transformedElements.clear();
    };

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / DURATION, 1);

      // Radial progression of the rough carpet fold
      const progress = easeCarpetFold(t);
      const currentRadius = effectiveMaxRadius * progress;

      // Smooth opacity/intensity envelope over the animation duration
      let intensity = 1;
      if (t < 0.08) {
        intensity = t / 0.08;
      } else if (t > 0.82) {
        intensity = Math.max(0, 1 - (t - 0.82) / 0.18);
      }

      const { x, y } = wave;
      const foldSpan = 160; // Physical width of the carpet fold influence zone (px)

      // PHYSICAL BODY WAVE: The webapp body elements physically lift, tilt, and ripple in 3D
      bodyElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Skip elements completely outside viewport
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) {
          if (transformedElements.has(el)) {
            el.style.transform = '';
            el.style.willChange = '';
            transformedElements.delete(el);
          }
          return;
        }

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const d = Math.hypot(cx - x, cy - y);
        const theta = Math.atan2(cy - y, cx - x);

        // Account for the organic non-circular roughness at this specific angle
        const delta = getRoughnessDelta(theta, currentRadius);
        const roughFoldRadius = currentRadius * (1 + delta);

        const diff = roughFoldRadius - d;

        if (Math.abs(diff) < foldSpan) {
          // Element is riding the carpet fold!
          const u = diff / foldSpan; // -1 (leading edge) -> 0 (crest) -> 1 (trailing edge)
          
          // Bell-shaped elevation curve
          const h = Math.pow(Math.cos(u * Math.PI * 0.5), 2) * intensity;

          // 1. Physical 3D lift: rises up and toward the viewer
          const liftY = -22 * h;
          const liftZ = 38 * h;

          // 2. Physical 3D tilt: rotates around the axis perpendicular to wave propagation
          const tiltAngle = -Math.sin(u * Math.PI) * 7.5 * intensity;
          const rotX = -Math.sin(theta);
          const rotY = Math.cos(theta);

          // 3. Subtle physical expansion at the crest
          const scale = 1 + 0.032 * h;

          el.style.transform = `perspective(1000px) translate3d(0, ${liftY.toFixed(1)}px, ${liftZ.toFixed(1)}px) rotate3d(${rotX.toFixed(3)}, ${rotY.toFixed(3)}, 0, ${tiltAngle.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          el.style.willChange = 'transform';
          transformedElements.add(el);
        } else if (transformedElements.has(el)) {
          // Wave has passed: restore cleanly to flat rest position
          el.style.transform = '';
          el.style.willChange = '';
          transformedElements.delete(el);
        }
      });

      if (t < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        cleanupBodyTransforms();
        setActiveWave(null);
        onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      cleanupBodyTransforms();
    };
  }, [wave, onComplete]);

  if (!activeWave) return null;

  // 100% Colorless & Invisible Overlay — no paint, no fills, no color modification
  return null;
};

export default ThemeWaveOverlay;
