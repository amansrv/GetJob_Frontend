import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import WorkingSection from './Fragment/WorkingSection';
import FeatureSection from './Fragment/FeatureSection';
import LoginModal from './LoginModal';
import { UserContext } from '../context/userContext';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import NavbarTop from './NavbarTop';
import FooterBottom from './FooterBottom';
import { auth } from '../firebase-config';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(14, 5, 10),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  btns: {
    margin: 3,
  },
  mainHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 'xx-large',
    },
  },
  secondHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 'medium',
    },
  }
}));

export default function BaseTemp(props) {

  const classes = useStyles();
  const [user] = useContext(UserContext)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (user) {
      const { currentUser } = auth;
      console.log('Currently logged in user', currentUser.uid);
      setUserId(currentUser.uid)
      console.log(user)
    }
  }, [user])

  return (
    <React.Fragment>

      <NavbarTop switchComp={props.switchComp} />

      <main class="videoContainer">
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#fff"
              className={classes.mainHeading}
            >
              Automated Portfolio Generator
            </Typography>
            <br />
            <Typography
              variant="h5"
              align="center"
              className={classes.secondHeading}
              color="#fff"
              paragraph>
              Portfolios are a great way to demonstrate the competencies you would list on a resume or talk about in an interview — they allow you to show and not just tell.
            </Typography>
            {user ?
              (
                <Typography maxWidth="sm" variant="h6" align="center" color="textSecondary" paragraph>
                  Welcome, {user}
                </Typography>
                // <Typography maxWidth="sm" variant="h6" align="center" color="textSecondary" paragraph>
                //   Welcome, {user}
                // </Typography>
              ) :
              (<></>)
            }
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                {!user ?
                  (
                    <Grid item>
                      <Button
                        className={classes.btns}
                        variant="contained"
                        color="secondary"
                        startIcon={<CallMissedOutgoingIcon />}
                        href='#working'
                      >
                        Explore
                      </Button>
                    </Grid>

                  ) :
                  (
                    <Grid item>
                      <Button
                        className={classes.btns}
                        variant="contained"
                        color="secondary"
                        startIcon={<CallMissedOutgoingIcon />}
                        href={`/profile/${userId}`}
                      >
                        View Profile
                  </Button>
                    </Grid>
                  )

                }

                <Grid item>
                  {!user &&
                    <Button
                      className={classes.btns}
                      startIcon={<CalendarViewDayIcon />}
                      variant='contained'
                      color="secondary">
                      <LoginModal />
                    </Button>
                  }
                </Grid>
              </Grid>
              {user && <Grid container spacing={2} justify="center">
                <Grid>
                  <Button
                    className={classes.btns}
                    variant="contained"
                    color="secondary"
                    target="_blank"
                    startIcon={<CalendarViewDayIcon />}
                    href={`/${userId}/0`}
                  >
                    Portfolio: Design 1
                  </Button>

                </Grid>
                <Grid>
                  <Button
                    className={classes.btns}
                    variant="contained"
                    color="secondary"
                    target="_blank"
                    startIcon={<CalendarViewDayIcon />}
                    href={`/${userId}/1`}
                  >
                    Portfolio: Design 2
                  </Button>
                </Grid>
              </Grid>}
            </div>
          </Container>
        </div>
      </main>

      <Divider />
      <WorkingSection />
      <Divider />
      <FeatureSection />
      <Divider />

      <FooterBottom />
    </React.Fragment>
  );
}