import Grid from '@material-ui/core/Grid';
import Block from './Block';
import RegistryCard from './RegistryCard';
// import ScheduleIcon from '@material-ui/icons/Schedule';
// import './When.css'

const Registry = () => {

    const backgroundColor = {
        backgroundColor: '#fff8f7',
        width: '100%',
        height: '500px',
    }

    return (
        <Block>
            <div style={backgroundColor}>
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} sm={3}>
                        <RegistryCard></RegistryCard>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <RegistryCard></RegistryCard>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <RegistryCard></RegistryCard>
                    </Grid>
                </Grid>
            </div>
        </Block>
    );
};

export default Registry;