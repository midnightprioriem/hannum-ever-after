import React from 'react';
import { motion } from 'framer-motion';

import styles from 'sections/sectiontwo.module.css';
import stationTwo from 'assets/station_two_image.jpeg';

const SectionTwo = () => {
    return (
        <motion.div className={styles.root}>
        <div className={styles.container}>
        </div>
        <img className={styles.img} src={stationTwo} alt="Station Two"/>
        </motion.div>
    );
}

export default SectionTwo;