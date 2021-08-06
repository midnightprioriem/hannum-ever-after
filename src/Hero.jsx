import React from 'react';
import styles from 'hero.module.css';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {

    const orchestrate = {
        hidden: {
        },
        visible: {
            transition: {
                delayChildren: .75,
                staggerChildren: .2,
            }
        }
    }

    const animations = {
        hidden: {
            opacity: 0,
            y: 500,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .4,
                type: "spring",
                ease: "anticipate",
            }
        }
    }

    return (
        <div className={styles.hero}>
            <motion.div
                variants={orchestrate}
                initial="hidden"
                animate="visible"
                className={styles.heroContent}>
                <motion.h2 variants={animations} className={styles.heroTitle}>
                    Bella & Zach
                </motion.h2>
                <motion.h1 variants={animations} className={styles.heroSubTitle}>let's get married!</motion.h1>
                <motion.div variants={animations}>
                    <Button alt>RSVP</Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;