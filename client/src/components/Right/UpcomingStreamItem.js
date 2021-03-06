import React from "react";
import {
  Paper,
  Avatar,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function UpcomingStreamItem() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ padding: "1rem 1rem" }}>
        <div style={{ display: "flex" }}>
          <img
            src="https://i.pinimg.com/originals/f6/aa/07/f6aa07ff9a671ba1d058569f438b126b.jpg"
            width="50%"
            style={{ borderRadius: 5 }}
          />

          <div style={{ padding: "0rem 1rem" }}>
            <Typography variant="subtitle2" color="textSecondary">
              26th May, 5:30PM
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                className={classes.small}
                alt="Streamer"
                src="https://avatars.dicebear.com/api/male/rohit.svg"
              />
              <Typography style={{ padding: "0.6rem" }} variant="subtitle1">
                rohitsaini
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ padding: "0.5rem 0rem" }}>
          <Typography
            component="div"
            noWrap
            color="textSecondary"
            variant="subtitle2"
          >
            <Box fontWeight="fontWeightMedium">
              G2 vs NAVI | Semifinal | ESL One Cologne{" "}
            </Box>
          </Typography>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default UpcomingStreamItem;
