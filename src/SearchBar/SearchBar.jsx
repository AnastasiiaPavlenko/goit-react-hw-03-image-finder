import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
    state = { value: "" };

    handleChange = e => {
        // if (event.key === 'Enter') {
        // event.preventDefault();
        console.log(e.target.value);
        this.setState({ value: e.target.value })
        // this.props.onSubmit(e.target.value);
        // }
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.value);
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    };

    // handleKeyDown = this.handleKeyDown.bind(this);

    render() {
        return <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.SearchForm_button}>
                    <span className={styles.SearchForm_button_label}>Search</span>
                </button>
                <input
                    className={styles.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
                />
            </form>
        </header>
    }
};

export default SearchBar;