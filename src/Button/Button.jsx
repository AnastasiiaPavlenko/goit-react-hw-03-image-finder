import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Button.module.css';


class Button extends Component {
    state = {
        galleryItems: [],
        isLoading: false,
        error: null,
    };

    // window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    // });
    render() {
        return (<button type="button" className={styles.Button}>
            Load more
        </button>);
    }
};

export default ImageGalleryItem;