import styles from "./hero-motion-graphic.module.css";

export function HeroMotionGraphic() {
  return (
    <div
      role="img"
      aria-label="Animated developer and multimedia motion graphic"
      className={`${styles.motionGraphic} motion-card mt-6`}
    >
      <span className="sr-only">Code node</span>
      <span className="sr-only">Media node</span>
      <span className="sr-only">Play node</span>
      <svg
        aria-hidden="true"
        className={styles.connectors}
        viewBox="0 0 420 210"
        preserveAspectRatio="none"
      >
        <path
          d="M76 58 C142 20 212 45 260 70 S350 118 336 154"
          fill="none"
          stroke="currentColor"
          strokeDasharray="10 14"
          strokeLinecap="round"
        />
        <path
          d="M112 158 C164 132 208 156 248 122 S300 68 356 52"
          fill="none"
          stroke="currentColor"
          strokeDasharray="6 16"
          strokeLinecap="round"
        />
      </svg>
      <div className={`${styles.node} ${styles.codeNode}`} aria-hidden="true">
        <span className="font-mono text-lg font-bold">&lt;/&gt;</span>
      </div>
      <div className={`${styles.node} ${styles.mediaNode}`} aria-hidden="true">
        <span className={styles.mediaGrid}>
          <span />
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className={`${styles.node} ${styles.playNode}`} aria-hidden="true">
        <span className={styles.playShape} />
      </div>
      <div
        className={`${styles.node} ${styles.interfaceNode}`}
        aria-hidden="true"
      >
        <span className={styles.interfaceShape} />
      </div>
    </div>
  );
}
