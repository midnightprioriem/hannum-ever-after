import React from 'react';
import { motion } from 'framer-motion';
import {AnimateOnView, orchestrate} from 'components/AnimateOnView';

import styles from 'sections/sectiontwo.module.css';
import stationTwo from 'assets/pics/station_two_image.jpeg';

const textAnimations = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .3,
            ease: "easeInOut",
        }
    }
}

const SectionTwo = () => {
    return (
        <AnimateOnView className={styles.root} threshhold={1}>
            <motion.div variants={orchestrate} className={styles.container}>
                <motion.div variants={orchestrate} className={styles.text}>
                    <motion.h1 variants={textAnimations} className={styles.h1}>The Venue</motion.h1>
                    <motion.hr variants={textAnimations} className={styles.hr} />
                    <motion.h2 variants={textAnimations}className={styles.h2}>Station No. 2</motion.h2>
                    <motion.p variants={textAnimations}className={styles.p}>
                        We are getting married at Station No. 2 in historic downtown Wilmington, North Carolina. Built in 1915 to house Engine Company 2, this fire station has been a mainstay in downtown for over a century.
                        <br/><br/>
                        After everything that the world has gone through this past year, we would be overjoyed to have you join us on November 6th, 2021 to celebrate our marriage. We can't wait to see you for an evening of celebration, song, and dance.
                    </motion.p>
                </motion.div>
            </motion.div>
            <img className={styles.img} src={stationTwo} alt="Station Two" />
        </AnimateOnView>
    );
}

export default SectionTwo;