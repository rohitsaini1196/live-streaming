import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import Profile from "./Profile";
import People from "./People";
import Middle from "./Middle";
import Right from "./Right";
function ScreenLayout() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={3}>
          <div style={{}}>
            <People />
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div style={{}}>
            <Middle />
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <div style={{}}>
            {/* <Profile /> */}
            <Right />
          </div>
        </Grid>
      </Grid>
      {/* <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Box clone order={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={12} md={3} sm={6}>
            <p>ProductList</p>
          </Grid>
        </Box>
        <Box clone order={{ xs: 3, sm: 3, md: 2 }}>
          <Grid item xs={12} md={6} sm={12}>
            <p>Table Product</p>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={12} md={3} sm={6}>
            <p>Select paraneter</p>
          </Grid>
        </Box>
      </Grid> */}
    </div>
  );
}

export default ScreenLayout;
