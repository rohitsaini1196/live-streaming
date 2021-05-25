import { Paper, Typography } from "@material-ui/core";
import React from "react";

function FeedItem() {
  return (
    <div style={{ margin: "1.5rem 0rem" }}>
      <Paper>
        <div style={{ padding: "1.5rem 1rem" }}>
          <Typography>Music to Chill to</Typography>
        </div>
      </Paper>
    </div>
  );
}

export default FeedItem;
