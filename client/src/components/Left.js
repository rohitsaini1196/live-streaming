import { Paper, Typography, Box } from "@material-ui/core";
import React from "react";
import People from "./People";

function Left() {
  return (
    <div>
      {/* <div style={{ paddingBottom: "2rem", paddingLeft: "0.3rem" }}>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold"> People</Box>
        </Typography>
      </div> */}
      <div style={{ paddingLeft: "0.3rem" }}>
        <People />
      </div>
    </div>
  );
}

export default Left;
