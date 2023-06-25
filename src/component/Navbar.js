import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from 'react';
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";
import Profile from './recruiter/Profile';
// import Portfolio from './candidate/Portfolio/src/pages/Portfolio';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button color="inherit" onClick={() => handleClick("/")}>GetJob</Button>
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <React.Fragment>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" >
                <a href="http://localhost:3002/">Portfolio</a>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>



            </React.Fragment>
          )
        ) : (
          <React.Fragment>

            <Button color="inherit" onClick={() => handleClick("/login")}>
              Logins
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
