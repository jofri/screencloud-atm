
import './Dashboard.css';

import React from 'react';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Dashboard (props) {

  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />

      <Container>
        <Grid container>

          <Grid item xs={12} sm={3} md={3}>
            <Paper className={classes.userInfo}>
              <Typography>
                <p className={classes.header}>Welcome</p>
                <p className={classes.userInformation}>John Doe</p>
                <p className={classes.header}>Balance</p>
                <p className={classes.userInformation}>£{props.user.currentBalance}</p>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9} md={9}>
            <Container className={classes.cardGrid} >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={() => {window.location.replace('/withdrawal');}}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h" component="h1">
                            GET CASH
                        </Typography>
                      </CardContent>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            DEPOSIT
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            PAYMENTS
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            CREDIT CARD
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            OFFERS
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            CHANGE PIN
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            SETTINGS
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h" component="h1">
                            OTHER
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>



  );
}

// Component style
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '17vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#99a1c9',
    color: 'white',
  },
  button: {
    height: '17vh',
    display: 'flex',
    flexDirection: 'column',
  },
  userInfo: {
    marginTop: '9.2vh',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
    margin: 'auto',
    marginTop: '4vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontWeight: '300',
    color: 'grey',
    marginLeft: '2vw',
    marginTop: '5vh',
    lineHeight: '1',
  },
  userInformation: {
    fontWeight: '600',
    color: 'black',
    marginLeft: '2vw',
    lineHeight: '1',
    marginBottom: '6vh',
  },
}));

export default Dashboard;

