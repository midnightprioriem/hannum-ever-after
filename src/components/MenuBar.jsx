import { AppBar, Toolbar, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

var appBarStyles = makeStyles((theme) => ({
    appBarTop: {
        background: 'transparent',
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
        transition: '1s ease-in-out',
    },
    appBarRegular: {
        background: 'rgba(0, 0, 0, 0.4);',
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
        backdropFilter: 'blur(20px)',
        transition: '1s ease-in-out',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        fontSize: '18px',
        fontFamily: '\'Josefin Sans\', sans-serif',
        padding: '5px',
        marginLeft: '3vw'
    }
}));

const MenuBar = (props) => {
    const classes = appBarStyles();

    const handleScrollIntoView = (id) => {
        document.getElementById(id).scrollIntoView({ 
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    return (
        <AppBar
            position='fixed'
            className={classes.appBarRegular}
            id={'appBar'}>
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Button color="inherit" className={classes.button} onClick={() => handleScrollIntoView('venue')}>Venue</Button>
                <Button color="inherit" className={classes.button} onClick={() => handleScrollIntoView('when')}>When</Button>
                <Button color="inherit" className={classes.button} onClick={() => handleScrollIntoView('registry')}>Registry</Button>
                <Button color="inherit" className={classes.button} onClick={() => handleScrollIntoView('rsvp')}>RSVP</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;