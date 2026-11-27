'use client';

import { useEffect, useRef } from 'react';

/* Topographical contours: the site's computational background.

   The model, in one line:  height(x, y, t) = relief × terrain  +  disturbances

     terrain       3D Perlin noise (x, y, and time as the third axis). Moving slowly
                   along the time axis is what makes the land evolve.
     relief        a second, much broader noise that scales the terrain up or down.
                   Contour lines are dense where land is steep, so high relief gives
                   mountains (complexity) and low relief gives plains (negative space).
     disturbances  a soft bump under any hovered / focused link inside an element
                   marked data-contour-react. Raising the land there makes nearby
                   lines swell into rings; they settle back when the pointer leaves.

   Drawing: marching squares on a fine lattice turns the height field into contour
   lines. Levels are styled like a topographic map: two weights of ordinary line,
   a stronger index line every fifth level, and an occasional sage accent line.
   Lines under a disturbance are re-stroked in sage through a radial gradient.
   Elements marked data-contour-quiet get the lines faded out behind them (text first).

   Cost: 12 redraws a second at rest, 30 while something is responding, none when
   the tab is hidden. Phones get one still frame. Reduced motion: one still frame,
   and a hovered link only tints its lines (no movement). No dependencies, no assets.

   Tuning lives in the constants below. To swap backgrounds, see BACKGROUND in Backdrop.tsx. */

const CELL = 9; // px between samples. Small enough that the straight pieces read as curves
const SCALE = 600; // px size of the terrain's features
const RELIEF_SCALE = 1500; // px size of the mountain / plain regions
const STEP = 0.062; // elevation between neighbouring contour lines
const SPEED = 0.008; // noise-time per second: lower is slower
const FPS_REST = 12;
const FPS_ACTIVE = 30;
// link disturbance
const BUMP = 0.3; // how far the land rises under a link (in elevation units)
const BUMP_RADIUS = 130; // px
const EASE = 0.09; // per frame at 30fps: ~0.5s to rise, ~0.5s to settle
const GLOW = 0.42; // peak opacity of the sage re-stroke under a link
// quiet zone behind marked text
const QUIET = 0.78; // how much of the lines is removed at the centre of the zone

/* ---- Perlin noise (3D), fixed seed so the terrain is the same on every visit ---- */
const P = new Uint8Array(512);
(() => {
  const p = Array.from({ length: 256 }, (_, i) => i);
  let s = 1702;
  for (let i = 255; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) P[i] = p[i & 255];
})();
const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function grad(h: number, x: number, y: number, z: number) {
  const g = h & 15;
  const u = g < 8 ? x : y;
  const v = g < 4 ? y : g === 12 || g === 14 ? x : z;
  return ((g & 1) === 0 ? u : -u) + ((g & 2) === 0 ? v : -v);
}
function noise(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
  x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
  const u = fade(x), v = fade(y), w = fade(z);
  const A = P[X] + Y, AA = P[A] + Z, AB = P[A + 1] + Z, B = P[X + 1] + Y, BA = P[B] + Z, BB = P[B + 1] + Z;
  return lerp(
    lerp(lerp(grad(P[AA], x, y, z), grad(P[BA], x - 1, y, z), u), lerp(grad(P[AB], x, y - 1, z), grad(P[BB], x - 1, y - 1, z), u), v),
    lerp(lerp(grad(P[AA + 1], x, y, z - 1), grad(P[BA + 1], x - 1, y, z - 1), u), lerp(grad(P[AB + 1], x, y - 1, z - 1), grad(P[BB + 1], x - 1, y - 1, z - 1), u), v),
    w,
  );
}
/** How much relief the land has at (x, y): 0.22 on the plains … 1 in the mountains. */
function relief(x: number, y: number, t: number) {
  const v = noise(x / RELIEF_SCALE + 50, y / RELIEF_SCALE + 50, t * 0.5) * 0.9 + 0.5;
  const s = Math.min(1, Math.max(0, (v - 0.3) / 0.4));
  return 0.22 + 0.78 * s * s * (3 - 2 * s);
}
/** Undisturbed terrain at (x, y) px and time t: one broad layer plus a finer one at half strength. */
const terrain = (x: number, y: number, t: number) =>
  relief(x, y, t) * (noise(x / SCALE, y / SCALE, t) + 0.5 * noise(x / (SCALE / 2) + 31.4, y / (SCALE / 2) + 15.9, t * 1.3));

