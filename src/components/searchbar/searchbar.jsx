import React, { useState } from 'react';
import Notiflix from 'notiflix';
import {
  SearchFormCss,
  SearchInputCss,
  SearchButtonCss,
  HeaderCss,
} from './searchbar.styled';

export const Searchbar = ({getGallery, setSearchTerm}) => {
  const [inputValue, setInputValue] = useState('');

  const getGalleryPictures = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    
    if (inputValue === '') {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
    }else {
      setInputValue(inputValue);
      getGallery(inputValue)
    };
  };

  const handleKeyPressed = e => {
    if (e.key === 'Enter') {
     handleClick();
    }
  };

  
    return (
      <HeaderCss>
        <SearchFormCss onSubmit={handleKeyPressed}>
          <SearchButtonCss type="button" onClick={handleClick}>
            <span>Search</span>
          </SearchButtonCss>

          <SearchInputCss
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={getGalleryPictures}
          />
        </SearchFormCss>
      </HeaderCss>
    );
  
}
