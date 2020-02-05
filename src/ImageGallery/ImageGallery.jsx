import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
// import { thisExpression } from '../../node_modules/@babel/types';

class ImageGallery extends Component {
    state = {
        galleryItems: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.fetchGalleryItems(this.props.query);
    };

    fetchGalleryItems = (query) => {
        this.setState({ isLoading: true });

        fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=14234855-711e9a9449f1d753999c1992c`)
            //fetch(`https://pixabay.com/api/?key=14234855-711e9a9449f1d753999c1992c&q=${query}&image_type=photo`)
            .then(res => res.json())
            .then(data => {
                this.setState({ galleryItems: data.hits });
            }).catch(error => {
                this.setState({ error });
            }).finally(() => {
                this.setState({
                    isLoading: false,
                })
            })
    };

    render() {
        const { galleryItems, isLoading } = this.state;
        return (<ul className={styles.ImageGallery}>
            {isLoading && <Loader />}
            {galleryItems.length > 0 && <ImageGalleryItem galleryItems={galleryItems} />}
        </ul>
        );
    }
};

export default ImageGallery;
