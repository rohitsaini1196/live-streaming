import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React from "react";

function People() {
  return (
    <div>
      <Typography variant="h5">People</Typography>
      <List component="nav">
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  );
}

export default People;
