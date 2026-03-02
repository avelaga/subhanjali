'use client';

import { useEffect } from 'react';

interface FadeInOnLoadProps {
  src: string;
  alt: string;
  cls?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function FadeInOnLoad({ src, alt, cls = '', style = {}, width, height, onClick }: FadeInOnLoadProps) {
  useEffect(() => {
    // Double rAF ensures the browser commits opacity:0 before adding 'loaded',
    // so the CSS transition plays even for cached images.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll('img.fade-media').forEach((img) => {
          const image = img as HTMLImageElement;
          if (image.complete && image.naturalWidth !== 0) {
            image.classList.add('loaded');
          }
        });
      });
    });
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded');
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${cls} fade-media`}
      onLoad={handleLoad}
      style={style}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
}
