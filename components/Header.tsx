'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.header}>
      {/* Hamburger button — visible only on mobile via CSS */}
      <button
        className={styles['menu-button']}
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Open menu' : 'Close menu'}
      >
        {collapsed ? (
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <rect y="3" width="25" height="4" fill="white" />
            <rect y="11" width="25" height="4" fill="white" />
            <rect y="19" width="25" height="4" fill="white" />
          </svg>
        ) : (
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <line x1="2" y1="2" x2="23" y2="23" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="23" y1="2" x2="2" y2="23" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Mobile nav overlay */}
      <div
        className={`${styles.nav} ${styles['mobile-nav']} ${collapsed ? styles.none : ''}`}
      >
        <a
          href="https://www.instagram.com/artbysubhanjali/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/logos/instagram.png"
            alt="Instagram"
            className={styles.link}
            width={90}
            height={90}
          />
        </a>
        <a href="mailto:subha.velaga@gmail.com">
          <Image
            src="/logos/gmail.png"
            alt="Email"
            className={styles.link}
            width={90}
            height={90}
          />
        </a>
      </div>

      <div className={styles['title-div']}>
        <div className={styles.title}>Subhanjali</div>
        <div className={styles.description}>artist in oil and acrylic mediums</div>
      </div>

      {/* Desktop nav */}
      <div className={`${styles.nav} ${styles['desktop-nav']}`}>
        <a
          href="https://www.instagram.com/artbysubhanjali/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/logos/instagram.png"
            alt="Instagram"
            className={styles.link}
            width={30}
            height={30}
          />
        </a>
        <a href="mailto:subha.velaga@gmail.com">
          <Image
            src="/logos/gmail.png"
            alt="Email"
            className={styles.link}
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
