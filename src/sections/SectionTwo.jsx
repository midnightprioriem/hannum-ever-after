import React from 'react';
import { motion } from 'framer-motion';

import styles from 'sections/sectiontwo.module.css';
import stationTwo from 'assets/pics/station_two_image.jpeg';

const SectionTwo = () => {
    return (
        <motion.div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.h1}>The Venue</h1>
                    <hr className={styles.hr} />
                    <h2 className={styles.h2}>Station No. 2</h2>
                    <p className={styles.p}>
                        We are getting married at Station No. 2 in historic downtown Wilmington, North Carolina. Built in 1915 to house Engine Company 2, this fire station has been a mainstay in downtown for over a century.
                        <br/><br/>
                        After everything that the world has gone through this past year, we would be overjoyed to have you join us on November 6th, 2021 to celebrate our marriage. We can't wait to see you for an evening of celebration, song, and dance.
                    </p>
                </div>
            </div>
            <img className={styles.img} src={stationTwo} alt="Station Two" />
        </motion.div>
    );
}

export default SectionTwo;