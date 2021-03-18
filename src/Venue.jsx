import Grid from '@material-ui/core/Grid';
import Block from './Block';
import stationTwoLogo from './assets/station_two_logo.png'
import stationTwoImage from './assets/station_two_image.jpeg'
import './Venue.css'

const Venue = () => {

    const stationTwoLink = 'https://stationno2.com/#home';

    return (
        <Block>
            <Grid item xs={12}>
                <div className={'divTitleTextStyle'}>
                    <div className={'verticalCenter'}>
                        <p>WHERE</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={7}>
                <div className={'blockDivStyle'}>
                    <div className={'verticalCenter'}>
                        <img src={stationTwoLogo} alt='' width='70px' />
                        <h2 className={'headerTwoBlockText'}><a href={stationTwoLink}>Station No. 2</a></h2>
                        <p className={'paragraphBlockText'}>602 S 5th AVE,</p>
                        <p className={'paragraphBlockText'}>WILMINGTON, NC 28401</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={5}>
                <img src={stationTwoImage} alt='' width='100%' className={'blockImageStyle'} />
            </Grid>
        </Block>
    );
};

export default Venue;