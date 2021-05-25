import {
  Paper,
  Typography,
  IconButton,
  CardHeader,
  Avatar,
  Card,
  CardContent,
} from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: 12,
  },

  avatar: {
    marginLeft: "0.5rem",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  title: {
    textAlign: "left",
  },
}));

function FeedItem() {
  const classes = useStyles();
  return (
    <div style={{ margin: "1.5rem 0rem" }}>
      <div>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                src={"https://avatars.githubusercontent.com/u/31476481?v=4"}
                alt="Rohit Saini"
              />
            }
            action={
              <IconButton aria-label="More actions">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <Typography variant="body1" className={classes.title}>
                Rohit Saini
              </Typography>
            }
            subheader={
              <Typography variant="body2" className={classes.title}>
                26 Minutes ago
              </Typography>
            }
          />
          <div
            style={{
              padding: "0rem 2rem 1rem 1.5rem",
            }}
          >
            <Typography variant="body1" color="textSecondary" component="p">
              The support in the comments on my last video is astounding! I
              appreciate everyone who watched and commented in support of more
              “in the weeds” videos.
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FeedItem;
