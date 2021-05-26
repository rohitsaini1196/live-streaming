import {
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";

import Feed from "./Feed";
import StreamList from "./StreamList";

function People() {
  const [isGoing, setIsGoing] = useState(false);
  const [streamName, setStreamName] = useState("");

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
            onClick={() => {
              setIsGoing(!isGoing);
            }}
          >
            Go live
          </Button>
        </div>

        {isGoing ? (
          <div style={{ padding: "1rem 0rem" }}>
            <Paper style={{ padding: "1rem 1rem" }}>
              <Typography variant="h6">Going Live</Typography>
              <Typography variant="subtitle2">
                Please fill the details for going live streaming
              </Typography>

              <div style={{ padding: "1rem 0rem" }}>
                <TextField
                  variant="outlined"
                  label="Stream Title"
                  size="small"
                  onChange={(e) => setStreamName(e.target.value)}
                />

                <div>
                  <Button
                    style={{ textTransform: "none" }}
                    variant="contained"
                    style={{ margin: "0.5rem 0rem" }}
                    size="small"
                  >
                    Submit
                  </Button>
                  <Button
                    style={{ textTransform: "none" }}
                    variant="outlined"
                    size="small"
                    style={{ margin: "0.5rem 0.5rem" }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
        ) : (
          ""
        )}
      </div>
      <div style={{ padding: "1rem" }}>
        <StreamList />
      </div>

      <div style={{ padding: "2rem 1rem 0rem 1rem" }}>
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
