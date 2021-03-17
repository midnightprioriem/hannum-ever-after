import Grid from '@material-ui/core/Grid';
import Block from './Block';
import stationTwoLogo from './assets/station_two_logo.png'
import stationTwoImage from './assets/station_two_image.jpeg'

const Venue = () => {

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

    return (
        <Block>
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
        </Block>
    );
};

export default Venue;