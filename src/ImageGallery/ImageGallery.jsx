import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems, onOpen }) => (
    <ul className={styles.ImageGallery}>
        {galleryItems.length > 0 && <ImageGalleryItem onOpen={onOpen} galleryItems={galleryItems} />}
    </ul>
);


export default ImageGallery;
