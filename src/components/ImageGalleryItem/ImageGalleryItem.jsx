import React, { useCallback } from 'react';
import ImageGalleryItemCss from './ImageGalleryItemCss.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const generateUniqueKey = useCallback(() => {
    const keySet = new Set();

    return () => {
      let key = Math.floor(Math.random() * 1000000);
      while (keySet.has(key)) {
        key = Math.floor(Math.random() * 1000000);
      }
      keySet.add(key);
      return key;
    };
  }, []);

  const handleClick = () => {
    onImageClick(image);
  };

  const generateKey = generateUniqueKey();

  return (
    <li key={generateKey()} className={ImageGalleryItemCss.ImageGalleryItem} onClick={handleClick}>
      <img src={image.src} alt={image.alt} className={ImageGalleryItemCss.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;