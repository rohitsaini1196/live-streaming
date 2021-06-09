import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
function ProfileHeader({ user }) {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <div>
          <div
            style={{
              padding: "2rem 2rem 1rem 2rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar
                alt={user.name}
                src={user.image}
                className={classes.large}
              >
                RS
              </Avatar>
              <div style={{ padding: "0rem 1rem" }}>
                <Typography>{user.name}</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {"@" + user.username}
                </Typography>
              </div>
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none", color: "#fff" }}
              >
                Follow
              </Button>
            </div>
          </div>

          <div style={{ padding: "0rem 2rem" }}>
            <Typography variant="subtitle2" color="textSecondary">
              {user.bio}
            </Typography>
          </div>

          <div style={{ display: "flex", padding: "0.5rem 2rem 1rem 1.6rem" }}>
            <Button
              style={{ textTransform: "none", paddingRight: "0.5rem" }}
              size="small"
            >
              6 Followers
            </Button>
            <Button style={{ textTransform: "none" }} size="small">
              3 Following
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ProfileHeader;
