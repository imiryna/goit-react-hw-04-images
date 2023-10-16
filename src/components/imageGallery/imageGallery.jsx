import React  from 'react';
import { GalleryListCss } from './imageGallery.styled';
import { ImageGalleryItem } from '../imageGalleryItem/imageGalleryItem';

export const ImageGallery = ({dataPictures,changeShowModal}) => {
  
    const showImage =
      Array.isArray(dataPictures) && dataPictures.length;
    return (
      <GalleryListCss>
        {showImage &&
          dataPictures.map(picture => (
            <ImageGalleryItem
              key={picture.id}
              image={picture}
              changeShowModal={changeShowModal}
            />
          ))}
      </GalleryListCss>
    );
  
}
