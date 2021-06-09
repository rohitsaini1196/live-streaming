import React, { useState, useEffect } from "react";
import streamService from "../../services/stream";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

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
  DialogActions,
} from "@material-ui/core";

function GoLive({ user, isGoing, IsGoingTrue, IsGoingFalse, toggleIsGoing }) {
  const [streamName, setStreamName] = useState("");
  const [prevStream, setPrevStream] = useState(false);
  const [streamDetail, setStreamDetail] = useState({});
  const [openCreds, setOpenCreds] = useState(false);

  const stopStreaming = async () => {
    const deletedStream = await streamService.stopStream(user.username);
    if (deletedStream) {
      setPrevStream(false);
      setStreamDetail({});
    }
  };

  const startNewStream = async () => {
    const newSteam = await streamService.createNewStream(
      streamName,
      user.username,
      user.userId
    );
    setPrevStream(true);
    setStreamDetail(newSteam);
  };

  const handleCloseCreds = () => {
    setOpenCreds(false);
  };
  const handleOpenCreds = () => {
    setOpenCreds(true);
  };

  useEffect(async () => {
    if (user.username) {
      const stream = await streamService.fetchStream(user.username);
      if (stream) {
        setPrevStream(true);
        IsGoingTrue();
        setStreamDetail(stream);
      }
    }
  }, [user]);

  return (
    <div>
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
                <div style={{ padding: "0.4rem 0rem" }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    <strong>Staus:</strong> {streamDetail.status}
                  </Typography>
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
                  <Button
                    size="small"
                    style={{ textTransform: "none" }}
                    onClick={stopStreaming}
                  >
                    Stop Streaming
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
                            <ListItemText secondary={streamDetail.streamKey} />
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
                            <ListItemText secondary={streamDetail.serverLink} />
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
                      onClick={startNewStream}
                    >
                      Submit
                    </Button>
                    <Button
                      style={{ textTransform: "none" }}
                      variant="outlined"
                      size="small"
                      style={{ margin: "0.5rem 0.5rem" }}
                      onClick={IsGoingFalse}
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
  );
}

export default GoLive;
