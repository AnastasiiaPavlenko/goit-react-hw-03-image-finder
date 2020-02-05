import React, { Component } from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';


class App extends Component {
  state = { query: "" };
  onSubmit = (value) => {
    this.setState({ query: value });
    console.log(this.state.query);
  };

  render() {
    return <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* <SearchForm /> */}
      <SearchBar onSubmit={this.onSubmit} />
      <ImageGallery query={this.state.query} />
      <Modal />
    </>
  };
};

export default App;
