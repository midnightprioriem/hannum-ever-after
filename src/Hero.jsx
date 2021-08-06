import React from 'react';
import styles from 'hero.module.css';
import Button from './Button';

const Hero = () => {

    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>Bella & Zach</h2>
                <h1 className={styles.heroSubTitle}>let's get married!</h1>
                <Button>RSVP</Button>
            </div>
        </div>
    );
};

export default Hero;