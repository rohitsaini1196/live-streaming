import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Paper, ListSubheader } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function People() {
  const classes = useStyles();

  return (
    <div>
      <List
        subheader={<ListSubheader component="div">Online</ListSubheader>}
        style={{ borderRadius: 30 }}
      >
        <ListItem button>
          <ListItemIcon>
            <Avatar
              src="https://avatars.dicebear.com/api/male/Fortwin.svg"
              alt="Fortwin"
            />
          </ListItemIcon>
          <ListItemText primary="FortwinInc" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar
              src="https://avatars.dicebear.com/api/male/Addict.svg"
              alt="Fortwin"
            />
          </ListItemIcon>
          <ListItemText primary="Addict27" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar
              src="https://avatars.dicebear.com/api/male/TheGuru.svg"
              alt="Fortwin"
            />
          </ListItemIcon>
          <ListItemText primary="TheGuru" />
        </ListItem>
      </List>
    </div>
  );
}
