import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import crateAndBarrelLogo from './assets/crateandbarrel.png';


const useStyles = makeStyles({
  root: {
    width: '250px',
    display: 'inline-block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
      height: 100
  }
});

const RegistryCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <CardMedia
          className={classes.media}
          image={crateAndBarrelLogo}
          title="Contemplative Reptile"
        />
      </CardContent>
      <CardActions>
        <Button size="small">View Registry</Button>
      </CardActions>
    </Card>
  );
}

export default RegistryCard;