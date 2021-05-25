import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

function StreamList() {
  const classes = useStyles();
  return (
    <div style={{ padding: "1rem 0rem" }}>
      <div></div>
    </div>
  );
}

export default StreamList;

{
  /* <Card>
                <CardMedia
                  className={classes.media}
                  image="https://uploads.dailydot.com/2018/11/watch_nickelodeon_live_stream_free.png"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card> */
}
