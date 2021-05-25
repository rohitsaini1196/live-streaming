import { Paper, Typography, Box } from "@material-ui/core";
import React from "react";
import People from "./People";

function Left() {
  return (
    <div>
      <div style={{ paddingBottom: "2rem", paddingLeft: "1rem" }}>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold"> People</Box>
        </Typography>
      </div>
      <People />
    </div>
  );
}

export default Left;
