import React, { useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { motion } from 'framer-motion';
import { photos } from 'components/photos';
import { AnimateOnView } from './AnimateOnView';
import styles from 'components/photogallery.module.css';
import Image from 'components/Image';

const animations = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            ease: "easeInOut",
        }
    }
}

const PhotoGallery = () => {

    const image = useCallback(
        ({ index, left, top, key, photo, margin }) => (
            <Image
                key={key}
                index={index}
                photo={photo}
                left={left}
                top={top}
                margin={margin}
            />
        ),
        []
    );

    return (
        <AnimateOnView variants={animations} className={styles.root} viewThreshold={.1}>
            <motion.h1 variants={animations}>Our Story</motion.h1>
            <motion.p variants={animations}>A picture is worth eleven years.</motion.p>
            <Gallery photos={photos} renderImage={image} margin={10}/>
        </AnimateOnView>
    );
}

export default PhotoGallery;