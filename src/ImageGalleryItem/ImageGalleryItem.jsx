import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ galleryItems, onOpen }) => (
    galleryItems.map(({ id, webformatURL, largeImageURL, likes, views, comments, downloads }) => (
        <li className={styles.photo_card} key={id}>
            <img
                src={webformatURL}
                alt=""
                className={styles.ImageGalleryItem_image}
                onClick={() => onOpen(largeImageURL)}
            />

            <div className={styles.stats}>
                <p className={styles.stats_item}>
                    <i className="material-icons">thumb_up</i>
                    {likes}
                </p>
                <p className={styles.stats_item}>
                    <i className="material-icons">visibility</i>
                    {views}
                </p>
                <p className={styles.stats_item}>
                    <i className="material-icons">comment</i>
                    {comments}
                </p>
                <p className={styles.stats_item}>
                    <i className="material-icons">cloud_download</i>
                    {downloads}
                </p>
            </div>
        </li>
    )));

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    galleryItems: PropTypes.array.isRequired,
    onOpen: PropTypes.func.isRequired,
};
