"use client";

import { useSyncExternalStore } from "react";

import styles from "./site-motion-background.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

export function SiteMotionBackground() {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  const isPlaying = !reducedMotion;

  return (
    <>
      <div
        className={styles.background}
        data-playing={isPlaying}
        aria-hidden="true"
        id="site-motion-background"
      >
        <div className={styles.grid} />
        <svg className={styles.scene} viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="motion-spectrum" x1="100" y1="100" x2="1400" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
            <pattern id="timeline-ticks" width="24" height="16" patternUnits="userSpaceOnUse">
              <path d="M0 0V8" stroke="currentColor" />
            </pattern>
          </defs>

          <g stroke="url(#motion-spectrum)" strokeWidth="1.5">
            <path className={styles.signal} d="M-80 490H190Q240 490 240 540V710Q240 760 290 760H650" />
            <path className={styles.signalReverse} d="M1030 200H1320Q1370 200 1370 250V570Q1370 620 1420 620H1700" />
            <circle className={styles.orbit} cx="810" cy="480" r="360" strokeDasharray="3 28" />
            <ellipse cx="810" cy="480" rx="610" ry="310" opacity="0.3" transform="rotate(-22 810 480)" />
          </g>

          <g transform="translate(-30 130) rotate(-9 180 130)">
            <g className={styles.floatCode}>
              <rect width="370" height="264" rx="18" className={styles.panel} />
              <path d="M0 42H370" className={styles.outline} />
              <g fill="currentColor" opacity="0.6">
                <circle cx="22" cy="22" r="4" /><circle cx="38" cy="22" r="4" /><circle cx="54" cy="22" r="4" />
              </g>
              <text x="245" y="27" className={styles.caption}>index.tsx</text>
              <g strokeLinecap="round" strokeWidth="7" className={styles.codeLines}>
                <path d="M28 75H69M86 75H154" stroke="#8b5cf6" />
                <path d="M48 104H115M132 104H228M246 104H290" stroke="#2563eb" />
                <path d="M68 133H145M162 133H262" stroke="#06b6d4" />
                <path d="M68 162H109M126 162H210" stroke="#8b5cf6" />
                <path d="M48 191H130M147 191H285" stroke="#2563eb" />
                <path d="M28 220H81" stroke="#06b6d4" />
              </g>
              <path className={styles.cursor} d="M96 209V231" stroke="currentColor" strokeWidth="3" />
            </g>
          </g>

          <g transform="translate(1250 95) rotate(10 170 140)">
            <g className={styles.floatBrowser}>
              <rect width="390" height="290" rx="18" className={styles.panel} />
              <path d="M0 40H390" className={styles.outline} />
              <rect x="75" y="14" width="240" height="12" rx="6" className={styles.softFill} />
              <rect x="24" y="64" width="342" height="22" rx="5" className={styles.softFill} />
              <rect x="24" y="105" width="155" height="103" rx="8" className={styles.softFill} />
              <path d="M199 120H330M199 140H306M199 160H340" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
              <rect x="199" y="181" width="90" height="27" rx="7" fill="#8b5cf6" opacity="0.45" />
              <g className={styles.layoutBlocks}>
                <rect x="24" y="226" width="101" height="40" rx="6" className={styles.softFill} />
                <rect x="144" y="226" width="101" height="40" rx="6" className={styles.softFill} />
                <rect x="264" y="226" width="101" height="40" rx="6" className={styles.softFill} />
              </g>
            </g>
          </g>

          <g transform="translate(70 665) rotate(7 160 120)">
            <g className={styles.floatBrowser}>
              <path d="M0 200L270 0M0 0L270 200" stroke="currentColor" strokeDasharray="5 9" opacity="0.35" />
              <path className={styles.bezier} d="M0 200C0 0 270 200 270 0" stroke="url(#motion-spectrum)" strokeWidth="5" />
              <g className={styles.outline}>
                <path d="M0 200V0M270 0V200" />
                <circle cx="0" cy="0" r="7" /><circle cx="270" cy="200" r="7" />
                <rect x="-7" y="193" width="14" height="14" className={styles.panel} />
                <rect x="263" y="-7" width="14" height="14" className={styles.panel} />
              </g>
              <text x="42" y="240" className={styles.caption}>CREATE · DESIGN · DEVELOP</text>
            </g>
          </g>

          <g transform="translate(1160 680) rotate(-8 210 110)">
            <g className={styles.floatCode}>
              <rect width="480" height="216" rx="18" className={styles.panel} />
              <text x="24" y="30" className={styles.caption}>MOTION / SEQUENCE 01</text>
              <rect x="24" y="46" width="432" height="16" fill="url(#timeline-ticks)" />
              <g opacity="0.65">
                <rect x="24" y="76" width="144" height="29" rx="5" fill="#8b5cf6" />
                <rect x="176" y="76" width="170" height="29" rx="5" fill="#2563eb" />
                <rect x="86" y="116" width="190" height="29" rx="5" fill="#06b6d4" />
                <rect x="284" y="116" width="146" height="29" rx="5" fill="#8b5cf6" />
                <rect x="24" y="156" width="406" height="29" rx="5" fill="#2563eb" opacity="0.35" />
              </g>
              <path d="M36 170l6-5 6 10 6-10 6 5h30l6-8 6 16 6-12 6 4h50l6-6 6 12 6-6h35l6-9 6 18 6-9h44l6-7 6 14 6-7h76" stroke="currentColor" strokeWidth="2" />
              <g className={styles.playhead}>
                <path d="M32 55V196" stroke="#8b5cf6" strokeWidth="2" />
                <path d="M25 49H39L32 59Z" fill="#8b5cf6" />
              </g>
            </g>
          </g>

          <g className={styles.floatSymbol} stroke="url(#motion-spectrum)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M660 110l-25 22 25 22M718 110l25 22-25 22M698 99l-18 66" />
            <path d="M740 870l28-28 28 28-28 28Z" />
            <circle cx="1030" cy="440" r="28" />
            <path d="M1023 426l20 14-20 14Z" />
          </g>
        </svg>
        <div className={styles.veil} />
      </div>
    </>
  );
}
