import React from 'react';
import {Button as MuiButton} from '@material-ui/core'
import styles from 'components/button.module.css';

const Button = (props) => {
    const {alt} = props;
    return(
        <MuiButton variant="outlined" className={alt ? styles.buttonAlt : styles.button} size="large">
            {props.children}
        </MuiButton>
    )
}

export default Button;