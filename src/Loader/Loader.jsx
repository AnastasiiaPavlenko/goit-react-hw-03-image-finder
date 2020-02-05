import React from 'react';
// import { createPortal } from 'react-dom';
import { Spinner } from 'react-spinners-css';
import styles from './Loader.module.css';

// const LOADER_ROOT = document.querySelector('#loader-root');
//  const Loader = () => createPortal(<div>Loading...</div>, LOADER_ROOT);

const Loader = () => (
    <div>
        <Spinner className={styles.Spinner} color="#3F50B5" />
    </div>
);

export default Loader;