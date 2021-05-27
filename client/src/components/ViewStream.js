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
import React from "react";

function ViewStream() {
  return (
    <div>
      <div>
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
      </div>

      <div>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <div>
                  <Typography>
                    Cloud9 vs Faze Clan | Boston Major 2020
                  </Typography>
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
                  style={{ display: "flex", justifyContent: "space-between" }}
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
          <Divider />
          <CardHeader
            title="Rohit Saini"
            subheader="@rohitsaini"
            avatar={<Avatar>RS</Avatar>}
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

      {/* <div>
        <Button style={{ textTransform: "none" }}>Load History</Button>
      </div> */}
    </div>
  );
}

export default ViewStream;
