"use client";

import { useState } from "react";

import styles from "../app/home.module.css";

export function FlippableHeroMedia() {
  const [turns, setTurns] = useState(0);

  return (
    <div
      className={`${styles.heroImageWrap} ${styles.motionStage} relative mx-auto max-w-md rounded-lg lg:max-w-xl`}
    >
      <button
        aria-label="Flip hero motion graphic"
        className={styles.heroFlipButton}
        onClick={() => setTurns((currentTurns) => currentTurns + 1)}
        style={{ transform: `rotateY(${turns * 360}deg)` }}
        title="Click to flip"
        type="button"
      >
        <video
          aria-hidden="true"
          autoPlay
          className={styles.heroImage}
          loop
          muted
          playsInline
          poster="/images/971.jpg"
          preload="metadata"
        >
          <source src="/images/new.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </button>
    </div>
  );
}
