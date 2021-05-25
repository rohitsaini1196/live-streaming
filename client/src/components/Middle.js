import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";

import Feed from "./Feed";
import StreamList from "./StreamList";

function People() {
  return (
    <div>
      <div style={{ padding: "0rem 1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">
            <Box fontWeight="fontWeightBold">Live Streams</Box>
          </Typography>
          <Button
            color="primary"
            variant="contained"
            style={{ textTransform: "none" }}
          >
            Go live
          </Button>
        </div>
      </div>
      <div style={{ padding: "1rem" }}>
        <StreamList />
      </div>

      <div style={{ padding: "0rem 1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">
            <Box fontWeight="fontWeightBold"> Your Feed</Box>
          </Typography>
          <Button
            color="primary"
            variant="contained"
            style={{ textTransform: "none" }}
          >
            Write Post
          </Button>
        </div>
      </div>

      <div style={{ padding: "1rem" }}>
        <Feed />
      </div>
    </div>
  );
}

export default People;
