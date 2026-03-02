'use client';

import { useState } from 'react';
import Image from 'next/image';
import HamburgerMenu from 'react-hamburger-menu';
import styles from './Header.module.css';

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.header}>
      {/* Hamburger button — visible only on mobile via CSS */}
      <div
        className={styles['menu-button']}
        onClick={() => setCollapsed(!collapsed)}
      >
        <HamburgerMenu
          isOpen={!collapsed}
          menuClicked={() => setCollapsed(!collapsed)}
          width={25}
          height={25}
          strokeWidth={4}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>

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
