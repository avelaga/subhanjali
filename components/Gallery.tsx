'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Columned from 'react-columned';
import { images, type Painting } from '../lib/images';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const slides = images.map((img) => ({ src: img.src }));

  return (
    <>
      <Columned columns={1} className={styles.gallery}>
        {images.map((painting: Painting, index: number) => (
          <div className={styles['img-div']} key={index}>
            <Image
              src={painting.src}
              alt={painting.title}
              className={styles.img}
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
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
      </Columned>

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
