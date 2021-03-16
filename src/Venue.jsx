import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import stationTwoLogo from './assets/station_two_logo.png'
import stationTwoImage from './assets/station_two_image.jpeg'
import { useEffect, useState, useRef} from 'react';


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
        padding: '50px',
        /*backgroundColor: '#f5e9ee',*/
        height: '250px',
        marginTop: 'auto',
        marginBottom: 'auto',
    }

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: 'center',
    }

    var cumulativeOffset = function(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);
    
        return {
            top: top,
            left: left
        };
    };

    const handleScroll = () => {
        let center = 500 - viewRef.current.getBoundingClientRect().top; //Using hardcoded value...
        console.log(center);
        if ( center > 0) {
            setFade(true);
        } else {
            setFade(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    });

    return (
        <Fade in={fade} timeout={1000}>
            <Grid container spacing={0} ref={viewRef}>
                <Grid item xs={12}>
                    <div style={divTitleTextStyle}>
                        <p>VENUE</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={textDivStyle}>
                        <img src={stationTwoLogo} alt='' width='70px' />
                        <h2><a href={stationTwoLink}>Station No. 2</a></h2>
                        <p>602 S 5th AVE,</p>
                        <p>WILMINGTON, NC 28401</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={stationTwoImage} alt='' width='100%' height='350px' style={imageStyle} />
                </Grid>
            </Grid>
        </Fade>
    );
};

export default Venue;