import React, { useState, useEffect} from 'react';
import * as api from '../services/api';
import { fetchImageGallery } from '../services/api';
import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Modal } from './modal/modal';
import { Loader } from './loader/loader';
import { Button } from './button/button';

export const App =()=> {
  
    const [pictures, setPictures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentImageInModal, setCurrentImageInModal] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
  
  
   useEffect(()=>{
    
   })
  //  {
  //   if (prevState.page !== this.state.page) {
  //     this.fetchImageByPage(this.state.searchTerm, this.state.page);
  //   }
  // }

  const fetchGallery = searchTerm => {
      setIsLoading(true);
      setPictures([]);
      setPage(1);
      fetchImageGallery(searchTerm, page);
  };

  useEffect (() => {
    if (searchTerm === '') {
      return;
    }

    fetchImageGallery(searchTerm, page).then(res => {
      try {
        setIsLoading(true);
        const normalizedImages = api.normalizedImages(res.hits);
        setPictures(pictures => [...pictures, ...normalizedImages]);
        setIsLoading(false);
        // setSearchTerm(searchTerm);
        setTotal(res.totalHits);
      } catch (error) {
        error ('Something went wrong!') ;
      } finally{
        setIsLoading(false);
      }
    })
  }, [searchTerm, currentImageInModal])

 const changeShowModal = (newState, imgUrl) => {
      setShowModal(newState);
      setCurrentImageInModal(imgUrl);
    };

  const loadMore = (() => setPage(page + 1));
  
    return (
      <>
        <Searchbar getGallery={fetchGallery} />
        {isLoading && <Loader />}
        {pictures.length > 0 ? (
          <ImageGallery
            dataPictures={pictures}
            // loader={this.state.isLoading}
            changeShowModal={changeShowModal}
          />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
              fontSize: 24,
              color: 'grey',
            }}
          >
            Image gallery is empty...
          </p>
        )}
        <Modal
          showModal={showModal}
          longUrl={currentImageInModal}
          toggleModal={changeShowModal}
        />
        {pictures.length === 0 ||
        pictures.length === total ? null : (
          <Button onClick={loadMore} />
        )}
      </>
    );
  

}
