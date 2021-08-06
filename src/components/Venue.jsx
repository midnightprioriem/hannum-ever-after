import React from 'react';
import Block from 'components/Block';
import styles from 'components/venue.module.css';

const Venue = (props) => {

    return (
        <Block blockTitle="Venue" id='venue' {...props} button buttonText="see on map">
            <div className={styles.blockDivStyle}>
                <div className={styles.verticalCenter}>
                    <h2>Station No. 2</h2>
                    <p>602 S 5th AVE,<br/>WILMINGTON, NC 28401</p>
                </div>
            </div>
        </Block>
    );
};

export default Venue;