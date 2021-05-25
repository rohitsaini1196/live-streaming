import {
  CardHeader,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper,
  Typography,
  Avatar,
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
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function StreamList() {
  const classes = useStyles();
  return (
    <div style={{ padding: "1rem 0rem" }}>
      <div>
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item sm={6} md={4} lg={4} xs={6} key={item}>
              <div>
                <Paper style={{ borderRadius: 12 }}>
                  <img
                    src="https://uploads.dailydot.com/2018/11/watch_nickelodeon_live_stream_free.png"
                    width="100%"
                    style={{
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    noWrap
                    style={{ padding: "0.3rem 0.5rem" }}
                  >
                    Blink eSports vs Liquid | Tanacity Major 2021
                  </Typography>
                  <div
                    style={{
                      padding: "0.5rem 0.1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "0.4rem",
                      }}
                    >
                      <Avatar
                        className={classes.small}
                        src="https://avatars.dicebear.com/api/male/Fortwin.svg"
                      />
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        style={{ padding: "0rem 0.3rem" }}
                      >
                        rohitsaini
                      </Typography>
                    </div>
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
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
