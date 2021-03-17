import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import { useEffect, useState, useRef } from 'react';


const Block = (props) => {
    const [fade, setFade] = useState(false);
    const viewRef = useRef(null);

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
        <Fade in={fade} timeout={1000} ref={viewRef}>
            <Grid container spacing={0}>
                {props.children}
            </Grid>
        </Fade>
    );
};

export default Block;