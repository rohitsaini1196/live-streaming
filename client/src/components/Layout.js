import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Container,
} from "@material-ui/core";
import Footer from "./Footer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import auth from "../services/auth";
import { makeStyles } from "@material-ui/core/styles";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 50,
  },
}));

function Layout({ children }) {
  let history = useHistory();
  const classes = useStyles();
  const [userName, setUserName] = useState("");

  const localLogout = () => {
    auth.logout();
    setUserName("");
    history.push("/login");
  };

  useEffect(() => {
    console.log("ggwp");
    if (auth.isAuthenticated()) {
      setUserName(auth.getCuurentUser);
    }
  }, [userName]);

  return (
    <div>
      <div>
        <CssBaseline />
        <AppBar
          position="static"
          style={{ backgroundColor: "#23272a", color: "#fff" }}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              disableRipple
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              href="/"
            >
              <LiveTvIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Stract
            </Typography>
            {userName ? (
              <div>
                <Button
                  color="inherit"
                  style={{ textTransform: "none", marginRight: "1rem" }}
                  variant="outlined"
                  size="small"
                  onClick={localLogout}
                >
                  Logout
                </Button>
                <IconButton>
                  <AccountCircleIcon />
                </IconButton>
              </div>
            ) : (
              <div>
                <Button
                  color="inherit"
                  style={{ textTransform: "none", marginRight: "1rem" }}
                  variant="outlined"
                  href="/login"
                >
                  Log In
                </Button>
                <Button
                  color="inherit"
                  variant="contained"
                  color="primary"
                  style={{ textTransform: "none" }}
                  href="/signup"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>

        {/* <div style={{ textAlign: "center", padding: "1rem" }}></div> */}
        <Container maxWidth="xl" style={{ padding: "2rem 1rem" }}>
          {children}
        </Container>
      </div>
    </div>
  );
}

export default Layout;
