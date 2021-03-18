import { AppBar, IconButton, Toolbar, Button } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';


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
    const [isTop, setIsTop] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [topBarMargin, setTopBarMargin] = useState(0);
    const classes = appBarStyles();
    var appBarHeight;

    const handleScroll = () => {
        if (document.documentElement.scrollTop === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
            let y = document.documentElement.scrollTop;
            let diff = y - scrollY;
            if(diff > 0) {
                setTopBarMargin(-appBarHeight);
            } 
            else
            {
                setTopBarMargin(0);
            }
            setScrollY(y);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        appBarHeight = document.getElementById('appBar').clientHeight
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    });


    return (
            <AppBar
                position='fixed'
                className={isTop ? classes.appBarTop : classes.appBarRegular}
                style={{
                    marginTop : topBarMargin,
                    transition: '1s ease-in-out',
                }}
                id={'appBar'}>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                    <Button color="inherit" className={classes.button}>Where</Button>
                    <Button color="inherit" className={classes.button}>When</Button>
                    <Button color="inherit" className={classes.button}>Our Story</Button>
                    <Button color="inherit" className={classes.button}>Registry</Button>
                    <Button color="inherit" className={classes.button}>RSVP</Button>
                </Toolbar>
            </AppBar>
    );
};

export default MenuBar;