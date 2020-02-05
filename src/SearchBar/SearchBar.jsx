import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
    // state = { value: "" };
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            // this.setState({ value: event.target.value });
            console.log(event.target.value);
            // console.log(this.state.value);
            this.props.onSubmit(event.target.value);
        }
    };

    // handleKeyDown = this.handleKeyDown.bind(this);

    render() {
        return <header className={styles.Searchbar}>
            <form className={styles.SearchForm} >
                <button type="submit" className={styles.SearchForm_button}>
                    <span className={styles.SearchForm_button_label}>Search</span>
                </button>

                <input
                    className={styles.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onKeyDown={this.handleKeyDown}
                />
            </form>
        </header>
    }
};

export default SearchBar;