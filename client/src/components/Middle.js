import {
  Typography,
  DialogTitle,
  TextField,
  Paper,
  Box,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  ListItemText,
  List,
  ListItem,
  Divider,
  ListItemSecondaryAction,
  Link,
} from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import Feed from "./Feed";
import StreamList from "./StreamList";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import streamService from "../services/stream";

function People() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [isGoing, setIsGoing] = useState(false);
  const [streamName, setStreamName] = useState("");
  const [prevStream, setPrevStream] = useState(false);
  const [streamDetail, setStreamDetail] = useState({});
  const [openCreds, setOpenCreds] = useState(false);

  const handleCloseCreds = () => {
    setOpenCreds(false);
  };
  const handleOpenCreds = () => {
    setOpenCreds(true);
  };

  useEffect(async () => {
    if (user.username) {
      // console.log("ggwp ggwp");
      const stream = await streamService.fetchStream(user.username);
      console.log(stream);
      if (stream) {
        setPrevStream(true);
        setIsGoing(true);
        setStreamDetail(stream);
      }
    }
  }, [user.username]);

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
              {prevStream ? (
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>{streamDetail.title}</Typography>
                    <Chip
                      label="Live"
                      size="small"
                      style={{ backgroundColor: "red" }}
                    />
                  </div>

                  <div style={{ padding: "1rem 0rem", display: "flex" }}>
                    <Button
                      style={{ textTransform: "none" }}
                      variant="outlined"
                      size="small"
                      onClick={handleOpenCreds}
                    >
                      Stream Credentials
                    </Button>
                    <div style={{ padding: "0rem 1rem" }}>
                      <IconButton size="small">
                        <LiveHelpIcon />
                      </IconButton>
                    </div>
                  </div>

                  <div>
                    <Button
                      href={`stream/${streamDetail.username}`}
                      variant="contained"
                      size="small"
                      color="primary"
                      style={{ textTransform: "none" }}
                    >
                      Preview Stream
                    </Button>
                  </div>

                  <div>
                    <Dialog
                      onClose={handleCloseCreds}
                      open={openCreds}
                      maxWidth="sm"
                    >
                      <DialogTitle>Your Stream Credentials</DialogTitle>
                      <DialogContent>
                        <div style={{ padding: "0rem 0.5rem" }}>
                          <List dense={false}>
                            <ListItem>
                              <ListItemText primary="Stream Key" />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                secondary={streamDetail.streamKey}
                              />
                              <ListItemSecondaryAction>
                                <IconButton
                                  edge="end"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      streamDetail.streamKey
                                    );
                                  }}
                                >
                                  <FilterNoneIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemText primary="Stream Target Server" />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                secondary={streamDetail.serverLink}
                              />
                              <ListItemSecondaryAction>
                                <IconButton
                                  edge="end"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      streamDetail.serverLink
                                    );
                                  }}
                                >
                                  <FilterNoneIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          </List>

                          <div style={{ padding: "0.5rem 1rem" }}>
                            <Typography variant="subtitle2">
                              <Link
                                onClick={() => {
                                  console.log("ggwp");
                                }}
                              >
                                Learn More
                              </Link>{" "}
                              about it
                            </Typography>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ) : (
                <div>
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
                </div>
              )}
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
