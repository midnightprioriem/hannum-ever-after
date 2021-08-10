import React, { useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { photos } from 'components/photos';
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
    const animControls = useAnimation();
    const { ref, inView } = useInView({
        threshold: .1
    });

    useEffect(() => {
        if (inView) {
            animControls.start("visible");
        }
    }, [animControls, inView]);

    return (
        <motion.div ref={ref} initial="hidden" animate={animControls} variants={animations} className={styles.root}>
            <h1>Our Story</h1>
            <Gallery photos={photos} margin={10} imageRenderer={<Image />} />
        </motion.div>
    );
}

export default PhotoGallery;