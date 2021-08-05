import React from 'react';
import { TextField } from '@material-ui/core';
import Block from './Block';
import styles from './rsvp.module.css';
const Rsvp = (props) => {
    return (
        <div className={styles.rsvpDiv}>
            <Block blockTitle="RSVP" {...props}>
                <form className={styles.form}>
                    <TextField label="Name" variant="outlined" fullWidth/>
                </form>
            </Block>
        </div>
    )
}

export default Rsvp;