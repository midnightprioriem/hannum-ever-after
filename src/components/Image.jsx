import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const Image = ({ index,
    photo,
    margin,
    direction,
    top,
    left }) => {

    const animControls = useAnimation();
    const { ref, inView } = useInView({
        threshold: .8
    });

    useEffect(() => {
        if (inView) {
            animControls.start("visible");
        }
    }, [animControls, inView]);

    return (
        <motion.img
            ref={ref}
            alt={photo.title}
            variants={animations}
            initial="hidden"
            animate={animControls}
            {...photo}
        />
    );
};

export default Image;