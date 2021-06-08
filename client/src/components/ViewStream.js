import {
  CardHeader,
  Paper,
  Card,
  Avatar,
  Button,
  CardContent,
  Typography,
  Chip,
  Grid,
  Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import streamService from "../services/stream";
import userService from "../services/user";
function ViewStream(props) {
  const { username } = useParams();
  const [streamer, setStreamer] = useState({});
  const [stream, setStream] = useState({});
  const [isStreamFound, setIsStreamFound] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (username) {
      const user = await userService.getCuurentUser(username);
      const localStream = await streamService.fetchStream(username);
      if (user) {
        setIsUserFound(true);
        setStreamer(user);
      }
      setIsLoading(false);
      if (localStream) {
        setIsStreamFound(true);
        setStream(localStream);
      }
    }
  }, [username]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {isUserFound ? (
            <div>
              <div>
                {isStreamFound ? (
                  <div>
                    <video
                      width="100%"
                      height="auto"
                      controls
                      style={{ borderRadius: 5 }}
                    >
                      <source
                        src="http://techslides.com/demos/sample-videos/small.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div>
                    <Paper style={{ padding: "1rem" }}>
                      <Typography>
                        {streamer.username} is not Streaming right now. Follow{" "}
                        {streamer.username}, we will notify you for upcoming
                        streams.
                      </Typography>
                    </Paper>
                  </div>
                )}
              </div>

              <div style={{ margin: "0.3rem 0rem" }}>
                <Card>
                  {isStreamFound ? (
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12} sm={8}>
                          <div>
                            <Typography>{stream.title}</Typography>
                            <div
                              style={{
                                padding: "0.5rem 0rem 0rem 0rem",
                                margin: "0.4rem 0rem 0rem 0rem",
                              }}
                            >
                              <Chip
                                label="Gaming"
                                size="small"
                                style={{ margin: "0.4rem 0rem" }}
                              />
                              <Chip
                                label="Shooter"
                                style={{ margin: "0.4rem 0.5rem" }}
                                size="small"
                              />
                              <Chip
                                label="Counter Strike: Global Offensive"
                                size="small"
                              />
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Chip
                              label="1:23:45"
                              variant="outlined"
                              style={{ margin: "0.1rem" }}
                            />
                            <Chip
                              color="primary"
                              label="24 Viewers"
                              variant="outlined"
                              style={{ margin: "0.1rem" }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  ) : (
                    ""
                  )}
                  <Divider />
                  <CardHeader
                    title={streamer.name}
                    subheader={`@${streamer.username}`}
                    avatar={<Avatar src={streamer.image} alt="Stract User" />}
                    action={
                      <Button
                        style={{ marginTop: "1rem", textTransform: "none" }}
                        variant="contained"
                        color="primary"
                      >
                        Follow
                      </Button>
                    }
                  />
                </Card>
              </div>
            </div>
          ) : (
            <div>
              <Paper style={{ padding: "1rem" }}>
                <Typography>
                  This user doesn't exist on our platform. Please check
                  username.
                </Typography>
              </Paper>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ViewStream;
