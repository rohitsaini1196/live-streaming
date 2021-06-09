import React from "react";
import { Grid, Paper, Box, Hidden } from "@material-ui/core";

import Middle from "../Middle";
import Right from "../Right";
import Left from "../Left";
import ViewStream from "../ViewStream";
function StreamViewLayout() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Hidden xsDown smDown>
          <Grid item xs={12} sm={3}>
            <div style={{}}>
              <Left />
            </div>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={6}>
          <div style={{}}>
            <ViewStream />
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <div style={{}}>
            {/* <Profile /> */}
            <Right />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StreamViewLayout;
