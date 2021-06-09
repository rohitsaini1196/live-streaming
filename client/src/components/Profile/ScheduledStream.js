import { Paper, Typography } from "@material-ui/core";
import React from "react";

function ScheduledStream() {
  return (
    <div>
      <Paper style={{ padding: "1rem" }}>
        <Typography>No upcoming stream found!</Typography>
      </Paper>
    </div>
  );
}

export default ScheduledStream;
