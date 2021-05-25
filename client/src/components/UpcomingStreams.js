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
import React from "react";
import UpcomingStreamItem from "./UpcomingStreamItem";

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

function UpcomingStreams() {
  const classes = useStyles();
  return (
    <div style={{ margin: "2rem 0rem" }}>
      <Paper style={{ borderRadius: 11 }}>
        <div style={{ padding: "0rem 0rem 0.5rem 0rem" }}>
          <div style={{ padding: "0.5rem 1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography>Upcoming Streams</Typography>
              </div>
              <div style={{}}>
                <IconButton>
                  <AddBoxIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <Divider />
          <div style={{}}>
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <UpcomingStreamItem />
              </div>
            ))}
            {/* <div style={{ padding: "1rem 1rem" }}>
            <div style={{ display: "flex" }}>
              <img
                src="https://restream.io/blog/content/images/size/w600/2020/10/ways-to-increase-sales-with-live-streaming-1.png"
                width="50%"
                style={{ borderRadius: 5 }}
              />

              <div style={{ padding: "0rem 1rem" }}>
                <Typography variant="subtitle1" color="textSecondary">
                  26TH MAY, 5:30PM
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    className={classes.small}
                    alt="Streamer"
                    src="https://avatars.githubusercontent.com/u/50773789?v=4"
                  />
                  <Typography style={{ padding: "0.6rem" }} variant="subtitle1">
                    rohitsaini
                  </Typography>
                </div>
              </div>
            </div>
            <div style={{ padding: "0.5rem 0rem" }}>
              <Typography>
                <Box fontWeight="fontWeightMedium">
                  G2 vs NAVI | Semifinal | ESL One Cologne{" "}
                </Box>
              </Typography>
            </div>
          </div> */}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default UpcomingStreams;
