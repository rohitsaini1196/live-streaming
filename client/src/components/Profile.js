import { Paper, Avatar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <div>
      <Paper style={{ borderRadius: 12 }}>
        <div style={{ padding: "1rem" }}>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                className={classes.large}
                alt="Rohit Saini"
                src="https://avatars.githubusercontent.com/u/31476481?v=4"
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <Typography>Rohit Saini</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                @rohitsaini
              </Typography>
            </div>
          </div>

          <div style={{ display: "flex", padding: "0.5rem 0rem" }}>
            <Button style={{ padding: "0.5rem", textTransform: "none" }}>
              3 Followers
            </Button>
            <Button style={{ padding: "0.5rem", textTransform: "none" }}>
              3 Following
            </Button>
          </div>
          <Typography>Human</Typography>
        </div>
      </Paper>
    </div>
  );
}

export default Profile;
