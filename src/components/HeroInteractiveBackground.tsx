import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  magneticPull: number;
}

interface GridNode {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  row: number;
  col: number;
  active: boolean;
  hasRight: boolean;
  hasBottom: boolean;
  isFloatingDot: boolean;
  glow: number;
}

export const HeroInteractiveBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Mouse tracking & idle state
    const mouse = {
      x: -1000,
      y: -1000,
      lastX: -1000,
      lastY: -1000,
      isMoving: false,
      speed: 0
    };

    let idleTimer: NodeJS.Timeout | null = null;
    const particles: Particle[] = [];

    // Scanline state
    let scanlineY = -50;
    const scanlineSpeed = 0.95;

    // Dark wine & ruby palette
    const darkWinePalette = [
      'rgba(255, 103, 103,',  // Bright ruby
      'rgba(255, 77, 77,',    // Crimson
      'rgba(170, 17, 17,',    // Deep wine
      'rgba(255, 160, 160,',  // Rose glow
      'rgba(91, 0, 0,'        // Obsidian wine
    ];

    // Light mode palette: refined graphite, sapphire, slate, light ruby
    const lightPalette = [
      'rgba(0, 102, 204,',    // Apple blue
      'rgba(134, 134, 139,',  // Slate gray
      'rgba(186, 23, 36,',    // Ruby accent
      'rgba(66, 66, 69,',     // Charcoal
      'rgba(0, 68, 136,'      // Deep sapphire
    ];

    // Build the curved perspective node lattice
    let gridNodes: GridNode[][] = [];
    const buildGrid = () => {
      gridNodes = [];
      const cols = Math.ceil(width / 38) + 4;
      const rows = Math.ceil(height / 38) + 4;

      const isCellActive = (r: number, c: number) => {
        const val = Math.sin(r * 0.45 + c * 0.3) * Math.cos(r * 0.25 - c * 0.5);
        const centerDist = Math.hypot((c - cols / 2) / cols, (r - rows / 2) / rows);
        return val > -0.28 || centerDist < 0.45;
      };

      for (let r = 0; r <= rows; r++) {
        const rowNodes: GridNode[] = [];
        for (let c = 0; c <= cols; c++) {
          const normX = (c - cols / 2) / (cols / 2);
          const normY = r / rows;

          const curveOffset = Math.pow(normX, 2) * -38 * (1 - normY * 0.3);
          const rawX = c * 38 - 50;
          const rawY = r * 38 - 30 + curveOffset;

          const active = isCellActive(r, c);
          const isFloatingDot = !active && Math.sin(r * 7 + c * 13) > 0.65;

          rowNodes.push({
            baseX: rawX,
            baseY: rawY,
            x: rawX,
            y: rawY,
            row: r,
            col: c,
            active,
            hasRight: active && isCellActive(r, c + 1) && Math.sin(r * 3 + c * 5) > -0.7,
            hasBottom: active && isCellActive(r + 1, c) && Math.cos(r * 4 + c * 2) > -0.7,
            isFloatingDot,
            glow: 0
          });
        }
        gridNodes.push(rowNodes);
      }
    };

    const resize = () => {
      if (!container || !canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      buildGrid();
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      const dist = Math.hypot(newX - mouse.x, newY - mouse.y);
      mouse.speed = dist;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = newX;
      mouse.y = newY;
      mouse.isMoving = true;

      const currentPalette = themeRef.current === 'light' ? lightPalette : darkWinePalette;

      if (dist > 1.2 && particles.length < 80) {
        const count = Math.min(Math.floor(dist / 4) + 1, 3);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spread = Math.random() * 18 + 4;
          const colorBase = currentPalette[Math.floor(Math.random() * currentPalette.length)];
          const maxLife = Math.random() * 45 + 35;

          particles.push({
            x: mouse.x + Math.cos(angle) * spread,
            y: mouse.y + Math.sin(angle) * spread,
            vx: (Math.random() - 0.5) * 2.5 + (mouse.x - mouse.lastX) * 0.12,
            vy: (Math.random() - 0.5) * 2.5 + (mouse.y - mouse.lastY) * 0.12,
            radius: Math.random() * 2.2 + 1.2,
            color: colorBase,
            alpha: Math.random() * 0.7 + 0.3,
            life: 0,
            maxLife,
            magneticPull: Math.random() * 0.08 + 0.04
          });
        }
      }

      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.isMoving = false;
        mouse.speed = 0;
      }, 90);
    };

    const handlePointerLeave = () => {
      mouse.isMoving = false;
      mouse.x = -1000;
      mouse.y = -1000;
      if (idleTimer) clearTimeout(idleTimer);
    };

    window.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = themeRef.current === 'light';

      // 1. Advance scanline
      scanlineY += scanlineSpeed;
      if (scanlineY > height + 100) {
        scanlineY = -80;
      }

      // Draw subtle ambient scanline glow band
      if (scanlineY >= -50 && scanlineY <= height + 50) {
        const beamGrad = ctx.createLinearGradient(0, scanlineY - 60, 0, scanlineY + 60);
        if (isLight) {
          beamGrad.addColorStop(0, 'rgba(0, 102, 204, 0)');
          beamGrad.addColorStop(0.5, 'rgba(0, 102, 204, 0.04)');
          beamGrad.addColorStop(1, 'rgba(0, 102, 204, 0)');
        } else {
          beamGrad.addColorStop(0, 'rgba(91, 0, 0, 0)');
          beamGrad.addColorStop(0.5, 'rgba(255, 77, 77, 0.07)');
          beamGrad.addColorStop(1, 'rgba(91, 0, 0, 0)');
        }
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, scanlineY - 60, width, 120);

        // Core laser sweep line
        const laser = ctx.createLinearGradient(0, scanlineY, width, scanlineY);
        if (isLight) {
          laser.addColorStop(0, 'rgba(0, 102, 204, 0)');
          laser.addColorStop(0.2, 'rgba(0, 102, 204, 0.15)');
          laser.addColorStop(0.5, 'rgba(0, 102, 204, 0.4)');
          laser.addColorStop(0.8, 'rgba(0, 102, 204, 0.15)');
          laser.addColorStop(1, 'rgba(0, 102, 204, 0)');
        } else {
          laser.addColorStop(0, 'rgba(91, 0, 0, 0)');
          laser.addColorStop(0.2, 'rgba(170, 17, 17, 0.35)');
          laser.addColorStop(0.5, 'rgba(255, 103, 103, 0.8)');
          laser.addColorStop(0.8, 'rgba(170, 17, 17, 0.35)');
          laser.addColorStop(1, 'rgba(91, 0, 0, 0)');
        }
        ctx.strokeStyle = laser;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, scanlineY);
        ctx.lineTo(width, scanlineY);
        ctx.stroke();
      }

      // 2. Render Curved Lattice Grid Lines & Intersection Nodes
      for (let r = 0; r < gridNodes.length; r++) {
        for (let c = 0; c < gridNodes[r].length; c++) {
          const node = gridNodes[r][c];

          if (mouse.isMoving && mouse.x > 0) {
            const dx = mouse.x - node.baseX;
            const dy = mouse.y - node.baseY;
            const dist = Math.hypot(dx, dy);
            if (dist < 140) {
              const pull = (1 - dist / 140) * 8;
              node.x = node.baseX + (dx / dist) * pull;
              node.y = node.baseY + (dy / dist) * pull;
              node.glow = Math.max(node.glow, (1 - dist / 140) * 0.9);
            } else {
              node.x += (node.baseX - node.x) * 0.1;
              node.y += (node.baseY - node.y) * 0.1;
              node.glow *= 0.94;
            }
          } else {
            node.x += (node.baseX - node.x) * 0.1;
            node.y += (node.baseY - node.y) * 0.1;
            node.glow *= 0.94;
          }

          const distToScanline = Math.abs(node.y - scanlineY);
          if (distToScanline < 35) {
            node.glow = Math.max(node.glow, (1 - distToScanline / 35) * 0.85);
          }

          // Draw Grid Lines
          if (node.active) {
            // Horizontal connection
            if (node.hasRight && c + 1 < gridNodes[r].length) {
              const rightNode = gridNodes[r][c + 1];
              const lineGlow = Math.max(node.glow, rightNode.glow);
              if (isLight) {
                ctx.strokeStyle = lineGlow > 0.1
                  ? `rgba(0, 102, 204, ${0.15 + lineGlow * 0.4})`
                  : 'rgba(0, 0, 0, 0.06)';
              } else {
                ctx.strokeStyle = lineGlow > 0.1
                  ? `rgba(255, 103, 103, ${0.15 + lineGlow * 0.45})`
                  : 'rgba(255, 255, 255, 0.11)';
              }
              ctx.lineWidth = lineGlow > 0.3 ? 1.4 : 0.9;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(rightNode.x, rightNode.y);
              ctx.stroke();
            }

            // Vertical connection
            if (node.hasBottom && r + 1 < gridNodes.length) {
              const bottomNode = gridNodes[r + 1][c];
              const lineGlow = Math.max(node.glow, bottomNode.glow);
              if (isLight) {
                ctx.strokeStyle = lineGlow > 0.1
                  ? `rgba(0, 102, 204, ${0.15 + lineGlow * 0.4})`
                  : 'rgba(0, 0, 0, 0.06)';
              } else {
                ctx.strokeStyle = lineGlow > 0.1
                  ? `rgba(255, 103, 103, ${0.15 + lineGlow * 0.45})`
                  : 'rgba(255, 255, 255, 0.11)';
              }
              ctx.lineWidth = lineGlow > 0.3 ? 1.4 : 0.9;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(bottomNode.x, bottomNode.y);
              ctx.stroke();
            }

            // Draw Node Intersection Dot
            ctx.save();
            if (node.glow > 0.15) {
              if (isLight) {
                ctx.fillStyle = `rgba(0, 102, 204, ${0.7 + node.glow * 0.3})`;
                ctx.shadowColor = 'rgba(0, 102, 204, 0.6)';
              } else {
                ctx.fillStyle = `rgba(255, 200, 200, ${0.7 + node.glow * 0.3})`;
                ctx.shadowColor = 'rgba(255, 103, 103, 0.9)';
              }
              ctx.shadowBlur = 6;
              ctx.beginPath();
              ctx.arc(node.x, node.y, 2.2 + node.glow * 0.8, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.15)' : 'rgba(220, 220, 230, 0.65)';
              ctx.beginPath();
              ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.restore();
          } else if (node.isFloatingDot) {
            ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(200, 200, 215, 0.4)';
            ctx.beginPath();
            ctx.arc(node.x, node.y, 1.3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 3. Render Magnetic Cursor Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (mouse.isMoving && mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist > 3) {
            const force = (p.magneticPull * 110) / (dist + 20);
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          p.vx *= 0.91;
          p.vy *= 0.91;
        } else {
          p.vx *= 0.82;
          p.vy *= 0.82;
          p.alpha *= 0.86;
        }

        p.x += p.vx;
        p.y += p.vy;

        const lifeRatio = p.life / p.maxLife;
        const currentAlpha = p.alpha * Math.max(0, 1 - lifeRatio);

        if (p.life >= p.maxLife || currentAlpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle dot with glow
        ctx.save();
        ctx.fillStyle = `${p.color} ${currentAlpha})`;
        ctx.shadowColor = isLight ? 'rgba(0, 102, 204, 0.6)' : 'rgba(255, 103, 103, 0.8)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Magnetic connecting filaments
        if (mouse.isMoving) {
          for (let j = i - 1; j >= 0; j--) {
            const p2 = particles[j];
            const linkDist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (linkDist < 40) {
              const linkAlpha = (1 - linkDist / 40) * currentAlpha * 0.3;
              ctx.strokeStyle = isLight 
                ? `rgba(0, 102, 204, ${linkAlpha})`
                : `rgba(255, 103, 103, ${linkAlpha})`;
              ctx.lineWidth = 0.7;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      resizeObserver.disconnect();
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  const isLight = theme === 'light';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 transition-opacity duration-300"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Vignette gradients for edge blending */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
        isLight 
          ? 'bg-gradient-to-b from-[#f5f5f7]/80 via-transparent to-[#f5f5f7]/90' 
          : 'bg-gradient-to-b from-[#070709] via-transparent to-[#070709] opacity-85'
      }`} />
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
        isLight 
          ? 'bg-radial-at-c from-transparent via-[#f5f5f7]/20 to-[#f5f5f7]' 
          : 'bg-radial-at-c from-transparent via-[#070709]/30 to-[#070709]'
      }`} />
    </div>
  );
};
