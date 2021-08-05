import React from 'react';
import { Link, Typography } from '@material-ui/core';
import styles from './footer.module.css';
import linkStyles from './links.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
        <Typography variant="body2" color="textSecondary" align="center" style={{margin:'.5vmin', userSelect: 'none'}}>
            👋 Built by <a href='https://github.com/midnightprioriem' className={linkStyles.link} target="_blank" rel="noreferrer">Zach</a>
        </Typography>
        </div>
    );
}
export default Footer;