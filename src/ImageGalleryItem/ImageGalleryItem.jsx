import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ galleryItems }) => (
    galleryItems.map(({ id, webformatURL, likes, views, comments, downloads }) => (
        <li className={styles.photo_card} key={id}>
            <img src={webformatURL} alt="" className={styles.ImageGalleryItem_image} />

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

            {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
            <button type="button" className={styles.fullscreen_button}>
                <i className="material-icons">zoom_out_map</i>
            </button>
        </li>
    )));

export default ImageGalleryItem;