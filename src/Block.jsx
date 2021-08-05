import { Grid, Fade } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
// @ts-ignore
import styles from './block.module.css'

const Block = (props) => {
    const [fade, setFade] = useState(false);
    const viewRef = useRef(null);
    const { blockTitle, id } = props;

    const handleScroll = () => {
        //Fade in when top of component is within top 2/3 of viewport
        //in general this should work unless the component is the last in the app and the height is smaller
        //then 1/3 of the height of the viewport
        let center = (2 * window.innerHeight / 3) - viewRef.current.getBoundingClientRect().top;
        if (center > 0) {
            setFade(true);
        } else {
            setFade(false);
        }
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    });

    return (
        <div className={styles.root} id={id}>
            <Fade in={fade} timeout={1000} ref={viewRef} 
            className={styles.fadeIn}>
                <Grid container spacing={0}>
                    <h1>{blockTitle}</h1>
                    {blockTitle && <hr className={styles.hr}/>}
                    {props.children}
                </Grid>
            </Fade>
        </div>
    );
};

export default Block;