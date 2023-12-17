import React, { useEffect, useCallback } from 'react';
import ModalCss from './ModalCss.module.css';

const Modal = ({ image, onClose, onImageClick }) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClose = () => {
    onClose();
  };

  const handleImageClick = () => {
    onImageClick(image);
  };

  return (
    <div className={ModalCss.overlay} onClick={handleClose}>
      <div className={ModalCss.modal}>
        <img src={image.srcLarge} alt={image.alt} onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Modal;
