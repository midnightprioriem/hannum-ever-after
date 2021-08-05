import Block from './Block';
import stationTwoLogo from './assets/station_two_logo.png';
import styles from './venue.module.css';
import linkStyles from './links.module.css';
import blockStyles from './block.module.css';
import React from 'react';

const Venue = (props) => {

    const stationTwoLink = 'https://stationno2.com/#home';

    return (
        <Block blockTitle="Venue" id='venue' {...props}>
            <div className={styles.blockDivStyle}>
                <div className={styles.verticalCenter}>
                    <img src={stationTwoLogo} alt='' height='200px' />
                    <h2 className={blockStyles.headerTwoBlockText}><a className={linkStyles.link} href={stationTwoLink}>Station No. 2</a></h2>
                    <p className={blockStyles.paragraphBlockText}>602 S 5th AVE,</p>
                    <p className={blockStyles.paragraphBlockText}>WILMINGTON, NC 28401</p>
                </div>
            </div>
        </Block>
    );
};

export default Venue;