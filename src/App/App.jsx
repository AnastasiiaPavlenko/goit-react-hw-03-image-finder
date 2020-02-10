import React, { Component } from 'react';
import styles from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';


class App extends Component {
  render() {
    return <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <ImageGallery />
    </>
  };
};

export default App;
