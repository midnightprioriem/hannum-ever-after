import React from 'react';
import styles from 'sections/hero.module.css';
import Button from 'components/Button';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';



const Hero = () => {

    const orchestrate = {
        hidden: {
        },
        visible: {
            transition: {
                delayChildren: .75,
                staggerChildren: .5,
            }
        }
    }

    const animations = {
        hidden: {
            opacity: 0,
            scale: .8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            }
        }
    }

    const scrollDownLoop = {
        initial: {
            y: 5,
        },
        animate: {
            y: 0,
            transition: {
                repeat: Infinity,
                duration: .5,
                repeatType: "reverse",
            }
        }
    }

    const handleButton = (id) => {
        document.getElementById(id).scrollIntoView({ 
            behavior: 'smooth',
            alignToTop: true,
        });
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
                <motion.div variants={animations} >
                    <Button onClick={() => {handleButton('rsvp')}} alt>RSVP</Button>
                </motion.div>
                <motion.div variants={scrollDownLoop} initial="initial" animate="animate" className={styles.scrollButton}>
                <IconButton color="primary" onClick={() => {handleButton('sectionOne')}}>
                    <ExpandMoreIcon fontSize="large"/>
                </IconButton>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;