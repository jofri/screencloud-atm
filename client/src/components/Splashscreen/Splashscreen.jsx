

// Import Material UI components
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


function Splashscreen () {

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} className={classes.image} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => {window.location.replace('/auth');}}
      >
              Press to begin
      </Button>
    </Grid>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1599880917812-35b7cde34597?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    height: '10vh',
    width: '20vw',
    bottom: '0',
    right: '0',
    position: 'absolute',
  },
}));

export default Splashscreen;

