import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { AnimateOnView } from './AnimateOnView';
import Button from 'components/Button';
import styles from 'components/block.module.css'

const animations = {
    hidden: {
        opacity: 0,
        y: 100,
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

    return (
        <AnimateOnView
            className={useHeight ? clsx(styles.root, styles.useHeight) : styles.root}
            id={id}
            viewThreshold={.8}>
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
        </AnimateOnView>
    );
};

export default Block;