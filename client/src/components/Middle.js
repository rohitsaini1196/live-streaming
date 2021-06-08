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
import React, { useEffect, useState, useContext } from "react";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import Feed from "./Feed";
import StreamList from "./StreamList";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import streamService from "../services/stream";
import postService from "../services/post";

import { withSnackbar } from "./SnackbarHOC";
function People(props) {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [isGoing, setIsGoing] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [streamName, setStreamName] = useState("");
  const [prevStream, setPrevStream] = useState(false);
  const [streamDetail, setStreamDetail] = useState({});
  const [openCreds, setOpenCreds] = useState(false);

  const [feedText, setFeedText] = useState("");

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(user);

  useEffect(async () => {
    const posts = await postService.fetchAllPosts();
    if (posts) {
      setPosts(posts);
    }
    setIsLoading(false);
  }, []);

  const handleCloseCreds = () => {
    setOpenCreds(false);
  };
  const handleOpenCreds = () => {
    setOpenCreds(true);
  };

  const publishFeedPost = async () => {
    console.log(feedText);
    const newPost = await postService.createNewPost(
      feedText,
      user.username,
      user.userId
    );

    if (newPost) {
      setPosts((posts) => [newPost, ...posts]);
      props.snackbarShowMessage("New Post Craeted");
    }
    setIsWriting(false);
    setFeedText("");
  };

  const deleteFeedPost = async (postId) => {
    const deletedPost = await postService.deletePost(postId, user.userId);
    if (deletedPost) {
      setPosts(posts.filter((post) => post._id !== postId));
      props.snackbarShowMessage("Post Deleted Successfully");
    }
  };

  const stopStreaming = async () => {
    const deletedStream = await streamService.stopStream(user.username);
    // console.log(deletedStream);
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

  useEffect(async () => {
    if (user.username) {
      //console.log("ggwp ggwp");
      const stream = await streamService.fetchStream(user.username);
      //console.log(stream);
      if (stream) {
        setPrevStream(true);
        setIsGoing(true);
        setStreamDetail(stream);
      }
    }
  }, [user]);

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
                        onClick={startNewStream}
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
            onClick={() => {
              setIsWriting(!isWriting);
            }}
          >
            Write Post
          </Button>
        </div>
      </div>

      <div>
        <Dialog
          open={isWriting}
          fullWidth
          maxWidth="sm"
          onClose={() => {
            setIsWriting(false);
          }}
        >
          <div style={{ padding: "1.5rem 1.5rem 0.5rem 1.5rem" }}>
            <Typography>
              {" "}
              Hey <strong>{user.name}</strong>, what's in your mind?
            </Typography>
          </div>
          <DialogContent>
            <TextField
              className="textarea"
              fullWidth
              variant="outlined"
              rowsMax={5}
              rows={3}
              multiline={true}
              value={feedText}
              onChange={(e) => {
                setFeedText(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions style={{ padding: "0.5rem 1.5rem" }}>
            <Button
              onClick={() => {
                setIsWriting(false);
              }}
              color="primary"
              variant="outlined"
              style={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              onClick={publishFeedPost}
              color="primary"
              variant="contained"
              style={{ textTransform: "none" }}
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div style={{ padding: "1rem" }}>
        <Feed
          posts={posts.reverse()}
          cUser={user}
          deletePost={deleteFeedPost}
        />
      </div>
    </div>
  );
}

export default withSnackbar(People);
