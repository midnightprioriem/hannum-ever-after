import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from 'components/photos';
import styles from 'components/photogallery.module.css';

const PhotoGallery = () => {
    return (
        <div className={styles.root}>
        <h1>Our Story</h1>
            <Gallery photos={photos} margin={10}/>
        </div>
    );
}

export default PhotoGallery;