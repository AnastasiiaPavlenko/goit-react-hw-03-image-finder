import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import SearchBar from '../SearchBar/SearchBar'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImagesApi from '../services/ImagesApi';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
    state = {
        galleryItems: [],
        isLoading: false,
        error: null,
        searchQuery: "",
        page: 1,
        largeImageUrl: null,
        openModal: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchGalleryItems();
        }

        if (!this.state.isLoading) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    fetchGalleryItems = () => {
        const { searchQuery, page } = this.state;
        this.setState({ isLoading: true });

        ImagesApi
            .fetchImagesWithQuery(searchQuery, page)
            .then(galleryItems =>
                this.setState(prevState => ({
                    galleryItems: [...prevState.galleryItems, ...galleryItems],
                    page: prevState.page + 1,
                })),
        )
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));

    };

    handleSearchFormSubmit = query => {
        this.setState({
            searchQuery: query,
            page: 1,
            galleryItems: [],
        });
    };

    setLargeImage = largeImageUrl => {
        this.setState({ largeImageUrl: largeImageUrl });
        this.toggleModal();
    };

    toggleModal = () => {
        this.setState(state => ({ openModal: !state.openModal }));
    };

    render() {
        const { galleryItems, isLoading, error, openModal, largeImageUrl } = this.state;
        return (<>
            <SearchBar onSubmit={this.handleSearchFormSubmit} />
            {error && <p>Woops, something went wrong: {error.message} </p>}
            {isLoading && <Loader />}
            <ul className={styles.ImageGallery}>
                {galleryItems.length > 0 && <ImageGalleryItem onOpen={this.setLargeImage} galleryItems={galleryItems} />}
            </ul>
            {openModal && <Modal url={largeImageUrl} onClose={this.toggleModal} />}
            {galleryItems.length > 0 && <Button onClick={this.fetchGalleryItems} />}
        </>
        );
    }
};

export default ImageGallery;
