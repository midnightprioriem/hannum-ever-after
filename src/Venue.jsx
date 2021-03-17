import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import stationTwoLogo from './assets/station_two_logo.png'
import stationTwoImage from './assets/station_two_image.jpeg'
import { useEffect, useState, useRef } from 'react';


const Venue = () => {
    const [fade, setFade] = useState(false);
    const viewRef = useRef(null);

    const stationTwoLink = 'https://stationno2.com/#home';

    const divTitleTextStyle = {
        textAlign: 'center',
        marginTop: '50px',
    }

    const textDivStyle = {
        textAlign: 'center',
        /*backgroundColor: '#f5e9ee',*/
        height: '350px',
        marginTop: 'auto',
        marginBottom: 'auto',
    }

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: 'center',
        height: '350px'
    }

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
                <Grid item xs={12}>
                    <div style={divTitleTextStyle}>
                        <div className={'verticalCenter'}>
                            <p>WHERE</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div style={textDivStyle}>
                        <div className={'verticalCenter'}>
                            <img src={stationTwoLogo} alt='' width='70px' />
                            <h2 className={'headerTwoBlockText'}><a href={stationTwoLink}>Station No. 2</a></h2>
                            <p className={'paragraphBlockText'}>602 S 5th AVE,</p>
                            <p className={'paragraphBlockText'}>WILMINGTON, NC 28401</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img src={stationTwoImage} alt='' width='100%' style={imageStyle} />
                </Grid>
            </Grid>
        </Fade>
    );
};

export default Venue;