import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx';
import Button from 'components/Button';
import styles from 'components/block.module.css'

const orchestrate = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: .05,
        }
    }
}

const animations = {
    hidden: {
        opacity: 0,
        y: 300,
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

const Block = (props) => {
    const { blockTitle, titleClass, id, button, buttonLink, buttonText, onClick, useHeight } = props;
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
        <motion.div
            className={useHeight ? clsx(styles.root, styles.useHeight) : styles.root}
            ref={ref}
            variants={orchestrate}
            initial="hidden"
            animate={animControls}
            id={id}>
            <div className={styles.contentDiv}>
                <motion.h1 variants={animations} className={titleClass}>{blockTitle}</motion.h1>
                {blockTitle && <motion.hr variants={animations} className={styles.hr} />}
                <motion.div variants={animations}>
                    {props.children}
                </motion.div>
            </div>
            <motion.div variants={animations}>
                {button && <Button onClick={onClick} href={buttonLink} target="_blank">{buttonText}</Button>}
            </motion.div>
        </motion.div>
    );
};

export default Block;