function hexToRgb(hex: string, fallback: string) {
  const m = hex.trim().match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  return m ? `${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}` : fallback;
}

type Bump = { el: Element; x: number; y: number; a: number; target: number };

export function Contours() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const animated = fine && !reduced;

    let w = 0, h = 0, cols = 0, rows = 0;
    let field = new Float32Array(0);
    let line = '237, 234, 226';
    let sage = '163, 201, 172';
    const bumps: Bump[] = [];

    const readColours = () => {
      const cs = getComputedStyle(document.documentElement);
      line = cs.getPropertyValue('--line-rgb').trim() || line;
      sage = hexToRgb(cs.getPropertyValue('--sage'), sage);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
      field = new Float32Array((cols + 1) * (rows + 1));
    };

    const draw = (t: number) => {
      // where each live disturbance sits right now (links can move when the page scrolls)
      for (const b of bumps) {
        const r = b.el.getBoundingClientRect();
        b.x = r.left + r.width / 2;
        b.y = r.top + r.height / 2;
      }
      const moving = animated ? bumps.filter((b) => b.a > 0.001) : []; // reduced motion: tint only, land stays put
      const k2 = 1 / (2 * (BUMP_RADIUS * 0.55) ** 2);

      // 1. sample the height field
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          const x = i * CELL, y = j * CELL;
          let v = terrain(x, y, t);
          for (const b of moving) {
            const d2 = (x - b.x) ** 2 + (y - b.y) ** 2;
            if (d2 < BUMP_RADIUS * BUMP_RADIUS * 4) v += b.a * BUMP * Math.exp(-d2 * k2);
          }
          field[j * (cols + 1) + i] = v;
        }
      }

      // 2. marching squares; each level goes into the path for its line style
      const thinA = new Path2D(), thinB = new Path2D(), index = new Path2D(), accent = new Path2D();
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const a = field[j * (cols + 1) + i], b = field[j * (cols + 1) + i + 1];
          const d = field[(j + 1) * (cols + 1) + i], c = field[(j + 1) * (cols + 1) + i + 1];
          const lo = Math.min(a, b, c, d), hi = Math.max(a, b, c, d);
          for (let k = Math.ceil(lo / STEP); k * STEP < hi; k++) {
            const L = k * STEP;
            const idx = (a > L ? 1 : 0) | (b > L ? 2 : 0) | (c > L ? 4 : 0) | (d > L ? 8 : 0);
            if (idx === 0 || idx === 15) continue;
            const x0 = i * CELL, y0 = j * CELL;
            // where level L crosses each edge of the cell
            const Tx = x0 + ((L - a) / (b - a)) * CELL;
            const Ry = y0 + ((L - b) / (c - b)) * CELL;
            const Bx = x0 + ((L - d) / (c - d)) * CELL;
            const Ly = y0 + ((L - a) / (d - a)) * CELL;
            const m = ((k % 9) + 9) % 9;
            const path = m === 4 ? accent : k % 5 === 0 ? index : k % 2 === 0 ? thinA : thinB;
            switch (idx) {
              case 1: case 14: path.moveTo(x0, Ly); path.lineTo(Tx, y0); break;
              case 2: case 13: path.moveTo(Tx, y0); path.lineTo(x0 + CELL, Ry); break;
              case 3: case 12: path.moveTo(x0, Ly); path.lineTo(x0 + CELL, Ry); break;
              case 4: case 11: path.moveTo(x0 + CELL, Ry); path.lineTo(Bx, y0 + CELL); break;
              case 6: case 9: path.moveTo(Tx, y0); path.lineTo(Bx, y0 + CELL); break;
              case 7: case 8: path.moveTo(x0, Ly); path.lineTo(Bx, y0 + CELL); break;
              case 5: path.moveTo(x0, Ly); path.lineTo(Tx, y0); path.moveTo(x0 + CELL, Ry); path.lineTo(Bx, y0 + CELL); break;
              case 10: path.moveTo(Tx, y0); path.lineTo(x0 + CELL, Ry); path.moveTo(x0, Ly); path.lineTo(Bx, y0 + CELL); break;
            }
          }
        }
      }

      // 3. stroke, lightest first
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';
      const stroke = (p: Path2D, style: string | CanvasGradient, width: number) => {
        ctx.strokeStyle = style;
        ctx.lineWidth = width;
        ctx.stroke(p);
      };
      stroke(thinA, `rgba(${line}, 0.055)`, 0.8);
      stroke(thinB, `rgba(${line}, 0.085)`, 1);
      stroke(index, `rgba(${line}, 0.16)`, 1.25);
      stroke(accent, `rgba(${sage}, 0.2)`, 1);

      // 4. lines under a responding link, re-stroked in sage, fading out with distance
      for (const b of bumps) {
        if (b.a <= 0.001) continue;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, BUMP_RADIUS * 1.5);
        g.addColorStop(0, `rgba(${sage}, ${(GLOW * b.a).toFixed(3)})`);
        g.addColorStop(0.55, `rgba(${sage}, ${(GLOW * 0.45 * b.a).toFixed(3)})`);
        g.addColorStop(1, `rgba(${sage}, 0)`);
        for (const p of [thinA, thinB, index, accent]) stroke(p, g, 1);
      }

      // 5. quiet zones: fade the lines out behind marked text
      const quiet = document.querySelectorAll('[data-contour-quiet]');
      if (quiet.length) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        quiet.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.bottom < 0 || r.top > h) return;
          const rx = r.width * 0.72, ry = r.height * 1.05;
          ctx.save();
          ctx.translate(r.left + r.width / 2, r.top + r.height / 2);
          ctx.scale(rx, ry);
          const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
          g.addColorStop(0, `rgba(0, 0, 0, ${QUIET})`);
          g.addColorStop(0.6, `rgba(0, 0, 0, ${QUIET * 0.75})`);
          g.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = g;
          ctx.fillRect(-1, -1, 2, 2);
          ctx.restore();
        });
        ctx.restore();
      }
    };

    let raf = 0;
    let last = 0;
    let t = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const active = bumps.length > 0;
      if (now - last < 1000 / (active ? FPS_ACTIVE : FPS_REST)) return;
      const dt = Math.min(now - last, 200);
      t += (dt / 1000) * SPEED;
      last = now;
      // ease every disturbance toward its target; drop the ones that have settled
      const ease = 1 - Math.pow(1 - EASE, dt / (1000 / 30));
      for (let i = bumps.length - 1; i >= 0; i--) {
        const b = bumps[i];
        b.a += (b.target - b.a) * ease;
        if (b.target === 0 && b.a < 0.004) bumps.splice(i, 1);
      }
      draw(t);
    };
    const start = () => {
      if (animated && !raf && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    /* ---- links that disturb the field: hover or keyboard focus inside [data-contour-react] ---- */
    const linkOf = (target: EventTarget | null) => {
      const el = target instanceof Element ? target.closest('a') : null;
      return el && el.closest('[data-contour-react]') ? el : null;
    };
    const setTarget = (el: Element, target: number) => {
      let b = bumps.find((x) => x.el === el);
      if (!b) {
        if (target === 0) return;
        b = { el, x: 0, y: 0, a: 0, target };
        bumps.push(b);
      }
      b.target = target;
      if (!animated) {
        // reduced motion: no easing and no movement, just the tint on / off
        b.a = target;
        if (target === 0) bumps.splice(bumps.indexOf(b), 1);
        draw(t);
      }
    };
    const onEnter = (e: Event) => {
      const el = linkOf(e.target);
      if (el) setTarget(el, 1);
    };
    const onLeave = (e: Event) => {
      const el = linkOf(e.target);
      if (el && !el.matches(':hover') && document.activeElement !== el) setTarget(el, 0);
      else if (el && e.type === 'pointerout' && document.activeElement !== el) setTarget(el, 0);
    };

    readColours();
    resize();
    draw(t);
    start();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        draw(t);
      }, 120);
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    // Theme toggle changes the line colours: pick them up and repaint.
    const themeWatch = new MutationObserver(() => {
      readColours();
      draw(t);
    });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    // Fonts and the Reveal fade settle after first paint; redraw once so quiet zones sit on the final layout.
    const settle = window.setTimeout(() => draw(t), 1200);
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    if (fine) {
      document.addEventListener('pointerover', onEnter);
      document.addEventListener('pointerout', onLeave);
      document.addEventListener('focusin', onEnter);
      document.addEventListener('focusout', onLeave);
    }
    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.clearTimeout(settle);
      themeWatch.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      document.removeEventListener('pointerover', onEnter);
      document.removeEventListener('pointerout', onLeave);
      document.removeEventListener('focusin', onEnter);
      document.removeEventListener('focusout', onLeave);
    };
  }, []);

  return <canvas ref={ref} className="backdrop-canvas" />;
}
