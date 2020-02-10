import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import SearchBar from '../SearchBar/SearchBar'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
// import Modal from '../Modal/Modal';

class ImageGallery extends Component {
    state = {
        galleryItems: [],
        isLoading: false,
        error: null,
        searchQuery: "",
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery != nextQuery) {
            this.fetchGalleryItems();
        }
    };

    fetchGalleryItems = () => {
        this.setState({ isLoading: true });

        fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.searchQuery}&page=${this.state.page}&per_page=12&key=14234855-711e9a9449f1d753999c1992c`)
            .then(res => res.json())
            .then(data => {
                this.setState(prevState => ({ galleryItems: data.hits, page: prevState.page + 1 }));
            }).catch(error => {
                this.setState({ error });
            }).finally(() => {
                this.setState({
                    isLoading: false,
                })
            })
    };

    handleSearchFormSubmit = query => {
        this.setState({ searchQuery: query });
    };

    render() {
        const { galleryItems, isLoading, error } = this.state;
        return (<>
            <SearchBar onSubmit={this.handleSearchFormSubmit} />
            {error && <p>Woops, something went wrong: {error.message} </p>}
            {isLoading && <Loader />}
            <ul className={styles.ImageGallery}>
                {galleryItems.length > 0 && <ImageGalleryItem galleryItems={galleryItems} />}
            </ul>
            {/* <Modal /> */}
            {galleryItems.length > 0 && <Button onClick={this.fetchGalleryItems} />}
        </>
        );
    }
};

export default ImageGallery;
