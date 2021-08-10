import React from 'react';
import { motion } from 'framer-motion';
import { AnimateOnView } from 'components/AnimateOnView';

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

const Image = ({
    index,
    photo,
    margin,
    direction,
    top,
    left }) => {

    return (
        <AnimateOnView viewThreshold={.8} style={{margin}}>
            <motion.img
                style={{ height: photo.height, width: photo.width }}
                alt={photo.title}
                variants={animations}
                {...photo}
            />
        </AnimateOnView>
    );
};

export default Image;