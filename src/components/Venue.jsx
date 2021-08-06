import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Block from 'components/Block';
import styles from 'components/venue.module.css';

const Venue = (props) => {
    const [openMapView, setOpenMapView] = useState(false);

    const handleButtonClick = () => {
        setOpenMapView(true);
    }

    const handleClose = () => {
        setOpenMapView(false);
    }

    return (
        <Block blockTitle="Venue" id='venue' {...props} button buttonText="see on map" onClick={handleButtonClick}>
            <div className={styles.blockDivStyle}>
                <div className={styles.verticalCenter}>
                    <h2>Station No. 2</h2>
                    <p>602 S 5th AVE,<br />WILMINGTON, NC 28401</p>
                </div>
            </div>
            <Dialog open={openMapView} onClose={handleClose} maxWidth="lg" classes={styles}>
                <DialogContent>
                    <div className={styles.mapTitle}>
                        <p>Station No. 2</p>
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <iframe title="station no. 2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13195.209349869252!2d-77.9426215!3d34.2280651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9eb0021b6c96c90!2sStation%20No.%202!5e0!3m2!1sen!2sus!4v1628281670259!5m2!1sen!2sus" className={styles.map} loading="lazy"></iframe>
                </DialogContent>
            </Dialog>
        </Block>
    );
};

export default Venue;