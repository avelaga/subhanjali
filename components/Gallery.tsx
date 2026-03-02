'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import FadeInOnLoad from './FadeInOnLoad';
import 'yet-another-react-lightbox/styles.css';
import { images, type Painting } from '../lib/images';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const slides = images.map((img) => ({ src: img.src, width: img.width, height: img.height }));

  return (
    <>
      <div className={styles.gallery}>
        {images.map((painting: Painting, index: number) => (
          <div className={styles['img-div']} key={index}>
            <FadeInOnLoad
              src={painting.src}
              alt={painting.title}
              cls={styles.img}
              width={painting.width}
              height={painting.height}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
            <div className={styles['img-title']}>{painting.title}</div>
            <div className={styles['img-info']}>{painting.medium}</div>
            <div className={styles['img-info']}>{painting.description}</div>
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
      />
    </>
  );
}
