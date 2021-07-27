import Grid from '@material-ui/core/Grid';
import Block from './Block';
import RegistryCard from './RegistryCard';
import { makeStyles } from '@material-ui/core/styles';
// import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles({
    grid: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    },
    background: {
        backgroundColor: '#fff8f7',
        width: '100%',
        height: '400px',
    },
});

const Registry = () => {

    const classes = useStyles();

    return (
        <Block>
            <div className={classes.background}>
                <Grid container
                    spacing={2}
                    className={classes.grid}>
                    <Grid item>
                        <RegistryCard></RegistryCard>
                    </Grid>
                    <Grid item>
                        <RegistryCard></RegistryCard>
                    </Grid>
                    <Grid item>
                        <RegistryCard></RegistryCard>
                    </Grid>
                </Grid>
            </div>
        </Block>
    );
};

export default Registry;