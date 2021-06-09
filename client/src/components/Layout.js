import React, { useContext, useEffect, useState } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Container,
  Popper,
  Menu,
  MenuItem,
  Grow,
  Paper,
  MenuList,
  Grid,
  Hidden,
  ClickAwayListener,
} from "@material-ui/core";
import Footer from "./Footer";
import Right from "./Right/Right";
import Left from "./Left/Left";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import AuthContext from "../context/AuthContext";

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
  small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));

function Layout({ children }) {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);
  const anchorRef = React.useRef(null);
  let history = useHistory();
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [open, setOpen] = React.useState(false);

  const randomAuthTest = () => {
    console.log({ user, isAuthenticated, login, logout });
  };

  const localLogout = () => {
    logout();
    setUserName("");
    history.push("/login");
  };

  const handleToggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <CssBaseline />
        <AppBar
          position="static"
          style={{ backgroundColor: "#23272a", color: "#fff" }}
          //style={{ background: "transparent", boxShadow: "none" }}
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
            {isAuthenticated ? (
              <div>
                {/* <Button
                  color="inherit"
                  style={{ textTransform: "none", marginRight: "1rem" }}
                  variant="outlined"
                  size="small"
                  onClick={localLogout}
                >
                  Logout
                </Button> */}
                <IconButton ref={anchorRef} onClick={handleToggleMenu}>
                  <Avatar
                    className={classes.large}
                    alt="Rohit Saini"
                    src={user.image}
                  />
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

        <div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>Report a Bug</MenuItem>
                      <MenuItem onClick={randomAuthTest}>Github</MenuItem>
                      <MenuItem onClick={localLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>

        {/* <div style={{ textAlign: "center", padding: "1rem" }}></div> */}
        <Container maxWidth="lg" style={{ padding: "2rem 0rem" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Hidden xsDown smDown>
              <Grid item xs={12} sm={3}>
                <div style={{}}>
                  <Left />
                </div>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={6}>
              {children}
            </Grid>

            <Grid item xs={12} sm={3}>
              <div style={{}}>
                <Right />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Layout;
