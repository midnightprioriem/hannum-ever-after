import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Countdown from 'react-countdown';
import { useEffect, useState, useRef} from 'react';

const When = () => {
    const [fade, setFade] = useState(false);
    const viewRef = useRef(null);

    const divTitleTextStyle = {
        textAlign: 'center',
        marginTop: '50px',
    }

    const textDivStyle = {
        textAlign: 'center',
        padding: '20px',
        /*backgroundColor: '#f5e9ee',*/
        height: '250px',
        marginTop: 'auto',
        marginBottom: 'auto',
    }

    const backgroundColor = {
        backgroundColor: '#fff8f7'
    }

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
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    });

    
    const countdownRenderer = ({ days, hours, minutes, seconds }) => {
          let dayText = days !== 1 ? 'DAYS' : 'DAY';
          let hourText = hours !== 1 ? 'HOURS' : 'HOUR';
          let minuteText = minutes !== 1 ? 'MINUTES' : 'MINUTE';
          let secondText = seconds !== 1 ? 'SECONDS' : 'SECOND';
          return <p>{days} {dayText}, {hours} {hourText}, {minutes} {minuteText}, AND {seconds} {secondText} LEFT!</p>;
      };
    return (
        <Fade in={fade} timeout={1000}>
            <div style={backgroundColor}>
            <Grid container spacing={0} ref={viewRef}>
                <Grid item xs={12}>
                    <div style={divTitleTextStyle}>
                        <p>WHEN</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={textDivStyle}>
                        {/*Put clock logo here*/}
                        <h2>November 6th, 2021</h2>
                        <h2>4:00 PM</h2>
                        <Countdown renderer={countdownRenderer} date={new Date('November 6, 2021 15:00:00 EST')} />
                    </div>
                </Grid>
            </Grid>
            </div>
        </Fade>
    );
};

export default When;