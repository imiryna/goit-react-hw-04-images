import React from 'react';
import { ItemCss, ImgCss } from './imageGalleryItem.styled';
// import { Modal } from 'components/modal/modal';

export const ImageGalleryItem = ({changeShowModal, id, image}) => {
 const openModal = () => {
    changeShowModal(true, image.largeImageURL);
  };

    return (
      <>
        <ItemCss id={id}>
          <ImgCss
            src={image.webformatURL}
            alt={image.tags}
            onClick={openModal}
          />
        </ItemCss>
      </>
    );
}
