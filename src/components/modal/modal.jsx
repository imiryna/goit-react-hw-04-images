import React, { useEffect } from 'react';
import { Overlay, ModalWindow } from './modal.styled';

export const Modal =({showModal, alt, longUrl,toggleModal})=> {

  useEffect(()=> {

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal(false, '');
      }
    };

   window.addEventListener('keydown', handleKeyDown);

    return () => {
    window.removeEventListener('keydown', handleKeyDown);
  }
  } ,[toggleModal])
  

  

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal(false, '');
    }
  };

  
    if (!showModal) {
      return null;
    } else
    return (
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          <img
            src={longUrl}
            alt={alt}
            width="800"
            height="600"
          />
        </ModalWindow>
      </Overlay>
    );
  
}
